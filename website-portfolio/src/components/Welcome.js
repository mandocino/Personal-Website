function Welcome() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="text-center pb-5">
          <h1 className="scroll-in-left">Hi there! 👋 I am</h1>
          <h1 className="scroll-in-right">Armando Mancino.</h1>
        </div>
        <div className="text-center pb-5">
          <div className="d-inline-block">
            <h1 className="pb-2">Software Engineer</h1>
            <h3>
              <ul className="list-unstyled d-inline mb-0">
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-success"></i>
                  Full Stack Developer
                </li>
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-success"></i>
                  Low Level Engineer
                </li>
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-success"></i>
                  Front-End Programmer
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="text-center pb-5">
          <p>
            <a href="/ArmandoResume.pdf">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg mx-2"
            >
              Resume
              </button>
            </a>
            <button
              type="button"
              className="btn btn-outline-success btn-lg mx-2"
            >
              Degree
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg mx-2"
            >
              About Me
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
