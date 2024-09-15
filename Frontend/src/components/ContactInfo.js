import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Contact Us</h3>
      <div className="flex items-center">
        <FaPhoneAlt className="text-xl mr-2" />
        <p>+1 234 567 890</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-xl mr-2" />
        <p>info@matrimonialmatch.com</p>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-xl mr-2" />
        <p>1234 Love Lane, Heartfelt City</p>
      </div>
    </div>
  );
};

export default ContactInfo;
