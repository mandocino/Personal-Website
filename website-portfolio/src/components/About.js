function About() {
  return (
    <div id="about" className="section container pb-4">
      <hr></hr>
      <h1 className="text-center mb-4">About Me</h1>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-0">
          <div className="p-4">
            <p className="fs-3">
              Welcome to my website! I’m Armando Mancino, a Software Engineer based in Montreal, Canada. With over 11 years of programming experience, I’ve developed expertise in a wide range of languages and technologies.
              My background includes working as a full stack engineer, handling both front-end development and low-level systems programming. Explore my work to see how my skills and experience align with your needs.
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
