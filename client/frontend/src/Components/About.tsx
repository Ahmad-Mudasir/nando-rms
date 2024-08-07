import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import chefImage from "../assets/images/chef.jpg";
import restaurantImage from "../assets/images/restaurant.jpg";

const AboutUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const topSectionVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const rightSectionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center mt-16"
        variants={topSectionVariants}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        ref={ref1}
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Discover our story and meet the people that make our restaurant
          special.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={sectionVariants}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        ref={ref2}
      >
        <img
          src={restaurantImage}
          alt="Our Restaurant"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our restaurant was founded with the passion of bringing delicious and
          high-quality food to our community. Over the years, we have grown and
          evolved, but our commitment to exceptional dining experiences has
          remained the same. Our chefs use only the freshest ingredients, and
          every dish is prepared with love and care.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We believe in creating a welcoming and comfortable environment where
          our guests can enjoy great food and good company. Whether you're here
          for a quick bite or a special occasion, we strive to make every visit
          memorable.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={rightSectionVariants}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        ref={ref3}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to provide an unforgettable dining experience for our
          guests by offering delicious food, exceptional service, and a warm and
          inviting atmosphere. We are dedicated to using the finest ingredients
          and preparing each dish with care and attention to detail.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We are committed to sustainability and supporting local farmers and
          producers. Our menu reflects our dedication to quality and our passion
          for culinary excellence.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={sectionVariants}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        ref={ref4}
      >
        <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={chefImage}
                alt="Chef"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Chef John Doe</h3>
              <p className="text-gray-600 mb-4">Executive Chef</p>
              <p className="text-gray-700 leading-relaxed">
                Chef John has over 20 years of experience in the culinary
                industry. His passion for food and creativity in the kitchen
                have earned him numerous accolades and a loyal following.
              </p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>
      </motion.div>

      <motion.div
        className="mb-16"
        variants={rightSectionVariants}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        ref={ref5}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Quality: We use only the best ingredients and prepare each dish with
            care.
          </li>
          <li>
            Community: We are dedicated to serving and supporting our local
            community.
          </li>
          <li>
            Sustainability: We strive to minimize our environmental impact.
          </li>
          <li>
            Hospitality: We aim to provide exceptional service and a welcoming
            atmosphere.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutUs;
