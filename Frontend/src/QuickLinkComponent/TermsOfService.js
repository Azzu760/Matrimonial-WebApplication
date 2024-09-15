import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8">
      <h1 className="text-3xl text-pink-500 font-bold mb-4">
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-4">
        By using our platform, you agree to our Terms of Service. These terms
        govern your use of the services we provide and outline your rights and
        responsibilities.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Introduction
        </h2>
        <p className="text-gray-600">
          Welcome to Matrimonial. These Terms of Service outline the rules and
          regulations for using our platform. By accessing or using our
          services, you agree to comply with these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          User Obligations
        </h2>
        <p className="text-gray-600">
          As a user of our platform, you agree to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Provide accurate and up-to-date information in your profile.</li>
          <li>
            Use the platform for lawful purposes only and in accordance with
            these terms.
          </li>
          <li>
            Maintain the confidentiality of your account credentials and notify
            us of any unauthorized use of your account.
          </li>
          <li>Respect the privacy and rights of other users.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Prohibited Activities
        </h2>
        <p className="text-gray-600">
          You must not engage in the following prohibited activities:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Posting or transmitting unlawful, harmful, or offensive content.
          </li>
          <li>Using the platform to harass, abuse, or harm other users.</li>
          <li>Engaging in fraudulent or deceptive activities.</li>
          <li>
            Impersonating any person or entity or falsely representing your
            affiliation with any person or entity.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Account Management
        </h2>
        <p className="text-gray-600">
          You are responsible for managing your account, including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Updating your profile information as needed.</li>
          <li>
            Ensuring the security of your account and reporting any issues
            promptly.
          </li>
          <li>Reviewing and accepting any changes to the Terms of Service.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Disclaimers and Limitation of Liability
        </h2>
        <p className="text-gray-600">
          Our platform is provided "as is" and we make no warranties or
          representations regarding the accuracy or completeness of the content.
          We are not liable for any damages arising from your use of the
          platform or any interactions with other users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Changes to Terms
        </h2>
        <p className="text-gray-600">
          We reserve the right to modify these Terms of Service at any time. Any
          changes will be posted on this page, and your continued use of the
          platform constitutes acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl text-pink-400 font-semibold mb-2">
          Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions or concerns about these Terms of Service,
          please contact us at:
        </p>
        <p className="text-gray-600">Email: support@example.com</p>
        <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
      </section>
    </div>
  );
};

export default TermsOfService;
