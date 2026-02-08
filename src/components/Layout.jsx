import React, { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { Menu, X } from 'lucide-react';

const Navbar = ({ view, setView, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'RESUME', href: '#resume', action: true },
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.action && onOpenResume) {
      onOpenResume();
      return;
    }

    if (view !== 'home' && setView) {
      setView('home');
      // Wait for re-render before scrolling
      setTimeout(() => {
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          PORTFOLIO
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="nav-item"
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
          background: rgba(0, 0, 0, 0.9);
          border-bottom: 1px solid var(--color-border);
          z-index: 1000;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        .logo {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.125rem;
          color: var(--color-text);
          letter-spacing: 0.05em;
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
          color: var(--color-text-secondary);
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .nav-item:hover {
          color: var(--color-text);
        }
        
        @media (max-width: 768px) {
          .mobile-toggle { 
            display: block; 
            z-index: 1001; /* Above everything */
          }
          .nav-links {
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            height: calc(100vh - var(--header-height)); /* Full height */
            flex-direction: column;
            background: rgba(0, 0, 0, 0.95); /* Solid bg */
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            gap: 1.5rem; /* Tighter gap */
            transform: translateX(100%); /* Slide from right instead of top */
            transition: transform 0.3s ease;
            z-index: 999;
            align-items: center; /* Center items */
            justify-content: flex-start; /* Start from top */
            padding-top: 4rem; /* Give some space */
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .nav-item {
            font-size: 1rem; /* Smaller text on mobile */
          }
        }
      `}</style>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-gray-800 mt-20">
    <div className="container text-center">
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Rohan R. Built with React & Three.js.</p>
    </div>
  </footer>
);

const Layout = ({ children, view, setView, onOpenResume }) => {
  return (
    <div className="layout">
      <ParticleBackground />
      <Navbar view={view} setView={setView} onOpenResume={onOpenResume} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
