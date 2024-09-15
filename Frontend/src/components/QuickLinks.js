import React, { useState } from "react";
import AboutUs from "../QuickLinkComponent/AboutUs";
import PrivacyPolicy from "../QuickLinkComponent/PrivacyPolicy";
import TermsOfService from "../QuickLinkComponent/TermsOfService";
import FAQs from "../QuickLinkComponent/FAQs";

const QuickLinks = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleClose = () => {
    setSelectedLink(null);
  };

  const getContent = () => {
    switch (selectedLink) {
      case "about-us":
        return <AboutUs />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "terms-of-service":
        return <TermsOfService />;
      case "faqs":
        return <FAQs />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => handleLinkClick("about-us")}
            className="hover:underline"
          >
            About Us
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("privacy-policy")}
            className="hover:underline"
          >
            Privacy Policy
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("terms-of-service")}
            className="hover:underline"
          >
            Terms of Service
          </button>
        </li>
        <li>
          <button
            onClick={() => handleLinkClick("faqs")}
            className="hover:underline"
          >
            FAQs
          </button>
        </li>
      </ul>

      {selectedLink && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div
            className="bg-white p-6 m-2 rounded-lg shadow-lg relative w-full max-w-screen-xl h-5/6 max-h-screen overflow-auto"
            style={{
              scrollbarWidth: "none", // For Firefox
              msOverflowStyle: "none", // For Internet Explorer and Edge
            }}
          >
            {/* Hidden scrollbar for Webkit browsers */}
            <style>
              {`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h4 className="text-lg font-bold mb-4">Content</h4>
            <div className="hide-scrollbar">{getContent()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickLinks;
