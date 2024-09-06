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
            <Navbar.Brand href="#welcome" className={`mt-1 fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Home</Navbar.Brand>
            <Navbar.Brand href="#about" className={`mt-1 fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>About</Navbar.Brand>
            <Navbar.Brand href="#portfolio" className={`mt-1 fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Portfolio</Navbar.Brand>
            <Navbar.Brand href="#skills" className={`mt-1 fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Skills</Navbar.Brand>
            <Navbar.Brand href="#contact" className={`mt-1 fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'}`}>Contact</Navbar.Brand>
            <Navbar.Brand
              href="/ArmandoResume.pdf"
              target="_blank"
              className={`mt-1 fs-5 rounded ${isDarkMode ? 'border-White wh-White' : 'border-Black wh-Black'}`}
            >
              Resume
            </Navbar.Brand>
            <Navbar.Brand>
              <button
                onClick={toggleTheme}
                className={`btn btn-${isDarkMode ? 'light' : 'dark'}`}
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
              </button>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default Header;
