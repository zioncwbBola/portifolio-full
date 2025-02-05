// 'use client';
// import { SetStateAction, useState } from 'react';
// import Link from 'next/link';
// import { BsFacebook } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';
// import { IoMoon, IoSunny } from 'react-icons/io5';
// import Image from 'next/image';

// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   // Estado para alternar entre as abas
//   const [activeTab, setActiveTab] = useState('sobre');  // 'sobre', 'projetos', 'contato'

//   // Definindo as cores das paletas
//   const lightPalette = {
//     primary: '#D94350',
//     secondary: '#F26DB6',
//     accent: '#8D41BF',
//     background: '#4B9EBF',
//     darkBackground: '#164773'
//   };

//   const darkPalette = {
//     primary: '#79F2E6',
//     secondary: '#63CAF2',
//     accent: '#AFD9AD',
//     background: '#0B1C26',
//     darkBackground: '#184059'
//   };

//   const currentPalette = darkMode ? darkPalette : lightPalette;

//   // Função para mudar a aba ativa
//   const handleTabClick = (tab: SetStateAction<string>) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-[#0B1C26] text-white' : 'bg-[#4B9EBF] text-gray-900'} transition-all font-sans`}>
//       {/* Navbar / Sidebar */}
//       <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
//         {/* Avatar */}
//         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
//           <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
//         </div>

//         {/* Menu Social */}
//         <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
//           <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition" title="Facebook" /></Link>
//           <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition" title="GitHub" /></Link>
//         </div>

//         {/* Alternar Tema */}
//         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
//           {darkMode ? <IoSunny className="hover:text-[#F26DB6] transition" /> : <IoMoon className="hover:text-[#D94350] transition" />}
//         </button>
//       </div>
//       {/* Informações do Perfil */}
//         {showProfile && (
//         <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
//           <h3 className="text-xl font-semibold">Perfil</h3>
//           <p className="mt-2">Aqui estão as informações do perfil.</p>
//           <button className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]">Fechar</button>
//         </div>
//       )}

//       {/* Main */}
//       <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-lg rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center flex-start mx-auto border border-[#8D41BF]">
//         {/* Navbar estilo abas */}
//         <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
//           <button
//             className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 ${activeTab === 'sobre' ? 'border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
//             onClick={() => handleTabClick('sobre')}
//           >
//             Sobre
//           </button>
//           <button
//             className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${activeTab === 'projetos' ? 'border-b-4 border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
//             onClick={() => handleTabClick('projetos')}
//           >
//             Projetos
//           </button>
//           <button
//             className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${activeTab === 'contato' ? 'border-b-4 border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
//             onClick={() => handleTabClick('contato')}
//           >
//             Contato
//           </button>
//         </div>

//         {/* Conteúdo */}
//         <div className="text-center text-sm md:text-base max-w-xl md:max-w-2xl">
//           {activeTab === 'sobre' && <p className="text-gray-700 dark:text-gray-300">Aqui você pode colocar informações sobre você.</p>}
//           {activeTab === 'projetos' && <p className="text-gray-700 dark:text-gray-300">Aqui será exibido seus projetos.</p>}
//           {activeTab === 'contato' && <p className="text-gray-700 dark:text-gray-300">Aqui você pode colocar as formas de contato.</p>}
//         </div>
//       </div>

//       {/* Rodapé */}
//       <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t border-[#8D41BF] mt-4 md:mt-6">
//         &copy; 2025 Comunidade Cristã Caminho da Vida
//       </footer>
//     </div>
//   );
// }

'use client';
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Image from 'next/image';
import SobreContent from '@/components/About';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Estado para alternar entre as abas
  const [activeTab, setActiveTab] = useState('sobre');  // 'sobre', 'projetos', 'contato'

  // Definindo as cores das paletas
  const lightPalette = {
    primary: '#D94350',
    secondary: '#F26DB6',
    accent: '#8D41BF',
    background: '#4B9EBF',
    darkBackground: '#164773'
  };

  const darkPalette = {
    primary: '#79F2E6',
    secondary: '#63CAF2',
    accent: '#AFD9AD',
    background: '#0B1C26',
    darkBackground: '#184059'
  };

  const currentPalette = darkMode ? darkPalette : lightPalette;

  // Função para mudar a aba ativa
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-[#0B1C26] text-white' : 'bg-[#4B9EBF] text-gray-900'} transition-all font-sans`}>
      {/* Navbar / Sidebar */}
      <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
        {/* Avatar */}
        <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
          <Image src="/logo01.png" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
        </div>

        {/* Menu Social */}
        <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
          <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition" title="Facebook" /></Link>
          <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition" title="GitHub" /></Link>
        </div>

        {/* Alternar Tema */}
        <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
          {darkMode ? <IoSunny className="hover:text-[#F26DB6] transition" /> : <IoMoon className="hover:text-[#D94350] transition" />}
        </button>
      </div>
      {/* Informações do Perfil */}
        {showProfile && (
        <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Perfil</h3>
          <p className="mt-2">Aqui estão as informações do perfil.</p>
          <button className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]">Fechar</button>
        </div>
      )}

      {/* Main */}
      <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-lg rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center flex-start mx-auto border border-[#8D41BF]">
        {/* Navbar estilo abas */}
        <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
          <button
            className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 ${activeTab === 'sobre' ? 'border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
            onClick={() => handleTabClick('sobre')}
          >
            Sobre
          </button>
          <button
            className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${activeTab === 'projetos' ? 'border-b-4 border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
            onClick={() => handleTabClick('projetos')}
          >
            Projetos
          </button>
          <button
            className={`px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold ${activeTab === 'contato' ? 'border-b-4 border-[#D94350] text-[#D94350]' : 'text-gray-600 dark:text-gray-300'} hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition`}
            onClick={() => handleTabClick('contato')}
          >
            Contato
          </button>
        </div>

        {/* Conteúdo */}
        <div className="w-[90%] text-center text-sm md:text-base max-w-[90%] md:max-w-[90%]">
          {activeTab === 'sobre' && <SobreContent />}
          {activeTab === 'projetos' && <p className="text-gray-700 dark:text-gray-300">Aqui será exibido seus projetos.</p>}
          {activeTab === 'contato' && <p className="text-gray-700 dark:text-gray-300">Aqui você pode colocar as formas de contato.</p>}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t border-[#8D41BF] mt-4 md:mt-6">
        &copy; 2025 Comunidade Cristã Caminho da Vida
      </footer>
    </div>
  );
}
