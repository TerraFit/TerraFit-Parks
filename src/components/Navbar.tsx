import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trees } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Systems', path: '/systems' },
    { label: 'Partnership', path: '/partnership' },
    { label: 'Team', path: '/team' },
    { label: 'About Us', path: '/about' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group" onClick={closeMenu}>
              <div className="bg-terra-500 p-2 rounded-lg group-hover:bg-terra-600 transition-colors">
                <Trees className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl text-gray-900 tracking-tight">
                TerraFit<span className="text-terra-500">Parks</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-colors ${
                  isActive(link.path) 
                    ? 'text-terra-600' 
                    : 'text-gray-600 hover:text-terra-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="primary" className="py-2 px-4 text-sm font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-terra-500 hover:bg-gray-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-terra-600 bg-terra-50'
                    : 'text-gray-600 hover:text-terra-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu} className="block mt-4">
              <Button fullWidth variant="primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
