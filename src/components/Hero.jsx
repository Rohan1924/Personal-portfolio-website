import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="greeting">HELLO, I AM</h2>
          <h1 className="name">ROHAN R</h1>
          <div className="title">
            Generative AI, ML & Data Science Developer
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
        }
        .hero-container {
          width: 100%;
        }
        .greeting {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          color: var(--color-primary); /* Use Primary White */
          font-weight: 500;
          text-shadow: var(--shadow-text);
        }
        .name {
          font-size: 5rem;
          font-weight: 800; /* Bolder */
          line-height: 1;
          margin-bottom: 1.5rem;
          color: var(--color-text);
          letter-spacing: -0.04em;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8); /* Deep shadow */
        }
        .title {
          font-family: var(--font-mono);
          font-size: 1.75rem; /* Slightly smaller, more tech */
          margin-bottom: 2.5rem;
          color: var(--color-text-secondary);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .bio {
          max-width: 600px;
          color: var(--color-text-secondary);
          font-size: 1.125rem;
          margin-bottom: 3.5rem;
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
          background-image: linear-gradient(to right, #ffd700, #ff8c00); /* Gold to Orange */
          text-shadow: 0px 4px 20px rgba(255, 215, 0, 0.3); /* Glowing effect */
        }
        
        .highlight-reddit {
          background-image: linear-gradient(to right, #FF4500, #ff8746); /* Reddit Red */
          text-shadow: 0px 4px 20px rgba(255, 69, 0, 0.4); /* Glowing effect */
        }
        
        /* Fallback for text shadow on transparent text (shadow applies to box otherwise) */
        /* We use filter drop-shadow for gradients if needed, but text-shadow doesn't work well with transparent fill */
        /* Alternative approach: subtle glow via filter */
        .highlight:hover {
           filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
           transform: translateY(-1px);
        }
        
        .cta-group {
          display: flex;
          gap: 1.5rem;
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
        
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--color-text-secondary);
          opacity: 0.5;
        }
        
        @media (max-width: 768px) {
          .name { font-size: 2.8rem; }
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
