import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const Hero = () => {   
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      };
    
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }; 
  return (
    <div> <div className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="sm:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Build Smarter</span>
              <span className="block ">Scale Faster</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Codly – Your Web Solution Partner</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
            From stunning websites to powerful web apps, we craft digital experiences that deliver results.
            </p>
          </motion.div>
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/demo">
                <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-8 rounded-md text-base font-medium text-white hover:opacity-90  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
              Contact Us
                </span>
              </Link>
              <Link href="/learn-more">
                <span className="inline-block bg-white py-3 px-8 rounded-md text-base font-medium text-gray-800 hover:text-indigo-600 border border-gray-200 hover:border-indigo-600  shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  Learn more
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    
    <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
  <motion.div 
    className="relative h-full w-full bg-gradient-to-r from-indigo-100 to-purple-100 rounded-l-3xl overflow-hidden p-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >  
    {/* Background Effects */}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300 via-transparent to-transparent"></div>
    <div className="absolute inset-0 opacity-20">
      <div className="absolute w-96 h-96 -top-20 -right-20 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl" />
      <div className="absolute w-96 h-96 bottom-20 right-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
    </div>

    {/* Logo and Text */}
    <div className="relative z-10 flex flex-col justify-center h-full text-center text-indigo-800 space-y-4">
      {/* Logo */}
      <div className="flex justify-center items-center mb-4">
        <Image src={"/logo.png"} className='w-72 h-72 transition-transform duration-300 ease-in-out 'alt={''} width={150}height={150}/>
      </div>
  
    </div>
  </motion.div>
</div>
  </div>
  </div>
  )
}

export default Hero