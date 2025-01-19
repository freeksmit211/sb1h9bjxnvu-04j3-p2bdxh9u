import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mail, Phone, Instagram, Calendar, Salad, Users, Facebook, MapPin, Globe, Clock, Download } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import OnlineCoaching from './components/OnlineCoaching';
import PersonalTraining from './components/PersonalTraining';
import NutritionPlanning from './components/NutritionPlanning';
import WorkoutPrograms from './components/WorkoutPrograms';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/online-coaching" element={<OnlineCoaching />} />
            <Route path="/personal-training" element={<PersonalTraining />} />
            <Route path="/nutrition-planning" element={<NutritionPlanning />} />
            <Route path="/workout-programs" element={<WorkoutPrograms />} />
          </Routes>
        </main>
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">RealFitness</h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-500" />
                    Middelburg, MP South Africa
                  </p>
                  <p className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-500" />
                    www.realfitness.co.za
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-500" />
                    Mon-Fri: 5:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <a href="tel:+27607906064" className="flex items-center hover:text-green-500 transition-colors">
                    <Phone className="w-5 h-5 mr-2 text-green-500" />
                    +27 60 790 6064
                  </a>
                  <a href="mailto:niel@realfitness.co.za" className="flex items-center hover:text-green-500 transition-colors">
                    <Mail className="w-5 h-5 mr-2 text-green-500" />
                    niel@realfitness.co.za
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/realfitness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61554566973438" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.blikslim.com/vcardniel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    <span>Digital Business Card</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} RealFitness. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;