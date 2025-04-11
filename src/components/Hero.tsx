import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Alison Puerta</span>
          </h1>
          <h2 className="hero-subtitle">Desarrolladora Backend Junior</h2>
          <p className="hero-description">
            Especializada en crear soluciones robustas y escalables con Node.js, Express, MongoDB y SQL. Apasionada por
            la arquitectura de software y las APIs RESTful.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contáctame
            </a>
            <a href="#projects" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/src/assets/apv.png?height=450&width=450" alt="Desarrolladora Backend" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
