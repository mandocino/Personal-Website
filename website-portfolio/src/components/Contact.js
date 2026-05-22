import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text }
  const [sending, setSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    const templateParams = {
      from_email: email,
      subject,
      message,
    };

    emailjs
      .send(
        'service_srdzbaw',
        'template_gzfjzo8',
        templateParams,
        'jzDIuMStZa4IJDchf'
      )
      .then(
        () => {
          setStatus({ type: 'ok', text: 'Message sent successfully — thanks for reaching out!' });
          setEmail('');
          setSubject('');
          setMessage('');
          setSending(false);
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus({ type: 'err', text: 'Something went wrong. Please try the direct email link.' });
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Say hello</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let&apos;s build something together.</h3>
            <p>
              Have a project in mind, a question, or just want to connect? Send
              a message and I&apos;ll get back to you as soon as I can.
            </p>

            <a
              className="contact-detail"
              href="mailto:armando.mancino@outlook.com"
            >
              <span className="ic">
                <i className="fas fa-envelope" />
              </span>
              <span>
                <span className="label">Email</span>
                <br />
                <span className="value">armando.mancino@outlook.com</span>
              </span>
            </a>

            <div className="contact-detail">
              <span className="ic">
                <i className="fas fa-location-dot" />
              </span>
              <span>
                <span className="label">Based in</span>
                <br />
                <span className="value">Montreal, Canada</span>
              </span>
            </div>

            <div className="contact-socials">
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
          </div>

          <div className="contact-card reveal" style={{ '--reveal-delay': '0.1s' }}>
            {status && (
              <p className={`contact-status ${status.type}`}>{status.text}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell me a little about it..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="contact-actions">
                <button
                  type="submit"
                  className="btn-c btn-primary-c contact-submit"
                  disabled={sending}
                >
                  <i className="fas fa-paper-plane" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                <a
                  href="mailto:armando.mancino@outlook.com"
                  className="btn-c btn-outline-c contact-mail"
                  title="Send email externally with Outlook"
                >
                  <i className="fas fa-arrow-up-right-from-square" />
                  Open Email
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
