import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper/90 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 text-primary hover:text-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-5xl h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              
              {/* Media Header (Video or Main Image) */}
              <div className="w-full bg-black relative">
                {project.videoUrl ? (
                   <video 
                     src={project.videoUrl} 
                     controls 
                     autoPlay 
                     loop 
                     className="w-full max-h-[70vh] object-contain mx-auto"
                   />
                ) : (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  />
                )}
              </div>

              {/* Info Content */}
              <div className="p-8 md:p-16 max-w-4xl mx-auto w-full">
                
                <div className="mb-12 border-b border-primary/10 pb-8 text-center md:text-left">
                  <span className="text-accent text-xs tracking-[0.2em] uppercase font-bold block mb-3 font-serif">
                    {project.client ? project.client : 'Personal Project'} — {project.year}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display text-primary mb-6 leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-secondary font-serif text-lg leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Long Description / Details */}
                 <div className="prose prose-stone prose-lg max-w-none font-serif text-secondary mb-16 whitespace-pre-line">
                    <p>
                      {project.longDescription || project.description}
                    </p>
                 </div>

                {/* Detail Videos (Gallery) */}
                {project.videoUrls && project.videoUrls.length > 0 && (
                  <div className="flex flex-col w-full">
                    {project.videoUrls.map((vid, idx) => (
                      <div key={`vid-${idx}`} className="w-full">
                        <video 
                          src={vid}
                          controls
                          loop
                          className="w-full h-auto block"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Detail Images (Gallery) */}
                {project.detailImages && project.detailImages.length > 0 && (
                  <div className="flex flex-col w-full">
                    {project.detailImages.map((img, idx) => (
                      <div key={idx} className="w-full">
                        <img 
                          src={img}
                          alt={`${project.title} Detail ${idx + 1}`}
                          className="w-full h-auto block"
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;