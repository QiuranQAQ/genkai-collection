import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="text-center z-10 max-w-5xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl mb-8 tracking-wider text-primary"
        >
          个人作品集<br className="md:hidden" /> 2019-2025
        </motion.h1>
        
        <div className="h-px w-16 bg-primary/20 mx-auto mb-10"></div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-base md:text-lg text-secondary leading-loose font-light tracking-wide"
        >
          一个什么都会一点的设计师。<br className="hidden md:block"/>
          有时热爱，有时废柴，想做的事很多，一直在进步中。
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: opacityText }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-secondary/60 ml-1">Scroll</span>
        <div className="w-[1px] h-16 bg-primary/10 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-primary/50 absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-paper"></div>
      
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] z-[-1] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default Hero;