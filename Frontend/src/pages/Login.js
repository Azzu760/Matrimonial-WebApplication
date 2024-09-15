import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login form submission
    alert("Logged in successfully!");
  };

  const handleGoogleLogin = () => {
    // Logic for Google login integration
    alert("Google login clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-pink-500 font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="mb-4 text-right">
            <Link to="/forgot-password" className="text-blue-600">
              Forgot Password?
            </Link>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px bg-gray-300 w-1/3"></div>
            <span className="text-gray-500">OR</span>
            <div className="h-px bg-gray-300 w-1/3"></div>
          </div>

          <div className="mb-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white py-2 rounded-lg flex justify-center items-center space-x-2"
            >
              {/* <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google Icon"
                className="w-6 h-6"
              /> */}
              <FaGoogle />
              <span>Login with Google</span>
            </button>
          </div>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
