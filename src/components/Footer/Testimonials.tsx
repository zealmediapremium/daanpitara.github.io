import SectionHeading from "@/assets/HeadingText/SectionHeading";
import { motion } from "framer-motion";
import { UserCircleIcon } from "@phosphor-icons/react";

type Testimonial = {
  name: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Gyaan All Children Welfare Society",
    review:
      "DaanPitara helped us go from being a small local NGO to a visible online movement. Their digital campaigns not only brought in donors but also helped more people understand our mission.",
  },
  {
    name: "Don Bosco Navjeevan",
    review:
      "Before DaanPitara, fundraising felt like a constant struggle. Now, with their guidance and visibility tools, we’ve reached supporters we never thought possible.",
  },
  {
    name: "Mata Gujri Ji Bridh Ashram",
    review:
      "Our digital presence was almost invisible. DaanPitara has turned our story into something beautiful, and people connect with our purpose like never before.",
  },
  {
    name: "Vasundhara Maitri Foundation",
    review:
      "The team guided us through every compliance and documentation process. Their legal and digital supports built trust with donors and made fundraising transparent.",
  },
  {
    name: "JJ Education Academy",
    review:
      "From branding to social media storytelling, they brought our NGO’s journey to life. Every campaign feels personal, powerful, and full of heart.",
  },
  {
    name: "Community Action for Rural Excellence",
    review:
      "We found not just a digital partner, but a compassionate team that believed in our cause. DaanPitara helped us amplify once-unheard voices.",
  },
];



const Testimonials: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading heading="What our satisfied and happy clients have to say" />


        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 py-10">
          {testimonials.map((t, i) => {

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
                  <UserCircleIcon size={32} weight="fill" className="text-indigo-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                </div>

                {/* Review */}
                <p className="text-gray-600 mb-4">{t.review}</p>

                {/* Random Star Rating */}
                {/* <div className="flex">
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
                </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
