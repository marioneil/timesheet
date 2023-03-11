import Home from "./pages/Home";
import TaskForm from "./components/TaskForm";
import TaskForm1 from "./components/TaskForm1";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Login from "./components/Login";
import { auth, logInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signup from "./components/Signup";

function App() {
  // const [user, loading, error] = useAuthState(auth);

  return (
    <div className="m-8 rounded border-4 border-solid border-black  bg-white dark:bg-black">
      {/* {user && <Header />} */}
      {/* {user ? <Header /> : null} */}
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<TaskForm />} />
        <Route path="/task1" element={<TaskForm1 />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
