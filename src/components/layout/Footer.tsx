import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>(555) 123-4567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@poojacommittee.org</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>123 Temple Street, City, State 12345</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/event-details" className="hover:text-orange-400">Event Schedule</a></li>
              <li><a href="/committee" className="hover:text-orange-400">Committee Members</a></li>
              <li><a href="/previous-events" className="hover:text-orange-400">Previous Events</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact Form</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="mb-4">Stay connected with us on social media for updates and announcements.</p>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Pooja Committee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}