import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <h1 className="text-3xl text-pink-500 font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        Our Privacy Policy outlines how we handle your personal information. We
        are committed to protecting your privacy and ensuring your data is
        secure.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Introduction
        </h2>
        <p className="text-gray-600">
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you visit our website or use our services. By using
          our platform, you agree to the terms outlined in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-600">
          We collect various types of information to provide and improve our
          services, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Personal Information:</strong> This includes your name,
            email address, phone number, and any other information you provide
            when creating an account or interacting with our platform.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect information about how you
            use our website and services, such as your IP address, browser type,
            and pages visited.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            and similar technologies to enhance your experience and analyze
            usage patterns.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="text-gray-600">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>To Provide and Maintain Our Services:</strong> Your data
            helps us deliver and improve the functionality of our platform.
          </li>
          <li>
            <strong>To Communicate with You:</strong> We may use your contact
            information to send you updates, notifications, and promotional
            materials.
          </li>
          <li>
            <strong>To Ensure Security:</strong> We use your information to
            protect against unauthorized access and to safeguard your account.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Data Protection and Security
        </h2>
        <p className="text-gray-600">
          We implement a variety of security measures to ensure the protection
          of your personal data. However, please be aware that no method of
          transmission over the Internet or electronic storage is completely
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Your Rights and Choices
        </h2>
        <p className="text-gray-600">
          You have certain rights regarding your personal data, including:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Access:</strong> You can request access to your personal
            data and obtain a copy of it.
          </li>
          <li>
            <strong>Correction:</strong> You can request that we correct any
            inaccuracies in your data.
          </li>
          <li>
            <strong>Deletion:</strong> You can request the deletion of your
            data, subject to certain legal obligations.
          </li>
          <li>
            <strong>Opt-Out:</strong> You can opt-out of receiving marketing
            communications from us at any time.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Changes to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new policy on our
          website. Your continued use of our services after such changes
          constitutes your acceptance of the new policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="text-gray-600">Email: support@example.com</p>
        <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
