import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mb-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-300 transition-colors duration-300"
      >
        <FaFacebookF className="text-2xl" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-300 transition-colors duration-300"
      >
        <FaTwitter className="text-2xl" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-300 transition-colors duration-300"
      >
        <FaInstagram className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
