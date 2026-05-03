import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rooms from './components/Rooms';
import Space from './components/Space';
import Footer from './components/Footer';
import Works from './components/Works';
import Collection from './components/Collection';

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Collection />
      <Space />
      <Rooms />
      <Works />
      <Footer />
    </main>
  );
}

export default App;