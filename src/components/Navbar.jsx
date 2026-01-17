import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/bands', label: 'Bands' },
    { to: '/blonde-acoustics', label: 'Acoustics' },
    { to: '/talent', label: 'Talent' },
    { to: '/photos', label: 'Photos' },
    { to: '/blonde-hope', label: 'Hope' },
    { to: '/saucey-hippie', label: 'Saucey' },
    { to: '/calendar', label: 'Calendar' },
    { to: '/connect', label: 'Connect' },
  ]

  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-white sticky-top py-0 border-bottom">
      <div className="container-fluid px-lg-5">
        <Link to="/" className="navbar-brand py-3">
          <Logo />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map(link => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link px-3 py-4 text-uppercase small fw-bold tracking-wider ${isActive ? 'text-blonde-gold border-bottom-blonde' : 'text-dark'}`
                  }
                  style={({ isActive }) => ({
                    letterSpacing: '0.1em',
                    borderBottom: isActive ? '3px solid var(--blonde-gold)' : '3px solid transparent',
                    transition: 'var(--transition-smooth)'
                  })}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <Link to="/connect" className="btn btn-blonde px-4 py-2 text-uppercase small fw-bold tracking-wider rounded-0">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Logo() {
  return (
    <div className="d-flex flex-column" style={{ lineHeight: '0.8' }}>
      <span style={{ 
        fontFamily: 'var(--font-serif)', 
        fontSize: '28px', 
        fontWeight: '700', 
        letterSpacing: '-0.02em',
        color: 'var(--blonde-dark)'
      }}>
        BL<span style={{ color: 'var(--blonde-gold)' }}>O</span>NDE
      </span>
      <span style={{ 
        fontFamily: 'var(--font-sans)', 
        fontSize: '10px', 
        fontWeight: '600', 
        letterSpacing: '0.45em',
        color: 'var(--blonde-dark)',
        marginLeft: '2px'
      }}>
        ENTERTAINMENT
      </span>
    </div>
  )
}
