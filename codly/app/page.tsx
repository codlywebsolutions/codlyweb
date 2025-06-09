"use client";


import Hero from "@/components/hero/hero";
import Works from "@/components/works/works";
import Contact from "@/components/Contact/contact";
import About from "@/components/About/About";
import Services from "@/components/features/features";



export default function Home() {
  

  
  
  return (
    <div className="min-h-screen ">
        <Hero />
        <About/>
        <Services/>
       <Works/>
    <Contact/>
    </div>
  );
}
