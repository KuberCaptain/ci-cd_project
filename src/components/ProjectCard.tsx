import React, { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  tags: string[];
  metrics: string[];
}

export default function ProjectCard({ title, icon, description, tags, metrics }: ProjectCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm group">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-sm bg-gray-700/50 text-cyan-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <ul className="space-y-2 text-gray-400">
          {metrics.map((metric, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              {metric}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}