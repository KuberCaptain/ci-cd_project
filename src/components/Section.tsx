import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  bgImage?: string;
}

export default function Section({ id, icon, title, description, children, bgImage }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 relative">
      {bgImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 rounded-xl" />
        </>
      )}
      <div className="relative">
        <div className="flex items-center gap-4 mb-8">
          {icon}
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}