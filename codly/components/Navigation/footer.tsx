import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks =  [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

  return (
    <footer className="bg-black text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-40 h-20 rounded-lg flex items-center justify-center">
                <Image
                  src="/logo3.png"
                  alt="codly logo"
                  width={1000}
                  height={1000}
                  className="rounded-lg w-40 h-40 object-contain"
                  priority
                />
              </div>
              
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Grow your Bussines with online presents . We provide top-notch services to help you succeed in the digital world.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4" aria-label="Social media links">
              <Link
                href="https://www.instagram.com/codly_web_solutions?igsh=b2l0c2JnOHNrYnEx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/codly_web_solutions?igsh=b2l0c2JnOHNrYnEx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links" className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic space-y-6" aria-label="Contact Information">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>Kochi India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+919947414953" className="hover:text-white transition-colors">+919947414953</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:alphinecarspa@gmail.com" className="hover:text-white transition-colors">codlywebsolutions@gmail.com</a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 mt-4"
            >
              Contact
            </Link>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <p>&copy; {currentYear} Codly. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
