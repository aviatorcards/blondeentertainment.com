import { Link } from 'react-router-dom'
import bands from '../data/bands.json'

export default function Home() {
  const featuredBands = bands.slice(0, 4)

  return (
    <>
      {/* Lighter Hero */}
      <section className="py-5 text-center bg-blonde-cream d-flex align-items-center" style={{ minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-3 fw-bold mb-0 hero-logo-text" style={{ fontFamily: 'var(--font-serif)', color: 'var(--blonde-dark)' }}>
                BL<span className="text-blonde-gold">O</span>NDE
              </h1>
              <p className="display-6 fw-light mb-4 hero-sub-text" style={{ letterSpacing: '0.2em' }}>entertainment</p>
              <div className="mx-auto mb-4" style={{ width: '60px', height: '3px', backgroundColor: 'var(--blonde-gold)' }}></div>
              <p className="lead text-muted mb-5 mx-auto px-3" style={{ maxWidth: '600px' }}>
                Professional booking agency representing the Midwest's premier live entertainment for over two decades.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 px-3">
                <Link to="/bands" className="btn btn-blonde btn-lg px-4 py-3 rounded-0 text-uppercase small fw-bold tracking-widest w-100 w-sm-auto">
                  View Our Bands
                </Link>
                <Link to="/connect" className="btn btn-outline-dark btn-lg px-4 py-3 rounded-0 text-uppercase small fw-bold tracking-widest w-100 w-sm-auto">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 576px) {
          .hero-logo-text { font-size: 3.5rem; }
          .hero-sub-text { font-size: 1.5rem; letter-spacing: 0.1em !important; }
        }
      `}</style>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <span className="text-blonde-gold fw-bold text-uppercase d-block mb-2 tracking-widest small">The Blonde Standard</span>
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>25+ Years of Live Excellence</h2>
              <p className="text-muted fs-5 mb-4">
                Blonde Entertainment develops and represents multiple artists
                and talent throughout Indiana & the Midwest. From corporate
                events to private parties, we bring the perfect entertainment
                for any occasion.
              </p>
              <div className="mt-4">
                <div className="d-flex align-items-start mb-3">
                  <CheckIcon />
                  <div>
                    <h6 className="mb-1">Professional Representation</h6>
                    <p className="small text-muted mb-0">Elite bands curated for quality and reliability.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <CheckIcon />
                  <div>
                    <h6 className="mb-1">Versatile Performance</h6>
                    <p className="small text-muted mb-0">From background ambience to center stage energy.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <CheckIcon />
                  <div>
                    <h6 className="mb-1">Full Service Coordination</h6>
                    <p className="small text-muted mb-0">We handle the details so you can enjoy the music.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="border border-light p-5 text-center transition-all hover-shadow">
                    <p className="display-4 fw-bold mb-0 text-blonde-gold">15+</p>
                    <p className="text-uppercase tracking-wider small fw-bold mb-0">Active Bands</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border border-light p-5 text-center transition-all hover-shadow">
                    <p className="display-4 fw-bold mb-0 text-blonde-gold">500+</p>
                    <p className="text-uppercase tracking-wider small fw-bold mb-0">Events Yearly</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border border-light p-5 text-center transition-all hover-shadow">
                    <p className="display-4 fw-bold mb-0 text-blonde-gold">25+</p>
                    <p className="text-uppercase tracking-wider small fw-bold mb-0">Years Exp.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border border-light p-5 text-center transition-all hover-shadow bg-blonde-dark text-white">
                    <p className="display-4 fw-bold mb-0 text-blonde-gold">100%</p>
                    <p className="text-uppercase tracking-wider small fw-bold mb-0">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bands */}
      <section className="py-5 bg-blonde-cream">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Featured Artists</h2>
            <div className="mx-auto" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
          </div>
          <div className="row g-4 justify-content-center">
            {featuredBands.map(band => (
              <div className="col-md-6 col-lg-3" key={band.id}>
                <div className="card h-100 border-0 shadow-sm rounded-0 overflow-hidden">
                  <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                    <img 
                      src={band.image} 
                      alt={band.name} 
                      className="w-100 h-100 object-fit-cover transition-all" 
                      style={{ transition: 'all 0.5s ease' }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-2">{band.name}</h5>
                    <p className="card-text text-muted small mb-0">
                      {band.description}
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <Link to="/bands" className="text-blonde-gold small fw-bold text-uppercase tracking-wider text-decoration-none border-bottom border-blonde-gold">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/bands" className="btn btn-outline-blonde px-4 py-2 text-uppercase small fw-bold tracking-widest rounded-0">View All Bands</Link>
          </div>
        </div>
      </section>

      {/* Branding Style */}
      <style>{`
        .hover-shadow:hover {
          box-shadow: 0 1rem 3rem rgba(0,0,0,.15)!important;
          transform: translateY(-5px);
        }
        .card:hover img {
          transform: scale(1.05);
        }
        .tracking-widest { letter-spacing: 0.2em; }
        .tracking-wider { letter-spacing: 0.1em; }
      `}</style>

      {/* CTA */}
      <section className="py-5 bg-blonde-dark text-white text-center position-relative overflow-hidden">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Ready to Book Your Event?</h2>
          <p className="mb-5 text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Let us help you find the perfect entertainment for your next event. Contact us today for a curated selection and consultation.
          </p>
          <Link to="/connect" className="btn btn-blonde btn-lg px-5 py-3 rounded-0 text-uppercase small fw-bold tracking-widest">
            Contact Our Agents
          </Link>
        </div>
      </section>
    </>
  )
}

function CheckIcon() {
  return (
    <div className="bg-blonde-gold rounded-circle d-flex align-items-center justify-content-center me-3 mt-1" style={{ width: '24px', height: '24px', flexShrink: 0 }}>
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
        <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
