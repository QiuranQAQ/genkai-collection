import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShowreelSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Placeholder URLs, you can replace these with your actual showreel video and cover image
  const coverImageUrl = "https://cloudpaste.156234.xyz/api/p/images/showvideo/Kaskade%20-%20One%20Heart-1.png?download=true&sign=yHF3MbCd7un6aYFybxPPTriAqEgqYeVShFHGxGIKh94%3D%3A0";
  const videoUrl = "https://cloudpaste.156234.xyz/api/p/images/showvideo/Kaskade%20-%20One%20Heart_.mp4?download=true&sign=y%2BhD6bPikImsgnUuVjKvPW25Dx0hCAL6EhXeUl9YpE8%3D%3A0";

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Cover Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 transition-opacity duration-700 hover:opacity-80 cursor-pointer"
        style={{ backgroundImage: `url('${coverImageUrl}')` }}
        onClick={() => setIsVideoOpen(true)}
      />

      {/* Play Button */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
        onClick={() => setIsVideoOpen(true)}
      >
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-white ml-2">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="mt-6 text-white font-display tracking-[0.3em] text-sm md:text-base uppercase opacity-80 group-hover:opacity-100 transition-opacity">
          Play Showreel
        </span>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-lg"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsVideoOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video px-4 md:px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full rounded-sm shadow-2xl bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ShowreelSection;
