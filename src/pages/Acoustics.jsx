import { Link } from 'react-router-dom'
import bands from '../data/bands.json'

export default function Acoustics() {
  const acousticActs = bands.filter(b => b.category === 'acoustics')

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="text-blonde-gold fw-bold text-uppercase tracking-widest small">Stripped Down</span>
        <h1 className="display-4 fw-bold mt-2" style={{ fontFamily: 'var(--font-serif)' }}>Blonde Acoustics</h1>
        <div className="mx-auto mt-3 mb-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Intimate, authentic performances perfect for cocktail hours, intimate gatherings, and smaller venues.
        </p>
      </div>

      <div className="row g-4 justify-content-center px-2">
        {acousticActs.map(act => (
          <div className="col-md-6 col-lg-5" key={act.id}>
            <div className="card h-100 border-0 shadow-sm rounded-0 overflow-hidden transition-all hover-up">
              <div className="row g-0 h-100">
                <div className="col-sm-5">
                  <div className="h-100 bg-light" style={{ minHeight: '260px' }}>
                    {act.image ? (
                      <img 
                        src={act.image} 
                        alt={act.name}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('bg-secondary', 'd-flex', 'align-items-center', 'justify-content-center');
                          e.target.parentElement.innerHTML = '<span class="text-white-50 small text-uppercase fw-bold tracking-wider text-center p-3">Photo Coming Soon</span>';
                        }}
                      />
                    ) : (
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        <span className="text-white-50">Photo Unavailable</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="card-body p-4 d-flex flex-column h-100">
                    <h4 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{act.name}</h4>
                    <p className="card-text text-muted mb-4">{act.description}</p>
                    <div className="mt-auto">
                      <Link to="/connect" className="btn btn-blonde rounded-0 text-uppercase small fw-bold tracking-widest px-4 py-2">
                        Book Act
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-up:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.15)!important;
        }
      `}</style>

      <div className="text-center mt-5 py-5 border-top">
        <p className="text-muted mb-4 fs-5">
          Looking for a full band experience with more energy?
        </p>
        <Link to="/bands" className="btn btn-outline-dark rounded-0 px-5 py-3 text-uppercase small fw-bold tracking-widest">
          Browse Full Bands
        </Link>
      </div>
    </div>
  )
}
