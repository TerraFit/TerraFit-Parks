import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-terra-500 p-1.5 rounded-md">
                <Trees className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                TerraFit<span className="text-terra-500">Parks</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              The leading provider of turnkey, scalable adventure park systems. Build Thrills. Grow Profits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-terra-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-terra-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-terra-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/systems" className="hover:text-terra-500 transition-colors">Our Systems</Link></li>
              <li><Link to="/partnership" className="hover:text-terra-500 transition-colors">Partnership Process</Link></li>
              <li><Link to="/team" className="hover:text-terra-500 transition-colors">Our Team</Link></li>
              <li><Link to="/about" className="hover:text-terra-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-terra-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/systems" className="hover:text-terra-500 transition-colors">Treetop Adventures</Link></li>
              <li><Link to="/systems" className="hover:text-terra-500 transition-colors">Adrenaline Parks</Link></li>
              <li><Link to="/systems" className="hover:text-terra-500 transition-colors">Mobile Parks</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-terra-500 mt-0.5" />
                <span>123 Adventure Way,<br />Outdoor City, CO 80202</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-terra-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-terra-500" />
                <span>partners@terrafitparks.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TerraFit Parks. All rights reserved. Part of Aemara Group.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
