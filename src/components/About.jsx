import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="text-secondary">04. </span>
                            ABOUT
                        </h2>
                        <div className="line"></div>
                    </div>

                    <h3 className="headline">About Me</h3>

                    <div className="about-content">
                        <p>
                            I’m a Computer Science (Data Science) undergraduate at BMS College of Engineering, graduating in 2027. I’m interested in building machine learning and generative AI systems that are designed for real-world conditions, not just controlled datasets.
                        </p>
                        <p>
                            I’m particularly drawn to problems where data is imperfect and systems have to operate under real constraints. I enjoy working on projects where modeling decisions are closely tied to system design, reliability, and long-term maintainability. Much of my work lies at the intersection of data science, applied machine learning, and backend development, with a focus on monitoring, prediction, and automated decision workflows.
                        </p>
                        <p>
                            I like working across the full lifecycle of a project—from transforming raw data and evaluating models to deploying them behind APIs and integrating them into larger systems. I care about writing clear, understandable code and building solutions that remain useful outside of experimental environments.
                        </p>
                        <p>
                            I’m currently seeking data science, machine learning, and generative AI roles where I can take on meaningful problems, learn from experienced engineers, and help deliver systems that see real usage.
                        </p>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .section {
          padding: 6rem 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-mono);
          font-size: 1rem;
          margin-right: 1rem;
          color: var(--color-text-secondary);
        }
        .line {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          flex: 1;
          max-width: 200px;
        }
        .headline {
          font-size: 3rem;
          margin-bottom: 3rem;
          font-weight: 700;
          color: white;
        }
        
        .about-content {
          max-width: 800px;
          color: var(--color-text-secondary);
          font-size: 1.1rem;
          line-height: 1.8;
        }
        
        .about-content p {
          margin-bottom: 1.5rem;
        }
        
        @media (max-width: 768px) {
           .headline { font-size: 2.5rem; }
        }
      `}</style>
        </section>
    );
};

export default About;
