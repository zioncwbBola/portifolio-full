// // // // src/app/page.tsx
// // // 'use client';
// // // import { SetStateAction, useState } from 'react';
// // // import Link from 'next/link';
// // // ;
// // // import Footer from '@/components/Footer';
// // // import Main from '@/components/Main';
// // // import Sidebar from '@/components/Sidebar';
// // // const lightPalette = {
// // //     primary: '#D94350',
// // //     secondary: '#F26DB6',
// // //     accent: '#8D41BF',
// // //     background: '#4B9EBF',
// // //     darkBackground: '#164773',
// // //   };
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   const darkPalette = {
// // //     primary: '#79F2E6',
// // //     secondary: '#63CAF2',
// // //     accent: '#AFD9AD',
// // //     background: '#0B1C26',
// // //     darkBackground: '#184059',
// // //   };
// // // const currentPalette = darkMode ? darkPalette : lightPalette;

// // // export default function HomePage() {
// // //   return (
// // //     <div className={`relative flex flex-col w-full min-h-screen ${ darkMode ? 'bg-[#0B1C26] text-white' : 'bg-[#4B9EBF] text-gray-900' } transition-all font-sans`} >
// // //       <Sidebar />
// // //       <Main />
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // src/app/page.tsx
// // "use client";
// // import { useState } from "react";
// // import Footer from "@/components/Footer";
// // import Main from "@/components/Main";
// // import Sidebar from "@/components/Sidebar";
// // import ThemeToggleButton from "@/components/ThemeToggleButton";

// // export default function HomePage() {
// //   const [darkMode, setDarkMode] = useState(false);

// //   const handleToggleTheme = () => setDarkMode(!darkMode);

// //   return (
// //     <div className={`relative flex flex-col w-full min-h-screen ${darkMode ? 'dark' : ''}`}>
// //       <Sidebar />
// //       <Main />
// //       <Footer />
// //       <ThemeToggleButton darkMode={darkMode} onToggle={handleToggleTheme} />
// //     </div>
// //   );
// // }
// // src/app/page.tsx
// "use client";
// import { useState, useEffect } from "react";
// import Footer from "@/components/Footer";
// import Main from "@/components/Main";
// import Sidebar from "@/components/Sidebar";
// import ThemeToggleButton from "@/components/ThemeToggleButton";

// export default function HomePage() {
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") === "dark";
//     }
//     return false;
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const handleToggleTheme = () => setDarkMode(!darkMode);

//   return (
//     <div className={`relative flex flex-col w-full min-h-screen`}>
//       <Sidebar />
//       <Main />
//       <Footer />
//       <ThemeToggleButton darkMode={darkMode} onToggle={handleToggleTheme} />
//     </div>
//   );
// }
// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleToggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`relative flex flex-col w-full min-h-screen`}>
      <Sidebar />
      <Main />
      <Footer />
      <ThemeToggleButton darkMode={darkMode} onToggle={handleToggleTheme} />
    </div>
  );
}