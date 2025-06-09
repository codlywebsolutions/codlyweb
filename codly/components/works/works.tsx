// pages/projects.tsx
"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  Link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Car Service",
    imageUrl: "/Alphine.png",
    Link: "https://www.alphinecarspa.com/",
  },
  {
    id: 2,
    title: "E-Commerce",
    imageUrl: "/Spicera.png",
    Link: "/",
  },
  {
    id: 3,
    title: "Gym Booking",
    imageUrl: "/gym.png",
    Link: "/",
  },
];

const Works = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Our Works | Web Solutions</title>
        <meta name="description" content="Explore our portfolio of web development projects and solutions" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              A glimpse of the brands and solutions we&lsquo;ve built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logos Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          >
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 rounded-lg shadow-md hover:shadow-lg transition border border-gray-800"
              >
                <Link href={project.Link} target="_blank">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="object-contain w-auto h-24"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Works;
