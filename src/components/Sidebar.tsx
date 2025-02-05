// // src/components/Sidebar.tsx
// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import { BsFacebook } from "react-icons/bs"
// import { FaGithub } from "react-icons/fa"
// import { IoMoon, IoSunny } from "react-icons/io5"
// import { FaLinkedin } from "react-icons/fa6"

// const Sidebar = () => {
//   const [showProfile, setShowProfile] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)

//   const toggleTheme = () => setDarkMode(!darkMode)

//   return (
//     <div className="flex md:flex-col fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-gradient-to-b from-primary to-secondary shadow-lg p-4 md:p-6 space-x-6 md:space-x-0 md:space-y-6 rounded-b-xl md:rounded-r-xl items-center justify-center md:items-start">
//       {/* Avatar */}
//       <div className="relative cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
//         <Image
//           src="/logo01.png"
//           alt="Avatar"
//           width={40}
//           height={40}
//           className="rounded-full border-2 border-gray-400 hover:scale-110 transition"
//         />
//       </div>

//       {/* Menu Social */}
//       <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 items-center">
//         <Link href={"/"}>
//           <BsFacebook className="text-white text-2xl md:text-3xl hover:text-accent transition" title="Facebook" />
//         </Link>
//         <Link href={"https://github.com/zioncwbBola"}>
//           <FaGithub className="text-white text-2xl md:text-3xl hover:text-accent transition" title="GitHub" />
//         </Link>
//         <Link href={"https://www.linkedin.com/in/andrelopez33/"}>
//           <FaLinkedin className="text-white text-2xl md:text-3xl hover:text-accent transition" title="Linkedin" />
//         </Link>
//       </div>

//       {/* Alternar Tema */}
//       <button onClick={toggleTheme} className="text-base-content text-2xl md:text-3xl">
//         {darkMode ? (
//           <IoSunny className="hover:text-accent transition" />
//         ) : (
//           <IoMoon className="hover:text-accent transition" />
//         )}
//       </button>

//       {showProfile && (
//         <div className="absolute top-16 left-20 md:left-24 bg-base-100 p-6 rounded-lg shadow-lg w-64 text-center text-base-content">
//           <h3 className="text-xl font-semibold">Perfil</h3>
//           <p className="mt-2">Aqui estão as informações do perfil.</p>
//           <button
//             onClick={() => setShowProfile(!showProfile)}
//             className="mt-4 px-4 py-2 text-sm bg-primary text-primary-content rounded-full hover:bg-secondary"
//           >
//             Fechar
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
// export default Sidebar

"use client";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "@/components/ThemeProvider";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 md:left-0 w-full md:w-20 md:min-h-screen bg-primary p-4 md:p-6 flex items-center justify-center">
      <button onClick={toggleTheme} className="text-primary-content text-2xl">
        {theme === "techdark" ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
};

export default Sidebar;
