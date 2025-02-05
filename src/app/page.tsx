// // // // // // // import Link from "next/link";
// // // // // // // import { BsFacebook } from "react-icons/bs";
// // // // // // // import { FaGithub } from "react-icons/fa";

// // // // // // // export default function Home() {
  
// // // // // // //   return (
// // // // // // //     <div className="relative flex flex-row w-full h-[100vh] min-w-screen bg-black">

// // // // // // //       <div className="flex flex-col w-5 h-full min-w-[5%] min-h-screen ">
// // // // // // //         <div className="flex flex-row justify-center items-center h-full w-full">
// // // // // // //           <div className="flex flex-col justify-center items-center w-[50%] h-[30%] bg-white rounded-full">
// // // // // // //               <Link href={'/'} ><BsFacebook className="text-3xl p-3"/></Link>
// // // // // // //               <Link href={'/'} ><FaGithub className="text-3xl p-3"/></Link>              
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //       <div className="flex flex-col w-70 h-full min-w-[70%] min-h-screen bg-orange-500">

// // // // // // //       </div>
      
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }
// // // // // // 'use client'
// // // // // // // import { useState } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { BsFacebook } from 'react-icons/bs';
// // // // // // // import { FaGithub } from 'react-icons/fa';
// // // // // // // import { IoMoon, IoSunny } from 'react-icons/io5';
// // // // // // // import Image from 'next/image';

// // // // // // // export default function HomePage() {
// // // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // // //   const [showProfile, setShowProfile] = useState(false);

// // // // // // //   return (
// // // // // // //     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-all`}>
// // // // // // //       {/* Menu lateral */}
// // // // // // //       <div className="absolute top-0 left-0 flex flex-col items-center w-20 min-h-screen bg-gray-800 shadow-lg p-4 space-y-6">
// // // // // // //         {/* Avatar */}
// // // // // // //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// // // // // // //           <Image src="/avatar.jpg" alt="Avatar" width={50} height={50} className="rounded-full border-2 border-gray-300 hover:scale-110 transition" />
// // // // // // //         </div>

// // // // // // //         {/* Menu Social */}
// // // // // // //         <div className="flex flex-col space-y-4 items-center">
// // // // // // //           <Link href={'/'}><BsFacebook className="text-white text-3xl hover:text-blue-500 transition" title="Facebook" /></Link>
// // // // // // //           <Link href={'/'}><FaGithub className="text-white text-3xl hover:text-gray-400 transition" title="GitHub" /></Link>
// // // // // // //         </div>

// // // // // // //         {/* Alternar Tema */}
// // // // // // //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-3xl">
// // // // // // //           {darkMode ? <IoSunny className="hover:text-yellow-400 transition" /> : <IoMoon className="hover:text-gray-400 transition" />}
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Perfil Expandido */}
// // // // // // //       {showProfile && (
// // // // // // //         <div className="absolute left-20 top-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-64">
// // // // // // //           <Image src="/avatar.jpg" alt="Avatar" width={100} height={100} className="rounded-full mx-auto" />
// // // // // // //           <hr className="my-3 border-gray-300" />
// // // // // // //           <p className="text-center text-lg font-semibold">Seu Nome</p>
// // // // // // //           <p className="text-center text-sm text-gray-600 dark:text-gray-300">Desenvolvedor</p>
// // // // // // //           <hr className="my-3 border-gray-300" />
// // // // // // //           <p className="text-center">contato@email.com</p>
// // // // // // //           <p className="text-center">+55 11 99999-9999</p>
// // // // // // //           <hr className="my-3 border-gray-300" />
// // // // // // //           <div className="flex justify-center space-x-4">
// // // // // // //             <Link href={'/'}><BsFacebook className="text-blue-500 text-3xl" /></Link>
// // // // // // //             <Link href={'/'}><FaGithub className="text-gray-700 text-3xl" /></Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Main */}
// // // // // // //       <div className="ml-24 mt-6 mb-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[80%] min-h-[80vh]">
// // // // // // //         {/* Navbar estilo abas */}
// // // // // // //         <div className="flex space-x-4 border-b pb-2 mb-4">
// // // // // // //           <button className="px-4 py-2 text-lg font-semibold border-b-2 border-orange-500">Sobre</button>
// // // // // // //           <button className="px-4 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300">Projetos</button>
// // // // // // //           <button className="px-4 py-2 text-lg font-semibold text-gray-600 dark:text-gray-300">Contato</button>
// // // // // // //         </div>
// // // // // // //         {/* Conteúdo */}
// // // // // // //         <p className="text-gray-700 dark:text-gray-300">Aqui será exibido o seu conteúdo.</p>
// // // // // // //       </div>

