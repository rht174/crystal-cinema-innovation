"use client";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            Crystal Cinema Innovation
          </Link>

          {/* Mobile Menu Button - Using CSS-only approach */}
          <label
            htmlFor="menu-toggle"
            className="md:hidden p-2 relative z-50 cursor-pointer"
          >
            <div className="hamburger">
              <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all"></span>
              <span className="block w-6 h-0.5 bg-white transition-all"></span>
            </div>
          </label>
          <input type="checkbox" id="menu-toggle" className="hidden" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        <div className="mobile-menu md:hidden backdrop-blur-md bg-black/40 rounded-lg mt-4">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
