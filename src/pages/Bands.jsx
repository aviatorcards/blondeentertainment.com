import { useState, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import bands from '../data/bands.json'

export default function Bands() {
  const [selectedBand, setSelectedBand] = useState(null)
  const [activeView, setActiveView] = useState('browse') // 'browse' or 'listen'
  const [activeVideoId, setActiveVideoId] = useState(null)
  const [announcement, setAnnouncement] = useState('')
  const bandsList = bands.filter(b => b.category === 'bands')

  const browseTabRef = useRef(null)
  const listenTabRef = useRef(null)
  const videoGridRef = useRef(null)

  // Announce view changes to screen readers
  const announce = (message) => {
    setAnnouncement(message)
    setTimeout(() => setAnnouncement(''), 1000)
  }

  // Handle tab keyboard navigation
  const handleTabKeyDown = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      const newView = activeView === 'browse' ? 'listen' : 'browse'
      setActiveView(newView)
      if (newView === 'browse') {
        browseTabRef.current?.focus()
      } else {
        listenTabRef.current?.focus()
      }
      announce(`Switched to ${newView === 'browse' ? 'Browse Bands' : 'Watch and Listen'} view`)
    }
  }

  // Handle video card keyboard navigation
  const handleVideoKeyDown = (e, band, index) => {
    const cards = videoGridRef.current?.querySelectorAll('[data-video-card]')
    if (!cards) return

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        setActiveVideoId(activeVideoId === band.id ? null : band.id)
        announce(activeVideoId === band.id
          ? `Collapsed video for ${band.name}`
          : `Expanded video for ${band.name}. ${band.genre}. ${band.videoTitle}`)
        break
      case 'ArrowRight':
        e.preventDefault()
        if (index < cards.length - 1) cards[index + 1].focus()
        break
      case 'ArrowLeft':
        e.preventDefault()
        if (index > 0) cards[index - 1].focus()
        break
      case 'ArrowDown':
        e.preventDefault()
        // Move to next row (assuming 3 columns on large screens)
        if (index + 3 < cards.length) cards[index + 3].focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        if (index - 3 >= 0) cards[index - 3].focus()
        break
      case 'Home':
        e.preventDefault()
        cards[0].focus()
        break
      case 'End':
        e.preventDefault()
        cards[cards.length - 1].focus()
        break
    }
  }

  return (
    <div className="container py-5">
      {/* Screen reader announcements */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="visually-hidden"
      >
        {announcement}
      </div>

      <div className="text-center mb-5">
        <span className="text-blonde-gold fw-bold text-uppercase tracking-widest small">The Lineup</span>
        <h1 className="display-4 fw-bold mt-2" style={{ fontFamily: 'var(--font-serif)' }}>Our Artists</h1>
        <div className="mx-auto mt-3 mb-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Professional live entertainment curated for premier events and venues.
        </p>
      </div>

      {/* Accessible Tab Navigation */}
      <div className="d-flex justify-content-center mb-5">
        <div
          role="tablist"
          aria-label="Band viewing options"
          className="d-inline-flex border rounded-0 overflow-hidden"
          style={{ borderColor: 'var(--blonde-gold)' }}
        >
          <button
            ref={browseTabRef}
            role="tab"
            id="browse-tab"
            aria-selected={activeView === 'browse'}
            aria-controls="browse-panel"
            tabIndex={activeView === 'browse' ? 0 : -1}
            onClick={() => {
              setActiveView('browse')
              announce('Switched to Browse Bands view')
            }}
            onKeyDown={handleTabKeyDown}
            className={`btn rounded-0 px-4 py-3 text-uppercase small fw-bold tracking-widest border-0 ${
              activeView === 'browse'
                ? 'btn-blonde'
                : 'btn-outline-blonde'
            }`}
            style={{ minWidth: '160px' }}
          >
            <span aria-hidden="true" className="me-2">◫</span>
            Browse Bands
          </button>
          <button
            ref={listenTabRef}
            role="tab"
            id="listen-tab"
            aria-selected={activeView === 'listen'}
            aria-controls="listen-panel"
            tabIndex={activeView === 'listen' ? 0 : -1}
            onClick={() => {
              setActiveView('listen')
              announce('Switched to Watch and Listen view. Use arrow keys to navigate between bands.')
            }}
            onKeyDown={handleTabKeyDown}
            className={`btn rounded-0 px-4 py-3 text-uppercase small fw-bold tracking-widest border-0 ${
              activeView === 'listen'
                ? 'btn-blonde'
                : 'btn-outline-blonde'
            }`}
            style={{ minWidth: '160px' }}
          >
            <span aria-hidden="true" className="me-2">▶</span>
            Watch & Listen
          </button>
        </div>
      </div>

      {/* Browse Bands Panel */}
      <div
        role="tabpanel"
        id="browse-panel"
        aria-labelledby="browse-tab"
        hidden={activeView !== 'browse'}
      >
        <div className="row g-4 px-2">
          {bandsList.map(band => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={band.id}>
              <div
                className="card h-100 border-0 shadow-sm rounded-0 overflow-hidden transition-all hover-up"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedBand(band)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedBand(band)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${band.name}. ${band.genre}. ${band.description}`}
              >
                <div
                  className="card-img-top bg-light"
                  style={{ height: '240px', overflow: 'hidden' }}
                >
                  {band.image ? (
                    <img
                      src={band.image}
                      alt=""
                      aria-hidden="true"
                      className="w-100 h-100 object-fit-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-secondary');
                        e.target.parentElement.innerHTML = '<div class="d-flex align-items-center justify-content-center h-100 w-100"><span class="text-white-50 small text-uppercase fw-bold tracking-wider">Photo Coming Soon</span></div>';
                      }}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-100 w-100">
                      <span className="text-white-50">Photo Unavailable</span>
                    </div>
                  )}
                </div>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-1">{band.name}</h5>
                  <p className="text-blonde-gold small mb-2">{band.genre}</p>
                  <p className="card-text text-muted small mb-0">
                    {band.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4 pt-0">
                  <span className="btn btn-outline-blonde rounded-0 w-100 text-uppercase small fw-bold tracking-widest py-2">
                    View Detail
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Watch & Listen Panel */}
      <div
        role="tabpanel"
        id="listen-panel"
        aria-labelledby="listen-tab"
        hidden={activeView !== 'listen'}
      >
        {/* Accessibility instructions */}
        <div className="visually-hidden" id="video-grid-instructions">
          Use arrow keys to navigate between bands. Press Enter or Space to expand or collapse a video.
          Press Home to go to the first band, End to go to the last.
        </div>

        <div className="alert alert-light border-0 rounded-0 mb-4 py-3" role="note">
          <div className="d-flex align-items-center gap-3">
            <span className="text-blonde-gold fs-4" aria-hidden="true">♫</span>
            <div>
              <strong>Listen Center</strong>
              <p className="mb-0 small text-muted">
                Preview our artists with sample performances. Select a band to watch their video.
                <span className="visually-hidden"> Use arrow keys to navigate, Enter to play.</span>
              </p>
            </div>
          </div>
        </div>

        <div
          ref={videoGridRef}
          className="row g-4 px-2"
          role="grid"
          aria-describedby="video-grid-instructions"
        >
          {bandsList.map((band, index) => (
            <div className="col-md-6 col-lg-4" key={band.id} role="gridcell">
              <div
                className={`card border-0 shadow-sm rounded-0 overflow-hidden transition-all ${
                  activeVideoId === band.id ? 'ring-blonde' : ''
                }`}
              >
                {/* Video Card Header - Always visible */}
                <div
                  data-video-card
                  className="card-body p-4 cursor-pointer hover-bg"
                  onClick={() => {
                    const newState = activeVideoId === band.id ? null : band.id
                    setActiveVideoId(newState)
                    announce(newState
                      ? `Playing video for ${band.name}. ${band.videoTitle}`
                      : `Stopped video for ${band.name}`)
                  }}
                  onKeyDown={(e) => handleVideoKeyDown(e, band, index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={activeVideoId === band.id}
                  aria-controls={`video-${band.id}`}
                  aria-label={`${band.name}. ${band.genre}. ${band.videoTitle}. ${
                    activeVideoId === band.id ? 'Video playing. Press to stop.' : 'Press to play video.'
                  }`}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: activeVideoId === band.id ? 'var(--blonde-gold)' : 'var(--blonde-cream)',
                        transition: 'all 0.2s ease'
                      }}
                      aria-hidden="true"
                    >
                      {activeVideoId === band.id ? (
                        <span className="text-white fs-5">▮▮</span>
                      ) : (
                        <span className="text-blonde-gold fs-5">▶</span>
                      )}
                    </div>
                    <div className="flex-grow-1 min-w-0">
                      <h5 className="fw-bold mb-0 text-truncate">{band.name}</h5>
                      <p className="text-blonde-gold small mb-0">{band.genre}</p>
                      <p className="text-muted small mb-0 text-truncate">{band.videoTitle}</p>
                    </div>
                    <span
                      className="text-muted small"
                      aria-hidden="true"
                    >
                      {activeVideoId === band.id ? '▲' : '▼'}
                    </span>
                  </div>
                </div>

                {/* Expandable Video Player */}
                <div
                  id={`video-${band.id}`}
                  className={`video-container ${activeVideoId === band.id ? 'show' : ''}`}
                  style={{
                    maxHeight: activeVideoId === band.id ? '350px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  {activeVideoId === band.id && (
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={`https://www.youtube.com/embed/${band.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                        title={`${band.name} - ${band.videoTitle}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      ></iframe>
                    </div>
                  )}
                  <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center">
                    <Link
                      to="/connect"
                      className="btn btn-blonde btn-sm rounded-0 text-uppercase small fw-bold tracking-widest"
                    >
                      Book This Band
                    </Link>
                    <a
                      href={`https://www.youtube.com/watch?v=${band.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary btn-sm rounded-0 text-uppercase small"
                      aria-label={`Watch ${band.name} on YouTube (opens in new tab)`}
                    >
                      View on YouTube
                      <span aria-hidden="true" className="ms-1">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Keyboard shortcuts help (visible on focus) */}
        <div className="mt-5 p-4 bg-light rounded-0">
          <h3 className="h6 fw-bold text-uppercase tracking-widest mb-3">
            <span aria-hidden="true" className="me-2">⌨</span>
            Keyboard Navigation
          </h3>
          <div className="row small text-muted">
            <div className="col-md-6">
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><kbd className="bg-dark text-white px-2 py-1 rounded-0">←</kbd> <kbd className="bg-dark text-white px-2 py-1 rounded-0">→</kbd> Switch between tabs</li>
                <li className="mb-2"><kbd className="bg-dark text-white px-2 py-1 rounded-0">Enter</kbd> or <kbd className="bg-dark text-white px-2 py-1 rounded-0">Space</kbd> Play/pause video</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><kbd className="bg-dark text-white px-2 py-1 rounded-0">↑</kbd> <kbd className="bg-dark text-white px-2 py-1 rounded-0">↓</kbd> Navigate between rows</li>
                <li className="mb-2"><kbd className="bg-dark text-white px-2 py-1 rounded-0">Home</kbd> / <kbd className="bg-dark text-white px-2 py-1 rounded-0">End</kbd> Jump to first/last</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-up:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.15)!important;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .hover-bg:hover {
          background-color: var(--blonde-cream);
        }
        .hover-bg:focus {
          background-color: var(--blonde-cream);
          outline: 3px solid var(--blonde-gold);
          outline-offset: -3px;
        }
        .ring-blonde {
          box-shadow: 0 0 0 3px var(--blonde-gold), 0 1rem 3rem rgba(0,0,0,.15)!important;
        }
        .min-w-0 {
          min-width: 0;
        }
        kbd {
          font-family: var(--font-sans);
          font-size: 0.75rem;
        }
        [data-video-card]:focus {
          outline: 3px solid var(--blonde-gold);
          outline-offset: -3px;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>

      {/* Band Detail Modal */}
      <Modal
        show={selectedBand !== null}
        onHide={() => setSelectedBand(null)}
        centered
        size="lg"
        contentClassName="rounded-0 border-0"
        aria-labelledby="band-modal-title"
      >
        {selectedBand && (
          <>
            <Modal.Header closeButton className="border-0 pb-0">
              <span className="visually-hidden" id="band-modal-title">
                Details for {selectedBand.name}
              </span>
            </Modal.Header>
            <Modal.Body className="p-4 p-md-5 pt-0">
              <div className="row align-items-center">
                <div className="col-md-5 mb-4 mb-md-0">
                  <div
                    className="bg-light shadow-sm"
                    style={{ height: '350px', overflow: 'hidden' }}
                  >
                    {selectedBand.image ? (
                      <img
                        src={selectedBand.image}
                        alt={`Photo of ${selectedBand.name}`}
                        className="w-100 h-100 object-fit-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('bg-secondary');
                          e.target.parentElement.innerHTML = '<div class="d-flex align-items-center justify-content-center h-100 w-100"><span class="text-white-50 small text-uppercase">Photo Unavailable</span></div>';
                        }}
                      />
                    ) : (
                      <span className="text-white-50">Band Photo</span>
                    )}
                  </div>
                </div>
                <div className="col-md-7 ps-md-5">
                  <h2 className="display-6 fw-bold mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{selectedBand.name}</h2>
                  <p className="text-blonde-gold mb-3">{selectedBand.genre}</p>
                  <div className="mb-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
                  <p className="text-muted fs-5 mb-4">{selectedBand.description}</p>

                  <div className="py-3 border-top border-bottom mb-4">
                    <h6 className="text-uppercase small fw-bold tracking-widest mb-3">Perfect For:</h6>
                    <ul className="row small text-muted list-unstyled mb-0">
                      <li className="col-6 mb-2">• Corporate Events</li>
                      <li className="col-6 mb-2">• Wedding Receptions</li>
                      <li className="col-6 mb-2">• Private Parties</li>
                      <li className="col-6 mb-2">• Festivals & Fairs</li>
                    </ul>
                  </div>

                  <div className="d-flex gap-3 mt-auto flex-wrap">
                    <Button
                      className="btn-blonde px-4 py-3 rounded-0 text-uppercase small fw-bold tracking-widest flex-grow-1"
                      onClick={() => {
                        setSelectedBand(null)
                        window.location.href = '/connect'
                      }}
                    >
                      Inquire / Book
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="px-4 py-3 rounded-0 text-uppercase small fw-bold tracking-widest"
                      onClick={() => {
                        setSelectedBand(null)
                        setActiveView('listen')
                        setActiveVideoId(selectedBand.id)
                      }}
                      aria-label={`Watch video of ${selectedBand.name}`}
                    >
                      <span aria-hidden="true">▶</span> Watch
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  )
}
