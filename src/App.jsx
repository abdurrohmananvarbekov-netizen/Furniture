import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collection from './components/Collection';
import Space from './components/Space';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <Space />
      <Footer />
    </main>
  );
}

export default App;