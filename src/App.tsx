
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

import NavigationMenu from "./components/NavigationMenu";
import { Header } from "./components/tw/nav/Header";

function App() {
  return (
    <>

      <Header />

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
