import { useState, useCallback, useEffect, useRef } from 'react'
import './Tracking.css'

const Tracking = () => {
  const [guia, setGuia] = useState('')
  const [resultado, setResultado] = useState(null)
  const [loading, setLoading] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el))
    return () => ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.unobserve(el))
  }, [])

  const handleRastrear = useCallback((e) => {
    e.preventDefault()
    const sanitized = guia.replace(/[^a-zA-Z0-9\-]/g, '').trim()
    if (!sanitized) return

    setLoading(true)
    setResultado(null)

    // Simulando una llamada a una API de rastreo
    setTimeout(() => {
      setLoading(false)
      // Ejemplo de respuesta estática simulada
      setResultado({
        estado: Math.random() > 0.3 ? 'En Tránsito' : 'Entregado',
        origen: 'Centro Logístico Principal - OLM',
        destino: 'Dirección de destino',
        guia: sanitized,
        fecha: new Date().toLocaleDateString('es-CO'),
        pasos: [
          { titulo: 'Recibido en origen', completado: true },
          { titulo: 'En tránsito', completado: true },
          { titulo: 'En reparto', completado: Math.random() > 0.5 },
          { titulo: 'Entregado', completado: false },
        ]
      })
    }, 1500)
  }, [guia])

  return (
    <section className="rastreo section" id="rastreo" ref={ref}>
      <div className="container rastreo__contenedor reveal">
        <div className="rastreo__encabezado">
          <h2 className="section-heading">
            RASTREA TU <span className="accent">ENVÍO</span>
          </h2>
          <p className="section-desc section-desc--center">
            Consulta en tiempo real el estado de tu guía o paquete dentro de nuestra red logística.
          </p>
        </div>

        <div className="rastreo__buscador-caja">
          <form className="rastreo__formulario" onSubmit={handleRastrear}>
            <div className="rastreo__input-grupo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rastreo__input-icono"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg>
              <input
                type="text"
                className="rastreo__input"
                placeholder="Ingresa tu número de guía de OLM..."
                value={guia}
                onChange={(e) => setGuia(e.target.value)}
                maxLength={30}
                required
              />
            </div>
            <button type="submit" className="rastreo__btn" disabled={loading}>
              {loading ? (
                <span className="rastreo__spinner"></span>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  Consultar
                </>
              )}
            </button>
          </form>

          {resultado && !loading && (
            <div className="rastreo__resultado zoom-in-up">
              <div className="rastreo__res-header">
                <div>
                  <h3 className="rastreo__res-titulo">Estado de Guía: {resultado.guia}</h3>
                  <p className="rastreo__res-desc">Última actualización: {resultado.fecha}</p>
                </div>
                <div className={`rastreo__etiqueta rastreo__etiqueta--${resultado.estado.replace(/\s+/g, '-').toLowerCase()}`}>
                  {resultado.estado}
                </div>
              </div>

              <div className="rastreo__linea-tiempo">
                {resultado.pasos.map((paso, i) => (
                  <div key={i} className={`rastreo__paso ${paso.completado ? 'rastreo__paso--completado' : ''}`}>
                    <div className="rastreo__paso-icono">
                      {paso.completado ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      ) : (
                        <div className="rastreo__paso-punto"></div>
                      )}
                    </div>
                    <span className="rastreo__paso-texto">{paso.titulo}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Tracking
