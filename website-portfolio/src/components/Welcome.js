const ROLES = [
  { label: 'Full Stack Developer', icon: 'fas fa-layer-group' },
  { label: 'Low-Level Engineer', icon: 'fas fa-microchip' },
  { label: 'Front-End Programmer', icon: 'fas fa-code' },
];

function Welcome() {
  return (
    <section id="welcome" className="hero">
      <span className="hero-orb one" />
      <span className="hero-orb two" />

      <span className="hero-eyebrow reveal">
        <span className="pulse" />
        Available for new opportunities
      </span>

      <p className="hero-greeting reveal" style={{ '--reveal-delay': '0.05s' }}>
        Hi there! 👋 I am
      </p>

      <h1 className="hero-name reveal" style={{ '--reveal-delay': '0.1s' }}>
        <span className="grad">Armando Mancino</span>
      </h1>

      <h2 className="hero-title reveal" style={{ '--reveal-delay': '0.13s' }}>
        Software Engineer
      </h2>

      <p className="hero-role reveal" style={{ '--reveal-delay': '0.16s' }}>
        A Software Engineer in Montreal building full-stack products and
        low-level systems with over a decade of programming experience.
      </p>

      <div className="hero-tags reveal" style={{ '--reveal-delay': '0.21s' }}>
        {ROLES.map((role) => (
          <span className="chip" key={role.label}>
            <i className={role.icon} />
            {role.label}
          </span>
        ))}
      </div>

      <div className="hero-ctas reveal" style={{ '--reveal-delay': '0.26s' }}>
        <a href="#portfolio" className="btn-c btn-primary-c">
          <i className="fas fa-folder-open" />
          View My Work
        </a>
        <a
          href="/ArmandoResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-c btn-outline-c"
        >
          <i className="fas fa-file-arrow-down" />
          Download Résumé
        </a>
        <a
          href="/degree.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-c btn-outline-c"
        >
          <i className="fas fa-graduation-cap" />
          Degree
        </a>
        <a href="#about" className="btn-c btn-outline-c">
          <i className="fas fa-user" />
          About Me
        </a>
        <a href="#contact" className="btn-c btn-outline-c">
          <i className="fas fa-paper-plane" />
          Get in Touch
        </a>
      </div>

      <div className="hero-socials reveal" style={{ '--reveal-delay': '0.31s' }}>
        <a
          href="https://github.com/mandocino"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/armando-mancino-81382b170/"
          target="_blank"
          rel="noreferrer"
          className="social-btn"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>

      <div className="hero-extra reveal" style={{ '--reveal-delay': '0.36s' }}>
        <a href="/degree.pdf" target="_blank" rel="noreferrer" className="text-link">
          View my degree certificate →
        </a>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span className="mouse" />
        Scroll
      </a>
    </section>
  );
}

export default Welcome;
