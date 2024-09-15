import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [showTermsModal, setShowTermsModal] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registration successful!");
  };

  const toggleTermsModal = () => {
    setShowTermsModal(!showTermsModal);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-pink-500 text-center">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

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

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select className="w-full px-3 py-2 border rounded-lg" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the{" "}
              <span
                onClick={toggleTermsModal}
                className="text-blue-600 cursor-pointer"
              >
                Terms and Conditions
              </span>
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Register
            </button>
          </div>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>

        {/* Terms and Conditions Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-lg relative overflow-hidden">
              <button
                className="absolute top-2 right-2 text-gray-700"
                onClick={toggleTermsModal}
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-pink-500 text-center">
                Terms and Conditions
              </h2>
              <div className="text-gray-700">
                <p className="mb-4">
                  Welcome to Swyamvar.com. By using our services, you agree to
                  the following terms:
                </p>
                <p className="mb-4">
                  1. You must be at least 18 years old to use our services.
                </p>
                <p className="mb-4">
                  2. You are responsible for maintaining the confidentiality of
                  your account details.
                </p>
                <p className="mb-4">
                  3. You agree not to post any content that is harmful,
                  defamatory, or otherwise illegal.
                </p>
                <p className="mb-4">
                  4. We are committed to protecting your personal information.
                  Please refer to our Privacy Policy.
                </p>
                <p className="mb-4">
                  5. We reserve the right to terminate or suspend your account
                  if you violate our terms.
                </p>
                <p className="mb-4">
                  For more detailed information, please refer to our full Terms
                  and Conditions on our website.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
