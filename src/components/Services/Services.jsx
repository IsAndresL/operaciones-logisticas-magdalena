import { useEffect, useRef } from 'react'
import './Services.css'

const WA_LINK = `https://wa.me/573052743890?text=${encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')}`

const services = [
  {
    id: 'media-milla',
    title: 'Media Milla (Distribución Regional)',
    accent: '#2176FF',
    description: 'Solución logística integral para cargas fraccionadas y consolidadas dentro del departamento.',
    features: [
      'Flota corporativa de 5 a 8 toneladas',
      'Rutas urbanas e intermunicipales',
      'Entregas programadas y recurrentes',
      'Trazabilidad GPS en tiempo real',
    ],
    price: 'Tarifas corporativas B2B',
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
    title: 'Milla Completa (Carga Pesada)',
    accent: '#00BFFF',
    description: 'Operaciones de transporte de alto volumen para abastecimiento industrial y comercial.',
    features: [
      'Tractocamiones de hasta 34 toneladas',
      'Cobertura total departamental',
      'Operativa completa de cargue/descargue',
      'Póliza de seguro integral aplicada',
    ],
    price: 'Contratos a medida',
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
            Soluciones logísticas corporativas adaptadas a las exigencias operativas y de distribución en el Magdalena.
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
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="servicios__cta-tarjeta" style={{ background: `linear-gradient(135deg, ${s.accent}, #00BFFF)` }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
                Agendar Asesoría B2B
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
