import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/ServicesSection';
import Portfolio from '../components/PortfolioSection';
import Testimonials from '../components/TestimonialsSection';
import Stats from '../components/StatsSection';
import CTA from '../components/CTASection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;