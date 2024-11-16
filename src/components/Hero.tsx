import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      
      <div className="relative text-center px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          <div className="space-y-4 md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ariel Epov
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Cybersecurity & Systems Expert
            </p>
          </div>
          
          <img
            src="https://i.ibb.co/3By8VbH/111.jpg"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/20 object-cover order-first md:order-last"
          />
        </div>

        <p className="max-w-2xl mx-auto text-gray-300">
          Dedicated cybersecurity professional with extensive experience in systems administration
          and network security. Specialized in implementing robust security measures and
          maintaining critical infrastructure.
        </p>

        <a
          href="#systems"
          className="inline-block animate-bounce mt-8"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </div>
    </div>
  );
}