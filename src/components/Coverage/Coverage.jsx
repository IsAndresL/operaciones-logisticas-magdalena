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
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="cobertura__cta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Consultar Flexibilidad de Rutas
          </a>
        </div>
      </div>
    </section>
  )
}

export default Coverage
