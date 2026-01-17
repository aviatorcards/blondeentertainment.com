export default function Calendar() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">Event Calendar</h1>
        <p className="lead text-muted">
          See where our bands are playing next
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              {/*
                Google Calendar Embed
                Replace the src with the actual calendar embed URL
              */}
              <iframe
                src="https://calendar.google.com/calendar/embed?src=example%40gmail.com&ctz=America%2FIndiana%2FIndianapolis"
                style={{ border: 0, width: '100%', height: '600px' }}
                frameBorder="0"
                scrolling="no"
                title="Blonde Entertainment Event Calendar"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-muted small">
              Want to add an event to your calendar? Click on any event above to
              see details and add it directly to your personal calendar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
