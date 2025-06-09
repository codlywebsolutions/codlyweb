"use client";
import React from 'react'
import { motion } from "framer-motion";

const Services = () => {
  type ServiceItem = {
    title: string;
    description: string;
    icon: string;
  };

  const services: ServiceItem[] = [
    {
      title: "Web Development",
      description:
        "Building fast, responsive, and user-friendly websites tailored to your business needs.",
      icon: "💻",
    },
    {
      title: "SEO Services",
      description:
        "SEO strategies to enhance your online visibility.",
      icon: "🌐",
    },
    {
      title: "Software Development",
      description:
        "Developing robust and scalable software solutions to streamline your business operations.",
      icon: "🛠️",
    },
    {
      title: "App Development",
      description:
        "Creating high-performance mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      title: "Hosting Services",
      description:
        "Reliable and secure web hosting solutions to keep your online presence strong and accessible.",
      icon: "☁️",
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
    <div className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-base font-semibold text-indigo-400">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empowering Your Business
          </p>
          <p className="mt-6 text-lg text-gray-300">
            We deliver tailored solutions to elevate your digital presence and business operations.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-16 max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="relative bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-800"
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <dt className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r  text-white text-2xl">
                    <span>{service.icon}</span>
                  </div>
                  <p className="text-lg font-semibold leading-8 text-white">
                    {service.title}
                  </p>
                </dt>
                <dd className="mt-4 text-base text-gray-400">
                  {service.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
