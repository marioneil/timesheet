import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import MyAlert, { AlertType } from "../components/CustomAlert";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Home() {
  const [toDo, setToDo] = useState<any[]>([]);
  //var [messageClassName, setMessageClassName] = useState<string>("");
  const [messageClassName, setMessageClassName] = useState<AlertType>("Info");
  const [message, setMessage] = useState("");
  const [updateCount, setUpdateCount] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [user] = useAuthState(auth);

  const displayMessage = (message: string, type: AlertType) => {
    setMessage(message);
    setMessageClassName(type);
    setUpdateCount((count) => count + 1);
  };

  const fetchToDo = async () => {
    console.log("user 0 - " + user);
    if (!user) return;

    console.log("user - " + user);
    const token = (await user.getIdToken()) || "";
    const result = await fetch("http://localhost:5000", {
      headers: { token: token },
    });
    const data = await result.json();
    setToDo(data);
  };

  useEffect(() => {
    console.log("in Home useEffect");
    fetchToDo();
  }, [message, updateCount, user]);

  return (
    <div>
      <div className="flex">
        <MyAlert message={message} type={messageClassName}></MyAlert>
      </div>
      <div className="m-3 flex flex-wrap justify-center border-4 bg-white p-3 dark:bg-slate-800">
        {toDo.map(
          (x) => (
            //{
            //  return (
            <TaskCard
              key={x.id}
              id={x.id}
              timestampCreated={x.timestampCreated}
              title={x.title}
              displayMessage={displayMessage}
              timeSpan={x.timespan}
              setTimerOn={setTimerOn}
              timerOn={timerOn}
            />
          )

          //);
          //}
        )}
      </div>
    </div>
  );
}

export default Home;
