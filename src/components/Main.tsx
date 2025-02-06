"use client";
import { useState } from "react";
import PortfolioContent from "@/components/PortfolioContent";
import SobreContent from "@/components/About";

const Main = () => {
  const [activeTab, setActiveTab] = useState("sobre");

  return (
    <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 glass-card w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center flex-start mx-auto">
      <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-primary pb-3 mb-5 md:mb-7 w-full justify-center">
        {["sobre", "projetos", "contato"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${
              activeTab === tab ? "bg-primary text-primary-content shadow-lg shadow-secondary " : "text-base-content"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-[90%] text-center text-sm md:text-base max-w-[90%] md:max-w-[90%]">
        {activeTab === "sobre" && <SobreContent />}
        {activeTab === "projetos" && <PortfolioContent />}
        {activeTab === "contato" && <p className="text-base-content">Formas de contato aqui.</p>}
      </div>
    </div>
  );
};

export default Main;
