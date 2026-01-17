import { useState } from 'react'
import bands from '../data/bands.json'

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    venue: '',
    band: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // In production, this would submit to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="py-5">
              <div className="mb-4">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle border border-2 border-blonde-gold p-4">
                  <span className="display-4 text-blonde-gold">✓</span>
                </div>
              </div>
              <h2 className="display-5 fw-bold mb-3" style={{ fontFamily: 'var(--font-serif)' }}>Thank You!</h2>
              <p className="lead text-muted mb-5">
                We've received your booking request. Our team will review the details and be in touch within 24-48 hours.
              </p>
              <button
                className="btn btn-blonde px-5 py-3 rounded-0 text-uppercase small fw-bold tracking-widest"
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    date: '',
                    venue: '',
                    band: '',
                    message: '',
                  })
                }}
              >
                Send Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="text-blonde-gold fw-bold text-uppercase tracking-widest small">Inquiries</span>
        <h1 className="display-4 fw-bold mt-2" style={{ fontFamily: 'var(--font-serif)' }}>Book Your Event</h1>
        <div className="mx-auto mt-3 mb-4" style={{ width: '40px', height: '2px', backgroundColor: 'var(--blonde-gold)' }}></div>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
          Tell us about your vision, and we'll help find the perfect entertainment.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="shadow-lg bg-white overflow-hidden">
            <div className="row g-0">
              {/* Contact Sidebar */}
              <div className="col-lg-4 bg-blonde-dark text-white p-5 d-flex flex-column justify-content-between">
                <div>
                  <h4 className="fw-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>Get in Touch</h4>
                  <p className="opacity-75 mb-5">
                    Have questions before booking? Direct inquiries are welcome.
                  </p>
                  
                  <div className="mb-4">
                    <h6 className="text-blonde-gold text-uppercase tracking-widest small mb-2">Email</h6>
                    <a href="mailto:booking@blondeentertainment.com" className="text-white text-decoration-none fs-5">booking@blondeentertainment.com</a>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-blonde-gold text-uppercase tracking-widest small mb-2">Phone</h6>
                    <a href="tel:+13175550123" className="text-white text-decoration-none fs-5">(317) 555-0123</a>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-blonde-gold text-uppercase tracking-widest small mb-2">Location</h6>
                    <p className="fs-5 mb-0">Indianapolis, IN<br/>Servicing the Midwest</p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="d-flex gap-3">
                    <a href="#" className="text-white opacity-50 hover-opacity-100 transition-all"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="#" className="text-white opacity-50 hover-opacity-100 transition-all"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="#" className="text-white opacity-50 hover-opacity-100 transition-all"><i className="bi bi-linkedin fs-4"></i></a>
                  </div>
                  <p className="text-white-50 mt-4 small">
                    &copy; 2025 Blonde Entertainment
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="col-lg-8 p-5">
                <form onSubmit={handleSubmit}>
                  <h5 className="mb-4 pb-2 border-bottom fw-bold text-uppercase tracking-widest small">Contact Information</h5>
                  <div className="row g-3 mb-5">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-muted small">Name *</label>
                      <input
                        type="text"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label text-muted small">Company / Organization</label>
                      <input
                        type="text"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-muted small">Email *</label>
                      <input
                        type="email"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label text-muted small">Phone *</label>
                      <input
                        type="tel"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <h5 className="mb-4 pb-2 border-bottom fw-bold text-uppercase tracking-widest small">Event Details</h5>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label htmlFor="date" className="form-label text-muted small">Event Date *</label>
                      <input
                        type="date"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="venue" className="form-label text-muted small">Venue / Location *</label>
                      <input
                        type="text"
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="venue"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                        placeholder="e.g. The Ritz, Private Home, etc."
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="band" className="form-label text-muted small">Interested In</label>
                      <select
                        className="form-select rounded-0 p-3 border-light bg-light"
                        id="band"
                        name="band"
                        value={formData.band}
                        onChange={handleChange}
                      >
                        <option value="">I'm open to recommendations</option>
                        {bands.map(band => (
                          <option key={band.id} value={band.id}>
                            {band.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label text-muted small">Additional Details</label>
                      <textarea
                        className="form-control rounded-0 p-3 border-light bg-light"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your event..."
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-dark w-100 py-3 rounded-0 text-uppercase small fw-bold tracking-widest hover-gold">
                    Submit Booking Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .form-control:focus, .form-select:focus {
          box-shadow: none;
          border-color: var(--blonde-gold) !important;
          background-color: white !important;
        }
        .hover-gold:hover {
          background-color: var(--blonde-gold);
          border-color: var(--blonde-gold);
        }
      `}</style>
    </div>
  )
}
