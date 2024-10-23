import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Section 1: About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
  Sweet Home provides delicious, traditional sweets made with love and care. Our products reflect the rich heritage of Indian sweets, bringing joy to every celebration and moment of happiness.
</p>

        </div>

        {/* Section 2: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: support@sweethome.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Location: Biher, India</li>
          </ul>
        </div>

        {/* Section 3: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>

        {/* Section 4: Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © 2024 Sweet Home. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
