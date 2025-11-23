import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;