import { useEffect, useRef } from 'react'
import './Services.css'

const WA_LINK = `https://wa.me/573052743890?text=${encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')}`

const services = [
  {
    id: 'media-milla',
    title: 'Media Milla (Distribución Regional)',
    accent: '#2176FF',
    description: 'Solución logística integral para recolección en puerto y distribución directa en el departamento.',
    features: [
      'Entregas directas a domicilio',
      'Rutas urbanas e intermunicipales',
      'Despachos programados y recurrentes',
      'Seguimiento de envíos',
    ],
    price: 'Tarifas competitivas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 'milla-completa',
    title: 'Milla Completa (Carga Consolidada)',
    accent: '#00BFFF',
    description: 'Transporte eficiente para abastecimiento, garantizando que su mercancía fluya sin interrupciones.',
    features: [
      'Alianza logística estratégica',
      'Cobertura departamental amplia',
      'Cargue y descargue seguro',
      'Manejo cuidadoso de la mercancía',
    ],
    price: 'Servicio garantizado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17h1m0 0a2 2 0 104 0m-4 0a2 2 0 104 0m2 0h4m0 0a2 2 0 104 0m-4 0a2 2 0 104 0M3 17V7a2 2 0 012-2h9v12" />
        <path d="M14 5h2l4 5v7" />
      </svg>
    ),
  },
]

const Services = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el))
    return () => ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.unobserve(el))
  }, [])

  return (
    <section className="servicios section" id="servicios" ref={ref}>
      <div className="container">
        <div className="servicios__encabezado reveal" style={{ textAlign: 'center' }}>
          <h2 className="section-heading">
            PORTAFOLIO DE <span className="accent">SERVICIOS</span>
          </h2>
          <p className="section-desc section-desc--center">
            Soluciones logísticas ágiles y confiables para conectar mercancías con su destino final en el Magdalena.
          </p>
        </div>

        <div className="servicios__cuadricula">
          {services.map((s, i) => (
            <div key={s.id} className={`servicios__tarjeta reveal reveal-delay-${i + 1}`} style={{ borderTopColor: s.accent }} id={`servicio-${s.id}`}>
              <div className="servicios__cabecera-tarjeta">
                <div className="servicios__icono-tarjeta" style={{ background: `linear-gradient(135deg, ${s.accent}, #00BFFF)` }}>
                  {s.icon}
                </div>
                <div>
                  <h3 className="servicios__titulo-tarjeta">{s.title}</h3>
                  <span className="servicios__precio-tarjeta" style={{ color: s.accent }}>{s.price}</span>
                </div>
              </div>
              <p className="servicios__descripcion-tarjeta">{s.description}</p>
              <ul className="servicios__lista-caracteristicas">
                {s.features.map((f) => (
                  <li key={f}>
                    <span className="servicios__checklist" style={{ backgroundColor: s.accent }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="servicios__cta-tarjeta" style={{ background: `linear-gradient(135deg, ${s.accent}, #00BFFF)` }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Contactar Ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
