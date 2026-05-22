function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-socials">
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
          <a
            href="mailto:armando.mancino@outlook.com"
            className="social-btn"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>

        <p className="footer-copy">
          Created By Armando Mancino. © {year}{' '}
          <span className="d-block d-sm-inline">All rights reserved.</span>
        </p>

        <a href="#welcome" className="back-to-top">
          <i className="fas fa-arrow-up" />
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
