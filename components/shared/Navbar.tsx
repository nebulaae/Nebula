"use client";

import Link from 'next/link';
import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import { LocaleSwitcher } from '@/components/functions/LocaleSwitcher';
import { Menu } from './Menu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // You can adjust this threshold value
  const scrollThreshold = 10; // Pixels scrolled down to trigger the change

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past the threshold
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Base classes for the navbar
  const baseClasses = 'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out';

  // Classes for the default (top) state: transparent background, transparent border
  const defaultStateClasses = 'bg-transparent border-b border-transparent';

  // Classes for the scrolled state: white background, gray border, subtle shadow
  const scrolledStateClasses = 'bg-white/50 backdrop-blur-xl border-b border-gray-200';

  return (
    <nav
      className={`${baseClasses} ${isScrolled ? scrolledStateClasses : defaultStateClasses
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Adjust height as needed */}
          {/* Left Side: Logo/Brand */}
          <div>
            <Link href="/" className="flex flex-row gap-2 items-center text-xl font-bold text-gray-800 hover:text-gray-600">
              <Image src="logo-white-transparent.svg" alt="logo" width={48} height={48} />
              Nebula
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex sm:space-x-6">
            <Link href="#home" className={` ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Home
            </Link>
            <Link href="#about" className={` ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`}>
              About
            </Link>
            <Link href="#timeline" className={` ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Timeline
            </Link>
            <Link href="#contacts" className={` ${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium`}>
              Contacts
            </Link>
          </div>

          {/* Right Side: Functional blocks */}
          <div className="flex items-center justify-center gap-2">
            <LocaleSwitcher />
            <div className="flex md:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};