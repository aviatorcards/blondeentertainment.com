import { Link } from 'react-router-dom'

export default function SauceyHippie() {
  const galleryImages = [
    'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
  ]

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="text-blonde-gold fw-bold text-uppercase tracking-widest small">The Collection</span>
        <h1 className="display-4 fw-bold mt-2" style={{ fontFamily: 'var(--font-serif)' }}>The Saucey Hippie</h1>
        <div className="mx-auto mt-3" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
      </div>

      <div className="row align-items-center mb-5 py-4">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="position-relative overflow-hidden rounded shadow-lg" style={{ height: '500px' }}>
            <img 
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80" 
              alt="The Saucey Hippie" 
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
        <div className="col-lg-6 ps-lg-5">
          <h3 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Good Vibes, Great Music</h3>
          <p className="text-muted fs-5 mb-4">
            The Saucey Hippie brings a unique blend of music, lifestyle, and
            positive energy to the Midwest entertainment scene. Whether it's
            laid-back acoustic vibes or full-band energy, we're all about
            creating memorable experiences.
          </p>
          <div className="mb-5">
            <p className="text-muted"><strong className="text-dark">Style:</strong> Eclectic, Folk-Rock, Indie Vibes</p>
            <p className="text-muted"><strong className="text-dark">Availability:</strong> Festivals, Private Events, Nightlife</p>
          </div>
          <a
            href="https://instagram.com/thesauceyhippie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-blonde px-5 py-3 rounded-0 text-uppercase small fw-bold tracking-widest"
          >
            Follow our journey
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-5">
        <div className="text-center mb-5">
          <h4 className="fw-bold text-uppercase tracking-widest small mb-4">The Vibe Gallery</h4>
        </div>
        <div className="row g-3">
          {galleryImages.map((src, i) => (
            <div className="col-6 col-md-4" key={i}>
              <div className="overflow-hidden rounded h-100" style={{ height: '250px' }}>
                <img 
                  src={src} 
                  alt={`Vibe ${i + 1}`} 
                  className="w-100 h-100 object-fit-cover transition-all hover-zoom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-zoom:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* CTA */}
      <div className="text-center py-5 bg-blonde-cream rounded-0 border-top border-bottom">
        <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Booking The Saucey Hippie</h2>
        <p className="text-muted mb-5 mx-auto opacity-75" style={{ maxWidth: '600px' }}>
          Available for private events, festivals, and venue bookings. Let's create something special together.
        </p>
        <Link to="/connect" className="btn btn-dark px-5 py-3 rounded-0 text-uppercase small fw-bold tracking-widest">
          Book This Act
        </Link>
      </div>
    </div>
  )
}
