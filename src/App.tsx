import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PersonalBenefits from './components/benefits/PersonalBenefits';
import CorporateBenefits from './components/benefits/CorporateBenefits';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import FAQ from './components/benefits/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <PersonalBenefits />
        <CorporateBenefits />
        <Plans />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 HealthCare+. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;