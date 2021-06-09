import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="primary" expand="" variant="dark">
      <Navbar.Brand as={Link} to="/create-Customer">
        HOME
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Nav.Link as={Link} to="/create-Customer" className="text-dark ">
            Create Customer */}
          {/* </Nav.Link> */}
          <Nav.Link as={Link} to="/list-Customer" className="text-dark ">
            Customer List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
