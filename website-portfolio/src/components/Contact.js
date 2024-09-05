import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send('service_srdzbaw', 'template_gzfjzo8', templateParams, 'jzDIuMStZa4IJDchf')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
          setStatus('Failed to send the message.');
        }
      );
  };

  return (
    <div id="contact" className="container my-5 bg-[#F3F4F6] text-[#111827]">
      <hr className="border-[#3B82F6]" />
      <div className="row justify-content-center">
        <h1 className="text-center mb-4 text-[#1E3A8A]">Contact Me</h1>
        <div className="col-md-8 col-lg-6">
          <div className="p-4 shadow-sm">
            {status && <p>{status}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-[#111827]">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label text-[#111827]">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-[#111827]">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary text-white bg-[#3B82F6] border-0">
                  Send
                </button>
                <a
                  href="mailto:armando.mancino@outlook.com"
                  title="Send email externally with Outlook"
                >
                  <i className="fas fa-external-link-alt fa-2x text-[#3B82F6]"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;