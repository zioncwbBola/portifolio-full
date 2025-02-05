"use client"

import Main from "@/components/Main"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { useTheme } from "@/components/ThemeProvider"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className={`relative flex flex-col w-full min-h-screen bg-base-100 text-base-content`}>
      <Sidebar />
      <Main />
      <Footer />
      <ThemeToggleButton />
    </div>
  )
}

