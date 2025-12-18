import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ComplianceSection from './components/ComplianceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';

const HomePage = () => (
  <main>
    <Hero />
    <ServicesSection />
    <ComplianceSection />
    <ContactSection />
  </main>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
