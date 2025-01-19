import React from 'react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white pt-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://storage.googleapis.com/websitenielimages/images/logo%20png%20150x150.png"
          alt="RealFitness Logo" 
          className="w-48 h-48 mx-auto mb-8 object-contain"
          onError={(e) => {
            console.error('Image failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transform Your Life with
          <span className="text-green-500"> RealFitness</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Professional personal training and nutrition coaching tailored to your goals
        </p>
      </div>
    </section>
  );
}