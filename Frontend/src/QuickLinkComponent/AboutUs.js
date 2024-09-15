import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "John has over 15 years of experience in the matchmaking industry.",
      image: "/assets/member-1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Head of Technology",
      bio: "Jane leads our tech team, ensuring that our platform runs smoothly and securely.",
      image: "/assets/member-1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Head of Technology",
      bio: "Jane leads our tech team, ensuring that our platform runs smoothly and securely.",
      image: "/assets/member-1.jpg",
    },
    // Add more team members as needed
  ];

  return (
    <div className="overflow-x-auto">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <h1 className="text-3xl text-pink-500 font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Matrimonial. We are dedicated to helping you find your
          perfect match. Our platform offers a variety of features to ensure you
          have the best experience.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl text-pink-400 font-semibold mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Our mission is to provide a safe and user-friendly platform that
            connects individuals seeking meaningful relationships. We strive to
            ensure every user finds the perfect partner through advanced
            matchmaking algorithms and personal support.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-pink-400 font-semibold mb-2">
            Our Vision
          </h2>
          <p className="text-gray-600">
            We envision a world where everyone has access to a reliable and
            supportive matchmaking platform. Our goal is to be the leading
            service in the matrimonial industry, known for our commitment to
            user satisfaction and innovative solutions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-pink-400 font-semibold mb-2">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Integrity:</strong> We operate with transparency and
              honesty, ensuring that our users can trust us.
            </li>
            <li>
              <strong>Respect:</strong> We value and respect the diverse needs
              and preferences of our users.
            </li>
            <li>
              <strong>Innovation:</strong> We are committed to continually
              improving our platform with the latest technology and features.
            </li>
            <li>
              <strong>Support:</strong> We offer exceptional customer support to
              assist our users throughout their journey.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-pink-400 font-semibold mb-2">
            Meet the Team
          </h2>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="bg-white p-4 rounded-sm shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-700 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
