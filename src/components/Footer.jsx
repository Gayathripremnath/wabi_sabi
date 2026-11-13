import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'
import logo from '../assets/Logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" aria-label="Wabi Sabi home">
            <img src={logo} alt="Wabi Sabi Interiors" />
          </a>
          <p>
            Thoughtful interiors and quality materials, made for the way you live.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Instagram size={17} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <Linkedin size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-label">EXPLORE</span>
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#expertise">Interior design</a>
          <a href="#expertise">Plywood solutions</a>
          <a href="#projects">Our projects</a>
        </div>

        <div className="footer-column">
          <span className="footer-label">GET IN TOUCH</span>
          <a href="tel:+910000000000">+91 00000 00000</a>
          <a href="mailto:hello@wabisabi.example">hello@wabisabi.example</a>
          <p>Address placeholder<br />City, State, India</p>
        </div>

        <a className="footer-cta" href="mailto:hello@wabisabi.example">
          Have a project in mind?
          <span>Let&apos;s make it meaningful. <ArrowUpRight size={19} /></span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Wabi Sabi. All rights reserved.</span>
        <span>Designed with intention.</span>
      </div>
    </footer>
  )
}

export default Footer
