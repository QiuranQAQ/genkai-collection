import React from 'react';
import { ProjectItem } from '../types';
import AnimatedSection from './AnimatedSection';

interface MasonryGridProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items, onOpenProject }) => {
  return (
    <div className="px-6 md:px-12 pb-24">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {items.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1} className="break-inside-avoid mb-8 group cursor-pointer">
            {/* Removed bg-white and padding for borderless look */}
            <div 
              className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-xl duration-500 rounded-sm"
              onClick={() => onOpenProject(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              
              {/* Overlay: Warm White with Black Text */}
              <div className="absolute inset-0 bg-[#F5F2EB]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                <p className="text-accent text-xs tracking-widest uppercase mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 font-serif">{item.client || 'Personal'}</p>
                <h3 className="text-xl font-display text-primary mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.title}</h3>
                <div className="w-8 h-px bg-primary/20 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-150"></div>
                <p className="text-sm text-secondary font-serif max-w-[200px] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200 leading-relaxed">{item.description}</p>
                <span className="mt-6 text-[10px] uppercase tracking-widest border border-primary/20 px-3 py-1 hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-300 font-serif">View Project</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;