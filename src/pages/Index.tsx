
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Programs from '@/components/Programs';
import Gallery from '@/components/Gallery';
import Contribute from '@/components/Contribute';
import Footer from '@/components/Footer';

const Index = () => {
  // Simple reveal on scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        <div className="reveal">
          <AboutUs />
        </div>
        
        <div className="reveal">
          <Programs />
        </div>
        
        <div className="reveal">
          <Gallery />
        </div>
        
        <div className="reveal">
          <Contribute />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
