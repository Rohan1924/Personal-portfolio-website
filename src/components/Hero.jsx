import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Text Side */}
          <div className="content">
            <h2 className="greeting">HELLO, I AM</h2>
            <h1 className="name">ROHAN R</h1>
            <div className="title">
              Generative AI, ML &amp; Data Science Developer
            </div>
            <p className="bio">
              I'm currently a Computer Science (Data Science) undergraduate at B.M.S. College of Engineering,
              focused on building <span className="highlight highlight-yellow">AI systems</span>, working with <span className="highlight highlight-yellow">RAG architectures</span>, and turning data into reliable solutions.
              Currently building <span className="highlight highlight-reddit">MindVault</span>.
            </p>
            <div className="cta-group">
              <a href="#projects" className="btn btn-primary">
                VIEW WORK
              </a>
              <a href="#contact" className="btn btn-outline">
                CONTACT ME
              </a>
            </div>

            {/* Social Icons */}
            <div className="social-row">
              <a href="https://github.com/Rohan1924" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-rupesh-b5a200203" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Photo Side */}
          <motion.div
            className="profile-photo-wrapper"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="profile-photo-ring">
              <img
                src="/Profile Pic2.jpeg"
                alt="Rohan R"
                className="profile-photo"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <ArrowDown size={24} />
      </div>

      <style>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: var(--header-height);
        }
        .hero-container {
          width: 100%;
        }
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        .content {
          flex: 1;
        }
        .greeting {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          font-weight: 500;
          text-shadow: var(--shadow-text);
        }
        .name {
          font-size: 3.5rem;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-text);
          letter-spacing: -0.02em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .title {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          margin-bottom: 2.5rem;
          color: var(--color-text-secondary);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .bio {
          max-width: 560px;
          color: var(--color-text-secondary);
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          font-weight: 400;
          line-height: 1.8;
        }
        
        .highlight {
          font-weight: 700;
          display: inline-block;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }
        
        .highlight-yellow {
          background-image: linear-gradient(to right, #ffd700, #ff8c00);
          text-shadow: 0px 4px 20px rgba(255, 215, 0, 0.3);
        }
        
        .highlight-reddit {
          background-image: linear-gradient(to right, #FF4500, #ff8746);
          text-shadow: 0px 4px 20px rgba(255, 69, 0, 0.4);
        }
        
        .highlight:hover {
           filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
           transform: translateY(-1px);
        }
        
        .cta-group {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .btn {
          padding: 0.875rem 2rem;
          font-family: var(--font-sans);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-block;
          border-radius: 2px;
        }
        .btn-primary {
          background: var(--color-text);
          color: var(--color-bg);
        }
        .btn-primary:hover {
          background: #e0e0e0;
        }
        .btn-outline {
          border-color: var(--color-text-secondary);
          color: var(--color-text-secondary);
        }
        .btn-outline:hover {
          border-color: var(--color-text);
          color: var(--color-text);
        }

        /* Social Row */
        .social-row {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          color: var(--color-text-dim);
          transition: all 0.2s ease;
          background: rgba(255,255,255,0.04);
        }
        .social-btn:hover {
          color: var(--color-text);
          border-color: rgba(255,255,255,0.4);
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        /* Profile Photo */
        .profile-photo-wrapper {
          flex-shrink: 0;
        }
        .profile-photo-ring {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, rgba(74,158,255,0.6), rgba(167,139,250,0.6));
          box-shadow: 0 0 40px rgba(74, 158, 255, 0.25), 0 0 80px rgba(74, 158, 255, 0.1);
        }
        .profile-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center top;
          border: 3px solid #0a0a0f;
          display: block;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-text-secondary);
          opacity: 0.5;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
        
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
            gap: 2.5rem;
          }
          .bio { max-width: 100%; }
          .cta-group { justify-content: center; }
          .social-row { justify-content: center; }
          .profile-photo-ring {
            width: 180px;
            height: 180px;
          }
        }
        @media (max-width: 768px) {
          .name { font-size: 2.2rem; }
          .title { font-size: 1.2rem; }
          .bio { font-size: 1rem; margin-bottom: 2rem; }
          .btn { padding: 0.75rem 1.5rem; font-size: 0.8rem; }
          .cta-group { gap: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
