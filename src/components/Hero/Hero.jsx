import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const slides = [
  { src: '/images/carousel-1.png', alt: 'Flota de camiones en carretera' },
  { src: '/images/carousel-2.png', alt: 'Centro logístico de operaciones' },
  { src: '/images/carousel-3.png', alt: 'Entrega en zonas rurales' },
]

const services = [
  {
    emoji: '🚛',
    name: 'Media Milla',
    desc: 'Distribución urbana y peri-urbana',
    href: '#servicios',
  },
  {
    emoji: '🛣️',
    name: 'Milla Completa',
    desc: 'Transporte de carga a larga distancia',
    href: '#servicios',
  },
]

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="hero" id="hero">
      {/* Carrusel de fondo */}
      <div className="hero__carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero__slide ${index === activeSlide ? 'hero__slide--active' : ''}`}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Overlay degradado */}
      <div className="hero__overlay" />

      {/* Contenido */}
      <div className="hero__content">
        {/* Texto izquierda */}
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Operando en todo Colombia
          </div>

          <h1 className="hero__title">
            Operaciones<br />
            Logísticas{' '}
            <span className="hero__title-accent">del Magdalena</span>
          </h1>

          <p className="hero__slogan">
            Llegamos donde más nadie llega. Soluciones de transporte terrestre con
            cobertura nacional y compromiso regional.
          </p>

          <div className="hero__cta-group">
            <a href="#servicios" className="hero__cta-primary" id="cta-cotizar">
              Cotizar Envío
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#nosotros" className="hero__cta-secondary" id="cta-nosotros">
              Conócenos
            </a>
          </div>
        </div>

        {/* Tarjeta servicios derecha */}
        <div className="hero__services-card" id="hero-services">
          <div className="hero__services-header">
            <div className="hero__services-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div>
              <div className="hero__services-title">Nuestros Servicios</div>
              <div className="hero__services-subtitle">Elige tu modalidad</div>
            </div>
          </div>

          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              className="hero__service-item"
              id={`service-${service.name.toLowerCase().replace(' ', '-')}`}
            >
              <span className="hero__service-emoji">{service.emoji}</span>
              <div className="hero__service-info">
                <div className="hero__service-name">{service.name}</div>
                <div className="hero__service-desc">{service.desc}</div>
              </div>
              <span className="hero__service-arrow">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="hero__indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero__indicator ${index === activeSlide ? 'hero__indicator--active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
            id={`indicator-${index}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
