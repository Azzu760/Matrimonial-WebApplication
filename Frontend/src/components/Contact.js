import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section
      id="contacts"
      className="bg-gradient-to-b from-white to-[#F3F1EF] py-12 px-4"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold mb-12 text-pink-500">Get in Touch</h2>
        <p className="mt-3 text-lg text-gray-600">
          We’re here to help you find your perfect match. Contact us with any
          questions or inquiries!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-[#ECECEC] transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaPhoneAlt className="text-4xl text-pink-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-gray-800">Call Us</h4>
              <p className="text-md text-gray-700">+1 234 567 890</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-[#ECECEC] transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaEnvelope className="text-4xl text-pink-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-gray-800">Email Us</h4>
              <p className="text-md text-gray-700">info@matrimonialmatch.com</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border border-[#ECECEC] transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-4xl text-pink-500 mr-4" />
            <div>
              <h4 className="text-lg font-bold text-gray-800">Visit Us</h4>
              <p className="text-md text-gray-700">
                1234 Love Lane, Heartfelt City
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full h-52 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0804450911455!2d-122.39965168468154!3d37.7888091797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d217e4e93%3A0x8131d9a2d8bb0ff5!2s1234%20Love%20Lane%2C%20Heartfelt%20City!5e0!3m2!1sen!2sus!4v1634289677745!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-6 border border-[#ECECEC]">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="name"
                className="text-md font-semibold text-gray-800"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-[#ECECEC] p-3 rounded-lg focus:ring-4 focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-md font-semibold text-gray-800"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-[#ECECEC] p-3 rounded-lg focus:ring-4 focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                htmlFor="message"
                className="text-md font-semibold text-gray-800"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="border border-[#ECECEC] p-3 rounded-lg focus:ring-4 focus:ring-pink-500 focus:outline-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>

            {messageSent && (
              <div className="mt-3 p-3 text-center text-white bg-green-500 rounded-lg">
                <p>Your message was sent successfully!</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Connect with Us
        </h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            <FaFacebookF className="text-3xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            <FaTwitter className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
          >
            <FaInstagram className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
