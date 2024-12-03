import React from 'react';
import { Calendar, Clock, MapPin, Ticket } from 'lucide-react';

const eventDetails = {
  date: "September 19, 2024",
  time: "6:00 AM - 9:00 PM",
  location: "Main Temple Hall, 123 Temple Street",
  ticketPrice: "$25",
  schedule: [
    {
      time: "6:00 AM - 7:00 AM",
      activity: "Morning Prayers and Ganesh Vandana"
    },
    {
      time: "7:00 AM - 9:00 AM",
      activity: "Main Pooja Ceremony"
    },
    {
      time: "9:00 AM - 10:00 AM",
      activity: "Prasad Distribution"
    },
    {
      time: "5:00 PM - 7:00 PM",
      activity: "Evening Aarti and Cultural Programs"
    },
    {
      time: "7:00 PM - 9:00 PM",
      activity: "Dinner and Community Gathering"
    }
  ]
};

export function EventDetailsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Event Details</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Date</h3>
                    <p>{eventDetails.date}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Time</h3>
                    <p>{eventDetails.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>{eventDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Ticket className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold">Ticket Price</h3>
                    <p>{eventDetails.ticketPrice}</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                {eventDetails.schedule.map((item, index) => (
                  <div key={index} className="flex border-b border-gray-200 pb-4">
                    <div className="w-40 font-semibold">{item.time}</div>
                    <div>{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors">
              Book Your Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}