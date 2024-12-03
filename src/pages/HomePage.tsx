import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Sacred Celebration</h2>
            <p className="text-gray-600 mb-8">
              Experience the divine atmosphere and cultural richness of our annual pooja celebration.
              Together, we create memories that last a lifetime while preserving our sacred traditions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}