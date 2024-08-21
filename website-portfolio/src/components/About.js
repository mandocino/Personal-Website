function About() {
  return (
    <div className="container pb-4">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-0">
          <div className="p-4">
            <h2 className="mb-4">About Me</h2>
            <p className="fs-3">
              Welcome to my website! I am Armando Mancino, a Software Engineer from Montreal, Canada. I have been programming for over 11 years and know a variety of languages. I have experience as a full stack engineer, working on both front-end and low-level systems development.
              Explore my work to see if my talents are a good fit for your needs.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img 
            src="/profile_img.jpg" 
            height="800"
            width="500"
            alt="Armando Mancino" 
            className="img-fluid rounded" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
