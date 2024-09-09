function Welcome({ isDarkMode }) {
  return (
    <>
      <div
        id="welcome"
        expand="lg" className="d-flex flex-column justify-content-center align-items-center vh-100"
      >

        <div className="text-center pb-5">
          <h1 className={`scroll-in-left ${isDarkMode ? 'text-White' : 'text-black'}`}>Hi there! 👋 I am</h1>
          <h1 className={`scroll-in-right mb-4 ${isDarkMode ? 'text-White' : 'text-black'}`}>Armando Mancino.</h1>
          <a
            href="https://github.com/mandocino"
            target="_blank"
            className={`fs-5 mx-4 ${isDarkMode ? 'wh-White' : 'wh-Black'
              }`}
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/armando-mancino-81382b170/"
            target="_blank"
            className={`fs-5 ${isDarkMode ? 'wh-White' : 'wh-Black'
              }`}
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <div className="text-center pb-5">
          <div className="d-inline-block">
            <h1 className={`pb-2 ${isDarkMode ? 'text-White' : 'bg-light'}`}>Software Engineer</h1>
            <h3>
              <ul className="list-unstyled d-inline mb-0">
                <li className={`d-inline-block pt-2 mx-3 ${isDarkMode ? 'text-White' : 'bg-light'}`}>
                  <i
                    className={`fas fa-check-circle me-2 ${isDarkMode ? 'text-White' : 'text-Black'
                      }`}
                  ></i>
                  Full Stack Developer
                </li>
                <li className={`d-inline-block pt-2 mx-3 ${isDarkMode ? 'text-White' : 'bg-light'}`}>
                  <i
                    className={`fas fa-check-circle me-2 ${isDarkMode ? 'text-White' : 'text-Black'
                      }`}
                  ></i>
                  Low Level Engineer
                </li>
                <li className={`d-inline-block pt-2 mx-3 ${isDarkMode ? 'text-White' : 'bg-light'}`}>
                  <i
                    className={`fas fa-check-circle me-2 ${isDarkMode ? 'text-White' : 'text-Black'
                      }`}
                  ></i>
                  Front-End Programmer
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="text-center pb-5">
          <p>
            <a href="/ArmandoResume.pdf" target="_blank">
              <button
                type="button"
                className={`btn btn-lg mx-2 ${isDarkMode
                  ? 'wh-White border-White'
                  : 'wh-Black border-Black'
                  }`}
              >
                Resume
              </button>
            </a>
            <a href="/degree.pdf" target="_blank">
              <button
                type="button"
                className={`btn btn-lg mx-2 ${isDarkMode
                  ? 'wh-White border-White'
                  : 'wh-Black border-Black'
                  }`}
              >
                Degree
              </button>
            </a>
            <a href="#about">
              <button
                type="button"
                className={`btn btn-lg mx-2 ${isDarkMode
                  ? 'wh-White border-White'
                  : 'wh-Black border-Black'
                  }`}
              >
                About Me
              </button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
