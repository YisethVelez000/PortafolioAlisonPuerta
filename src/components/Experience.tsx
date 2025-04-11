import "../styles/Experience.css"

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  description: string[]
}

interface EducationItem {
  id: number
  degree: string
  institution: string
  period: string
  description: string
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Practicas Profesionales",
      company: "Savia Salud Eps",
      period: "Octubre 2024 - Marzo 2025",
      description: [
        'Documentación de casos de uso y casos de prueba.',
        'Colaboración en el desarrollo de nuevas funcionalidades.',
        'Pruebas de software y aseguramiento de calidad.',
        'Participación en reuniones de equipo y seguimiento de proyectos.',
        'Desarrollo de scripts para automatización de pruebas.',
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Creación De Modelos Y Aplicación De Algoritmos De Clasificación Con Python",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      period: "2023 - 2023",
      description: "Curso de 48 horas en el que aprendí a crear modelos y aplicar algoritmos de clasificación utilizando Python.",
    },
    {
      id: 2,
      degree: "Bootcamp de Desarrollo Backend",
      institution: "EAFIT (NODO)",
      period: "2023",
      description: "Programa intensivo de 3 meses en el que adquirí habilidades en desarrollo backend utilizando Java, Spring Boot, bases de datos y Angular.",
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experiencia y Educación</h2>

        <div className="experience-container">
          <div className="experience-column">
            <h3 className="column-title">Experiencia Laboral</h3>
            <div className="timeline">
              {experiences.map((exp) => (
                <div className="timeline-item" key={exp.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <p className="period">{exp.period}</p>
                    <ul className="responsibilities">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title">Educación</h3>
            <div className="timeline">
              {education.map((edu) => (
                <div className="timeline-item" key={edu.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="period">{edu.period}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
