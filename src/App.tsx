import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";
import TaskForm1 from "./components/TaskForm1";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="m-8 border-solid border-4 border-black rounded  bg-white dark:bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<TaskForm />} />
        <Route path="/task1" element={<TaskForm1 />} />
      </Routes>
    </div>
  );
}

export default App;
