"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/hero/hero";
import Works from "@/components/works/works";
import Features from "@/components/features/features";
import Testimonial from "@/components/testimonials/testimonial";
import Contact from "@/components/Contact/contact";
import About from "@/components/About/About";
// Define our navigation items
type NavItem = {
  name: string;
  href: string;
};


export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Hero />
        <About/>
        <Features/>
       <Works/>
     <Testimonial/>
    <Contact/>
    </div>
  );
}
