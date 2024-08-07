import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p>
              Welcome to our restaurant, where we serve the finest dishes with
              the freshest ingredients. Our passion is to provide you with an
              unforgettable dining experience.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <ScrollLink
                  to="category-section"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  Menu
                </ScrollLink>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="hover:text-gray-400 cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  className="hover:text-gray-400 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>peshawar Foodie St., Food Town, pakistan</p>
            <p>Email: Nando@restaurant.com</p>
            <p>Phone: (+92) 309-9726351</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
