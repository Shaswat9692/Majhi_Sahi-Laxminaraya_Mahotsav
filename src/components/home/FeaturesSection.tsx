import React from 'react';
import { Calendar, Users, Image, Phone } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: <Calendar className="w-12 h-12 text-orange-600" />,
      title: 'Event Schedule',
      description: 'View detailed timings and program schedule for the upcoming pooja celebration.',
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: 'Committee Members',
      description: 'Meet our dedicated team of volunteers who make this event possible.',
    },
    {
      icon: <Image className="w-12 h-12 text-orange-600" />,
      title: 'Previous Events',
      description: 'Explore photos and memories from our past celebrations.',
    },
    {
      icon: <Phone className="w-12 h-12 text-orange-600" />,
      title: 'Get in Touch',
      description: 'Contact us for any queries or to participate in the upcoming event.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}