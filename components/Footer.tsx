import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Crystal Cinema Innovation
            </h3>
            <p className="text-gray-300 mb-4">
              Where creativity meets technology to bring your visual stories to
              life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-gray-300 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-gray-300 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-300 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-300 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gray-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-gray-300 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Column 1 */}
              <ul className="space-y-2">
                <li>Video Production</li>
                <li>Video Editing</li>
                <li>Animation</li>
                <li>Motion Graphics</li>
                <li>Corporate Videos</li>
              </ul>
              {/* Column 2 */}
              <ul className="space-y-2">
                <li>Live Events</li>
                <li>Color Grading</li>
                <li>Sound Design</li>
                <li>Visual Effects</li>
                <li>Post Production</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a
                  href="mailto:info@crystalcinema.com"
                  className="hover:text-gray-300 transition-colors"
                >
                  info@crystalcinema.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a
                  href="tel:+1234567890"
                  className="hover:text-gray-300 transition-colors"
                >
                  +91 7974908511
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  +91 8718972870
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>
                  110 Alok Nagar, Kanadiya Road, Indore, Madhya Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Crystal Cinema Innovation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
