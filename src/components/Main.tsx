// src/components/Main.tsx
'use client';
import { SetStateAction, useState } from 'react';
import PortfolioContent from '@/components/PortfolioContent'
import SobreContent from '@/components/About';

const Main = () => {
  const [activeTab, setActiveTab] = useState('sobre');
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-lg rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center flex-start mx-auto border border-[#8D41BF]">
      {/* Navbar estilo abas */}
      <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
        <button
          className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 ${
            activeTab === 'sobre'
              ? 'border-[#D94350] text-[#D94350]'
              : 'text-gray-600 dark:text-gray-300'
          } hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
          onClick={() => handleTabClick('sobre')}
        >
          Sobre
        </button>
        <button
          className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${
            activeTab === 'projetos'
              ? 'border-b-4 border-[#D94350] text-[#D94350]'
              : 'text-gray-600 dark:text-gray-300'
          } hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
          onClick={() => handleTabClick('projetos')}
        >
          Projetos
        </button>
        <button
          className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${
            activeTab === 'contato'
              ? 'border-b-4 border-[#D94350] text-[#D94350]'
              : 'text-gray-600 dark:text-gray-300'
          } hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
          onClick={() => handleTabClick('contato')}
        >
          Contato
        </button>
      </div>

      {/* Conteúdo */}
      <div className="w-[90%] text-center text-sm md:text-base max-w-[90%] md:max-w-[90%]">
        {activeTab === 'sobre' && <SobreContent />}
        {activeTab === 'projetos' && (
          <PortfolioContent />
        )}
        {activeTab === 'contato' && (
          <p className="text-gray-700 dark:text-gray-300">
            Aqui você pode colocar as formas de contato.
          </p>
        )}
      </div>
    </div>
  );
};
export default Main;
