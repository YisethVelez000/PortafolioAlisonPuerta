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
      title: "Desarrollador Backend Junior",
      company: "Tech Solutions",
      period: "Enero 2023 - Presente",
      description: [
        "Desarrollo y mantenimiento de APIs RESTful con Node.js y Express",
        "Implementación de autenticación y autorización con JWT",
        "Optimización de consultas a bases de datos MongoDB y PostgreSQL",
        "Colaboración en la implementación de CI/CD con GitHub Actions",
      ],
    },
  ]

  const education: EducationItem[] = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica",
      period: "2018 - 2022",
      description: "Especialización en desarrollo de software y bases de datos.",
    },
    {
      id: 2,
      degree: "Bootcamp de Desarrollo Backend",
      institution: "Coding Academy",
      period: "2022",
      description: "Programa intensivo de 3 meses enfocado en Node.js, Express, MongoDB y APIs RESTful.",
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
