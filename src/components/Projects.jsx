import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "DetectAI",
    description: "Android app to detect AI-generated text and images.",
    image: "/assets/detectai.png",
    tags: ["Kotlin", "TF Lite", "Android"],
    links: { code: "https://github.com/Rohan1924/DetectAI" },
    details: {
      problem: [
        "AI-generated content is becoming harder to distinguish from human-written material.",
        "Most detection tools are either unreliable or too technical for everyday users.",
        "This project focuses on making AI detection accessible through a simple mobile interface."
      ],
      systemOverview: {
        description: "A hybrid architecture combining local Android UI with a cloud-based inference engine.",
        image: "/assets/detectai-arch.png" // Placeholder for the architecture diagram
      },
      built: {
        data: [
          "Mixed datasets of human-written and AI-generated text",
          "AI-generated and real image samples"
        ],
        models: [
          "Text classification models using linguistic and statistical features",
          "Image-based AI detection models"
        ],
        pipelines: [
          "Input preprocessing and normalization",
          "Confidence score aggregation"
        ],
        stack: [
          "Flask REST API for inference",
          "Android UI displaying prediction probabilities"
        ]
      },
      decisions: [
        "Focused on probability scores instead of binary labels for nuance",
        "Avoided heavy on-device ML to keep app lightweight; offloaded to cloud",
        "Prioritized usability over model complexity"
      ],
      screenshots: [
        "/assets/detectai-ui-1.png",
        "/assets/detectai-ui-2.png"
      ],
      video: "/assets/detectai-demo.mp4",
      why: "Gives everyday users a simple way to judge content authenticity without technical expertise.",
      next: [
        "Add support for audio and video detection",
        "Improve overall detection accuracy",
        "Support batch analysis"
      ]
    }
  },
  {
    title: "Seek & Play",
    description: "Search YouTube by meaning, not keywords. Uses GenAI and RAG to jump straight to the relevant moment.",
    image: "/assets/seek-and-play-ui-1.png", // Using one of the screenshots as cover
    tags: ["GenAI", "RAG", "Python", "React"],
    links: { code: "https://github.com/Rohan1924/Youtube-rag-application" },
    details: {
      problem: [
        "YouTube search rely on metadata, often missing the exact 'moment' a concept is explained.",
        "Scrubbing through long videos to find specific information is time-consuming."
      ],
      systemOverview: {
        description: "A RAG-powered application that indexes YouTube transcripts and allows semantic search to find exact timestamps.",
        image: "/assets/seek-and-play-arch.png"
      },
      built: {
        data: ["YouTube Video Transcripts"],
        models: ["OpenAI Embeddings", "GPT-4"],
        pipelines: ["LangChain", "Langflow"],
        stack: ["AstraDB Vector DB", "Python (Backend)", "React (Frontend)"]
      },
      decisions: [
        "Used RAG (Retrieval-Augmented Generation) to ground answers in actual video content",
        "Implemented semantic search to understand user intent beyond keyword matching"
      ],
      screenshots: [
        "/assets/seek-and-play-ui-1.png",
        "/assets/seek-and-play-ui-2.png"
      ],
      video: "/assets/seek-and-play-demo.mp4",
      why: "Saves hours of watch time by instantly locating the exact information needed within video content.",
      next: [
        "Support for multiple languages",
        "Browser extension integration",
        "Summarization features"
      ]
    }
  },
  {
    title: "PlantasticCare",
    description: "A community-driven platform for indoor plant care guidance.",
    image: "/assets/plantastic-tile.png",
    imageBg: "#ffffff",
    tags: ["React", "Node.js", "Community"],
    links: { code: "https://github.com/Rohan1924/PlantasticCare", live: "https://plantasticcare.onrender.com/" },
    details: {
      problem: [
        "Plant care advice is often scattered across forums and blogs, making it hard for beginners to find reliable info.",
        "Existing apps often lack community interaction or offline capabilities."
      ],
      systemOverview: {
        description: "A PWA that combines a plant library with community forums and offline-first architecture.",
        image: "/assets/plantastic-arch.png"
      },
      built: {
        data: ["Plant Species Database", "User-generated tips"],
        models: ["None (Logic-based care algorithms)"],
        stack: ["Vanilla JS", "Service Workers (PWA)", "IndexedDB"]
      },
      decisions: [
        "Used vanilla JS instead of frameworks to understand fundamentals",
        "Focused on usability over advanced personalization",
        "Chose PWA for offline access without native app complexity"
      ],
      screenshots: [
        "/assets/plantastic-ui-library.png",
        "/assets/plantastic-ui-care.png",
        "/assets/plantastic-ui-forum.png"
      ],
      bigScreenshot: "/assets/plantastic-tile.png",
      video: "/assets/plantastic-demo.mp4",
      why: "Turns scattered plant care advice into a structured, beginner-friendly platform with real user interaction.",
      next: [
        "Add personalized care reminders",
        "Increase Plant library",
        "Introduce moderation tools"
      ]
    }
  },
  {
    title: "Aadhaar N.E.X.U.S",
    description: "National Equity eXecution & Utilization System. A data-driven planning and early-warning system that measures digital equity.",
    image: "/assets/aadhaar-nexus-1.png",
    tags: ["Streamlit", "Python", "Data Viz"],
    links: {
      code: "https://github.com/Rohan1924/aadhaar-nexus",
      live: "https://aadhaar-nexus-iyp6hfpq0io.streamlit.app/"
    },
    details: {
      problem: [
        "Need to measure digital equity across 36 states/UTs and 645+ districts.",
        "Lack of a centralized system to anticipate Aadhaar demand and service gaps.",
        "Requirement for data-driven simulations to prioritize UIDAI interventions."
      ],
      systemOverview: {
        description: "An interactive Streamlit dashboard that provides nationwide visibility into the Digital Equity Index (DEI), Access Health, Update Load, and Stability scores.",
        image: "/assets/aadhaar-nexus-2.png"
      },
      built: {
        data: ["Digital Equity Index (DEI)", "Census Data", "Live KPIs"],
        models: ["Risk Classification Algorithms", "AI Recommendation Engine"],
        pipelines: ["State to District Drill-down", "Export Reports"],
        stack: ["Streamlit (Frontend)", "Python (Backend)", "Plotly (Visualization)", "Pandas (Data Processing)"]
      },
      decisions: [
        "Chosen Streamlit for rapid, interactive data visualization and dashboarding",
        "Implemented a comprehensive 'Digital Equity Index' to unify complex metrics",
        "Designed for dark mode compatibility to ensure accessibility in all environments"
      ],
      screenshots: [
        "/assets/aadhaar-nexus-3.png",
        "/assets/aadhaar-nexus-4.png",
        "/assets/aadhaar-nexus-5.png"
      ],
      // video: "", 
      why: "Empowers policymakers with real-time, data-driven insights to bridge the digital divide and optimize Aadhaar service delivery.",
      next: [
        "Integrate real-time data feeds for dynamic updating",
        "Expand predictive modeling for future demand forecasting",
        "Develop mobile-responsive views for field agents"
      ]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  // Helper to generate URL-friendly slug
  const getProjectSlug = (title) => `#project-${title.toLowerCase().replace(/\s+/g, '-')}`;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const project = projects.find(p => getProjectSlug(p.title) === hash);
        if (project) setSelectedProject(project);
        else setSelectedProject(null);
      } else {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="projects" className="section py-20">
      <div className="container">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isMobile ? { opacity: 1, y: 0 } : undefined}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true }}
          transition={isMobile ? { duration: 0 } : { duration: 0.5 }}
        >
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-secondary">02. </span>
              PROJECTS
            </h2>
            <div className="line"></div>
          </div>

          <h3 className="headline">Selected Work</h3>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              onClick={() => window.location.hash = getProjectSlug(project.title)}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              animate={isMobile ? { opacity: 1, y: 0 } : undefined}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              viewport={isMobile ? undefined : { once: true }}
              transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              {project.image && (
                <div className="card-image" style={{ background: project.imageBg || '#000' }}>
                  <img src={project.image} alt={project.title} />
                </div>
              )}

              <div className="card-content">
                <div className="card-header">
                  <h4 className="project-title">{project.title}</h4>
                  <div className="project-links">
                    {project.links.code && <a href={project.links.code} onClick={(e) => e.stopPropagation()}><Github size={24} color="#d2a8ff" /></a>}
                    {project.links.live && <a href={project.links.live} onClick={(e) => e.stopPropagation()}><ExternalLink size={24} color="#d2a8ff" /></a>}
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="details-link">
                    Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.hash = '';
            }
          }}
        />
      )}

      <style>{`
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Better for mobile */
          gap: 2rem;
        }
        
        .project-card {
           background: rgba(10, 10, 15, 0.6);
           border: 1px solid rgba(255, 255, 255, 0.08);
           border-radius: var(--radius-card);
           overflow: hidden; /* For image */
           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
           position: relative;
           display: flex;
           flex-direction: column;
           min-height: 350px;
           box-shadow: 0 4px 20px rgba(0,0,0,0.3);
           cursor: pointer;
        }
        
        .project-card:hover {
           transform: translateY(-5px);
           background: rgba(20, 20, 30, 0.8);
           border-color: rgba(255, 255, 255, 0.2);
           box-shadow: 0 15px 40px -10px rgba(0,0,0,0.6);
        }

        /* Mobile Optimizations for Performance */
        @media (max-width: 768px) {
            .project-card {
                box-shadow: none; /* remove heavy shadow */
                transition: transform 0.2s; /* simplified transition */
                will-change: transform; /* hint to browser */
                background: rgba(10, 10, 15, 0.9); /* higher opacity to avoid heavy blending */
            }
            .project-card:hover {
                transform: none; /* disable hover move on scroll */
                box-shadow: none;
            }
        }
        
        .card-image {
            height: 220px; /* Taller image cover */
            width: 100%;
            background: #000; /* Default background */
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: contain; /* Changed from cover to fit full image */
            opacity: 0.9;
            transition: opacity 0.3s;
        }
        .project-card:hover .card-image img { opacity: 1; }

        .card-content {
            padding: 1.25rem; /* Less padding for text area */
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          letter-spacing: -0.01em;
        }
        
        .project-links {
          display: flex;
          gap: 0.75rem;
          color: var(--color-text-secondary);
        }
        
        .project-links a:hover {
          color: white;
        }
        
        .project-desc {
          color: var(--color-text-secondary);
          margin-bottom: 1rem; /* Less space below description */
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        .project-footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: auto;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tag {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--color-text-dim);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.2em 0.8em;
          border-radius: 12px;
        }
        
        .details-link {
            font-size: 0.85rem;
            color: #d2a8ff;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default Projects;
