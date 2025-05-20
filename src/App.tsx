"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <SpeedInsights/>
    </div>
  )
}

export default App
