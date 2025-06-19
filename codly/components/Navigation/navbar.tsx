'use client'
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define our navigation items
type NavItem = {
  name: string;
  href: string;
};

const navigation: NavItem[] = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
 
  return (
    <div><header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div className="w-full py-5 flex items-center justify-between">
        <div className="flex items-center ">
          <Link href="/">
 <Image src={"/logo3.png"} className='w-44 h-14  'alt={''}  width={100} height={100}/>
          </Link>
          <div className="hidden ml-10 space-x-8 lg:flex">
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="text-base font-medium text-white hover:text-indigo-600 transition-colors">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            type="button" 
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile menu */}
    {mobileMenuOpen && (
      <motion.div 
        className="lg:hidden bg-white shadow-lg rounded-b-lg mx-4"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </header></div>
  )
}

export default Navbar