import React from 'react';
import { SCHOOL_NAME, SCHOOL_LOCATION } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">{SCHOOL_NAME}</h2>
            <p className="text-sm leading-relaxed mb-4">
              Empowering the future through quality education, holistic development, and moral values. 
              Operated by Samaj Kalyan Vibhag, Uttar Pradesh.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-orange-400 transition-colors">Facilities</a></li>
              <li><a href="#results" className="hover:text-orange-400 transition-colors">Academic Results</a></li>
              <li><a href="http://swd.up.nic.in/" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">Samaj Kalyan Vibhag</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-0.5" />
                <span>District Dindoli, Nagal<br/>{SCHOOL_LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>+91-123-456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>contact@rapv-saharanpur.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
