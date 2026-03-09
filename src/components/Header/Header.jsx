import { useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flota', href: '#flota' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Nosotros', href: '#nosotros' },
]

const Header = () => {
  const [guia, setGuia] = useState('')

  const handleRastrear = (e) => {
    e.preventDefault()
    if (guia.trim()) {
      // Aquí iría la lógica de rastreo
      alert(`Rastreando guía: ${guia}`)
    }
  }

  return (
    <header className="header" id="header-principal">
      {/* Logo solo imagen */}
      <a href="/" className="header__logo" id="header-logo">
        <img
          src="/logos/solo-logo.png"
          alt="Operaciones Logísticas del Magdalena"
          className="header__logo-img"
        />
      </a>

      {/* Navegación central */}
      <nav className="header__nav" id="header-nav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="header__nav-link"
            id={`nav-${link.label.toLowerCase()}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Isla dinámica — Rastrear Guía */}
      <div className="header__island" id="header-island">
        {/* Estado colapsado */}
        <div className="header__island-collapsed">
          <svg className="header__island-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="header__island-label">Rastrear Guía</span>
        </div>

        {/* Estado expandido (aparece con hover) */}
        <form className="header__island-expanded" onSubmit={handleRastrear}>
          <svg className="header__island-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="header__island-input"
            placeholder="Ingresa tu número de guía..."
            value={guia}
            onChange={(e) => setGuia(e.target.value)}
            id="input-rastrear-guia"
          />
          <button type="submit" className="header__island-btn" id="btn-rastrear">
            Rastrear
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
