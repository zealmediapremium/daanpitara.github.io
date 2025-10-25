import SectionHeading from "@/assets/Headings/sectionHeading";



import React from "react";
import { motion } from "framer-motion";
import { UserCircle } from "@phosphor-icons/react";

type Testimonial = {
  name: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    review:
      "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
  },
  {
    name: "Michael Roberts",
    review:
      "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
  },
  {
    name: "Sophia Martinez",
    review:
      "I felt valued and cared for. Their team made every effort to provide exceptional support and service.",
  },
  {
    name: "Olivia Harris",
    review:
      "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
  },
  {
    name: "James Anderson",
    review:
      "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
  },
  {
    name: "Daniel Thompson",
    review:
      "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
  },
];

// Helper function to generate random star ratings
const randomStars = () => Math.floor(Math.random() * 3) + 3;

const Testimonials: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading heading="What our satisfied and happy clients have to say" />


        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 py-10">
          {testimonials.map((t, i) => {
            const stars = randomStars();
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Name and Icon */}
                <div className="flex items-center mb-4">
                  <UserCircle size={32} weight="fill" className="text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                </div>

                {/* Review */}
                <p className="text-gray-600 mb-4">{t.review}</p>

                {/* Random Star Rating */}
                <div className="flex">
                  {Array.from({ length: stars }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path d="M12 .587l3.668 7.425L24 9.748l-6 5.848 1.417 8.268L12 19.771l-7.417 4.093L6 15.596 0 9.748l8.332-1.736z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
