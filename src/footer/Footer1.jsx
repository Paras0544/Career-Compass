import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="mb-4 text-2xl font-bold">Career Compass</h3>
          <p className="text-sm text-blue-100">
            Personalized Career Guidance to Help You Make Informed, Confident Decisions
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Services', 'Career Assessment', 'Resources', 'Contact'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  className="transition hover:text-blue-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-200" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-200" />
              <span>support@careercompass.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-blue-200" />
              <span>123 Career Lane, Success City</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex mt-4 space-x-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map(({ Icon, href }) => (
                <a 
                  key={Icon.name} 
                  href={href} 
                  className="text-white transition hover:text-blue-200"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-4 mt-8 text-center border-t border-blue-800">
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} Career Compass. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;