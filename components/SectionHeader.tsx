import React from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  number: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, number }) => {
  return (
    <AnimatedSection className="mb-16 md:mb-24 px-6 md:px-12 flex flex-col md:flex-row items-baseline justify-between border-b border-primary/10 pb-4">
        <div className="flex items-baseline gap-4">
            <span className="text-accent font-display text-xl md:text-2xl opacity-80">{number}</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-widest text-primary">{title}</h2>
        </div>
        {subtitle && <span className="mt-2 md:mt-0 text-secondary font-serif text-base md:text-lg tracking-wide">{subtitle}</span>}
    </AnimatedSection>
  );
};

export default SectionHeader;