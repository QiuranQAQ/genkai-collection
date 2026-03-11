import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface FlowingMenuProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items, onOpenProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen px-6 md:px-12 py-24 flex flex-col justify-center">
      
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredId && (
            <motion.div
              key={hoveredId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }} // Subtle opacity so text remains readable
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={items.find(i => i.id === hoveredId)?.imageUrl} 
                className="w-full h-full object-cover grayscale" // Grayscale for minimalist feel
                alt="Background"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Menu List */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {items.map((item, index) => (
          <div 
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onOpenProject(item)}
            className="group py-8 md:py-12 border-t border-primary/10 first:border-t-0 cursor-pointer flex flex-col md:flex-row items-baseline justify-between transition-all duration-300 hover:pl-4"
          >
             {/* Left: Title & Index */}
            <div className="flex items-baseline gap-6 md:gap-12">
                <span className="text-sm font-display text-primary/30 group-hover:text-accent transition-colors">0{index + 1}</span>
                <h3 className="text-2xl md:text-5xl font-display text-primary/40 group-hover:text-primary transition-colors duration-500 ease-out whitespace-nowrap">
                    {item.title.toUpperCase()}
                </h3>
            </div>

            {/* Right: Info extraction */}
            <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                <div className="flex flex-col items-end text-right">
                    <span className="text-accent text-xs tracking-widest uppercase mb-2 font-serif">Product Render</span>
                    <span className="text-lg md:text-xl font-serif text-primary mb-1">{item.client || 'Personal Project'}</span>
                    <span className="text-secondary text-xs md:text-sm max-w-xs leading-relaxed font-serif">{item.description}</span>
                    <span className="mt-2 text-[10px] uppercase border-b border-primary/50 font-serif">Details</span>
                </div>
            </div>
          </div>
        ))}
         <div className="border-t border-primary/10 w-full"></div>
      </div>
    </div>
  );
};

export default FlowingMenu;