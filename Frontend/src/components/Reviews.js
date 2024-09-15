import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    review: "This is an amazing platform! I met so many great people.",
    avatar: "/assets/user.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    review: "Highly recommended. The user experience is top-notch.",
    avatar: "/assets/user.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    review: "Fantastic! I love the design and the ease of use.",
    avatar: "/assets/user.jpg",
    rating: 4.5,
  },
];

const getStarRating = (rating) => {
  let stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(
      <FaStar key={i} className="text-yellow-400 text-xl md:text-2xl" />
    );
  }
  if (rating % 1 !== 0) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className="text-yellow-400 text-xl md:text-2xl"
      />
    );
  }
  while (stars.length < 5) {
    stars.push(
      <FaRegStar
        key={stars.length}
        className="text-gray-300 text-xl md:text-2xl"
      />
    );
  }
  return stars;
};

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[currentReviewIndex];

  return (
    <section id="reviews" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-8 text-pink-500"
        >
          What Our Users Say
        </motion.h2>
        <div className="relative">
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="bg-white p-8 sm:p-12 rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-md md:max-w-4xl h-auto md:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center md:justify-start md:w-1/2 h-full mb-4 md:mb-0">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-32 h-32 md:w-40 md:h-56 object-cover rounded-md mr-0 md:mr-8"
                />
              </div>
              <div className="flex flex-col justify-center text-center md:text-left md:w-1/2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {review.name}
                </h3>
                <div className="flex justify-center md:justify-start items-center mb-4">
                  {getStarRating(review.rating)}
                </div>
                <p className="text-md md:text-lg text-gray-600">
                  {review.review}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-6">
            <button
              onClick={handlePrevious}
              className="bg-pink-500 text-white p-3 md:p-4 rounded-full shadow-md hover:bg-pink-600 transition-transform transform"
            >
              <FaArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNext}
              className="bg-pink-500 text-white p-3 md:p-4 rounded-full shadow-md hover:bg-pink-600 transition-transform transform"
            >
              <FaArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
