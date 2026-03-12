import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const WA_NUMBER = '573052743890'
const WA_MESSAGE = encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const slides = [
  {
    src: '/images/carousel-1.png',
    alt: 'Flota de transporte en carretera del Magdalena',
    title: 'CONECTAMOS TERRITORIOS COMPLEJOS',
    subtitle: 'Operador logístico líder en el Magdalena. Conectamos puertos con domicilios y empresas con total eficiencia.',
    btnText: 'Solicitar Servicios',
    link: '#contacto',
    align: 'izq',
    size: 'lg'
  },
  {
    src: '/images/carousel-2.png',
    alt: 'Centro logístico de operaciones y distribución',
    title: 'SU SEGURIDAD ES NUESTRA PRIORIDAD',
    subtitle: '¿Sabías que el 98% de nuestros envíos llegan antes de lo estimado? Confía en expertos logísticos.',
    btnText: 'Consultar Guía',
    link: '#rastreo',
    align: 'centro',
    size: 'xl'
  },
  {
    src: '/images/carousel-3.png',
    alt: 'Entrega en zonas rurales de difícil acceso',
    title: 'LLEGAMOS A DONDE OTROS NO LLEGAN',
    subtitle: 'Cobertura total en los 30 municipios del departamento, desde la Sierra hasta el Río Magdalena.',
    btnText: 'Ver Cobertura',
    link: '#cobertura',
    align: 'der',
    size: 'md'
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000) // Ralentizado como se solicitó
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

      {/* Contenido Principal */}
      <div className="inicio__contenido container">
        <div className={`inicio__izquierda inicio__izquierda--${slides[current].align}`}>
          <h1 className={`inicio__titulo inicio__titulo--${slides[current].size}`} key={`title-${current}`}>
            {slides[current].title.split(' ').map((word, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{word} </span>
            ))}
          </h1>
          <p className="inicio__subtitulo" key={`sub-${current}`}>
            {slides[current].subtitle}
          </p>
          <div className="inicio__grupo-cta">
            <a href={slides[current].link} className="inicio__cta-wa" id="cta-cotizar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
               {slides[current].btnText}
            </a>
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
