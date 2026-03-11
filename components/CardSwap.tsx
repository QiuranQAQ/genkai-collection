import React, { useRef } from 'react';
import { ProjectItem } from '../types';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CardSwapProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const CardStackItem: React.FC<{ 
  item: ProjectItem; 
  index: number; 
  total: number; 
  scrollYProgress: MotionValue<number>;
  onOpen: (item: ProjectItem) => void;
}> = ({ item, index, total, scrollYProgress, onOpen }) => {
  // Calculate range for this item
  const step = 1 / total;
  const start = index * step;
  
  // Transform scroll progress into a linear value 0..total
  const progress = useTransform(scrollYProgress, value => value * total);
  
  const scale = useTransform(progress, [index - 1, index, index + 1], [0.9, 1, 1.1]);
  const y = useTransform(progress, [index - 1, index, index + 0.5], [40, 0, -100]);
  const opacity = useTransform(progress, [index, index + 0.6], [1, 0]);
  const zIndex = total - index;
  
  // Enable pointer events only when roughly in focus to prevent clicking hidden items easily
  // Although z-index handles most, it's good UX.
  const pointerEvents = useTransform(progress, [index - 0.5, index + 0.5], ['auto', 'none']);

  return (
    <motion.div 
      style={{ scale, y, opacity, zIndex }}
      className="absolute w-full max-w-lg aspect-[4/3] bg-[#EBE8E1] p-2 shadow-2xl origin-bottom cursor-pointer group"
      onClick={() => onOpen(item)}
    >
      <div className="w-full h-full relative overflow-hidden bg-white">
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Shine/Reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none"></div>
        
        {/* View Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
             <div className="bg-white/90 backdrop-blur text-primary px-4 py-2 text-xs tracking-widest uppercase rounded-full font-serif">
                 View Project
             </div>
        </div>
      </div>
    </motion.div>
  );
};

const TextItem: React.FC<{
  item: ProjectItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}> = ({ item, index, total, scrollYProgress }) => {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;
  const fadePadding = step * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + fadePadding, end - fadePadding, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [start, start + fadePadding, end],
    [20, 0, -20]
  );

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pointer-events-none"
    >
      <div className="text-accent mb-4 text-xs tracking-[0.2em] uppercase font-bold font-serif">
        {item.client ? `Client: ${item.client}` : 'Motion Graphic'}
      </div>
      <h3 className="text-3xl md:text-5xl font-display text-primary mb-6 leading-tight">
        {item.title}
      </h3>
      <div className="w-12 h-px bg-primary/20 mb-6"></div>
      <p className="text-secondary font-serif text-base md:text-lg leading-relaxed max-w-md">
        {item.description}
      </p>
      <div className="mt-12 text-primary/10 font-display text-8xl absolute -bottom-10 -right-10 select-none z-[-1]">
        0{index + 1}
      </div>
    </motion.div>
  );
}

const CardSwap: React.FC<CardSwapProps> = ({ items, onOpenProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Increase height multiplier to make scroll slower/smoother
    <div ref={containerRef} style={{ height: `${items.length * 100}vh` }} className="relative">
      
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-12 md:gap-24">
        
        {/* Left Column: Image Stack */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[60vh] relative flex items-center justify-center">
            {items.map((item, index) => (
              <CardStackItem 
                key={item.id}
                item={item}
                index={index}
                total={items.length}
                scrollYProgress={scrollYProgress}
                onOpen={onOpenProject}
              />
            ))}
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative">
           {items.map((item, index) => (
              <TextItem
                key={`text-${item.id}`}
                item={item}
                index={index}
                total={items.length}
                scrollYProgress={scrollYProgress}
              />
           ))}
        </div>

      </div>
    </div>
  );
};

export default CardSwap;