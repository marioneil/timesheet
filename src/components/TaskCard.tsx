import {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import MYButton from "./Button/CustomButton";
import { AlertType } from "../components/CustomAlert";
import { auth } from "../firebase";

interface TaskCardProps {
  id: string;
  title: string;
  timestampCreated: string;
  displayMessage: (message: string, type: AlertType) => void;
  timeSpan: number;
  setTimerOn: (flag: boolean) => void;
  timerOn: boolean;
}

function initTaskRunningState() {
  console.log("init task Running to false");
  return false;
}
export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  timestampCreated,
  displayMessage,
  timeSpan,
  setTimerOn,
  timerOn,
}) => {
  //const [isTaskRunning, setTaskRuninng] = useState(false);
  const [isTaskRunning, setTaskRuninng] = useState(() =>
    initTaskRunningState()
  );

  const [duration, setDuration] = useState(timeSpan);

  function handleTaskToggle() {
    // if timer is running , save current time to DB
    handleUpdateDuration();
    setTaskRuninng(!isTaskRunning);
    setTimerOn(!isTaskRunning);
  }

  async function handleUpdateDuration() {
    let token = await auth.currentUser?.getIdToken(true);
    if (token === undefined) {
      token = "";
    }
    console.log("client token " + token);

    const result = await fetch("http://localhost:5000/update/duration", {
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      method: "PUT",
      body: JSON.stringify({
        id,
        duration,
      }),
    });
  }

  const handleDelete = async () => {
    console.log("delete - " + id);
    const result = await fetch("http://localhost:5000/" + id, {
      headers: {},
      method: "DELETE",
    });
    console.log("DEL Status->" + result.status);
    if (result.status === 200) {
      // setMessage("Record Deleted");
      // setMessageClassName("Info");
      displayMessage("Record Deleted", "Success");
    } else {
      //  setMessage("Name is empty");
      //  setMessageClassName("Warning");
      displayMessage("Record Deleted", "Warning");
    }
  };

  function convertStoMs(seconds: number) {
    let minutes = 0;
    let hours = 0;
    let extraSeconds = seconds % 60;

    minutes = ~~(seconds / 60);
    if (minutes >= 60) {
      hours = ~~(minutes / 60);
      minutes = minutes % 60;
    }

    //output.innerHTML += seconds + " == " + minutes + " : " + extraSeconds + "<br/>";
    return `${hours} : ${minutes} : ${extraSeconds}`;
  }

  useEffect(() => {
    const startStop = setInterval(() => {
      if (isTaskRunning) {
        //  setDuration(duration + 1);
        //  console.log("setInt");
        setDuration((prev) => {
          return prev + 1;
        });
      }
    }, 1000);
    return () => {
      clearInterval(startStop);
    };
  }, [isTaskRunning]);

  var disableTimerButton = timerOn && !isTaskRunning;

  return (
    <div className=" m-2 w-full rounded-md border-2 p-2 shadow-lg  shadow-green-800 hover:bg-slate-400 md:w-3/4">
      <div className="font-bold">ID: {id}</div>

      <div className="">Reference NUmber : {title}</div>

      <div className=" hidden md:flex md:gap-10">
        <div> Start Date: {timestampCreated}</div> <div>End Date</div>
      </div>

      <div>Desc</div>
      <div className="flex flex-col items-center justify-between sm:flex sm:flex-row sm:gap-4">
        <button
          disabled={disableTimerButton}
          className="m-3 rounded-md border bg-orange-800 px-3 py-1"
          // onClick={handleDelete.bind(null, id)}
          onClick={handleTaskToggle}
        >
          {isTaskRunning ? "Stop Timer" : "Start Timer"}
        </button>
        {/* <p>{duration}</p> */}
        <p>{convertStoMs(duration)}</p>
        <button
          className="m-3 rounded-md border bg-orange-800 px-3 py-1"
          // onClick={handleDelete.bind(null, id)}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
