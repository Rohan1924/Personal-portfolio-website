import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Database, Cpu, Layers, Layout, ArrowRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    if (!project) return null;

    const { details } = project;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content"
                    layoutId={`project-${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                >
                    {/* Floating Close Button */}
                    <div style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        zIndex: 100,
                        pointerEvents: 'auto'
                    }}>
                        <button
                            onClick={onClose}
                            className="close-btn-inner"
                            aria-label="Close modal"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="modal-scroll-area">
                        {/* Header Section */}
                        <div className="modal-header">
                            <h2 className="modal-title">{project.title}</h2>
                            <div className="modal-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                            <p className="modal-subtitle">{project.description}</p>

                            <div className="modal-links">
                                {project.links?.code && (
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn-modal btn-code">
                                        <Github size={18} /> View Code
                                    </a>
                                )}
                                {project.links?.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-modal btn-live">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                                {project.links?.apk && (
                                    <a href={project.links.apk} target="_blank" rel="noopener noreferrer" className="btn-modal btn-live">
                                        <ExternalLink size={18} /> Download APK
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Case Study Content */}
                        {details && (
                            <div className="case-study-content">

                                {/* Problem Statement */}
                                {details.problem && (
                                    <div className="cs-section">
                                        <h3 className="cs-heading">Problem Statement</h3>
                                        <ul className="cs-list">
                                            {details.problem.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* System Overview */}
                                {details.systemOverview && (
                                    <div className="cs-card system-overview">
                                        <h3 className="cs-heading">System Overview</h3>
                                        <p className="cs-text mb-4">{details.systemOverview.description}</p>
                                        {details.systemOverview.image ? (
                                            <img src={details.systemOverview.image} alt="System Architecture" />
                                        ) : (
                                            <div className="diagram-placeholder">
                                                <span className="diagram-text">Architecture Diagram Placeholder</span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* What I Built Grid */}
                                {details.built && (
                                    <div className="cs-section">
                                        <h3 className="cs-heading">What I Built</h3>
                                        <div className="built-grid">
                                            <div className="built-item">
                                                <div className="built-header"><Database size={16} /> DATA</div>
                                                <ul>{details.built.data?.map((d, i) => <li key={i}>{d}</li>)}</ul>
                                            </div>
                                            <div className="built-item">
                                                <div className="built-header"><Cpu size={16} /> MODELS</div>
                                                <ul>{details.built.models?.map((d, i) => <li key={i}>{d}</li>)}</ul>
                                            </div>
                                            <div className="built-item">
                                                <div className="built-header"><Layers size={16} /> PIPELINES</div>
                                                <ul>{details.built.pipelines?.map((d, i) => <li key={i}>{d}</li>)}</ul>
                                            </div>
                                            <div className="built-item">
                                                <div className="built-header"><Layout size={16} /> APIS / UI</div>
                                                <ul>{details.built.stack?.map((d, i) => <li key={i}>{d}</li>)}</ul>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Decisions & Tradeoffs */}
                                {details.decisions && (
                                    <div className="cs-section">
                                        <h3 className="cs-heading">Key Decisions & Tradeoffs</h3>
                                        <ul className="cs-list decisions-list">
                                            {details.decisions.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Featured Screenshot (Full Width) */}
                                {details.bigScreenshot && (
                                    <div className="cs-section">
                                        <div className="video-placeholder" style={{ minHeight: 'auto', border: 'none', background: 'transparent' }}>
                                            <img
                                                src={details.bigScreenshot}
                                                alt="Featured Screenshot"
                                                className="screenshot-img"
                                                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Screenshots */}
                                {details.screenshots && (
                                    <div className="cs-section">
                                        <h3 className="cs-heading">Screenshots</h3>
                                        <div className="screenshots-grid">
                                            {details.screenshots.map((img, i) => (
                                                <div key={i} className="screenshot-container">
                                                    <img src={img} alt={`Screenshot ${i + 1}`} className="screenshot-img" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Demo Video */}
                                <div className="cs-section">
                                    <h3 className="cs-heading">Demo Video</h3>
                                    <div className="video-placeholder">
                                        {details.video ? (
                                            <video controls className="project-video">
                                                <source src={details.video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <div className="video-upload-prompt">
                                                <div className="play-icon">▶</div>
                                                <p>Demo Video Coming Soon</p>
                                                <span className="upload-hint">Upload <code>detectai-demo.mp4</code> to <code>public/assets/</code></span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Why It Matters */}
                                {details.why && (
                                    <div className="why-box">
                                        <h4 className="why-title">Why It Matters</h4>
                                        <p className="why-text">"{details.why}"</p>
                                    </div>
                                )}

                                {/* Improvements */}
                                {details.next && (
                                    <div className="cs-section">
                                        <h3 className="cs-heading text-dim">What I'd Improve Next</h3>
                                        <ul className="cs-list dim-list">
                                            {details.next.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {!details && (
                            <div className="empty-details">
                                <p>Full case study coming soon.</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>

            <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        
        @media (max-width: 768px) {
            .modal-overlay {
                backdrop-filter: none; /* PERFORMANCE FIX */
                background: rgba(0, 0, 0, 0.95); /* Solid-ish background instead */
            }
            .modal-content {
                box-shadow: none; /* Remove heavy shadow */
            }
        }

        .modal-content {
          background: #0f1115;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 96%;
          max-width: 1600px; /* Full screen feel */
          height: 96vh; /* Nearly full height */
          border-radius: 16px;
          position: relative;
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-scroll-area {
            overflow-y: auto;
            padding: 3rem;
            flex: 1;
        }
        
        /* Custom Scrollbar */
        .modal-scroll-area::-webkit-scrollbar { width: 8px; }
        .modal-scroll-area::-webkit-scrollbar-track { background: transparent; }
        .modal-scroll-area::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        .modal-scroll-area::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

        .close-btn-inner {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 44px; height: 44px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(4px);
        }

        .close-btn-inner:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
          border-color: white;
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .modal-header {
            margin-bottom: 3rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 2rem;
        }

        .modal-title {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .modal-subtitle {
            font-size: 1.25rem;
            color: var(--color-text-secondary);
            margin-bottom: 1.5rem;
            line-height: 1.6;
            max-width: 600px;
        }

        .modal-links { display: flex; gap: 1rem; }
        .btn-modal {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.6rem 1.2rem; border-radius: 8px;
          font-weight: 500; font-size: 0.9rem; text-decoration: none;
          transition: all 0.2s;
        }
        .btn-code { background: rgba(255,255,255,0.1); color: white; border: 1px solid transparent; }
        .btn-code:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.2); }
        .btn-live { background: white; color: black; }
        .btn-live:hover { opacity: 0.9; }

        .modal-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .tag-pill {
            background: rgba(147, 197, 253, 0.1);
            color: #93c5fd;
            border: 1px solid rgba(147, 197, 253, 0.2);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-family: var(--font-mono);
        }

        /* Case Study Styles */
        .case-study-content { display: flex; flex-direction: column; gap: 3rem; }
        .cs-section {  }
        
        .cs-heading {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #d2a8ff; /* Accent Color */
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .cs-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .cs-list li {
            position: relative;
            padding-left: 1.5rem;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 1.05rem;
        }
        .cs-list li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #d2a8ff;
            font-weight: bold;
        }

        .cs-card {
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            padding: 2rem;
        }
        
        .diagram-placeholder {
            background: rgba(0,0,0,0.3);
            border: 1px dashed rgba(255,255,255,0.2);
            border-radius: 8px;
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
        .diagram-text { color: var(--color-text-dim); font-size: 0.9rem; }
        .diagram-visuals { display: flex; align-items: center; gap: 1rem; opacity: 0.6; }
        .node { border: 1px solid white; padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: white; }
        .arrow { color: var(--color-text-dim); }

        .built-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }
        @media (max-width: 768px) { .built-grid { grid-template-columns: 1fr; } }
        
        .built-item h4 {  }
        .built-header {
            display: flex; align-items: center; gap: 0.5rem;
            color: #93c5fd;
            font-weight: 600;
            margin-bottom: 1rem;
            font-size: 0.9rem;
            letter-spacing: 0.05em;
        }
        .built-item ul { list-style: none; padding: 0; }
        .built-item li {
            color: var(--color-text-dim);
            font-size: 0.95rem;
            margin-bottom: 0.4rem;
            line-height: 1.5;
        }
        
        .why-box {
            background: rgba(255,255,255,0.08);
            border-left: 4px solid #d2a8ff;
            padding: 2rem;
            border-radius: 0 12px 12px 0;
        }
        .why-title { font-size: 1.2rem; color: white; margin-bottom: 0.5rem; font-weight: 600; }
        .why-text { font-style: italic; color: var(--color-text-secondary); font-size: 1.1rem; }
        
        .decisions-list li::before { color: #818cf8; }
        
        .text-dim { color: var(--color-text-dim); }
        .dim-list li { color: var(--color-text-dim); }
        .dim-list li::before { color: var(--color-text-dim); }
        
        .empty-details p { color: var(--color-text-dim); font-style: italic; }

        .system-overview img {
            width: 100%;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .screenshots-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .screenshots-grid .screenshot-img {
            height: 350px;
            object-fit: contain;
        }

        .screenshot-img {
            width: 100%;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: transform 0.3s ease;
        }
        
        .screenshot-img:hover {
            transform: scale(1.02);
        }

        .video-placeholder {
            width: 100%;
            background: rgba(0,0,0,0.4);
            border-radius: 12px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .project-video {
            width: 100%;
            max-height: 600px;
        }

        .video-upload-prompt {
            text-align: center;
            color: var(--color-text-dim);
        }
        
        .play-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0.5;
        }
        
        .upload-hint {
            display: block;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            opacity: 0.5;
        }
        
        .upload-hint code {
            background: rgba(255,255,255,0.1);
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
        }
        @media (max-width: 768px) {
            .modal-content {
                width: 100%;
                height: 100%;
                border-radius: 0;
            }
            .modal-scroll-area {
                padding: 1.5rem;
            }
            .modal-title {
                font-size: 2rem;
            }
            .built-grid { 
                grid-template-columns: 1fr; 
            }
            
            .cs-card {
                padding: 1rem;
            }

            .screenshots-grid {
                grid-template-columns: 1fr; /* Full width on mobile */
            }

            .screenshots-grid .screenshot-img {
                height: auto; /* Let height adjust naturally */
                max-height: 600px; /* Cap it so it's not too crazy */
                object-fit: contain;
                background: rgba(0,0,0,0.2); /* Subtle bg for transparent images */
            }
        }
      `}</style>
        </AnimatePresence >
    );
};

export default ProjectModal;
