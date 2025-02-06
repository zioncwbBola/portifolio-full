// src/components/PortfolioContent.tsx
import type { FC } from "react"
import { Image, Laptop2, Package } from "lucide-react"
import DesignCarousel from "@/components/Carousel"

const PortfolioContent: FC = () => {
  const designImages = [
    { src: "/portfolio/design/01.png", alt: "Design 1" },
    { src: "/portfolio/design/02.png", alt: "Design 2" },
    { src: "/portfolio/design/01.png", alt: "Design 3" },    
  ]

  const webProjects = [
    {
      title: "E-commerce React",
      description: "Loja online responsiva com integração de pagamentos.",
      url: "https://exemplo-ecommerce.com",
    },
    {
      title: "Dashboard Administrativo",
      description: "Ferramenta para visualização de métricas empresariais.",
      url: "https://dashboard-exemplo.com",
    },
  ]

  const otherProjects = [
    {
      title: "Projeto API REST",
      description: "Backend escalável para aplicações modernas.",
    },
    {
      title: "Landing Page Promocional",
      description: "Página otimizada para campanhas de marketing.",
    },
  ]

  return (
    <div className="flex flex-col items-center space-y-8 min-h-screen">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary">Meu Portfólio</h1>

      {/* Seção: Design Gráfico */}
      <section className="w-full max-w-5xl">
      <DesignCarousel designImages={designImages} />
      </section>

      {/* Seção: Web e Aplicações */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold flex items-center text-base-content mb-4">
          <Laptop2 className="mr-2" /> Sites e Aplicações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-base-200 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Seção: Outros Projetos */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold flex items-center text-base-content mb-4">
          <Package className="mr-2" /> Outros Projetos
        </h2>
        <div className="space-y-4">
          {otherProjects.map((project, index) => (
            <div key={index} className="p-4 bg-base-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-primary">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PortfolioContent

