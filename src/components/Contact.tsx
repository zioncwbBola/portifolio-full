const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="card max-w-2xl mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input type="text" placeholder="Seu nome" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="seu@email.com" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensagem</span>
                </label>
                <textarea className="textarea textarea-bordered h-24" placeholder="Sua mensagem"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

