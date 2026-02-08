import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaLinux, FaChartBar, FaCode, FaBrain, FaRobot, FaLink, FaProjectDiagram, FaLayerGroup, FaTerminal, FaSearch, FaNetworkWired } from 'react-icons/fa';
import { SiJavascript, SiC, SiFastapi, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras, SiOpencv, SiMongodb } from 'react-icons/si';

const skillsData = [
  {
    category: "GenAI",
    items: [
      { name: "RAG", icon: <FaNetworkWired color="#00ff9d" /> },
      { name: "LLMs", icon: <FaRobot color="#FF6F00" /> },
      { name: "LangChain", icon: <FaLink color="#2C3E50" /> },
      { name: "Langflow", icon: <FaProjectDiagram color="#E34F26" /> },
      { name: "Embeddings", icon: <FaLayerGroup color="#A8B9CC" /> },
      { name: "Vector Databases", icon: <FaDatabase color="#F29111" /> },
      { name: "Prompt Engineering", icon: <FaTerminal color="#F7DF1E" /> },
      { name: "Semantic Search", icon: <FaSearch color="#61DAFB" /> }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "SQL", icon: <FaDatabase color="#F29111" /> },
      { name: "C", icon: <SiC color="#A8B9CC" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> }
    ]
  },
  {
    category: "Web & APIs",
    items: [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST APIs", icon: <FaDatabase color="#fff" /> }
    ]
  },
  {
    category: "Data & Visualization",
    items: [
      { name: "Pandas", icon: <SiPandas color="#150458" /> },
      { name: "Matplotlib", icon: <FaChartBar color="#11557C" /> },
      { name: "Seaborn", icon: <FaChartBar color="#fff" /> },
      { name: "Power BI", icon: <FaChartBar color="#F2C811" /> },
      { name: "Tableau", icon: <FaChartBar color="#E97627" /> }
    ]
  },
  {
    category: "ML & AI",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
      { name: "Keras", icon: <SiKeras color="#D00000" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn color="#F7931E" /> },
      { name: "NLTK", icon: <FaPython color="#3776AB" /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> }
    ]
  },
  {
    category: "Tools & Environment",
    items: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "Linux", icon: <FaLinux color="#FCC624" /> },
      { name: "VS Code", icon: <FaCode color="#007ACC" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-secondary">01. </span>
              EXPERTISE
            </h2>
            <div className="line"></div>
          </div>

          <h3 className="headline">Skills & Technologies</h3>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="category-title text-primary">{group.category}</h4>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-pill">
                    <span className="skill-icon">{item.icon}</span>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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
          margin-bottom: 4rem;
          font-weight: 700;
          color: white;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 4rem;
        }
        
        .category-title {
            font-family: var(--font-sans);
            font-size: 0.85rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #d2a8ff;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(15, 15, 20, 0.5); /* Semi-transparent 50% opacity */
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          width: fit-content;
          /* backdrop-filter removed for smooth scrolling */
        }
        
        .skill-pill:hover {
          background: rgba(30, 30, 40, 0.8);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        
        .skill-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem; /* Increased from 1.2rem */
        }
        
        .skill-name {
            font-family: var(--font-sans);
            font-size: 0.95rem;
            color: #e6edf3;
            font-weight: 500;
        }
        
        @media (max-width: 768px) {
          .headline { font-size: 2.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
