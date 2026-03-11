import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ProjectItem } from '../types';

interface TiltedCardGridProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const TiltedCard: React.FC<{ item: ProjectItem; onOpen: () => void }> = ({ item, onOpen }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full cursor-pointer rounded-xl bg-paper-dark"
      onClick={onOpen}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Content Container */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-4 overflow-hidden rounded-lg shadow-2xl bg-white"
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12 text-white">
            <p className="text-xs uppercase tracking-[0.2em] mb-1 opacity-80 font-serif">Web Motion</p>
            <h3 className="font-display text-2xl">{item.title}</h3>
        </div>
      </div>
      
      {/* Floating Decorative Element */}
      <motion.div 
         style={{ transform: "translateZ(80px)" }}
         className="absolute top-8 right-8 bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-serif italic text-lg shadow-lg"
      >
         →
      </motion.div>
    </motion.div>
  );
};

const TiltedCardGrid: React.FC<TiltedCardGridProps> = ({ items, onOpenProject }) => {
  return (
    <div className="px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 perspective-container">
            {items.map((item) => (
                <div key={item.id} className="flex justify-center">
                    <TiltedCard item={item} onOpen={() => onOpenProject(item)} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default TiltedCardGrid;