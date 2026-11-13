import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logo from '../assets/Logo.png'
import './Navbar.css'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Expertise', '#expertise'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <button
          className="menu-trigger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>

        <a className="brand-mark" href="#home" aria-label="Wabi Sabi home">
          <img src={logo} alt="Wabi Sabi Interiors" />
        </a>

        <div className="header-contact">
          <a className="header-phone" href="tel:+910000000000">
            <span>Call us:</span> +91 00000 00000
          </a>
          <a className="talk-link" href="#contact">
            Let&apos;s Talk <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </header>

      <div
        className={`menu-overlay${menuOpen ? ' is-open' : ''}`}
        id="site-menu"
        aria-hidden={!menuOpen}
      >
        <nav className="overlay-links" aria-label="Main navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={closeMenu}>
              <span className="overlay-index">0{index + 1}</span>
              <span>{label}</span>
              <ArrowUpRight className="overlay-arrow" size={23} strokeWidth={1.3} />
            </a>
          ))}
          <p>Thoughtful spaces, made to feel like yours.</p>
        </nav>
      </div>
    </>
  )
}

export default Navbar
