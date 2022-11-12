import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { BsFillAlarmFill } from 'react-icons/bs';


const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  maxHeight: '100px'
};

function NavigationMenu() {

    return (
       
      <Navbar bg="danger" variant="dark"> 
        <Container fluid>
          <Navbar.Brand href="#">Timesheet Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto  my-2 my-lg-0"
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
            </Form>
            <Form className="d-flex">
            <BsFillAlarmFill />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  export default NavigationMenu