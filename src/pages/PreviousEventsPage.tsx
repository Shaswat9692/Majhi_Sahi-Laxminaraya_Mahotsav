import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  id: number;
  year: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  videoUrl?: string;
}

const previousEvents: Event[] = [
  {
    id: 1,
    year: 2023,
    title: "Annual Ganesh Pooja 2023",
    description: "A grand celebration with over 500 devotees participating in the rituals and cultural programs.",
    date: "September 19, 2023",
    location: "Main Temple Hall",
    imageUrl: "https://images.unsplash.com/photo-1631281956016-3cdc1b21b13b?auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    year: 2022,
    title: "Diwali Celebration 2022",
    description: "Special prayers and lamp lighting ceremony followed by cultural performances.",
    date: "October 24, 2022",
    location: "Community Center",
    imageUrl: "https://images.unsplash.com/photo-1605021154928-da017c51b5ff?auto=format&fit=crop&q=80",
    videoUrl: "https://www.youtube.com/watch?v=example2"
  }
];

export function PreviousEventsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Previous Celebrations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.imageUrl})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                {event.videoUrl && (
                  <a
                    href={event.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-semibold"
                  >
                    Watch Event Video
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}