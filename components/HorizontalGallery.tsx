import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '../types';

interface HorizontalGalleryProps {
  items: ProjectItem[];
  onOpenProject: (item: ProjectItem) => void;
}

const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ items, onOpenProject }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll range to horizontal translation
  // We want the list to move from 0 to -totalWidth
  // This value needs tuning based on number of items. 
  // Let's assume approx 500px width per card + gaps.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-paper-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-16 px-16 items-center"
        >
          {items.map((item, index) => (
            <div 
              key={item.id}
              className="group relative h-[60vh] w-[80vw] md:w-[40vw] shrink-0 bg-white rounded-sm shadow-md cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
              onClick={() => onOpenProject(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <p className="text-white/70 text-xs tracking-widest uppercase mb-2 font-serif">{item.client || 'PROJECT'}</p>
                 <h3 className="text-white font-display text-3xl mb-2">{item.title}</h3>
                 <p className="text-white/80 font-serif text-sm max-w-sm line-clamp-2">{item.description}</p>
                 
                 <div className="absolute top-6 right-6 bg-white/10 backdrop-blur border border-white/20 text-white px-3 py-1 text-xs uppercase tracking-widest font-serif">
                    View
                 </div>
              </div>
              
              {/* Number Index Background */}
              <div className="absolute -top-6 -left-6 text-9xl font-display text-black/5 pointer-events-none z-10">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </div>
          ))}
          {/* Filler div to ensure scrolling reaches end pleasantly */}
          <div className="w-[10vw] shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;