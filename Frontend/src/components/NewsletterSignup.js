import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
      <p>Get the latest updates and news directly to your inbox.</p>
      <form className="flex flex-col sm:flex-row space-y-2 md:flex-col md:space-x-0 md:space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-lg border border-white bg-white text-gray-800"
          required
        />
        <button
          type="submit"
          className="bg-white text-pink-500 font-bold py-2 px-4 rounded-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
