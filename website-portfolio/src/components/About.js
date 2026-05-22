const STATS = [
  { num: '11+', label: 'Years Coding' },
  { num: '4+', label: 'Years Professional Experience' },
  { num: '13', label: 'Languages Used' },
];

const INTERESTS = ['Weight Lifting', 'Technology', 'Financial Markets', 'Space'];
const HOBBIES = ['Gym', 'Developing Software', 'Gaming'];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">
              Welcome to my website! I&apos;m <strong>Armando Mancino</strong>, a
              Software Engineer based in <strong>Montreal, Canada</strong>. With
              over <strong>11 years of programming experience</strong>, I&apos;ve
              built expertise across a wide range of languages and technologies.
            </p>
            <p className="about-lead" style={{ marginTop: '1rem' }}>
              My background spans <strong>full-stack engineering</strong> —
              handling both front-end development and low-level systems
              programming. Explore my work below to see how my skills and
              experience can align with your needs.
            </p>

            <div className="stats">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-personal">
              <div className="about-chip-group">
                <h3 className="about-chip-title">Interests</h3>
                <div className="about-chips">
                  {INTERESTS.map((interest) => (
                    <span className="about-chip" key={interest}>
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-chip-group">
                <h3 className="about-chip-title">Hobbies</h3>
                <div className="about-chips">
                  {HOBBIES.map((hobby) => (
                    <span className="about-chip" key={hobby}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-photo-wrap reveal" style={{ '--reveal-delay': '0.1s' }}>
            <img
              src="/profile_img.jpg"
              alt="Armando Mancino"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
