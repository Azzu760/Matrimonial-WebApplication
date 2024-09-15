import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-start overflow-hidden px-6 lg:px-16"
      style={{
        background:
          "url('/assets/Landing-Background.jpg') no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      {/* Blurred Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(0.5px)",
          WebkitBackdropFilter: "blur(0.5px)",
          background: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      {/* Text and Call-to-Action */}
      <div className="relative z-10 text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wide"
        >
          Discover Your Perfect Match
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-xl lg:text-2xl mb-10 max-w-md text-white"
        >
          Ready to meet someone special? Take the first step today and join a
          community where real connections are made.
        </motion.p>

        {/* Register Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.6 }}
          onClick={handleRegisterClick}
          className="px-10 py-3 lg:px-12 lg:py-4 rounded-md shadow-lg text-lg lg:text-xl font-semibold text-white bg-pink-500 transition-transform transform hover:shadow-2xl hover:scale-105"
          style={{
            borderRadius: "8px",
          }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
