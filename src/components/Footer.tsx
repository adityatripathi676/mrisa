import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MRISA</h3>
            <p className="text-gray-400">Securing the digital future through education, innovation, and collaboration.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/activities" className="text-gray-400 hover:text-white">Activities</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><MapPin className="mr-2 h-5 w-5" /> MRIIRS, Faridabad</p>
              <p className="flex items-center"><Phone className="mr-2 h-5 w-5" /> +91 XXX XXX XXXX</p>
              <p className="flex items-center"><Mail className="mr-2 h-5 w-5" /> mrisa@mriu.edu.in</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MRISA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}