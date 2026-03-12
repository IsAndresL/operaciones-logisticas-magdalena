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
    nombre: '',
    tipoCliente: 'empresa',
    documento: '',
    telefono: '',
    email: '',
    asunto: 'cotizacion',
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
        nombre: '', tipoCliente: 'empresa', documento: '', telefono: '', email: '', asunto: 'cotizacion', mensaje: ''
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
            <span className="accent">CONECTAR CON NOSOTROS?</span>
          </h2>
          <p className="section-desc section-desc--center">
            Gestionamos sus envíos y los de su empresa. Consulte su paquete o solicite una alianza comercial y le responderemos lo antes posible.
          </p>
          <div className="cta__acciones">
            <a href="#contacto" className="cta__btn cta__btn--primario">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contactar Ahora
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cta__flecha"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href={WA_ASESOR} target="_blank" rel="noopener noreferrer" className="cta__btn cta__btn--secundario">
              Hablar con un Asesor
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
            <h2 className="section-heading">Canales de <span className="accent">Mesa de Ayuda</span></h2>
            <p className="contacto__desc">
              Ya sea que requiera consultar el estado de una guía, agendar una recolección o desarrollar una alianza corporativa, nuestro equipo está a su disposición.
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
                  <strong>Líneas de Atención</strong>
                  <span>+57 300 123 4567</span>
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

          <form className="contacto__formulario reveal reveal-delay-2" onSubmit={handleSubmit} id="contacto-form">
            <h3 className="contacto__titulo-formulario">Formulario de Contacto</h3>
            {submitted ? (
              <div className="contacto__exito">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <p>¡Recepción exitosa! Su requerimiento ha sido registrado. Nuestro equipo se comunicará en breve.</p>
              </div>
            ) : (
              <div className="contacto__cuadricula">
                <div className="contacto__grupo">
                  <label htmlFor="tipoCliente">Tipo de Remitente *</label>
                  <div className="contacto__envoltura-select">
                    <select id="tipoCliente" name="tipoCliente" required value={formData.tipoCliente} onChange={handleChange}>
                      <option value="persona">Persona Natural</option>
                      <option value="empresa">Empresa / Negocio</option>
                    </select>
                  </div>
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="nombre">{formData.tipoCliente === 'empresa' ? 'Compañía / Razón Social *' : 'Nombre Completo *'}</label>
                  <input type="text" id="nombre" name="nombre" required maxLength="100" value={formData.nombre} onChange={handleChange} />
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="documento">{formData.tipoCliente === 'empresa' ? 'NIT *' : 'Cédula *'}</label>
                  <input type="text" id="documento" name="documento" required maxLength="20" value={formData.documento} onChange={handleChange} />
                </div>
                <div className="contacto__grupo">
                  <label htmlFor="telefono">Teléfono / Celular *</label>
                  <input type="tel" id="telefono" name="telefono" required maxLength="20" value={formData.telefono} onChange={handleChange} />
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input type="email" id="email" name="email" required maxLength="100" value={formData.email} onChange={handleChange} />
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="asunto">Asunto Principal *</label>
                  <div className="contacto__envoltura-select">
                    <select id="asunto" name="asunto" required value={formData.asunto} onChange={handleChange}>
                      <option value="guia">Consulta de Guía / Rastreo</option>
                      <option value="cotizacion">Solicitud de Cotización</option>
                      <option value="alianza">Alianza Logística Corporativa</option>
                      <option value="pqr">Petición, Queja o Reclamo</option>
                    </select>
                  </div>
                </div>
                <div className="contacto__grupo contacto__grupo--completo">
                  <label htmlFor="mensaje">Detalle su solicitud</label>
                  <textarea id="mensaje" name="mensaje" rows="4" maxLength="500" value={formData.mensaje} onChange={handleChange} placeholder="Número de guía, especificaciones logísticas o detalles de su inquietud..."></textarea>
                </div>
                <div className="contacto__grupo contacto__grupo--completo mt-4">
                  <button type="submit" className="contacto__enviar">
                    Enviar Solicitud
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
