import { useState } from 'react'
import LegalModal from '../LegalModal/LegalModal'
import './Footer.css'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Nosotros', href: '#nosotros' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [modalContent, setModalContent] = useState(null) // null | 'terminos' | 'privacidad'

  const handleOpenModal = (e, type) => {
    e.preventDefault()
    setModalContent(type)
  }

  const renderModalContent = () => {
    if (modalContent === 'terminos') {
      return {
        title: 'Términos y Condiciones del Servicio',
        content: (
          <>
            <div className="legal-text-section">
              <h3>1. Aceptación de los Términos</h3>
              <p>Al acceder y utilizar el sitio web y los servicios de Operaciones Logísticas del Magdalena (OLM), usted acepta cumplir con estos Términos y Condiciones. Si no está de acuerdo con alguna parte, por favor absténgase de usar nuestros servicios.</p>
            </div>
            <div className="legal-text-section">
              <h3>2. Naturaleza del Servicio</h3>
              <p>OLM actúa como operador logístico en la recolección, transporte y distribución de mercancías en el departamento del Magdalena, incluyendo modalidades de última milla, operando como intermediario y aliado logístico directo e indirecto (ej. Xcargo).</p>
            </div>
            <div className="legal-text-section">
              <h3>3. Responsabilidades del Remitente</h3>
              <ul>
                <li>Garantizar que la información y documentación de la mercancía sea veraz y completa.</li>
                <li>Empacar adecuadamente los productos para evitar daños durante su movilización.</li>
                <li>Declarar artículos frágiles, perecederos o que requieran manejo especial.</li>
              </ul>
            </div>
            <div className="legal-text-section">
              <h3>4. Tiempos de Entrega</h3>
              <p>Los tiempos estimados de distribución están sujetos a factores externos (condiciones climáticas, alteraciones del orden público, estado de las vías). OLM buscará siempre el cumplimiento oportuno, sin embargo, los tiempos mencionados constituyen una estimación y no una garantía estricta.</p>
            </div>
            <div className="legal-text-section">
              <h3>5. Modificaciones</h3>
              <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente tras su publicación en esta página.</p>
            </div>
          </>
        )
      }
    }
    if (modalContent === 'privacidad') {
      return {
        title: 'Política de Tratamiento de Datos',
        content: (
          <>
            <div className="legal-text-section">
              <h3>1. Objetivo (Ley 1581 de 2012)</h3>
              <p>Operaciones Logísticas del Magdalena, en estricto cumplimiento del marco legal colombiano (Habeas Data), garantiza la protección, privacidad y confidencialidad de los datos personales suministrados por clientes, proveedores, colaboradores y aliados.</p>
            </div>
            <div className="legal-text-section">
              <h3>2. Finalidad de la Recolección</h3>
              <p>La información recopilada mediante formularios, rastreos de paquetes (cookies) o canales de atención directa, será utilizada exclusivamente para:</p>
              <ul>
                <li>Ejecutar la prestación de servicios logísticos y de transporte.</li>
                <li>Actualizar bases de datos comerciales, operativas y facturación.</li>
                <li>Enviar notificaciones sobre el estado de guías y envíos.</li>
                <li>Medición analítica para mejoramiento corporativo e interno de la interfaz web.</li>
              </ul>
            </div>
            <div className="legal-text-section">
              <h3>3. Derechos de los Titulares</h3>
              <p>Usted tiene derecho en cualquier momento a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales. Para ejercer estos derechos, debe enviar una solicitud formal a nuestro canal corporativo: empresas@oplogmagdalena.com.</p>
            </div>
            <div className="legal-text-section">
              <h3>4. Protección de la Información</h3>
              <p>Empleamos estrictos protocolos de seguridad tecnológica y física para prevenir el acceso no autorizado, alteración o filtración de la información de nuestros clientes corporativos y usuarios finales.</p>
            </div>
          </>
        )
      }
    }
    return null
  }

  const modalData = renderModalContent()

  return (
    <footer className="pie-pagina">
      <div className="container pie-pagina__contenedor">
        <div className="pie-pagina__superior">
          {/* Brand Info */}
          <div className="pie-pagina__marca">
            <div className="pie-pagina__envoltura-logo">
              <img src="/logos/solo-logo.png" alt="OLM Logo" className="pie-pagina__img-logo" />
              <div className="pie-pagina__texto-logo">
                <span className="pie-pagina__nombre-logo">Operaciones Logísticas</span>
                <span className="pie-pagina__sub-logo">del Magdalena</span>
              </div>
            </div>
            <p className="pie-pagina__desc">
              Líderes departamentales en soluciones de cadena de suministro y transporte de última milla. Su mercancía, asegurada y entregada bajo estándares corporativos.
            </p>
            <div className="pie-pagina__redes">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pie-pagina__enlaces">
            <h4 className="pie-pagina__titulo">Navegación</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="pie-pagina__enlaces">
            <h4 className="pie-pagina__titulo">Canales de Atención B2B</h4>
            <ul className="pie-pagina__lista-contacto">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Calle 15 #5-50, Santa Marta, Magdalena</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <span>+57 300 123 4567</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>empresas@oplogmagdalena.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pie-pagina__inferior">
          <div className="pie-pagina__derechos">
            <p>© {currentYear} Operaciones Logísticas del Magdalena S.A.S. Todos los derechos reservados.</p>
          </div>
          
          <div className="pie-pagina__autor-container" style={{ textAlign: 'center', flex: '1 1 100%', order: 3, marginTop: '12px' }}>
             <p className="pie-pagina__autor">Powered by Ing. Andres Luna</p>
          </div>

          <div className="pie-pagina__legal" style={{ order: 2 }}>
            <a href="#terminos" onClick={(e) => handleOpenModal(e, 'terminos')}>Términos y Condiciones del Servicio</a>
            <a href="#privacidad" onClick={(e) => handleOpenModal(e, 'privacidad')}>Política de Tratamiento de Datos</a>
          </div>
        </div>
      </div>
      
      {modalData && (
        <LegalModal 
          isOpen={!!modalContent}
          onClose={() => setModalContent(null)}
          title={modalData.title}
          content={modalData.content}
        />
      )}
    </footer>
  )
}

export default Footer
