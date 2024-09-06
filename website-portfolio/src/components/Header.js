import { Navbar, Nav, Container } from 'react-bootstrap';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <Navbar id="nav" expand="lg" className={`fixed-top ${isDarkMode ? 'bg-lighterDarkBlue' : 'bg-lightBlue'}`}>
      <Container>
        <Navbar.Brand href="#nav" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Armando Mancino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex flex-lg-row flex-column align-items-start">
            <Nav.Link href="#welcome" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Home</Nav.Link>
            <Nav.Link href="#about" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>About</Nav.Link>
            <Nav.Link href="#portfolio" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Portfolio</Nav.Link>
            <Nav.Link href="#skills" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Skills</Nav.Link>
            <Nav.Link href="#contact" className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Contact</Nav.Link>
            <Nav.Link
              href="/ArmandoResume.pdf"
              target="_blank"
              className={`fs-5 mx-3 d-inline-block rounded py-2 w-auto ${isDarkMode ? 'border-White text-White' : 'border-Black text-Black'}`}
            >
              Resume
            </Nav.Link>

            {/* Toggle Theme Button with Icons */}
            <button
              onClick={toggleTheme}
              className={`btn btn-${isDarkMode ? 'light' : 'dark'} mt-1 ms-2 w-auto`}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
