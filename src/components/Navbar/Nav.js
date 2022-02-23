import react , {Component} from 'react';
import './Nav.css';
import { Navbar ,Nav } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import logo from '../.././photos/logo.png';
const Navigation=()=> {
return(
    <Navbar className="nav" expand="lg">
      <div className="container">
    <Navbar.Brand >
    <img src={logo}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  to="/"> Home pages</Nav.Link>
        <Nav.Link  href="#gallary"> shop </Nav.Link>
        <Nav.Link  href ="#portfollio">portfollio</Nav.Link>
        <Nav.Link  href="#buy">buy</Nav.Link>
        <Nav.Link  href="#contact-">contact us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Navbar>
)
}



export default Navigation;
