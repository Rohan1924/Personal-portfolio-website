import { useState } from 'react';
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

  return (
    <Layout view={view} setView={setView} onOpenResume={() => setShowResume(true)}>
      {view === 'home' ? (
        <>
          <Hero />
          <Skills />
          <Projects />
          <Certifications onViewAll={() => {
            window.scrollTo(0, 0);
            setView('certifications');
          }} />
          <About />
          <Contact onOpenResume={() => setShowResume(true)} />
        </>
      ) : (
        <AllCertifications onBack={() => {
          setView('home');
          // Optional: scroll back to certifications section after render
          setTimeout(() => {
            const section = document.getElementById('certifications');
            if (section) section.scrollIntoView();
          }, 100);
        }} />
      )}
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </Layout>
  );
}

export default App;
