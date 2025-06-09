"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-800/20"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(75, 85, 99, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(107, 114, 128, 0.1) 100%)",
              "linear-gradient(135deg, rgba(107, 114, 128, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(75, 85, 99, 0.1) 100%)",
              "linear-gradient(135deg, rgba(75, 85, 99, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(107, 114, 128, 0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Interactive mouse-following glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)"
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-500/30 rotate-45"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-400/30 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-gray-500/20 to-gray-400/20 rotate-12"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
               
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                  <motion.span 
                    className="block text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Build
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-gray-400 via-white to-gray-300 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    Smarter
                  </motion.span>
                  <motion.span 
                    className="block text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Scale
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: "200% 200%"
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    Faster
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                variants={itemVariants}
              >
                Transform your digital presence with cutting-edge web solutions that captivate, convert, and scale.{" "}
                <span className="text-white font-semibold">Codly</span> – where innovation meets excellence.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                variants={itemVariants}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white font-bold text-lg rounded-2xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <Link href={'/contact'} className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.button>

                <motion.button
                  className="group px-8 py-4 border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold text-lg rounded-2xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={"/work"} className="flex items-center gap-2">
                    View Portfolio
                    <motion.span
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </Link>
                </motion.button>
              </motion.div>
              
             
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Main Logo Container */}
              <motion.div
                className="relative w-80 h-80 flex items-center justify-center"
                variants={glowVariants}
                animate="animate"
              >
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-gray-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border border-gray-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-gray-300/10 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                {/* Central glow */}
                <motion.div
                  className="absolute inset-16 bg-gradient-to-r from-gray-500/20 to-gray-400/20 rounded-full filter blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Logo placeholder - replace with your actual logo */}
                <motion.div
                  className="relative z-10 w-32 h-32 bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center text-white font-black text-3xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.6)"
                  }}
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                 <Image src={"/logo2.png"} className='w-20 h-20  'alt={''}  width={100} height={100}/>
                  </div>
                </motion.div>

                {/* Orbiting elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-gray-400 to-white rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      originX: 0.5,
                      originY: 0.5,
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos((i * 60) * Math.PI / 180) * 120,
                      y: Math.sin((i * 60) * Math.PI / 180) * 120,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating cards */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-16 bg-gradient-to-r from-gray-600/80 to-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-500/30 flex items-center justify-center text-white text-xs font-bold"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [2, -2, 2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                SEO
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-16 bg-gradient-to-r from-gray-800/80 to-gray-600/80 backdrop-blur-sm rounded-lg border border-gray-400/30 flex items-center justify-center text-white text-xs font-bold"
                animate={{
                  y: [10, -10, 10],
                  rotate: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                WEB
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-500/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;