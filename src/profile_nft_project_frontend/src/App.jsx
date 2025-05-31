import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tenders from './components/Tenders';
import ClosingSoon from './components/ClosingSoon';
import Funding from './components/Funding';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tenders />
        <ClosingSoon />
        <Funding />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
