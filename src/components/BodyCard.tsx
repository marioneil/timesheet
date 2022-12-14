//import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { BsDashCircleDotted } from "react-icons/bs";

const myStyle = {
  borderStyle: "dashed",
};

function BodyCard() {
  const [toDo, setToDo] = useState<any[]>([]);
  const fetchToDo = async () => {
    const result = await fetch("http://localhost:5000");
    const data = await result.json();
    setToDo(data);
    console.log(data);
  };

  useEffect(() => {
    fetchToDo();
  }, []);

  // return <Card style={myStyle} className='m-3 text-danger' body>
  return (
    <div className="m-3 p-3  border-4 bg-white dark:bg-slate-800">
      <table className="min-w-full  text-center">
        <thead className="border-b bg-sky-500  text-white">
          <tr>
            <th className="py-8 ">Id</th>
            <th>Title</th>
            <th>Timestamp Created</th>
          </tr>
        </thead>
        <tbody className="border-2">
          {toDo.map((x) => {
            return (
              <tr key={x.id} className="border-2 hover:bg-slate-400">
                <td className="py-8 ">{x.id}</td>
                <td>{x.title}</td>
                <td>{new Date(x.timestampCreated as string).toDateString()}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-yellow-50">
          <tr>
            <form>
              <input type="text" />
            </form>
          </tr>
        </tfoot>
      </table>
    </div>
  );
  // </Card>;
}

export default BodyCard;
