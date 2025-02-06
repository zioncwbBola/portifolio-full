//src\app\page.tsx
"use client"

import Main from "@/components/Main"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import ThemeToggleButton from "@/components/ThemeToggleButton"
import { useTheme } from "@/components/ThemeProvider"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className={`relative flex flex-col w-full min-h-screen text-base-content bg-gradient-to-t from-secondary to-accent`}>
      <Sidebar />
      <Main />
      <Footer />
      {/* <ThemeToggleButton /> */}
    </div>
  )
}

