import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'María Fernanda Orozco',
    role: 'Gerente General — Supermercados El Rincón',
    city: 'Ciénaga, Magdalena',
    avatar: 'MF',
    rating: 5,
    text: 'Operaciones Logísticas del Magdalena optimizó nuestra cadena de abastecimiento. Redujimos tiempos de tránsito desde Santa Marta en un 40%, asegurando disponibilidad de inventario constante.',
  },
  {
    name: 'Carlos Andrés Bermúdez',
    role: 'Director Comercial — Distribuidora Regional El Río',
    city: 'El Banco, Magdalena',
    avatar: 'CA',
    rating: 5,
    text: 'Nuestra alianza estratégica con OLM nos permitió expandir la distribución en el sur del Magdalena. Su cobertura operativa en zonas de difícil acceso como San Zenón es inigualable.',
  },
  {
    name: 'Luisa Paola Ariza',
    role: 'Coordinadora de Envíos — Moda LPA Nacional',
    city: 'Fundación, Magdalena',
    avatar: 'LP',
    rating: 5,
    text: 'La trazabilidad y cumplimiento de OLM ha sido vital para nuestro e-commerce B2B. Minimizaron las devoluciones e incidencias de entrega, mejorando el nivel de servicio al cliente final.',
  },
  {
    name: 'Jorge Enrique Pinto',
    role: 'Jefe de Logística — Agro Magdalena S.A.S.',
    city: 'Aracataca, Magdalena',
    avatar: 'JE',
    rating: 5,
    text: 'La distribución de insumos agrícolas requiere precisión y cumplimiento. OLM demostró tener el músculo operativo necesario para cubrir nuestras rutas de abastecimiento con total eficacia.',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el))
    return () => ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.unobserve(el))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((p) => (p + 1) % testimonials.length)

  const getVisible = () => {
    const indices = []
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length)
    }
    return indices
  }

  return (
    <section className="testimonios section" id="testimonios" ref={ref}>
      <div className="container">
        <div className="testimonios__encabezado reveal">
          <h2 className="section-heading">
            CASOS DE <span className="accent">ÉXITO</span>
          </h2>
          <p className="section-desc section-desc--center">
            Aliados estratégicos que confían sus operaciones logísticas en nosotros
          </p>
        </div>

        <div className="testimonios__carrusel reveal reveal-delay-1">
          <div className="testimonios__tarjetas">
            {getVisible().map((idx, position) => {
              const t = testimonials[idx]
              const isCenter = position === 1
              return (
                <div key={`${idx}-${position}`} className={`testimonios__tarjeta ${isCenter ? 'testimonios__tarjeta--centro' : 'testimonios__tarjeta--lateral'}`}>
                  <div className={`testimonios__icono-comilla ${isCenter ? 'testimonios__icono-comilla--activo' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                  </div>
                  <div className="testimonios__estrellas">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#2176FF" stroke="#2176FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="testimonios__texto">"{t.text}"</p>
                  <div className="testimonios__autor">
                    <div className={`testimonios__avatar ${isCenter ? 'testimonios__avatar--activo' : ''}`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="testimonios__nombre">{t.name}</p>
                      <p className="testimonios__rol">{t.role}</p>
                      <div className="testimonios__ciudad">
                        <span className="testimonios__punto-ciudad" />
                        {t.city}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button className="testimonios__btn testimonios__btn--anterior" onClick={prev} aria-label="Anterior">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="testimonios__btn testimonios__btn--siguiente" onClick={next} aria-label="Siguiente">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        <div className="testimonios__puntos">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`testimonios__punto ${i === current ? 'testimonios__punto--activo' : ''}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        <div className="testimonios__insignias reveal reveal-delay-2">
          <div className="testimonios__insignia">
            <span className="testimonios__numero-insignia">150+</span>
            <span className="testimonios__etiqueta-insignia">Empresas Satisfechas</span>
          </div>
          <div className="testimonios__insignia">
            <span className="testimonios__numero-insignia">4.9/5</span>
            <span className="testimonios__etiqueta-insignia">Calificación en Nivel de Servicio</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
