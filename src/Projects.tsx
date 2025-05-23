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
      title: "API de Gestión de Tareas",
      description:
        "Una API RESTful para gestionar tareas con autenticación JWT, roles de usuario y documentación con Swagger.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com/yourusername/task-api",
      demoUrl: "https://task-api-demo.vercel.app",
    },
    {
      id: 2,
      title: "Microservicio de Notificaciones",
      description:
        "Un microservicio para enviar notificaciones por email, SMS y push notifications usando colas de mensajes.",
      technologies: ["Node.js", "RabbitMQ", "Nodemailer", "Docker"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com/yourusername/notification-service",
    },
    {
      id: 3,
      title: "Sistema de Inventario",
      description: "Backend para un sistema de inventario con reportes, gestión de usuarios y auditoría de cambios.",
      technologies: ["Express", "PostgreSQL", "TypeScript", "Redis"],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "https://github.com/yourusername/inventory-system",
      demoUrl: "https://inventory-demo.vercel.app",
    },
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
