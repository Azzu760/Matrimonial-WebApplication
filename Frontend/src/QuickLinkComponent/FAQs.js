import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and fill in the required details, such as your name, email, and password. You will receive a confirmation email to verify your account.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "You can update your profile information by logging into your account and navigating to the 'Profile' section. Here, you can edit your personal details, profile picture, and preferences.",
    },
    {
      question: "What should I do if I forget my password?",
      answer:
        "If you forget your password, click on the 'Forgot Password' link on the login page. Follow the instructions to reset your password using your registered email address.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "For any support-related issues, you can reach out to our customer support team via email at support@matrimonialmatch.com or by phone at +1 234 567 890. We are available 24/7 to assist you.",
    },
    {
      question: "How do I delete my account?",
      answer:
        "To delete your account, please contact our support team with your request. We will guide you through the process and ensure that your account is deleted securely.",
    },
    {
      question: "Are there any fees for using the service?",
      answer:
        "Basic access to our platform is free. However, we offer premium features and memberships that may involve additional fees. Details about these fees can be found on our pricing page.",
    },
    {
      question: "How does your matchmaking algorithm work?",
      answer:
        "Our matchmaking algorithm uses advanced techniques to analyze your preferences, interests, and compatibility with other users. It then provides you with potential matches that align with your criteria.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-pink-400 mb-8 text-lg">
        Find answers to some of the most common questions about our platform. If
        you need further assistance, please don't hesitate to contact us.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-pink-500 mb-3">
              {faq.question}
            </h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
