import { FaLaptop, FaPalette, FaShoppingCart, FaCode } from "react-icons/fa"

const services = [
  {
    title: "Suporte Técnico Avançado",
    description: "Soluções em software e hardware para manter seu negócio funcionando sem interrupções.",
    icon: <FaLaptop className="text-4xl" />,
  },
  {
    title: "Design Gráfico",
    description: "Criação e edição de materiais para marketing digital, impressos e identidade visual.",
    icon: <FaPalette className="text-4xl" />,
  },
  {
    title: "E-commerce e ERP",
    description: "Implantação e configuração de sistemas de comércio eletrônico e gestão empresarial.",
    icon: <FaShoppingCart className="text-4xl" />,
  },
  {
    title: "Desenvolvimento Full Stack",
    description: "Criação de aplicações web completas, do back-end ao front-end.",
    icon: <FaCode className="text-4xl" />,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                {service.icon}
                <h3 className="card-title">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

