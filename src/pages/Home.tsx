import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";

function Home() {
  const [toDo, setToDo] = useState<any[]>([]);
  const fetchToDo = async () => {
    const result = await fetch("http://localhost:5000");
    const data = await result.json();
    setToDo(data);
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  return (
    <div className="m-3 p-3 flex flex-wrap justify-center border-4 bg-white dark:bg-slate-800">
      {toDo.map((x) => {
        return (
          <TaskCard
            key={x.id}
            id={x.id}
            timestampCreated={x.timestampCreated}
            title={x.title}
          />
        );
      })}
    </div>
  );
}

export default Home;