// // // // // // //       {/* Rodapé */}
// // // // // // //       <footer className="w-full p-4 text-center text-gray-600 dark:text-gray-300 border-t">
// // // // // // //         &copy; 2025 Comunidade Cristã Caminho da Vida
// // // // // // //       </footer>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }


// // // // // // import { useState } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import { BsFacebook } from 'react-icons/bs';
// // // // // // import { FaGithub } from 'react-icons/fa';
// // // // // // import { IoMoon, IoSunny } from 'react-icons/io5';
// // // // // // import Image from 'next/image';

// // // // // // export default function HomePage() {
// // // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // // //   const [showProfile, setShowProfile] = useState(false);

// // // // // //   return (
// // // // // //     <div className={`relative flex flex-col items-center w-full min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-all font-sans`}>
// // // // // //       {/* Menu lateral */}
// // // // // //       <div className="absolute top-0 left-0 flex flex-col items-center w-24 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl p-6 space-y-6 rounded-r-xl">
// // // // // //         {/* Avatar */}
// // // // // //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// // // // // //           <Image src="/avatar.jpg" alt="Avatar" width={60} height={60} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
// // // // // //         </div>

// // // // // //         {/* Menu Social */}
// // // // // //         <div className="flex flex-col space-y-4 items-center">
// // // // // //           <Link href={'/'}><BsFacebook className="text-white text-3xl hover:text-blue-500 transition" title="Facebook" /></Link>
// // // // // //           <Link href={'/'}><FaGithub className="text-white text-3xl hover:text-gray-400 transition" title="GitHub" /></Link>
// // // // // //         </div>

// // // // // //         {/* Alternar Tema */}
// // // // // //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-3xl">
// // // // // //           {darkMode ? <IoSunny className="hover:text-yellow-400 transition" /> : <IoMoon className="hover:text-gray-400 transition" />}
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Perfil Expandido */}
// // // // // //       {showProfile && (
// // // // // //         <div className="absolute left-28 top-10 bg-gray-800 text-white p-6 rounded-lg shadow-xl w-72">
// // // // // //           <Image src="/avatar.jpg" alt="Avatar" width={100} height={100} className="rounded-full mx-auto border-2 border-gray-500" />
// // // // // //           <hr className="my-3 border-gray-600" />
// // // // // //           <p className="text-center text-lg font-semibold">Seu Nome</p>
// // // // // //           <p className="text-center text-sm text-gray-400">Desenvolvedor</p>
// // // // // //           <hr className="my-3 border-gray-600" />
// // // // // //           <p className="text-center">contato@email.com</p>
// // // // // //           <p className="text-center">+55 11 99999-9999</p>
// // // // // //           <hr className="my-3 border-gray-600" />
// // // // // //           <div className="flex justify-center space-x-4">
// // // // // //             <Link href={'/'}><BsFacebook className="text-blue-500 text-3xl" /></Link>
// // // // // //             <Link href={'/'}><FaGithub className="text-gray-400 text-3xl" /></Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Main */}
// // // // // //       <div className="mt-16 mb-6 p-8 bg-white dark:bg-gray-900 shadow-2xl rounded-xl w-[85%] min-h-[80vh] flex flex-col items-center justify-center">
// // // // // //         {/* Navbar estilo abas */}
// // // // // //         <div className="flex space-x-6 border-b pb-2 mb-6 w-full justify-center">
// // // // // //           <button className="px-6 py-3 text-lg font-semibold border-b-4 border-indigo-500 text-indigo-500">Sobre</button>
// // // // // //           <button className="px-6 py-3 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Projetos</button>
// // // // // //           <button className="px-6 py-3 text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Contato</button>
// // // // // //         </div>
// // // // // //         {/* Conteúdo */}
// // // // // //         <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e espaçado.</p>
// // // // // //       </div>

// // // // // //       {/* Rodapé */}
// // // // // //       <footer className="w-full p-6 text-center text-gray-600 dark:text-gray-400 border-t mt-6">
// // // // // //         &copy; 2025 Comunidade Cristã Caminho da Vida
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import { useState } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { BsFacebook } from 'react-icons/bs';
// // // // // import { FaGithub } from 'react-icons/fa';
// // // // // import { IoMoon, IoSunny } from 'react-icons/io5';
// // // // // import Image from 'next/image';

