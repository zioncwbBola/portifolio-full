// src\app\layout.tsx
import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import ThemeProvider from "@/components/ThemeProvider"


export const metadata: Metadata = {
  title: "ZionCWB Portfolio",
  description: "Serviços de Suporte Técnico, Design Gráfico, E-commerce, e Desenvolvimento Full Stack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="techlight" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

