import { useState, useEffect } from 'react'
import './CookieBanner.css'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Revisar si ya aceptó las cookies previamente
    const consent = localStorage.getItem('olm_cookie_consent')
    if (!consent) {
      // Mostrar con un ligero retraso para que no sea tan intrusivo al instante
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('olm_cookie_consent', 'true')
    setIsVisible(false)
    
    // Aquí es donde en el futuro se activaría (trigger) el Google Analytics.
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de Cookies">
      <div className="cookie-banner__contenido">
        <div className="cookie-banner__icono">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01"/></svg>
        </div>
        <div className="cookie-banner__texto">
          <p className="cookie-banner__titulo">Privacidad y Preferencias</p>
          <p className="cookie-banner__desc">
            Utilizamos cookies técnicas y analíticas corporativas para optimizar tu experiencia en nuestra plataforma y entender mejor las necesidades logísticas de tu empresa. Al hacer clic en "Aceptar", consientes el uso de estas tecnologías de acuerdo con nuestra política de datos.
          </p>
        </div>
      </div>
      <div className="cookie-banner__acciones">
        <button onClick={handleAccept} className="cookie-banner__btn">
          Aceptar y Continuar
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
