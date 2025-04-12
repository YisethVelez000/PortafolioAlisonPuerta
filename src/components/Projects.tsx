import "../styles/Projects.css"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl?: string
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Ecommerce de Ropa",
      description:
        "Una tienda online de ropa con carrito de compras, gestión de usuarios, ordenes de producción y administración de inventario.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Vue.js"],
      image: "https://github.com/YisethVelez000/ImgProyectos/blob/main/dpsi.png?raw=true?height=300&width=500",
      githubUrl: "https://github.com/Juan-pmb/FrontendDevp.git",
      demoUrl: "https://frontenddevp-1.onrender.com",
    },
    {
      id: 2,
      title: "Iznaflix",
      description:
        "Una plataforma para encontrar información sobre el grupo de kpop IZNA, incluyendo su discografía, miembros y más.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image : "https://github.com/YisethVelez000/ImgProyectos/blob/main/iznaflix.png?raw=true",
      githubUrl : "https://github.com/YisethVelez000/iznaflix-app.git",
      demoUrl: "https://iznaflix.vercel.app/",

    }

  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-description">Algunos de los proyectos en los que he trabajado</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} className="project-link github" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
