import { Link } from 'react-router-dom'

export default function Talent() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Talent</h1>
        <p className="lead text-muted">
          Musicians, models, and performers welcome
        </p>
      </div>

      <div className="row g-4">
        {/* Musicians Section */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h4 className="mb-3">Musicians & Performers</h4>
              <p className="text-muted">
                Blonde Entertainment is always looking for talented musicians
                and performers to join our roster. With over 25 years of
                experience in the Midwest entertainment industry, we provide:
              </p>
              <ul className="text-muted mb-4">
                <li>Professional booking and management</li>
                <li>Marketing and promotional support</li>
                <li>Corporate and private event opportunities</li>
                <li>Networking with other talented artists</li>
              </ul>
              <p className="text-muted small mb-4">
                <strong>We're looking for:</strong> Cover bands, solo acoustic
                performers, DJs, and specialty acts.
              </p>
              <Link to="/connect" className="btn btn-blonde">
                Submit Your Info
              </Link>
            </div>
          </div>
        </div>

        {/* Blonde Talent Section */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h4 className="mb-3">Blonde Talent</h4>
              <p className="text-muted">
                Our sister agency, Blonde Talent, is a full-service model
                scouting and talent agency based in Indianapolis. They represent
                models and talent for:
              </p>
              <ul className="text-muted mb-4">
                <li>Commercial and print modeling</li>
                <li>Brand ambassadors</li>
                <li>Promotional events</li>
                <li>Acting and hosting</li>
              </ul>
              <p className="text-muted small mb-4">
                Looking to break into modeling or promotional work? Blonde
                Talent is always scouting for new faces.
              </p>
              <a
                href="https://www.blondetalent.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-blonde"
              >
                Visit Blonde Talent &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5 py-4 bg-blonde-cream rounded">
        <p className="mb-2 text-muted">
          Ready to take your career to the next level?
        </p>
        <p className="mb-0">
          <Link to="/connect" className="text-blonde-gold fw-bold">
            Get in touch
          </Link>{' '}
          <span className="text-muted">
            — we'd love to hear from you.
          </span>
        </p>
      </div>
    </div>
  )
}
