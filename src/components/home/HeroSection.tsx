import React from 'react';

export function HeroSection() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604373679152-1c536a2876c5?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Our Pooja Celebration
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join us in celebrating our annual pooja with devotion and community spirit
        </p>
        <a
          href="/event-details"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          View Event Details
        </a>
      </div>
    </div>
  );
}