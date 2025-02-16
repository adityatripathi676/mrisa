import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react";
import Team from './pages/Team';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[#fafafa] dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Analytics/>
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}