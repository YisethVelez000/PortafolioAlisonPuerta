import "../styles/Footer.css"
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Alison Puerta</h2>
            <p>Desarrollador Backend Junior</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navegación</h3>
              <ul>
                <li>
                  <a href="#home">Inicio</a>
                </li>
                <li>
                  <a href="#skills">Habilidades</a>
                </li>
                <li>
                  <a href="#projects">Proyectos</a>
                </li>
                <li>
                  <a href="#experience">Experiencia</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Social</h3>
              <ul>
                <li>
                  <a href="https://github.com/YisethVelez000" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ayisethpv/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Alison Puerta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
