import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
            <p className="text-gray-400">Open to new opportunities and collaborations</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/KuberCaptain/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 group-hover:animate-wiggle" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariel-epov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 group-hover:animate-wiggle" />
            </a>
            <a
              href="mailto:safenetcyberlock@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors group"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 group-hover:animate-wiggle" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}