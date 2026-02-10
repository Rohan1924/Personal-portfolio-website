import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import AllCertifications from './components/AllCertifications';
import ResumeModal from './components/ResumeModal';

function App() {
  const [view, setView] = useState('home');
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Handle View
      if (hash.startsWith('#all-certifications')) {
        setView('certifications');
      } else {
        setView('home');
      }

      // Handle Resume Modal
      if (hash === '#resume') {
        setShowResume(true);
      } else {
        setShowResume(false);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Layout view={view} setView={setView} onOpenResume={() => window.location.hash = '#resume'}>
      {view === 'home' ? (
        <>
          <Hero />
          <Skills />
          <Projects />
          <Certifications onViewAll={() => {
            window.location.hash = '#all-certifications';
            window.scrollTo(0, 0);
          }} />
          <About />
          <Contact onOpenResume={() => window.location.hash = '#resume'} />
        </>
      ) : (
        <AllCertifications onBack={() => {
          // If we have history, go back to clear the hash. 
          // If not, explicitly set hash to empty/home.
          if (window.history.length > 1) {
            window.history.back();
          } else {
            window.location.hash = '';
          }

          // Optional: scroll back to certifications section after render
          setTimeout(() => {
            const section = document.getElementById('certifications');
            if (section) section.scrollIntoView();
          }, 100);
        }} />
      )}
      <ResumeModal isOpen={showResume} onClose={() => {
        if (window.location.hash === '#resume') {
          window.history.back();
        } else {
          setShowResume(false);
        }
      }} />
    </Layout>
  );
}

export default App;
