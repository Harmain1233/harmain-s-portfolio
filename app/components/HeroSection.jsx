"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="col-span-7 place self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello Im</span>
            <span className="block">
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Harmain',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </span>
            </h1>
            <p className="text-[#f6f6f6] text-base sm:text-lg mb-6 lg:text-xl">
             Hi, I’m Harmain—a recent Computer Science graduate from CUNY Brooklyn College.
            Scroll down to explore some of the projects and work I’ve been involved in!
            </p>
            <div>
            <Link href="/#contact" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me!</Link>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
            <a href="images/Harmain_Munir_Resume.pdf" download>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Download Resume
  </span>
</a>
</button>
            
            </div>
          </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >

          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[300px] h-[400px] lg:w-[400px] relative">
        <Image 
         src="/images/avatarimage-removebg-preview.png"
         alt="hero image"
         className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
         width={300}
         height={300}
        />

        </div>
       
          </div>
          </motion.div>

          </div>
      </section>
    );
  }
  
  export default HeroSection;
  
