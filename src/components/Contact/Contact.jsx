import { useState, useCallback, useEffect, useRef } from 'react'
import './Contact.css'

const WA_NUMBER = '573052743890'
const WA_COTIZAR = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero solicitar una cotizacion logistica en el Magdalena')}`
const WA_ASESOR = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, quiero hablar con un asesor')}`

const sanitizeInput = (str) => {
  return str.replace(/[<>"';]/g, '')
}

const Contact = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    nit: '',
    contacto: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.observe(el))
    return () => ref.current?.querySelectorAll('.reveal')?.forEach((el) => observer.unobserve(el))
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizeInput(value),
    }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        empresa: '', nit: '', contacto: '', telefono: '', email: '', servicio: '', mensaje: ''
      })
    }, 3000)
  }, [])

  return (
    <div ref={ref}>
      <section className="cta section">
        <div className="cta__fondo-brillo" />
        <div className="container cta__contenedor reveal">
          <h2 className="section-heading">
            ¿LISTO PARA <br />
            <span className="accent">OPTIMIZAR SU LOGÍSTICA?</span>
          </h2>
          <p className="section-desc section-desc--center">
            Solicite una cotización B2B personalizada para su red de distribución en el Magdalena. Respuesta corporativa en menos de 24 horas.
          </p>
          <div className="cta__acciones">
            <a href={WA_COTIZAR} target="_blank" rel="noopener noreferrer" className="cta__btn cta__btn--primario">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Cotización Rápida
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cta__flecha"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href={WA_ASESOR} target="_blank" rel="noopener noreferrer" className="cta__btn cta__btn--secundario">
              Contactar Asesor B2B
            </a>
          </div>

          <div className="cta__estadisticas">
            <div>
              <p className="cta__valor-estadistica">15+</p>
              <p className="cta__etiqueta-estadistica">Años de Operación Constante</p>
            </div>
            <div>
              <p className="cta__valor-estadistica">30+</p>
              <p className="cta__etiqueta-estadistica">Municipios Integrados</p>
            </div>
            <div>
              <p className="cta__valor-estadistica">98%</p>
              <p className="cta__etiqueta-estadistica">Cumplimiento OTIF</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contacto section" id="contacto">
        <div className="container contacto__contenedor">
          <div className="contacto__info reveal">
            <h2 className="section-heading">Alianzas <span className="accent">Estratégicas</span></h2>
            <p className="contacto__desc">
              Si representa a una compañía estructurada con necesidades logísticas en escala, cadena de suministro o distribución de última milla en el Magdalena, permítanos gestionar sus envíos.
            </p>
            <ul className="contacto__detalles">
              <li>
                <div className="icon-box contacto__icono"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div>
                  <strong>Centro de Distribución Principal</strong>
                  <span>Calle 15 #5-50, Santa Marta, Magdalena</span>
                </div>
              </li>
              <li>
                <div className="icon-box contacto__icono"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                <div>
                  <strong>Líneas Comerciales B2B</strong>
                  <span>+57 (5) 000 0000 <br/>+57 300 123 4567</span>
                </div>
              </li>
              <li>
                <div className="icon-box contacto__icono"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div>
                  <strong>Atención Corporativa</strong>
                  <span>empresas@oplogmagdalena.com</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contacto__formulario reveal reveal-delay-2" onSubmit={handleSubmit} id="b2b-form">
            <h3 className="contacto__titulo-formulario">Solicitud de Operación B2B</h3>
            {submitted ? (
              <div className="contacto__exito">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <p>¡Recepción exitosa! Su requerimiento logístico ha sido registrado. Un Key Account Manager se comunicará en breve.</p>
              </div>
            ) : (
              <div className="contacto__cuadricula">
                <div className="contacto__grupo">
                  <label htmlFor="empresa">Compañía / Razón Social *</label>
                  <input type="text" id="empresa" name="empresa" required maxLength="100" value={formData.empresa} onChange={handleChange} />
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="nit">NIT de Empresa *</label>
                  <input type="text" id="nit" name="nit" required maxLength="20" value={formData.nit} onChange={handleChange} />
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="contacto">Ejecutivo de Contacto *</label>
                  <input type="text" id="contacto" name="contacto" required maxLength="100" value={formData.contacto} onChange={handleChange} />
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="telefono">Teléfono Directo *</label>
                  <input type="tel" id="telefono" name="telefono" required maxLength="20" value={formData.telefono} onChange={handleChange} />
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="email">Correo Institucional *</label>
                  <input type="email" id="email" name="email" required maxLength="100" value={formData.email} onChange={handleChange} />
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="servicio">Unidad Operativa Requerida *</label>
                  <div className="contacto__envoltura-select">
                    <select id="servicio" name="servicio" required value={formData.servicio} onChange={handleChange}>
                      <option value="">Seleccione el modelo operativo...</option>
                      <option value="media-milla">Distribución Secundaria — Media Milla</option>
                      <option value="milla-completa">Transporte Primario — Carga Consolidada</option>
                      <option value="paqueteria-express">Soluciones Courier B2B Masivas</option>
                      <option value="otro">Desarrollo Logístico a la Medida</option>
                    </select>
                  </div>
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="mensaje">Especificaciones Técnicas (opcional)</label>
                  <textarea id="mensaje" name="mensaje" rows="4" maxLength="500" value={formData.mensaje} onChange={handleChange} placeholder="Detalle volumetrías estimadas, frecuencia de despachos o requerimientos singulares de ruteo..."></textarea>
                </div>
                <div className="contacto__grupo contacto__grupo--completo mt-4">
                  <button type="submit" className="contacto__enviar">
                    Radicar Solicitud Comercial
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
