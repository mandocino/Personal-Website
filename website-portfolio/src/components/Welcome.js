function Welcome() {
  return (
    <>
      <div id="welcome" className="d-flex flex-column justify-content-center align-items-center vh-100 bg-[#F3F4F6] text-[#111827]">
        <div className="text-center pb-5">
          <h1 className="scroll-in-left">Hi there! 👋 I am</h1>
          <h1 className="scroll-in-right mb-4">Armando Mancino.</h1>
          <a href="https://github.com/mandocino" target="_blank" className="text-[#1E3A8A] fs-5 mx-4"><i className="fab fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/armando-mancino-81382b170/" target="_blank" className="text-[#3B82F6] fs-5"><i className="fab fa-linkedin fa-2x"></i></a>
        </div>
        <div className="text-center pb-5">
          <div className="d-inline-block">
            <h1 className="pb-2">Software Engineer</h1>
            <h3>
              <ul className="list-unstyled d-inline mb-0">
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-[#3B82F6]"></i>
                  Full Stack Developer
                </li>
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-[#3B82F6]"></i>
                  Low Level Engineer
                </li>
                <li className="d-inline-block mx-3">
                  <i className="fas fa-check-circle me-2 text-[#3B82F6]"></i>
                  Front-End Programmer
                </li>
              </ul>
            </h3>
          </div>
        </div>
        <div className="text-center pb-5">
          <p>
            <a href="/ArmandoResume.pdf" target="_blank">
              <button type="button" className="btn btn-outline-primary btn-lg mx-2 text-[#1E3A8A] border-[#1E3A8A]">Resume</button>
            </a>
            <a href="/degree.pdf" target="_blank">
              <button type="button" className="btn btn-outline-primary btn-lg mx-2 text-[#3B82F6] border-[#3B82F6]">Degree</button>
            </a>
            <a href="#about">
              <button type="button" className="btn btn-outline-primary btn-lg mx-2 text-[#60A5FA] border-[#60A5FA]">About Me</button>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
