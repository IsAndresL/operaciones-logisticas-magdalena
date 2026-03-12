import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const WA_NUMBER = '573052743890'
const WA_MESSAGE = encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

const slides = [
  { src: '/images/carousel-1.png', alt: 'Flota de camiones en carretera del Magdalena' },
  { src: '/images/carousel-2.png', alt: 'Centro logístico de operaciones B2B' },
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
            Socio estratégico en distribución de media milla y milla completa en el Magdalena.
          </p>
          <div className="inicio__grupo-cta">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inicio__cta-wa" id="cta-cotizar">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
               Cotizar Servicios B2B
            </a>
            <a href="#servicios" className="inicio__cta-servicios" id="cta-servicios">
              Ver Portafolio
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
            <span className="inicio__valor-metrica">100+</span>
            <span className="inicio__etiqueta-metrica">Envíos corporativos mensuales</span>
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
