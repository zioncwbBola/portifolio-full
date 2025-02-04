const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto footer p-10">
        <div>
          <span className="footer-title">Serviços</span>
          <a className="link link-hover">Suporte Técnico</a>
          <a className="link link-hover">Design Gráfico</a>
          <a className="link link-hover">E-commerce</a>
          <a className="link link-hover">Desenvolvimento Full Stack</a>
        </div>
        <div>
          <span className="footer-title">Empresa</span>
          <a className="link link-hover">Sobre nós</a>
          <a className="link link-hover">Contato</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Termos de uso</a>
          <a className="link link-hover">Política de privacidade</a>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - Todos os direitos reservados por ZionCWB</p>
      </div>
    </footer>
  )
}

export default Footer

