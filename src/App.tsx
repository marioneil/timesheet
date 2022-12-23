import { useEffect, useState } from "react";
//import "./scss/App.scss"
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import reactLogo from "./assets/react.svg";

import NavigationMenu from "./components/NavigationMenu";
import { Header } from "./components/Header";
import BodyCard from "./components/BodyCard";
//import  BodyCard  from "./components/tw/BodyCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import Home from "./components/Home";
import TaskForm1 from "./components/TaskForm1";

function App() {
  return (
    <div className="m-8 border-solid border-4 border-black rounded  bg-white dark:bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<BodyCard />} />
        <Route path="/task" element={<TaskForm />} />
        <Route path="/task1" element={<TaskForm1 />} />
      </Routes>
    </div>
  );
}

export default App;
