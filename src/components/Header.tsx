"use client"

import { useState } from "react"
import "../styles/Header.css"
import { Moon, Sun } from "lucide-react"
import { Menu } from "lucide-react"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Alison Puerta</h1>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={` ${menuOpen ? "active" : ""}`}> {darkMode ? <Menu color="white"  /> : <Menu className="light-mode-icon"  color="black"  />} </span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experiencia
              </a>
            </li>
            <li>
              <button className="toogle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                {darkMode ? <Sun className="dark-mode-icon" /> : <Moon className="light-mode-icon" />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
