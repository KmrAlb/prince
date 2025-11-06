import { Mail, Phone, Instagram, Facebook, Youtube, MapPin } from 'lucide-react'; // Import MapPin for location

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold tracking-wide mb-4">Vivaah Tales</h3>
            <p className="text-gray-400 leading-relaxed">
              Preserving your most cherished moments with unmatched creativity and heartfelt passion, crafting timeless memories that last a lifetime
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
                <span>+91 98516 78337</span>
              </a>
              <a
                href="mailto:info@clickingshaadi.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition"
              >
                <Mail size={20} />
                <span>enquiriesvivaahtales@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 ml-1 mt-1 text-gray-400">
                <MapPin size={30} className="mt-1" />
                <span>Vivaah Tales, 1st Floor, Secon Line, Benachity (Near Haji Briyani), Durgapur 713213</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-medium mb-4">Follow Us</h3>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/vivaahtales_/"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/PrinceGarwar/"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.youtube.com/@Vivaahtales/featured"
                aria-label="YouTube"
                className="text-gray-400 hover:text-white transition"
              >
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} kumaralok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;