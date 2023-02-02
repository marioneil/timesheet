import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import MyAlert, { AlertType } from "../components/CustomAlert";

function Home() {
  const [toDo, setToDo] = useState<any[]>([]);
  //var [messageClassName, setMessageClassName] = useState<string>("");
  var [messageClassName, setMessageClassName] = useState<AlertType>("Info");
  var [message, setMessage] = useState("");
  var [updateCount, setUpdateCount] = useState(0);

  const displayMessage = (message: string, type: AlertType) => {
    setMessage(message);
    setMessageClassName(type);
    setUpdateCount((count) => count + 1);
  };

  const fetchToDo = async () => {
    const result = await fetch("http://localhost:5000");
    const data = await result.json();
    setToDo(data);
  };

  useEffect(() => {
    console.log("in Home useEffect");
    fetchToDo();
  }, [message, updateCount]);

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
