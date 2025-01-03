import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide mb-4">VivahTales</h3>
            <p className="text-gray-400 leading-relaxed">
              Capturing your timeless moments with creativity and passion.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
              >
                <Phone size={20} />
                <span>+1 234 567 890</span>
              </a>
              <a
                href="mailto:info@clickingshaadi.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
              >
                <Mail size={20} />
                <span>info@clickingshaadi.com</span>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Follow Us</h3>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={28} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} xkeystroke. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
