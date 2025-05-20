import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hola, soy <span className="highlight">Alison Puerta</span>
          </h1>
          <h2 className="hero-subtitle">Desarrolladora Java Junior</h2>
          <p className="hero-description">
            Soy una apasionada del desarrollo de software, con un enfoque en la
            creación de aplicaciones Java. Me encanta aprender y enfrentar nuevos
            desafíos en el mundo de la programación.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-secondary">
              Ver Proyectos
            </a>
          </div>
        </div>
        {/* <div className="hero-image">
          <div className="image-container">
            <img src="https://github.com/YisethVelez000/ImgProyectos/blob/main/apv.png?raw=true?height=450&width=450" alt="Desarrolladora Backend" />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero
