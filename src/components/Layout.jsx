import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = ({ view, setView, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'CERTIFICATIONS', href: '#certifications', id: 'certifications' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
    { name: 'RESUME', href: '#resume', id: 'resume', action: true },
  ];

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.action && onOpenResume) {
      onOpenResume();
      return;
    }

    if (view !== 'home' && setView) {
      setView('home');
      setTimeout(() => {
        const target = document.querySelector(item.href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const target = document.querySelector(item.href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`nav-item ${activeSection === item.id ? 'nav-item--active' : ''}`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          z-index: 1000;
          transition: background 0.3s ease;
        }
        .nav-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 100%;
        }
        .mobile-toggle {
          display: none;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-item {
          font-family: var(--font-sans);
          font-size: 0.825rem;
          font-weight: 500;
          color: var(--color-text-dim);
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
          cursor: pointer;
          position: relative;
          padding-bottom: 4px;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--color-text);
          transition: width 0.25s ease;
        }
        .nav-item:hover {
          color: var(--color-text);
        }
        .nav-item:hover::after {
          width: 100%;
        }
        .nav-item--active {
          color: var(--color-text);
        }
        .nav-item--active::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: block;
            z-index: 1001;
          }
          .nav-links {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--header-height));
            flex-direction: column;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            gap: 1.5rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 999;
            align-items: center;
            justify-content: flex-start;
            padding-top: 4rem;
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .nav-item {
            font-size: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

// Scroll Progress Bar
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '2px',
      background: 'linear-gradient(to right, #4a9eff, #a78bfa)',
      zIndex: 2000,
      transition: 'width 0.1s linear',
      boxShadow: '0 0 8px rgba(74, 158, 255, 0.6)',
    }} />
  );
};

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p className="footer-copy">© {new Date().getFullYear()} Rohan R. Built with React & Three.js.</p>
      <div className="footer-socials">
        <a href="https://github.com/Rohan1924" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/rohan-rupesh-b5a200203" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
    <style>{`
      .site-footer {
        padding: 2rem 0;
        border-top: 1px solid rgba(255,255,255,0.07);
        margin-top: 4rem;
      }
      .footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      .footer-copy {
        color: var(--color-text-dim);
        font-size: 0.85rem;
      }
      .footer-socials {
        display: flex;
        gap: 1.25rem;
      }
      .footer-social-link {
        color: var(--color-text-dim);
        transition: color 0.2s ease, transform 0.2s ease;
        display: flex;
        align-items: center;
      }
      .footer-social-link:hover {
        color: var(--color-text);
        transform: translateY(-2px);
      }
    `}</style>
  </footer>
);

const Layout = ({ children, view, setView, onOpenResume }) => {
  return (
    <div className="layout">
      <ScrollProgress />
      <ParticleBackground />
      <Navbar view={view} setView={setView} onOpenResume={onOpenResume} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
