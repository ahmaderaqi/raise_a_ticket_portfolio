import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from 'react';
// import './Header.css'
function Header() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="info" style={{ position: "sticky"}}  fixed="top">
  <Container>
    <Navbar.Brand href="/">Raise A Ticket</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto"></Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Header;