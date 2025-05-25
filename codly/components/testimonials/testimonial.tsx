import React from 'react'
import { motion } from "framer-motion";
const Testimonial = () => {
    const testimonials = [
        {
          content:
            "This solution has transformed our business operations completely.",
          author: "Jane Cooper",
          role: "CEO, TechCorp",
        },
        {
          content:
            "The speed and reliability of this platform is unmatched in the industry.",
          author: "Michael Foster",
          role: "CTO, InnovateCo",
        },
        {
          content: "Implementation was smooth and the results were immediate.",
          author: "Lisa Wang",
          role: "Founder, StartupX",
        },
      ];
      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      };
    
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
  return (
    <div>    <div className="bg-gradient-to-b from-indigo-50 to-white py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by industry leaders
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          Don't just take our word for it - hear what our clients have to
          say.
        </p>
      </motion.div>
      <motion.div
        className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-gray-600 italic">
              "{testimonial.content}"
            </p>
            <div className="mt-6 flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-100"></div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div></div>
  )
}

export default Testimonial