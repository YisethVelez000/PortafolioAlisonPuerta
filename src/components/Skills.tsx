import "../styles/Skills.css"


const Skills = () => {
  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75},
    { name: "REST APIs", level: 85 },
    { name : "Java", level: 70 },
    { name: 'Python', level: 60 },
    {name: 'Php', level: 60 },
  ]

  const frontendSkills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 65 },
  ]

  const dataBaseSkills = [
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "MySQL", level: 70 },
  ]

  const otherSkills = [
    { name: "Git", level: 75 },
    { name: "Automatización", level: 60 },	
    { name: "TypeScript", level: 70 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Mis Habilidades</h2>
        <p className="section-description">Tecnologías y herramientas con las que trabajo</p>

        <div className="skills-container">
          <div className="skills-category">
            <h3>Backend Development</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="skills-category">
            <h3>Base de Datos</h3>
            <div className="skills-list">
              {dataBaseSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Otras Habilidades</h3>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
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

export default Skills
