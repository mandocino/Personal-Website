import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#welcome">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#welcome" className="text-white fs-5 mx-3">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white fs-5 mx-3">About</Nav.Link>
            <Nav.Link href="#portfolio" className="text-white fs-5 mx-3">Portfolio</Nav.Link>
            <Nav.Link href="#skills" className="text-white fs-5 mx-3">Skills</Nav.Link>
            <Nav.Link href="#contact" className="text-white fs-5 mx-3">Contact</Nav.Link>
            <Nav.Link href="/ArmandoResume.pdf" className="text-white fs-5 mx-3 d-inline-block border border-white rounded px-3 py-2">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;