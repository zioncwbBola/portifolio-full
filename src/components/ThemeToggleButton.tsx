// // src/components/ThemeToggleButton.tsx
// import { IoMoon, IoSunny } from "react-icons/io5";

// const ThemeToggleButton = ({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) => {
//   return (
//     <button
//       onClick={onToggle}
//       className="fixed bottom-6 right-6 bg-[#D94350] text-white p-3 rounded-full shadow-lg hover:bg-[#F26DB6] transition duration-300"
//       aria-label="Alternar Tema"
//     >
//       {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
//     </button>
//   );
// };

// export default ThemeToggleButton;
// src/components/ThemeToggleButton.tsx
import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeToggleButton = ({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 bg-[#D94350] text-white p-3 rounded-full shadow-lg hover:bg-[#F26DB6] transition duration-300"
      aria-label="Alternar Tema"
    >
      {darkMode ? <IoSunny className="text-2xl" /> : <IoMoon className="text-2xl" />}
    </button>
  );
};

export default ThemeToggleButton;