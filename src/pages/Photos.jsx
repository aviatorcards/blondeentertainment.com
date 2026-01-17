import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  // Curated music and event photos from Unsplash
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', alt: 'Live Concert Venue' },
    { id: 2, url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80', alt: 'DJ Performance' },
    { id: 3, url: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=800&q=80', alt: 'Lead Singer' },
    { id: 4, url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80', alt: 'Stage Lighting' },
    { id: 5, url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80', alt: 'Band on Stage' },
    { id: 6, url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', alt: 'Party Crowd' },
    { id: 7, url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80', alt: 'Acoustic Guitarist' },
    { id: 8, url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80', alt: 'Jazz Performance' },
    { id: 9, url: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=800&q=80', alt: 'Concert Stage' },
    { id: 10, url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80', alt: 'Festival Atmosphere' },
    { id: 11, url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80', alt: 'Dance Floor' },
    { id: 12, url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80', alt: 'Microphone Close-up' },
  ]

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Moments & Memories</h1>
        <div className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: 'var(--blonde-gold)' }}></div>
        <p className="lead text-muted mt-4">
          Capturing the magic of live entertainment across our premier venues.
        </p>
      </div>

      <div className="row g-4 px-2">
        {photos.map(photo => (
          <div className="col-6 col-md-4 col-lg-3" key={photo.id}>
            <div 
              className="photo-card position-relative overflow-hidden rounded-3 shadow-sm"
              style={{ cursor: 'pointer', aspectRatio: '1/1' }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-100 h-100 object-fit-cover transition-all"
                style={{ transition: 'transform 0.5s ease' }}
              />
              <div 
                className="photo-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 transition-all"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)', transition: 'opacity 0.3s ease' }}
              >
                <span className="text-white fw-600">View Photo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .photo-card:hover img {
          transform: scale(1.1);
        }
        .photo-card:hover .photo-overlay {
          opacity: 1 !important;
        }
      `}</style>

      {/* Lightbox Modal */}
      <Modal
        show={selectedPhoto !== null}
        onHide={() => setSelectedPhoto(null)}
        centered
        size="xl"
        contentClassName="bg-transparent border-0"
      >
        <Modal.Body className="p-0 position-relative">
          <button
            type="button"
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close"
          />
          {selectedPhoto && (
            <div className="text-center">
              <img 
                src={selectedPhoto.url.replace('w=800', 'w=1600')} 
                alt={selectedPhoto.alt}
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '85vh' }}
              />
              <div className="text-white mt-3 p-2 bg-dark d-inline-block rounded-pill px-4">
                {selectedPhoto.alt}
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}
