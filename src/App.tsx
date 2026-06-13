import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ReviewForm from './components/ReviewForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  useEffect(() => {
    if (!isLoading) {
      document.body.style.cursor = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-[#06061a] text-white overflow-hidden"
          >
            <CustomCursor />
            <ParticlesBackground />
            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <div className="max-w-7xl mx-auto">
                  <About />
                  <Skills />
                  <Projects />
                  <ExperienceSection />
                  <Education />
                  <Certifications />
                  <ReviewForm />
                  <Contact />
                </div>
                <Footer />
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;