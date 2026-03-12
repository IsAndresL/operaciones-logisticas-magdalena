import './LegalModal.css'

const LegalModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null

  return (
    <div className="legal-modal-overlay" onClick={onClose}>
      <div 
        className="legal-modal-content" 
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer click dentro
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="modal-title"
      >
        <div className="legal-modal-header">
          <h2 id="modal-title" className="legal-modal-title">{title}</h2>
          <button className="legal-modal-close" onClick={onClose} aria-label="Cerrar modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="legal-modal-body">
          {content}
        </div>
      </div>
    </div>
  )
}

export default LegalModal
