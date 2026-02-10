import React, { useState } from 'react';
import { Award, ArrowRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    title: "Amagi Media Technology",
    issuer: "Amagi Learning Hub",
    year: "2025",
    type: "Course",
    image: "/assets/certificates/cert1.jpeg"
  },
  {
    title: "DecodeAI",
    issuer: "Variance Club",
    year: "2024",
    type: "Participation",
    image: "/assets/certificates/cert2.jpeg"
  },
  {
    title: "IBM Data Science",
    issuer: "IBM",
    year: "2024",
    type: "Certification",
    image: "/assets/certificates/ibm-certificate.jpeg"
  },
  {
    title: "VISA hackathon",
    issuer: "IIT Madras",
    year: "2024",
    type: "Achievement",
    image: "/assets/certificates/cert4.jpeg"
  }
];

const Certifications = ({ onViewAll }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Helper to generate URL-friendly slug
  const getCertSlug = (title) => `#cert-${title.toLowerCase().replace(/\s+/g, '-')}`;

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#cert-')) {
        const cert = certifications.find(c => getCertSlug(c.title) === hash);
        if (cert) setSelectedCert(cert);
        else setSelectedCert(null);
      } else {
        setSelectedCert(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (window.location.hash.startsWith('#cert-')) {
          if (window.history.length > 1) window.history.back();
          else window.location.hash = '';
        } else {
          setSelectedCert(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-secondary">03. </span>
              PARTICIPATION AND ACHIEVEMENTS
            </h2>
            <div className="line"></div>
          </div>

          <h3 className="headline">Certificates</h3>
        </motion.div>

        <div className="certs-grid">
          {certifications.slice(0, 3).map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => window.location.hash = getCertSlug(cert.title)}
            >
              <div className="cert-image-wrapper">
                <img src={cert.image} alt={cert.title} className="cert-cover" />
                <div className="badge">{cert.type}</div>
              </div>
              <div className="cert-content-wrapper">
                <div className="cert-info">
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <div className="hover-indicator">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-all">
          <button onClick={onViewAll} className="btn-text">
            View all certifications <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (window.history.length > 1) window.history.back();
              else window.location.hash = '';
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => {
                if (window.history.length > 1) window.history.back();
                else window.location.hash = '';
              }}>
                <X size={24} />
              </button>
              <img src={certifications.find(c => c.title === selectedCert.title)?.image} alt={selectedCert.title} className="full-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .cert-card {
          background: rgba(10, 10, 15, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .cert-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .cert-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cert-card:hover .cert-cover {
          transform: scale(1.05);
        }
        
        .cert-card:hover {
          background: rgba(20, 20, 30, 0.75);
          border-color: var(--color-primary);
          transform: translateY(-5px);
        }
        
        .badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          color: var(--color-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: bold;
          border: 1px solid rgba(0, 204, 255, 0.2);
        }
        
        .cert-content-wrapper {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .cert-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .cert-issuer {
          color: var(--color-text-dim);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .cert-year {
          font-family: var(--font-mono);
          color: var(--color-text-dim);
          font-size: 0.85rem;
        }

        .hover-indicator {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
          opacity: 0.5;
          transition: all 0.3s ease;
          color: var(--color-primary);
        }

        .cert-card:hover .hover-indicator {
          opacity: 1;
          transform: translateX(5px);
        }

        .view-all {
          text-align: center;
          margin-top: 2rem;
        }
        
        .btn-text {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.8rem 2rem;
          border-radius: 30px;
          transition: all 0.3s ease;
          background: transparent;
          font-family: var(--font-sans);
          font-size: 1rem;
          cursor: pointer;
        }
        
        .btn-text:hover {
          border-color: var(--color-text);
          background: rgba(255, 255, 255, 0.05);
        }

        /* Modal Styles - Reused from AllCertifications for consistency */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .full-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
`}</style>
    </section>
  );
};

export default Certifications;

