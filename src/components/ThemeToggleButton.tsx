// // // // // src/components/ThemeToggleButton.tsx
// // // // import { IoMoon, IoSunny } from "react-icons/io5";

// // // // const ThemeToggleButton = ({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) => {
// // // //   return (
// // // //     <button
// // // //       onClick={onToggle}
// // // //       className="fixed bottom-6 right-6 bg-[#D94350] text-white p-3 rounded-full shadow-lg hover:bg-[#F26DB6] transition duration-300"
// // // //       aria-label="Alternar Tema"
// // // //     >
// // // //       {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
// // // //     </button>
// // // //   );
// // // // };

// // // // export default ThemeToggleButton;
// // // // src/components/ThemeToggleButton.tsx
// // // import { IoMoon, IoSunny } from "react-icons/io5";

// // // const ThemeToggleButton = ({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) => {
// // //   return (
// // //     <button
// // //       onClick={onToggle}
// // //       className="fixed bottom-6 right-6 bg-[#D94350] text-white p-3 rounded-full shadow-lg hover:bg-[#F26DB6] transition duration-300"
// // //       aria-label="Alternar Tema"
// // //     >
// // //       {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
// // //     </button>
// // //   );
// // // };

// // // export default ThemeToggleButton;
// // // src/components/ThemeToggleButton.tsx
// // import { IoMoon, IoSunny } from "react-icons/io5"

// // const ThemeToggleButton = ({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) => {
// //   return (
// //     <button
// //       onClick={onToggle}
// //       className="fixed bottom-6 right-6 bg-primary text-primary-content p-3 rounded-full shadow-lg hover:bg-secondary transition duration-300"
// //       aria-label="Alternar Tema"
// //     >
// //       {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
// //     </button>
// //   )
// // }

// // export default ThemeToggleButton

// import { useTheme } from "@/components/ThemeProvider"
// import { IoMoon, IoSunny } from "react-icons/io5"

// const ThemeToggleButton = () => {
//   const { theme, toggleTheme } = useTheme()

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed bottom-6 right-6 glass-button p-3 rounded-full shadow-lg"
//       aria-label="Alternar Tema"
//     >
//       {theme === "techdark" ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
//     </button>
//   )
// }

// export default ThemeToggleButton

"use client"

import { useTheme } from "@/components/ThemeProvider"
import { IoMoon, IoSunny } from "react-icons/io5"

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 glass-button p-3 rounded-full shadow-lg"
      aria-label="Alternar Tema"
    >
      {theme === "techdark" ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
    </button>
  )
}

export default ThemeToggleButton

