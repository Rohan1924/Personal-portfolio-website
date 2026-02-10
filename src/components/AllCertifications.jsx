import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Maximize2 } from 'lucide-react';

const allCertificates = [
  { id: 1, image: "/assets/certificates/cert1.jpeg", title: "Certificate 1" },
  { id: 2, image: "/assets/certificates/cert2.jpeg", title: "Certificate 2" },
  { id: 8, image: "/assets/certificates/ibm-certificate.jpeg", title: "IBM Data Science" },
  { id: 4, image: "/assets/certificates/cert4.jpeg", title: "Certificate 4" },
  { id: 5, image: "/assets/certificates/cert5.jpeg", title: "Certificate 5" },
  { id: 6, image: "/assets/certificates/cert6.jpeg", title: "Certificate 6" },
  { id: 7, image: "/assets/certificates/cert7.jpeg", title: "Certificate 7" },
  { id: 3, image: "/assets/certificates/cert3.jpeg", title: "Certificate 3" },
];

const AllCertifications = ({ onBack }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Helper to generate hash
  const getCertHash = (id) => `#all-certifications/cert-${id}`;

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#all-certifications/cert-')) {
        const idPart = hash.substring('#all-certifications/cert-'.length);
        const cert = allCertificates.find(c => c.id.toString() === idPart);
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
        if (window.location.hash.startsWith('#all-certifications/cert-')) {
          if (window.history.length > 1) window.history.back();
          else window.location.hash = '#all-certifications';
        } else {
          onBack();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onBack]);

  return (
    <section className="section all-certs-section">
      <div className="container">
        <button onClick={onBack} className="back-btn">
          <ArrowLeft size={20} /> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">ALL CERTIFICATIONS</h2>
          <div className="line"></div>
        </motion.div>

        <div className="certs-grid-full">
          {allCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-card-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => window.location.hash = getCertHash(cert.id)}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-thumb" />
                <div className="overlay">
                  <Maximize2 size={24} color="white" />
                </div>
              </div>
            </motion.div>
          ))}
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
              else window.location.hash = '#all-certifications';
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
                else window.location.hash = '#all-certifications';
              }}>
                <X size={24} />
              </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="full-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .all-certs-section {
          padding-top: 8rem;
          padding-bottom: 4rem;
          min-height: 100vh;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          font-family: var(--font-mono);
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        
        .back-btn:hover {
          color: var(--color-primary);
        }

        .section-title {
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .certs-grid-full {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .cert-card-full {
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.2s, border-color 0.2s;
        }

        .cert-card-full:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
        }

        .cert-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
        }

        .cert-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cert-card-full:hover .overlay {
          opacity: 1;
        }

        /* Modal Styles */
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

export default AllCertifications;
