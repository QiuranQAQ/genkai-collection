import React, { useState } from 'react';
import Hero from './components/Hero';
import ShowreelSection from './components/ShowreelSection';
import SectionHeader from './components/SectionHeader';
import MasonryGrid from './components/MasonryGrid';
import HorizontalGallery from './components/HorizontalGallery';
import TiltedCardGrid from './components/TiltedCardGrid';
import FlowingMenu from './components/FlowingMenu';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PORTFOLIO_DATA } from './constants';
import { ProjectCategory, ProjectItem } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter Data
  const data2D = PORTFOLIO_DATA.filter(item => item.category === ProjectCategory.TwoD);
  const dataMG = PORTFOLIO_DATA.filter(item => item.category === ProjectCategory.MG);
  
  // Combine 2D and MG
  const visualMotionData = [...data2D, ...dataMG];

  const data3D = PORTFOLIO_DATA.filter(item => item.category === ProjectCategory.ThreeD);
  const dataWeb = PORTFOLIO_DATA.filter(item => item.category === ProjectCategory.Web);
  const dataPractice = PORTFOLIO_DATA.filter(item => item.category === ProjectCategory.Practice);

  const handleOpenProject = (item: ProjectItem) => {
    setSelectedProject(item);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-paper min-h-screen text-primary selection:bg-primary selection:text-paper">
      
      {/* Navigation / Logo (Minimal) */}
      <div className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-40 pointer-events-none text-primary mix-blend-multiply">
        {/* Changed GENKAI to 界線突破 */}
        <div className="font-display font-bold text-xl tracking-widest pointer-events-auto">界線突破</div>
        {/* Removed Year */}
        <div className="text-xs font-mono opacity-60 hidden md:block">PORTFOLIO</div>
      </div>

      <Hero />

      <ShowreelSection />

      <main className="relative z-10 bg-paper">
        
        {/* Combined 2D & MG Section - Horizontal Scroll */}
        <section className="bg-paper-dark">
          {/* Header sits above the sticky container */}
          <div className="pt-20 pb-10">
             <SectionHeader title="2D Project" subtitle="MotionGraphics & Animation" number="01" />
          </div>
          <HorizontalGallery items={visualMotionData} onOpenProject={handleOpenProject} />
        </section>

        {/* 3D Section - Flowing Menu */}
        <section className="py-20">
          <SectionHeader title="3D Project" subtitle="Realistic & Stylized Rendering" number="02" />
          <FlowingMenu items={data3D} onOpenProject={handleOpenProject} />
        </section>

        {/* Web Motion Section - Tilted Cards */}
        <section className="py-20 bg-paper-dark overflow-hidden">
          <SectionHeader title="Web Motion Design" subtitle="Interactive Interfaces" number="03" />
          <TiltedCardGrid items={dataWeb} onOpenProject={handleOpenProject} />
        </section>

        {/* Practice Section - Masonry */}
        <section className="py-20">
          <SectionHeader title="Playground" subtitle="Personal works & Practice" number="04" />
          <MasonryGrid items={dataPractice} onOpenProject={handleOpenProject} />
        </section>

      </main>

      <Footer />

      {/* Details Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </div>
  );
};

export default App;