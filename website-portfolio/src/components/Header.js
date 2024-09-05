import { Navbar, Nav, Container } from 'react-bootstrap';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <Navbar id="nav" expand="lg" className={`fixed-top ${isDarkMode ? 'bg-lighterDarkBlue' : 'color-w'}`}>
      <Container>
        <Navbar.Brand href="#nav" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>Armando Mancino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#welcome" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>Home</Nav.Link>
            <Nav.Link href="#about" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>About</Nav.Link>
            <Nav.Link href="#portfolio" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>Portfolio</Nav.Link>
            <Nav.Link href="#skills" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>Skills</Nav.Link>
            <Nav.Link href="#contact" className={`fs-5 ${isDarkMode ? 'wh-White' : 'text-dark'}`}>Contact</Nav.Link>
            <Nav.Link href="/ArmandoResume.pdf" target="_blank" className={`fs-5 mx-3 d-inline-block rounded px-3 py-2 ${isDarkMode ? 'border-White wh-White' : 'border-dark text-dark'}`}>Resume</Nav.Link>

            {/* Toggle Theme Button with Icons */}
            <button onClick={toggleTheme} className={`btn btn-${isDarkMode ? 'light' : 'dark'} ms-2`}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
