//  src/components/ThemeToggleButton.tsx


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