// // // // // export default function HomePage() {
// // // // //   const [darkMode, setDarkMode] = useState(false);
// // // // //   const [showProfile, setShowProfile] = useState(false);

// // // // //   return (
// // // // //     <div className={`relative flex flex-col items-center w-full min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-all font-sans`}>
// // // // //       {/* Menu lateral */}
// // // // //       <div className="fixed top-0 left-0 flex flex-col items-center w-20 md:w-24 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl p-4 md:p-6 space-y-6 rounded-r-xl">
// // // // //         {/* Avatar */}
// // // // //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// // // // //           <Image src="/avatar.jpg" alt="Avatar" width={50} height={50} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
// // // // //         </div>

// // // // //         {/* Menu Social */}
// // // // //         <div className="flex flex-col space-y-4 items-center">
// // // // //           <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-blue-500 transition" title="Facebook" /></Link>
// // // // //           <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-gray-400 transition" title="GitHub" /></Link>
// // // // //         </div>

// // // // //         {/* Alternar Tema */}
// // // // //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
// // // // //           {darkMode ? <IoSunny className="hover:text-yellow-400 transition" /> : <IoMoon className="hover:text-gray-400 transition" />}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Perfil Expandido */}
// // // // //       {showProfile && (
// // // // //         <div className="absolute left-24 top-10 bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-xl w-60 md:w-72">
// // // // //           <Image src="/avatar.jpg" alt="Avatar" width={80} height={80} className="rounded-full mx-auto border-2 border-gray-500" />
// // // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // // //           <p className="text-center text-sm md:text-lg font-semibold">Seu Nome</p>
// // // // //           <p className="text-center text-xs md:text-sm text-gray-400">Desenvolvedor</p>
// // // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // // //           <p className="text-center text-xs md:text-sm">contato@email.com</p>
// // // // //           <p className="text-center text-xs md:text-sm">+55 11 99999-9999</p>
// // // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // // //           <div className="flex justify-center space-x-4">
// // // // //             <Link href={'/'}><BsFacebook className="text-blue-500 text-2xl md:text-3xl" /></Link>
// // // // //             <Link href={'/'}><FaGithub className="text-gray-400 text-2xl md:text-3xl" /></Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Main */}
// // // // //       <div className="mt-16 mb-6 p-4 md:p-8 bg-white dark:bg-gray-900 shadow-2xl rounded-xl w-[90%] md:w-[85%] min-h-[80vh] flex flex-col items-center justify-center">
// // // // //         {/* Navbar estilo abas */}
// // // // //         <div className="flex flex-wrap space-x-2 md:space-x-6 border-b pb-2 mb-4 md:mb-6 w-full justify-center">
// // // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-b-4 border-indigo-500 text-indigo-500">Sobre</button>
// // // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Projetos</button>
// // // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Contato</button>
// // // // //         </div>
// // // // //         {/* Conteúdo */}
// // // // //         <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base max-w-xl md:max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e responsivo.</p>
// // // // //       </div>

// // // // //       {/* Rodapé */}
// // // // //       <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t mt-4 md:mt-6">
// // // // //         &copy; 2025 Comunidade Cristã Caminho da Vida
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // 'use client';
// // // // import { useState } from 'react';
// // // // import Link from 'next/link';
// // // // import { BsFacebook } from 'react-icons/bs';
// // // // import { FaGithub } from 'react-icons/fa';
// // // // import { IoMoon, IoSunny } from 'react-icons/io5';
// // // // import Image from 'next/image';

// // // // export default function HomePage() {
// // // //   const [darkMode, setDarkMode] = useState(false);
// // // //   const [showProfile, setShowProfile] = useState(false);

// // // //   return (
// // // //     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'} transition-all font-sans`}>
// // // //       {/* Navbar / Sidebar */}
// // // //       <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
// // // //         {/* Avatar */}
// // // //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// // // //           <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
// // // //         </div>

// // // //         {/* Menu Social */}
// // // //         <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
// // // //           <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-blue-500 transition" title="Facebook" /></Link>
// // // //           <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-gray-400 transition" title="GitHub" /></Link>
// // // //         </div>

// // // //         {/* Alternar Tema */}
// // // //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
// // // //           {darkMode ? <IoSunny className="hover:text-yellow-400 transition" /> : <IoMoon className="hover:text-gray-400 transition" />}
// // // //         </button>
// // // //       </div>

