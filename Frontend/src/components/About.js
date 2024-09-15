import { FaHeart, FaCheckCircle, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about-us"
      className="py-20 relative overflow-hidden bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-500">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl lg:max-w-5xl leading-relaxed mx-auto mb-8">
            At <span className="font-semibold text-pink-600">Swyamvar.com</span>
            , we believe in finding a love that lasts a lifetime. Our trusted,
            secure, and personalized matchmaking service strives to connect
            hearts and build enduring relationships.
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl lg:max-w-5xl leading-relaxed mx-auto mb-8">
            Founded in 2024, our mission is to provide a safe and user-friendly
            platform that fosters genuine connections. We are committed to
            upholding the highest standards of service and integrity, ensuring
            that every user has a positive and rewarding experience.
          </p>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl lg:max-w-5xl leading-relaxed mx-auto mb-8">
            Our core values include empathy, respect, and innovation. We
            continuously refine our algorithms and features to meet the evolving
            needs of our users while maintaining a strong focus on privacy and
            security.
          </p>

          {/* Icon Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
            <div className="flex flex-col items-center">
              <FaHeart className="text-pink-600 text-5xl md:text-6xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Personalized Matchmaking
              </h3>
              <p className="text-gray-600 mt-2">
                Tailoring every search to help you find the one who shares your
                values and aspirations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-600 text-5xl md:text-6xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Trusted and Verified
              </h3>
              <p className="text-gray-600 mt-2">
                Every profile is verified to ensure genuine connections and
                meaningful conversations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobe className="text-blue-600 text-5xl md:text-6xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Global Reach
              </h3>
              <p className="text-gray-600 mt-2">
                Connecting people from different corners of the world with a
                wide-reaching network.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-purple-600 text-5xl md:text-6xl mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                Community Focused
              </h3>
              <p className="text-gray-600 mt-2">
                Building a vibrant community where users can interact and share
                experiences.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-12">
            <a
              href="#"
              className="inline-block bg-pink-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400 rounded-full opacity-20" />
        <div className="absolute top-0 right-0 w-36 h-36 bg-pink-500 rounded-full opacity-30" />
      </div>
    </section>
  );
};

export default About;
