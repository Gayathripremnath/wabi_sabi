import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Pause,
  Play,
  Quote,
  Sparkles,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import './Home.css'

const photos = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
  experience: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2100&q=88',
  cardInterior: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
  cardPlywood: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=85',
  cardCraft: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85',
  about: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=88',
  design: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88',
  plywood: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88',
  projectLiving: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=88',
  projectKitchen: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1300&q=88',
  projectBedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=88',
  projectWood: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1300&q=88',
  values: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=88',
  testimonial: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=88',
  cta: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88',
}

const heroSlides = [
  {
    image: photos.hero,
    alt: 'Warm modern living room with natural materials',
    label: 'LIVING SPACES',
  },
  {
    image: photos.projectBedroom,
    alt: 'Quiet bedroom with soft neutral finishes',
    label: 'RESTFUL DETAILS',
  },
  {
    image: photos.values,
    alt: 'Light-filled interior with natural textures',
    label: 'NATURAL FINISHES',
  },
]

const experienceCards = [
  {
    image: photos.cardInterior,
    title: 'Thoughtful Interior Design',
    text: 'Every detail considered. Every space made personal.',
  },
  {
    image: photos.cardPlywood,
    title: 'Quality Plywood Selection',
    text: 'Dependable materials, chosen for lasting beauty.',
  },
  {
    image: photos.cardCraft,
    title: 'Crafted to Perfection',
    text: 'A considered finish, brought to life with care.',
  },
]

const projects = [
  { title: 'Modern Living Spaces', type: 'RESIDENCE · 2025', image: photos.projectLiving, className: 'project-tall' },
  { title: 'Contemporary Kitchens', type: 'KITCHEN · 2025', image: photos.projectKitchen, className: '' },
  { title: 'Elegant Bedrooms', type: 'RESIDENCE · 2024', image: photos.projectBedroom, className: '' },
  { title: 'Custom Wood Interiors', type: 'DETAILS · 2024', image: photos.projectWood, className: 'project-tall' },
]

const strengths = [
  {
    number: '01',
    icon: <Sparkles size={18} strokeWidth={1.4} />,
    title: 'Thoughtful Design',
    text: 'Spaces shaped around your routines, your needs and what matters most.',
  },
  {
    number: '02',
    icon: <Check size={18} strokeWidth={1.4} />,
    title: 'Quality Materials',
    text: 'Carefully selected plywood and finishes made to stand the test of time.',
  },
  {
    number: '03',
    icon: <ArrowUpRight size={18} strokeWidth={1.4} />,
    title: 'Skilled Craftsmanship',
    text: 'A close eye on every detail, from first sketch to final installation.',
  },
  {
    number: '04',
    icon: <Quote size={18} strokeWidth={1.4} />,
    title: 'Customer Satisfaction',
    text: 'A collaborative process that keeps you informed and involved throughout.',
  },
]

const testimonials = [
  {
    quote:
      '“The team understood how we wanted our home to feel. Every choice feels considered, and the result is both beautiful and easy to live in.”',
    name: 'Client name placeholder',
    project: 'Residential project',
  },
  {
    quote:
      '“From the material selection to the finishing touches, the entire experience felt thoughtful, clear and genuinely personal.”',
    name: 'Client name placeholder',
    project: 'Interior design project',
  },
]

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ScrollProgressButton() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(
        scrollableHeight > 0
          ? Math.min(window.scrollY / scrollableHeight, 1)
          : 0,
      )
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <button
      className="scroll-progress-button"
      type="button"
      aria-label={`Scroll to top. Page progress ${Math.round(progress * 100)} percent`}
      style={{ '--progress': `${progress * 360}deg` }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <span><ArrowUp size={18} strokeWidth={1.6} /></span>
    </button>
  )
}