// // // //       {/* Perfil Expandido */}
// // // //       {showProfile && (
// // // //         <div className="absolute top-16 md:left-24 md:top-10 bg-gray-800 text-white p-4 md:p-6 rounded-lg shadow-xl w-60 md:w-72">
// // // //           <Image src="/avatar.jpg" alt="Avatar" width={80} height={80} className="rounded-full mx-auto border-2 border-gray-500" />
// // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // //           <p className="text-center text-sm md:text-lg font-semibold">Seu Nome</p>
// // // //           <p className="text-center text-xs md:text-sm text-gray-400">Desenvolvedor</p>
// // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // //           <p className="text-center text-xs md:text-sm">contato@email.com</p>
// // // //           <p className="text-center text-xs md:text-sm">+55 11 99999-9999</p>
// // // //           <hr className="my-2 md:my-3 border-gray-600" />
// // // //           <div className="flex justify-center space-x-4">
// // // //             <Link href={'/'}><BsFacebook className="text-blue-500 text-2xl md:text-3xl" /></Link>
// // // //             <Link href={'/'}><FaGithub className="text-gray-400 text-2xl md:text-3xl" /></Link>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Main */}
// // // //       <div className="mt-24 md:mt-16 mb-6 p-4 md:p-8 bg-white dark:bg-gray-900 shadow-2xl rounded-xl w-[95%] md:w-[85%] min-h-[80vh] flex flex-col items-center justify-center mx-auto">
// // // //         {/* Navbar estilo abas */}
// // // //         <div className="flex flex-wrap space-x-2 md:space-x-6 border-b pb-2 mb-4 md:mb-6 w-full justify-center">
// // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold border-b-4 border-indigo-500 text-indigo-500">Sobre</button>
// // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Projetos</button>
// // // //           <button className="px-3 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">Contato</button>
// // // //         </div>
// // // //         {/* Conteúdo */}
// // // //         <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base max-w-xl md:max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e responsivo.</p>
// // // //       </div>

// // // //       {/* Rodapé */}
// // // //       <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t mt-4 md:mt-6">
// // // //         &copy; 2025 Comunidade Cristã Caminho da Vida
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // }
// // // 'use client';
// // // import { useState } from 'react';
// // // import Link from 'next/link';
// // // import { BsFacebook } from 'react-icons/bs';
// // // import { FaGithub } from 'react-icons/fa';
// // // import { IoMoon, IoSunny } from 'react-icons/io5';
// // // import Image from 'next/image';

// // // export default function HomePage() {
// // //   const [darkMode, setDarkMode] = useState(false);
// // //   const [showProfile, setShowProfile] = useState(false);

// // //   return (
// // //     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-[#164773] text-white' : 'bg-[#4B9EBF] text-gray-900'} transition-all font-sans`}>
// // //       {/* Navbar / Sidebar */}
// // //       <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
// // //         {/* Avatar */}
// // //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// // //           <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
// // //         </div>

// // //         {/* Menu Social */}
// // //         <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
// // //           <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition" title="Facebook" /></Link>
// // //           <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition" title="GitHub" /></Link>
// // //         </div>

// // //         {/* Alternar Tema */}
// // //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
// // //           {darkMode ? <IoSunny className="hover:text-[#F26DB6] transition" /> : <IoMoon className="hover:text-[#D94350] transition" />}
// // //         </button>
// // //       </div>

// // //       {/* Main */}
// // //       <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-neon rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center justify-center mx-auto border border-[#8D41BF]">
// // //         {/* Navbar estilo abas */}
// // //         <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
// // //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 border-[#D94350] text-[#D94350]">Sobre</button>
// // //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#F26DB6] transition">Projetos</button>
// // //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#8D41BF] transition">Contato</button>
// // //         </div>
// // //         {/* Conteúdo */}
// // //         <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base max-w-xl md:max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e responsivo.</p>
// // //       </div>

// // //       {/* Rodapé */}
// // //       <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t border-[#8D41BF] mt-4 md:mt-6">
// // //         &copy; 2025 Comunidade Cristã Caminho da Vida
// // //       </footer>
// // //     </div>
// // //   );
// // // }
// // 'use client';
// // import { useState } from 'react';
// // import Link from 'next/link';
// // import { BsFacebook } from 'react-icons/bs';
// // import { FaGithub } from 'react-icons/fa';
// // import { IoMoon, IoSunny } from 'react-icons/io5';
// // import Image from 'next/image';

// // export default function HomePage() {
// //   const [darkMode, setDarkMode] = useState(false);
// //   const [showProfile, setShowProfile] = useState(false);

