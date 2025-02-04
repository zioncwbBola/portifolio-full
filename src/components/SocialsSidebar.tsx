import React from 'react';
import Link from 'next/link';

const SocialsSidebar: React.FC = () => {
  return (
    <div className="socials-sidebar">
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" alt="Facebook" className="social-icon" />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.svg" alt="Twitter" className="social-icon" />
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" alt="Instagram" className="social-icon" />
      </Link>
      {/* Adicione mais ícones conforme necessário */}
    </div>
  );
};

export default SocialsSidebar;
