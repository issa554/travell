
import {NavDropdown , Nav , Navbar , Container} from 'react-bootstrap'
import LOGO from "../assesits/JOB.png"
import Img from "next/image"
const navbar = () => {
    return (
      <Navbar bg="white"   className="  fixed-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div  className="main-logo">

          <Img src={LOGO} alt="logo" />
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="mx-3" >Desitnations</Nav.Link>
            <Nav.Link href="#home" className="mx-3" >Hotels</Nav.Link>
            <Nav.Link href="#home" className="mx-3" >Flights</Nav.Link>
            <Nav.Link href="#home" className="mx-3" >Bookings</Nav.Link>
            <Nav.Link href="#home" className="mx-3" >Login</Nav.Link>
            <Nav.Link href="#link" className="mx-3" >Sign up</Nav.Link>
            <NavDropdown title="EN" id="basic-nav-dropdown"  className="mx-3" >
              <NavDropdown.Item href="#action/3.1">AR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FN </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GR</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    )
}

export default navbar
