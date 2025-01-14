"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Language", href: "/language" },
    { name: "Games", href: "/games" },
    { name: "Culture", href: "/culture" },
    { name: "Pop Culture", href: "/pop-culture" },
  ];

  return (
    <header className="p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Japanese Learning</h1>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Icon */}
      <button
        className="lg:hidden p-2 bg-blue-700 rounded-md"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Modal for Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-3/4 max-w-sm p-6">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              ✕
            </button>
            <ul className="space-y-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-500 font-bold hover:underline"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
