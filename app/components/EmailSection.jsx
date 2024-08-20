"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full text-white py-5 px-4"
    >
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h5 className="text-3xl font-bold mb-4 text-center">
          Let's Connect
        </h5>
        <p className="text-gray-400 mb-8 max-w-md text-center text-lg">
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-end gap-6 mt-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-4xl hover:text-gray-400 transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-4xl hover:text-gray-400 transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
