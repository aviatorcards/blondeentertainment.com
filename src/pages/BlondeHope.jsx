import { Link } from 'react-router-dom'

export default function BlondeHope() {
  const initiatives = [
    {
      id: 1,
      title: 'Charity Concerts',
      description:
        'We organize annual benefit concerts where 100% of proceeds go directly to local food banks and shelters.',
      image: 'https://images.unsplash.com/photo-1657682041051-00795657a408?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Community Outreach',
      description:
        'Our musicians volunteer time to bring the joy of music to simplified settings, schools, and community centers.',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Nonprofit Support',
      description:
        'We provide professional entertainment at reduced costs for nonprofit fundraisers to maximize their impact.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="text-blonde-gold fw-bold text-uppercase tracking-widest small">Giving Back</span>
        <h1 className="display-4 fw-bold mt-2" style={{ fontFamily: 'var(--font-serif)' }}>Blonde Hope</h1>
        <div className="mx-auto mt-3 mb-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          We believe in the power of music to bring people together and strengthen the communities that have supported us for over 25 years.
        </p>
      </div>

      <div className="row g-4 mb-5 px-2">
        {initiatives.map(initiative => (
          <div className="col-md-4" key={initiative.id}>
            <div className="card h-100 border-0 shadow-sm rounded-0 overflow-hidden transition-all hover-up">
              <div
                className="card-img-top bg-light position-relative"
                style={{ height: '240px' }}
              >
                <img 
                  src={initiative.image} 
                  alt={initiative.title} 
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="position-absolute bottom-0 start-0 w-100 h-100 bg-gradient-dark-bottom opacity-25"></div>
              </div>
              <div className="card-body p-4 text-center">
                <h5 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{initiative.title}</h5>
                <p className="card-text text-muted small">
                  {initiative.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hover-up:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .bg-gradient-dark-bottom {
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        }
      `}</style>

      {/* Impact Section */}
      <div className="bg-blonde-dark text-white rounded-0 p-5 mb-5 position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}></div>
        <div className="position-relative z-1 text-center">
          <h3 className="display-6 fw-bold mb-5" style={{ fontFamily: 'var(--font-serif)' }}>Our Annual Impact</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="p-3">
                <p className="display-4 fw-bold text-blonde-gold mb-1">100%</p>
                <p className="text-white-50 text-uppercase tracking-widest small">Local Focus</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <p className="display-4 fw-bold text-blonde-gold mb-1">20+</p>
                <p className="text-white-50 text-uppercase tracking-widest small">Years Giving</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3">
                <p className="display-4 fw-bold text-blonde-gold mb-1">Countless</p>
                <p className="text-white-50 text-uppercase tracking-widest small">Lives Touched</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner With Us */}
      <div className="text-center py-5 border-top">
        <div className="col-lg-8 mx-auto">
          <h4 className="mb-4 fw-bold" style={{ fontFamily: 'var(--font-serif)' }}>Partner With Blonde Hope</h4>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Are you a nonprofit looking for entertainment for your next
            fundraiser? We offer special rates and support for charitable organizations.
          </p>
          <Link to="/connect" className="btn btn-blonde px-5 py-3 rounded-0 text-uppercase small fw-bold tracking-widest">
            Inquire About Partnership
          </Link>
        </div>
      </div>
    </div>
  )
}
