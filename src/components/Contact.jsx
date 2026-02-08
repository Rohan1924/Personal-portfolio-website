import React, { useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, FileText, Loader } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = ({ onOpenResume }) => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    // Service ID: Gmail/Outlook service you created
    // Template ID: The template you created
    // Public Key: Found in Account > General

    emailjs.sendForm(
      "service_dvrfk4u",
      "template_uob9ngw",
      formRef.current,
      {
        publicKey: "NlirmtwcYsNh1zDj1",
      }
    )
      .then(() => {
        alert("Message sent successfully 🚀");
        formRef.current.reset();
        setIsSending(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert(`Failed to send message ❌. Error: ${error.text || error.message || error}`);
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-secondary">05. </span>
            CONTACT
          </h2>
          <div className="line"></div>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-info">
            <h3 className="headline">Let's Connect</h3>
            <p className="contact-desc">
              I'm always interested in hearing about new projects and opportunities in AI/ML and Data Science.
            </p>

            <div className="info-items">
              <div className="info-item">
                <Mail className="text-primary" size={24} />
                <a href="mailto:rr2rohan@gmail.com" className="info-text">rr2rohan@gmail.com</a>
              </div>
              <div className="info-item">
                <MapPin className="text-primary" size={24} />
                <span className="info-text">Bangalore, India</span>
              </div>
              <div className="info-item">
                <FileText className="text-primary" size={24} />
                <a
                  href="/resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenResume) onOpenResume();
                  }}
                  className="info-text"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Rohan1924" className="social-icon"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/rohan-rupesh-b5a200203" className="social-icon"><Linkedin size={24} /></a>
            </div>
          </div>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name" className="code-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="code-input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="code-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="code-input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="code-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="code-input textarea"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              <span>{isSending ? 'Sending...' : 'Send Message'}</span>
              {isSending ? <Loader className="animate-spin" size={16} /> : <Send size={16} />}
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2rem;
        }
        
        .contact-desc {
          color: var(--color-text-dim);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 400px;
        }
        
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .info-text {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: #FF4500; /* Reddit Red */
        }
        
        .info-text:hover {
          color: var(--color-primary);
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-icon {
          color: var(--color-text-dim);
          transition: all 0.3s;
        }
        
        .social-icon:hover {
          color: var(--color-secondary);
          transform: translateY(-3px);
          text-shadow: var(--glow-secondary);
        }
        
        .contact-form {
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .code-label {
          display: block;
          font-family: var(--font-mono);
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        .code-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--color-primary);
          font-family: var(--font-mono);
          font-size: 1rem;
          padding: 0.5rem 0;
          outline: none;
        }
        
        .code-input:focus {
          border-bottom-color: var(--color-primary);
          box-shadow: 0 1px 0 0 var(--color-primary);
        }
        
        .code-input::placeholder {
          color: rgba(255, 255, 255, 0.1);
        }
        
        .textarea {
          min-height: 100px;
          resize: vertical;
        }
        
        .submit-btn {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text);
          border: 1px solid var(--color-primary);
          padding: 0.8rem 2rem;
          font-family: var(--font-mono);
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: 1rem;
        }
        
        .submit-btn:hover {
          background: var(--color-primary);
          color: black;
          box-shadow: var(--glow-primary);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .contact-content { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
