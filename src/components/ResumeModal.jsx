import React, { useEffect } from 'react';
import { X, Download, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="resume-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <div className="resume-container">
                    <div className="resume-controls">
                        <a
                            href="/resume.pdf"
                            download="Rohan_Resume.pdf"
                            className="control-btn download-btn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Download size={20} />
                            <span>Download</span>
                        </a>
                        <button
                            className="control-btn close-btn"
                            onClick={onClose}
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="resume-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src="/resume.pdf"
                            title="Resume"
                            className="resume-iframe"
                        />
                    </div>
                </div>

                <style>{`
            .resume-modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(8px);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2rem;
            }

            .resume-container {
                width: 100%;
                max-width: 1000px;
                height: 90vh;
                display: flex;
                flex-direction: column;
                position: relative;
            }

            .resume-controls {
                display: flex;
                justify-content: flex-end;
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .control-btn {
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
                font-family: var(--font-mono);
                font-size: 0.9rem;
            }

            .control-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }

            .download-btn {
                text-decoration: none;
                background: var(--color-primary);
                color: black;
                border: none;
                font-weight: 600;
            }

            .download-btn:hover {
                background: white;
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
            }

            .close-btn {
                padding: 0.5rem;
            }

            .resume-content {
                flex: 1;
                background: #1a1a1a;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .resume-iframe {
                width: 100%;
                height: 100%;
                border: none;
            }

            @media (max-width: 768px) {
                .resume-modal-overlay {
                    padding: 1rem;
                }
                .resume-container {
                    height: 100%;
                }
            }
        `}</style>
            </motion.div>
        </AnimatePresence>
    );
};

export default ResumeModal;