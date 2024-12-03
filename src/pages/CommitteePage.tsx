import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  phone: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Committee President",
    bio: "Leading the committee for 5 years with dedication to preserving our cultural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    email: "rajesh@example.com",
    phone: "(555) 123-4567"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Event Coordinator",
    bio: "Experienced in organizing large-scale cultural events and community gatherings.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    email: "priya@example.com",
    phone: "(555) 234-5678"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Treasurer",
    bio: "Managing committee finances and ensuring transparent operations.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    email: "amit@example.com",
    phone: "(555) 345-6789"
  }
];

export function CommitteePage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Committee Members</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.imageUrl})` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                <h3 className="text-lg text-orange-600 font-semibold mb-4">{member.role}</h3>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-orange-600">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-orange-600">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}