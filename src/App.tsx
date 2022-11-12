
import { useState } from "react";
import "./scss/App.scss"
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import reactLogo from "./assets/react.svg";
import HeaderCard from "./components/card/HeaderCard";
import NavigationMenu from "./components/NavigationMenu";

function App() {
  return (
    <>
      <NavigationMenu />
      <HeaderCard />

      <p>
        <a href="#" className="text-primary">
          Primary link
        </a>
      </p>
      <p>
        <a href="#" className="text-secondary">
          Secondary link
        </a>
      </p>
      <p>
        <a href="#" className="text-success">
          Success link
        </a>
      </p>
      <p>
        <a href="#" className="text-danger">
          Scss danger link
        </a>
      </p>
    </>
  );
}

export default App;
