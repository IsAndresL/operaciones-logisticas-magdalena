import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const WA_NUMBER = '573052743890'
const WA_MESSAGE = encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const slides = [
  { src: '/images/carousel-1.png', alt: 'Flota de transporte en carretera del Magdalena' },
  { src: '/images/carousel-2.png', alt: 'Centro logístico de operaciones y distribución' },
  { src: '/images/carousel-3.png', alt: 'Entrega en zonas rurales de difícil acceso' },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="inicio" id="inicio">
      {/* Carrusel de Fondo */}
      <div className="inicio__carrusel">
        {slides.map((slide, i) => (
          <div key={i} className={`inicio__diapositiva ${i === current ? 'inicio__diapositiva--activa' : ''}`}>
            <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      {/* Capa de Gradiente (Overlay) */}
      <div className="inicio__capa" />

      {/* Marca de agua transparente (Tono corporativo) */}
      <div className="inicio__marca-agua">LOGÍSTICA</div>

      {/* Contenido Principal */}
      <div className="inicio__contenido container">
        <div className="inicio__izquierda">
          <h1 className="inicio__titulo">
            CONECTAMOS<br />
            TERRITORIOS<br />
            COMPLEJOS
          </h1>
          <p className="inicio__subtitulo">
            Operador logístico en el Magdalena. Conectamos puertos con domicilios y empresas, gestionando media y milla completa.
          </p>
          <div className="inicio__grupo-cta">
            <a href="#contacto" className="inicio__cta-wa" id="cta-cotizar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
               Solicitar Servicios
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inicio__cta-servicios" id="cta-servicios">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Consultar Guía
            </a>
          </div>
        </div>

        <div className="inicio__derecha">
          <div className="inicio__tarjeta-metrica">
            <div className="inicio__icono-metrica">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <span className="inicio__valor-metrica">Experiencia</span>
            <span className="inicio__etiqueta-metrica">En distribución rural y urbana de alta complejidad</span>
          </div>
          <div className="inicio__tarjeta-metrica">
            <div className="inicio__icono-metrica">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
            </div>
            <span className="inicio__valor-metrica">10k+</span>
            <span className="inicio__etiqueta-metrica">Envíos gestionados mensualmente</span>
          </div>
          <div className="inicio__tarjeta-metrica">
            <div className="inicio__icono-metrica">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span className="inicio__valor-metrica">30+</span>
            <span className="inicio__etiqueta-metrica">Municipios con cobertura total</span>
          </div>
        </div>
      </div>

      {/* Indicadores de diapositiva */}
      <div className="inicio__indicadores">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`inicio__indicador ${i === current ? 'inicio__indicador--activo' : ''}`}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
