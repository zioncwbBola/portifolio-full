// // src/components/Sidebar.tsx
// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { BsFacebook } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';
// import { IoMoon, IoSunny } from 'react-icons/io5';
// import { FaLinkedin } from 'react-icons/fa6';

// const Sidebar = () => {
//   const [showProfile, setShowProfile] = useState(false);

  

  

//   return(
//       <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
//         {/* Avatar */}
//         <div
//           className="relative cursor-pointer"
//           onClick={() => setShowProfile(!showProfile)}
//         >
//           <Image
//             src="/logo01.png"
//             alt="Avatar"
//             width={40}
//             height={40}
//             className="rounded-full border-2 border-gray-400 hover:scale-110 transition"
//           />
//         </div>

//         {/* Menu Social */}
//         <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
//           <Link href={'/'}>
//             <BsFacebook
//               className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition"
//               title="Facebook"
//             />
//           </Link>
//           <Link href={'https://github.com/zioncwbBola'}>
//             <FaGithub
//               className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition"
//               title="GitHub"
//             />
//           </Link>
//           <Link href={'https://www.linkedin.com/in/andrelopez33/'}>
//             <FaLinkedin
//               className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition"
//               title="Linkedin"
//             />
//           </Link>
//         </div>

//         {/* Alternar Tema */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-white text-2xl md:text-3xl"
//         >
//           {darkMode ? (
//             <IoSunny className="hover:text-[#F26DB6] transition" />
//           ) : (
//             <IoMoon className="hover:text-[#D94350] transition" />
//           )}
//         </button>
//       </div>
      
//       {showProfile && (
//         <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
//           <h3 className="text-xl font-semibold">Perfil</h3>
//           <p className="mt-2">Aqui estão as informações do perfil.</p>
//           <button
//             onClick={() => setShowProfile(!showProfile)}
//             className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]"
//           >
//             Fechar
//           </button>
//         </div>
//       )}
//   )
// };
// export default Sidebar;
// src/components/Sidebar.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa6';

const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
      {/* Avatar */}
      <div
        className="relative cursor-pointer"
        onClick={() => setShowProfile(!showProfile)}
      >
        <Image
          src="/logo01.png"
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full border-2 border-gray-400 hover:scale-110 transition"
        />
      </div>

      {/* Menu Social */}
      <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
        <Link href={'/'}>
          <BsFacebook
            className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition"
            title="Facebook"
          />
        </Link>
        <Link href={'https://github.com/zioncwbBola'}>
          <FaGithub
            className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition"
            title="GitHub"
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/andrelopez33/'}>
          <FaLinkedin
            className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition"
            title="Linkedin"
          />
        </Link>
      </div>

      {/* Alternar Tema */}
      <button
        onClick={toggleTheme}
        className="text-white text-2xl md:text-3xl"
      >
        {darkMode ? (
          <IoSunny className="hover:text-[#F26DB6] transition" />
        ) : (
          <IoMoon className="hover:text-[#D94350] transition" />
        )}
      </button>

      {showProfile && (
        <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
          <h3 className="text-xl font-semibold">Perfil</h3>
          <p className="mt-2">Aqui estão as informações do perfil.</p>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
