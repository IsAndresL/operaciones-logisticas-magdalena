import { useEffect, useRef } from 'react'
import './Coverage.css'

const WA_LINK = `https://wa.me/573052743890?text=${encodeURIComponent('Hola, quiero consultar la cobertura en mi municipio del Magdalena')}`

const zones = [
  {
    name: 'Zona Norte & Sierra',
    color: '#00BFFF',
    cities: ['Santa Marta', 'Cienaga', 'Zona Bananera', 'Aracataca', 'Fundacion', 'Algarrobo'],
  },
  {
    name: 'Zona Centro & Sabanas',
    color: '#2176FF',
    cities: ['Pivijay', 'Salamina', 'El Pinon', 'Cerro San Antonio', 'Chivolo', 'Remolino'],
  },
  {
    name: 'Zona Sur & Rio',
    color: '#1560BD',
    cities: ['El Banco', 'Plato', 'Tenerife', 'Guamal', 'San Zenon', 'Santana'],
  },
]

const MagdalenaMap = () => {
  const cities = [
    { name: 'Santa Marta', x: 82, y: 48, main: true },
    { name: 'Cienaga', x: 90, y: 88 },
    { name: 'Aracataca', x: 148, y: 122 },
    { name: 'Fundacion', x: 138, y: 155 },
    { name: 'Pivijay', x: 72, y: 168 },
    { name: 'El Pinon', x: 52, y: 210 },
    { name: 'Plato', x: 100, y: 248 },
    { name: 'El Banco', x: 168, y: 308 },
    { name: 'Tenerife', x: 88, y: 285 },
    { name: 'Salamina', x: 60, y: 185 },
  ]

  return (
    <svg viewBox="0 0 260 380" className="cobertura__mapa-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="depGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2176FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0.20" />
        </linearGradient>
      </defs>

      <path
        d="M 80,42 L 58,46 L 35,72 L 22,110 L 18,155 L 30,200 L 42,240 L 62,278 L 90,320 L 128,338 L 165,330 L 195,295 L 210,250 L 218,195 L 215,145 L 205,100 L 188,68 L 168,48 L 140,38 L 110,36 Z"
        fill="url(#depGrad)" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"
      />

      {[ [82, 48, 90, 88], [90, 88, 148, 122], [90, 88, 72, 168], [148, 122, 138, 155], [72, 168, 52, 210], [52, 210, 88, 285], [88, 285, 100, 248], [100, 248, 168, 308], [60, 185, 52, 210] ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.20)" strokeWidth="1" strokeDasharray="3,3" />
      ))}

      {cities.map((city) => (
        <g key={city.name}>
          <circle cx={city.x} cy={city.y} r={city.main ? 5.5 : 3.5} fill={city.main ? '#00BFFF' : 'rgba(255,255,255,0.85)'} stroke={city.main ? '#fff' : 'rgba(255,255,255,0.4)'} strokeWidth="1.2" />
          {city.main && <circle cx={city.x} cy={city.y} r="9" fill="rgba(0,191,255,0.2)" />}
          <text x={city.x + (city.x > 130 ? -5 : 7)} y={city.y + (city.main ? -8 : 1)} textAnchor={city.x > 130 ? 'end' : 'start'} fill="#fff" fontSize={city.main ? '8.5' : '7'} fontWeight={city.main ? '700' : '400'} fontFamily="var(--font-body)">
            {city.name}
          </text>
        </g>
      ))}
    </svg>
  )
}

const Coverage = () => {
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
    <section className="cobertura section" id="cobertura" ref={ref}>
      <div className="cobertura__fondo" />
      
      <div className="container cobertura__contenedor">
        <div className="cobertura__encabezado reveal">
          <h2 className="section-heading" style={{ color: '#fff' }}>
            COBERTURA OPERATIVA EN <span className="accent" style={{ color: '#00BFFF' }}>MAGDALENA</span>
          </h2>
          <p className="cobertura__subtitulo">
            Estructura de red capilar con alcance a los municipios con mayor complejidad logística
          </p>
        </div>

        <div className="cobertura__cuadricula">
          <div className="cobertura__envoltura-mapa reveal reveal-delay-1">
            <div className="cobertura__caja-mapa">
              <span className="cobertura__titulo-mapa">Red Logística Dept. del Magdalena</span>
              <div className="cobertura__interior-mapa">
                <MagdalenaMap />
              </div>
            </div>
          </div>

          <div className="cobertura__zonas">
            {zones.map((zone, i) => (
              <div key={i} className={`cobertura__zona reveal reveal-delay-${i + 1}`}>
                <div className="cobertura__encabezado-zona">
                  <div className="cobertura__icono-zona" style={{ backgroundColor: zone.color }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <h3 className="cobertura__nombre-zona">{zone.name}</h3>
                </div>
                <div className="cobertura__ciudades-zona">
                  {zone.cities.map((city) => (
                    <div key={city} className="cobertura__ciudad">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="cobertura__estadisticas reveal reveal-delay-3">
              <div className="cobertura__estadistica">
                <span className="cobertura__num-estadistica">30+</span>
                <span className="cobertura__etiqueta-estadistica">Municipios</span>
              </div>
              <div className="cobertura__estadistica">
                <span className="cobertura__num-estadistica">3</span>
                <span className="cobertura__etiqueta-estadistica">Centros Estratégicos</span>
              </div>
              <div className="cobertura__estadistica">
                <span className="cobertura__num-estadistica">24h</span>
                <span className="cobertura__etiqueta-estadistica">Tiempos de Tránsito</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cobertura__pie reveal reveal-delay-3">
          <p>¿Operativa en un punto no listado? Nuestro equipo de enrutamiento evalúa todas las zonas de difícil acceso.</p>
          <a href="#contacto" className="cobertura__cta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Consultar Enrutamiento
          </a>
        </div>
      </div>
    </section>
  )
}

export default Coverage
