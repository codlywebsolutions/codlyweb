import Image from 'next/image'
import React from 'react'
  
const About = () => {
  
  return (
    <div>
     <section className="relative isolate overflow-hidden  text-black py-28 md:py-36">
  <div className="absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden="true">
    <div className="w-full h-full bg-gradient-to-tr "></div>
  </div>

  <div className="container mx-auto px-6 md:px-10 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
      Empowering Digital Innovation with <span className="bg-gradient-to-r text-white bg-clip-text ">Codly</span>
    </h1>
    <p className="text-lg md:text-2xl max-w-3xl mx-auto text-white leading-relaxed">
      We architect powerful, scalable web solutions that drive business growth. 
      At Codly, creativity and cutting-edge technology converge to deliver outstanding digital experiences.
    </p>
   
  </div>
</section>

  {/* Our Story Section */}
  <section className="py-16 md:py-24 text-white">
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Story</h2>
      <p className="text-white text-center mx-auto md:max-w-2xl mb-16">
        From humble beginnings to industry leaders, our journey reflects our passion for web excellence.
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/workspace.jpg" 
              alt="Codly team working together" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <h3 className="text-2xl font-bold text-white mb-4">How It All Started</h3>
          <p className="text-gray-700 mb-4">
            Founded in 2024, Codly began with a simple mission: to make powerful web technology accessible to businesses of all sizes. Our founders, tech enthusiasts with decades of combined experience, recognized that many businesses struggled to find reliable development partners who truly understood their needs.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small team of passionate developers has grown into a full-service web solutions company with clients across multiple industries. Throughout our growth, we&lsquo;ve maintained our commitment to quality, innovation, and exceptional client service.
          </p>
          <p className="text-gray-700">
            Today, Codly is proud to be a leader in developing custom web applications, responsive websites, and innovative digital solutions that drive real business results.
          </p>
        </div>
      </div>
    </div>
  </section>
  
</div>
  )
}

export default About