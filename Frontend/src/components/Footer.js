import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import NewsletterSignup from "./NewsletterSignup";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ContactInfo />
          <QuickLinks />
          <NewsletterSignup />
        </div>
        <SocialMediaLinks />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Swyamvar.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
