import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 text-center border-t border-primary/5 bg-[#EBE8E1]">
      <h2 className="font-display text-4xl mb-6 text-primary">生活明朗 万物美丽 无限进步</h2>
      <a href="mailto:599906003@qq.com" className="text-secondary hover:text-accent transition-colors font-serif text-lg tracking-wide border-b border-secondary/30 pb-1 hover:border-accent">
        Contact Me
      </a>
      <p className="mt-12 text-primary/30 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Genkai Collection. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;