// //   return (
// //     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'bg-[#164773] text-white' : 'bg-[#4B9EBF] text-gray-900'} transition-all font-sans`}>
// //       {/* Navbar / Sidebar */}
// //       <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-[#8D41BF] to-[#D94350] shadow-neon p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
// //         {/* Avatar */}
// //         <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
// //           <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
// //         </div>

// //         {/* Menu Social */}
// //         <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
// //           <Link href={'/'}><BsFacebook className="text-white text-2xl md:text-3xl hover:text-[#F26DB6] transition" title="Facebook" /></Link>
// //           <Link href={'/'}><FaGithub className="text-white text-2xl md:text-3xl hover:text-[#8D41BF] transition" title="GitHub" /></Link>
// //         </div>

// //         {/* Alternar Tema */}
// //         <button onClick={() => setDarkMode(!darkMode)} className="text-white text-2xl md:text-3xl">
// //           {darkMode ? <IoSunny className="hover:text-[#F26DB6] transition" /> : <IoMoon className="hover:text-[#D94350] transition" />}
// //         </button>
// //       </div>

// //       {/* Informações do Perfil */}
// //       {showProfile && (
// //         <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
// //           <h3 className="text-xl font-semibold">Perfil</h3>
// //           <p className="mt-2">Aqui estão as informações do perfil.</p>
// //           <button className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]">Fechar</button>
// //         </div>
// //       )}

// //       {/* Main */}
// //       <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-neon rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center justify-center mx-auto border border-[#8D41BF]">
// //         {/* Navbar estilo abas */}
// //         <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
// //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 border-[#D94350] text-[#D94350]">Sobre</button>
// //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#F26DB6] transition">Projetos</button>
// //           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#8D41BF] transition">Contato</button>
// //         </div>
// //         {/* Conteúdo */}
// //         <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base max-w-xl md:max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e responsivo.</p>
// //       </div>

// //       {/* Rodapé */}
// //       <footer className="w-full p-4 md:p-6 text-center text-gray-600 dark:text-gray-400 border-t border-[#8D41BF] mt-4 md:mt-6">
// //         &copy; 2025 Comunidade Cristã Caminho da Vida
// //       </footer>
// //     </div>
// //   );
// // }
// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { BsFacebook } from 'react-icons/bs';
// import { FaGithub } from 'react-icons/fa';
// import { IoMoon, IoSunny } from 'react-icons/io5';
// import Image from 'next/image';

// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

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
//       {showProfile && (
//         <div className="absolute top-16 left-20 md:left-24 bg-white dark:bg-[#164773] p-6 rounded-lg shadow-lg w-64 text-center text-gray-800 dark:text-white">
//           <h3 className="text-xl font-semibold">Perfil</h3>
//           <p className="mt-2">Aqui estão as informações do perfil.</p>
//           <button className="mt-4 px-4 py-2 text-sm bg-[#D94350] text-white rounded-full hover:bg-[#F26DB6]">Fechar</button>
//         </div>
//       )}

//       {/* Main */}
//       <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-lg rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center justify-center mx-auto border border-[#8D41BF]">
//         {/* Navbar estilo abas */}
//         <div className="flex flex-wrap space-x-4 md:space-x-8 border-b border-[#F26DB6] pb-3 mb-5 md:mb-7 w-full justify-center">
//           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold border-b-4 border-[#D94350] text-[#D94350] hover:bg-gradient-to-r hover:from-[#D94350] hover:to-[#F26DB6] hover:text-white transition">{/* Hover Gradient */}Sobre</button>
//           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#F26DB6] transition">Projetos</button>
//           <button className="px-4 py-2 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 hover:text-[#8D41BF] transition">Contato</button>
//         </div>
//         {/* Conteúdo */}
//         <p className="text-gray-700 dark:text-gray-300 text-center text-sm md:text-base max-w-xl md:max-w-2xl">Aqui será exibido o seu conteúdo com um design mais refinado e responsivo.</p>
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
          <Image src="/avatar.jpg" alt="Avatar" width={40} height={40} className="rounded-full border-2 border-gray-400 hover:scale-110 transition" />
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
      <div className="mt-24 md:mt-16 mb-6 p-6 md:p-10 bg-opacity-90 bg-white dark:bg-[#164773] shadow-lg rounded-xl w-[90%] md:w-[80%] min-h-[80vh] flex flex-col items-center justify-center mx-auto border border-[#8D41BF]">
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
        <div className="text-center text-sm md:text-base max-w-xl md:max-w-2xl">
          {activeTab === 'sobre' && <p className="text-gray-700 dark:text-gray-300">Aqui você pode colocar informações sobre você.</p>}
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
