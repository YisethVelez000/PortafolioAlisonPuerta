"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import "../styles/Contact.css"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setSubmitMessage("¡Mensaje enviado con éxito! Te responderé pronto.")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("")
        setSubmitMessage("")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contáctame</h2>
        <p className="section-description">¿Tienes alguna pregunta o propuesta? ¡Escríbeme!</p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>yisethvelez07@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h3>Teléfono</h3>
                <p>+57 300 6845249</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Ubicación</h3>
                <p>Medellín, Colombia</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {submitMessage && <div className={`submit-message ${submitStatus}`}>{submitMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
