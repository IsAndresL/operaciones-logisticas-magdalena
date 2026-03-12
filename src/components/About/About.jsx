import { useEffect, useRef } from 'react'
import './About.css'

const reasons = [
  {
    title: 'Cumplimiento Normativo',
    description: 'Operaciones alineadas a ISO 9001 y normativas de transporte vigentes',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  },
  {
    title: 'Talento Especializado',
    description: 'Personal operativo capacitado para manejo de cargas complejas',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
  {
    title: 'Trayectoria Sólida',
    description: 'Más de 15 años de experiencia ininterrumpida en el sector logístico',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
  {
    title: 'Seguridad Integral',
    description: 'Pólizas de seguro de mercancía y protocolos de mitigación de riesgo',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Efectividad Operativa',
    description: 'Indicador de entregas a tiempo (OTIF) garantizado del 98%',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: 'Soporte Continuo',
    description: 'Monitoreo y atención a requerimientos corporativos 24/7',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>,
  },
]

const About = () => {
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
    <section className="nosotros section" id="nosotros" ref={ref}>
      <div className="container">
        <div className="nosotros__encabezado reveal">
          <h2 className="section-heading">
            CÓMO AGREGAMOS <span className="accent">VALOR</span>
          </h2>
          <p className="section-desc section-desc--center">
            Su operador logístico B2B de confianza con infraestructura en el Magdalena
          </p>
        </div>

        <div className="nosotros__cuadricula">
          {reasons.map((r, i) => (
            <div key={r.title} className={`nosotros__tarjeta reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="icon-box nosotros__icono">
                {r.icon}
              </div>
              <h3 className="nosotros__titulo-tarjeta">{r.title}</h3>
              <p className="nosotros__descripcion-tarjeta">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
