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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task" element={<TaskForm />} />
    </Routes>
  );
}

export default App;