function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [heroPaused, setHeroPaused] = useState(false)
  const activeHero = heroSlides[activeHeroIndex]

  useEffect(() => {
    if (heroPaused) return undefined

    const interval = setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroPaused])

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow"><span /> INTERIOR DESIGN & PLYWOOD SOLUTIONS</span>
            <h1>
              Spaces Designed
              <br />
              Around <em>Your</em> Life.
            </h1>
            <p className="hero-description">
              Thoughtfully designed interiors and quality plywood solutions,
              bringing together timeless aesthetics, functionality and
              craftsmanship.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                EXPLORE OUR WORK <ArrowRight size={16} />
              </a>
              <a className="text-link" href="#contact">
                LET&apos;S TALK <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
          <div className="hero-footnote">
            <span>01 — 04</span>
            <span>DESIGNED TO FEEL LIKE HOME</span>
          </div>
        </div>
        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={activeHero.image}
              className="cover-image"
              src={activeHero.image}
              alt={activeHero.alt}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
            />
          </AnimatePresence>
          <div className="hero-carousel-controls">
            <div className="hero-thumbnails" role="group" aria-label="Choose a landing image">
              {heroSlides.map((slide, index) => (
                <button
                  className="hero-thumbnail"
                  type="button"
                  key={slide.image}
                  aria-label={`Show ${slide.label.toLowerCase()}`}
                  aria-pressed={activeHeroIndex === index}
                  onClick={() => setActiveHeroIndex(index)}
                >
                  <img src={slide.image} alt="" />
                  <span>0{index + 1} · {slide.label}</span>
                </button>
              ))}
            </div>
            <button
              className="hero-carousel-toggle"
              type="button"
              aria-label={heroPaused ? 'Play landing image slideshow' : 'Pause landing image slideshow'}
              onClick={() => setHeroPaused((paused) => !paused)}
            >
              {heroPaused ? <Play size={13} /> : <Pause size={13} />}
            </button>
          </div>
          <div className="hero-image-note">
            <span>WABI SABI</span>
            <span>{activeHero.label} · WABI SABI</span>
          </div>
        </motion.div>
        <a className="scroll-cue" href="#experience" aria-label="Scroll to design experience">
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15} strokeWidth={1.4} />
        </a>
      </section>

      <section className="experience-section" id="experience">
        <div className="experience-backdrop" style={{ backgroundImage: `url(${photos.experience})` }} />
        <div className="experience-shade" />
        <Reveal className="experience-heading">
          <span className="eyebrow eyebrow-light">A MORE CONSIDERED WAY TO LIVE</span>
          <h2>DESIGN YOUR SPACE.<br /><span>EXPERIENCE WABI SABI.</span></h2>
        </Reveal>
        <div className="experience-cards">
          {experienceCards.map((card, index) => (
            <Reveal className="experience-card" key={card.title} delay={index * 0.1}>
              <div className="image-frame">
                <img src={card.image} alt="" />
              </div>
              <div className="experience-card-copy">
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <Reveal className="about-image image-frame">
          <img src={photos.about} alt="Quiet contemporary interior with natural wood and warm light" />
          <span className="image-caption">A HOME THAT FEELS LIKE YOU</span>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <span className="eyebrow"><span /> ABOUT WABI SABI</span>
          <h2>Where Design Meets <em>Craftsmanship.</em></h2>
          <p>
            At Wabi Sabi, we believe every space tells a story. Our team combines
            creative interior design with dependable plywood solutions to
            transform ideas into beautiful, functional environments.
          </p>
          <a className="underlined-link" href="#expertise">
            EXPLORE MORE <ArrowUpRight size={16} />
          </a>
          <div className="about-detail-photo">
            <img src={photos.cardPlywood} alt="Close-up of a natural interior finish" />
          </div>
        </Reveal>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-heading section-pad">
          <div>
            <span className="eyebrow"><span /> WHAT WE DO</span>
            <h2>Made for living.<br /><em>Made to last.</em></h2>
          </div>
          <p>Design and materials, brought together to create a more thoughtful home.</p>
        </div>
        <article className="service-row">
          <div className="service-image image-frame">
            <img src={photos.design} alt="Refined contemporary living space designed for everyday life" />
            <span className="service-number">01</span>
          </div>
          <div className="service-copy">
            <span className="eyebrow"><span /> OUR EXPERTISE</span>
            <h3>Interior<br /><em>Design</em></h3>
            <p>
              Beautifully planned spaces that reflect your personality,
              lifestyle and everyday needs.
            </p>
            <a className="underlined-link" href="#contact">
              DISCOVER INTERIOR DESIGN <ArrowRight size={16} />
            </a>
          </div>
        </article>
        <article className="service-row service-row-reverse">
          <div className="service-image image-frame">
            <img src={photos.plywood} alt="Natural wood surface and refined interior material detail" />
            <span className="service-number">02</span>
          </div>
          <div className="service-copy">
            <span className="eyebrow"><span /> OUR EXPERTISE</span>
            <h3>Plywood<br /><em>Solutions</em></h3>
            <p>
              Quality plywood materials and carefully selected finishes for
              furniture, interiors and lasting architectural applications.
            </p>
            <a className="underlined-link" href="#contact">
              DISCOVER OUR MATERIALS <ArrowRight size={16} />
            </a>
          </div>
        </article>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="section-heading projects-heading">
          <div>
            <span className="eyebrow"><span /> SELECTED WORKS</span>
            <h2>Spaces That <em>Inspire.</em></h2>
          </div>
          <a className="underlined-link" href="#contact">
            START A PROJECT <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal className={`project-card ${project.className}`} key={project.title} delay={(index % 2) * 0.1}>
              <a href="#contact" aria-label={`Discuss a project like ${project.title}`}>
                <div className="project-image image-frame">
                  <img src={project.image} alt={project.title} />
                  <span className="project-open"><ArrowUpRight size={19} /></span>
                </div>
                <div className="project-meta">
                  <div><span>{project.type}</span><h3>{project.title}</h3></div>
                  <span className="project-index">0{index + 1}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="values-image image-frame">
          <img src={photos.values} alt="Bright architectural kitchen with warm natural materials" />
        </div>
        <div className="values-panel">
          <span className="values-ornament" aria-hidden="true">WABI SABI</span>
          <span className="eyebrow"><span /> WHY CHOOSE US</span>
          <h2>Designed with Care.<br /><em>Delivered with Quality.</em></h2>
          <div className="strength-grid">
            {strengths.map((item) => (
              <div className="strength-item" key={item.number}>
                <span className="strength-icon">{item.icon}</span>
                <span className="strength-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section section-pad">
        <div className="testimonials-copy">
          <span className="eyebrow"><span /> OUR CLIENTS</span>
          <h2>Stories Behind<br /><em>Beautiful Spaces.</em></h2>
          <div className="testimonial-cards">
            {testimonials.map((item, index) => (
              <Reveal className="testimonial-card" key={`${item.name}-${index}`} delay={index * 0.1}>
                <Quote size={22} strokeWidth={1.2} />
                <p>{item.quote}</p>
                <div className="client-meta">
                  <span className="client-avatar" aria-hidden="true">{index + 1}</span>
                  <span><strong>{item.name}</strong><small>{item.project}</small></span>
                </div>
              </Reveal>
            ))}
          </div>
          <span className="testimonial-note">SAMPLE PLACEHOLDERS — REPLACE WITH APPROVED CLIENT STORIES</span>
        </div>
        <Reveal className="testimonials-image image-frame">
          <img src={photos.testimonial} alt="Warm family kitchen with natural textures and soft daylight" />
          <span className="image-caption">SPACES TO SHARE</span>
        </Reveal>
      </section>

      <section className="final-cta" id="start-project">
        <img src={photos.cta} alt="" />
        <div className="final-cta-shade" />
        <Reveal className="final-cta-content">
          <span className="eyebrow eyebrow-light"><span /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Let&apos;s Create a Space<br />You&apos;ll Love Coming <em>Home To.</em></h2>
          <p>
            Have a vision for your space? Let&apos;s make it a reality with
            thoughtful design and quality craftsmanship.
          </p>
          <a className="button button-cream" href="mailto:hello@wabisabi.example">
            START YOUR PROJECT <ArrowUpRight size={16} />
          </a>
        </Reveal>
      </section>
      <ScrollProgressButton />
    </main>
  )
}

export default Home
