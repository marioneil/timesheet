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

function App() {
  return (
    <div className="m-8 border-solid border-4 border-black rounded  bg-white dark:bg-black">
      <Header />
      <BodyCard />
    </div>
  );
}

export default App;
