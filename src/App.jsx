import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Model from './components/Model';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';

import * as Sentry from '@sentry/react';
import Highlight from './components/Highlight';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Features from './components/feature';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
        
    </main>
  )
}

export default App