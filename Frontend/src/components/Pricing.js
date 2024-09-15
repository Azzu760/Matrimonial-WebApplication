import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$29/month",
    features: [
      "Profile creation",
      "Basic search filters",
      "Limited messaging",
      "Access to public profiles",
    ],
    buttonText: "Get Started",
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$49/month",
    features: [
      "Everything in Basic Plan",
      "Advanced search filters",
      "Unlimited messaging",
      "Access to private profiles",
      "Profile verification",
    ],
    buttonText: "Choose Plan",
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$99/month",
    features: [
      "Everything in Standard Plan",
      "Personal matchmaking assistance",
      "Priority support",
      "Advanced compatibility matching",
      "Exclusive events and webinars",
    ],
    buttonText: "Join Now",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500">
            Our Pricing Plans
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that best suits your needs and start your journey
            towards finding a lasting relationship.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold text-pink-600 mb-6">
                {plan.price}
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-pink-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-pink-700 transition-all duration-300"
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
