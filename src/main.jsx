import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Award, BookOpen,
  BriefcaseBusiness, Check, Code2, ExternalLink, Github, Globe2, Layers3, FileText,
  Linkedin, Mail, Menu, Moon, Sun, X, Zap, MapPinned, Activity, Leaf,
  Container, ChartNoAxesCombined, Terminal, Download, Sparkles
} from 'lucide-react'
import './styles.css'

const projects = [
  {
    number: '01',
    title: 'Net Zero Portal',
    type: 'SUSTAINABILITY · FULL-STACK',
    description: 'A sustainability portal for tracking energy, water consumption, and waste generation using IoT data, with content management and analytical dashboards.',
    impact: 'Connects resource data with actionable sustainability insights.',
    stack: ['React.js', 'AEM', 'Python', 'PostgreSQL', 'Grafana'],
    icon: Leaf,
    theme: 'sage',
    visual: 'netzero'
  },
  {
    number: '02',
    title: 'Smart City IoT Dashboard',
    type: 'IOT · REAL-TIME MONITORING',
    description: 'A full-stack dashboard for Wi-SUN smart streetlight systems with real-time device monitoring, map-based analytics, and network topology visualization.',
    impact: 'Supported monitoring and control of 60+ connected devices.',
    stack: ['React.js', 'Python', 'PostgreSQL', 'Grafana'],
    icon: MapPinned,
    theme: 'blue',
    visual: 'city'
  },
  {
    number: '03',
    title: 'Transformer Health Monitoring',
    type: 'ANALYTICS · DASHBOARDS',
    description: 'A transformer monitoring proof of concept featuring time-interval filtering, hierarchical drill-down analytics, user management, and threshold-based alerts.',
    impact: 'Made transformer health signals easier to explore and review.',
    stack: ['Tableau', 'Python', 'PostgreSQL', 'React.js'],
    icon: Activity,
    theme: 'amber',
    visual: 'transformer'
  },
  {
    number: '04',
    title: 'CI/CD Pipeline & Monitoring',
    type: 'DEVOPS · AUTOMATION',
    description: 'An end-to-end deployment workflow using automated builds and testing, Docker containers, and Grafana monitoring for application health and resource usage.',
    impact: 'Created a more repeatable path from code changes to deployment.',
    stack: ['Git', 'Jenkins', 'Docker', 'Grafana'],
    icon: Container,
    theme: 'violet',
    visual: 'pipeline'
  }
]

const skills = [
  { label: 'Frontend', items: ['React.js', 'AEM', 'HTML', 'CSS', 'JavaScript'] },
  { label: 'Backend', items: ['Python', 'FastAPI', 'Node.js'] },
  { label: 'Database', items: ['PostgreSQL'] },
  { label: 'DevOps', items: ['Git', 'Docker', 'Jenkins'] },
  { label: 'Visualization', items: ['Grafana', 'Tableau'] },
  { label: 'Tools', items: ['Postman', 'Locust', 'Figma', 'Canva', 'Blender'] }
]

const publications = [
  { title: 'Insights into Smart City Solutions', venue: 'TSDSI Whitepaper', link: '' },
  { title: 'WF-IoT 2023', venue: 'IEEE World Forum on Internet of Things', link: 'https://doi.org/10.1109/WF-IoT58464.2023.10539501' },
  { title: 'APSCON 2024', venue: 'IEEE Applied Sensing Conference', link: 'https://doi.org/10.1109/APSCON300364.2024.10465845' },
  { title: 'Exploratory Study on oneM2M-based Interoperability', venue: 'ICSA 2024', link: '' }
]

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('ushasri-theme') || 'light' } catch { return 'light' }
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('ushasri-theme', theme) } catch { }
  }, [theme])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light')
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Ushasri home" onClick={closeMenu}>
          <span className="brand-mark">UM</span>
          <span className="brand-name">ushasri<span>.</span></span>
        </a>
        <button className="mobile-menu-button icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#writing" onClick={closeMenu}>Research</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> FULL-STACK · IOT · DEVOPS</div>
            <h1>Ushasri <span className="text-accent">Mogadali</span></h1>
            <p className="hero-intro">Software Engineer with 4 years of experience in full-stack development, IoT platforms, and DevOps practices. Skilled in Python, React.js, PostgreSQL, Docker with experience building production-grade applications, and real time monitoring solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-number">4<span>+</span></span><span className="meta-label">Years in software</span></div>
              <div className="meta-line" />
              <div><span className="meta-number">6</span><span className="meta-label">Research Publications</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={`${import.meta.env.BASE_URL}photo.png`} alt="Ushasri Mogadali" />

            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

          </div>
        </section>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / A LITTLE ABOUT ME</span>
            <h2>Curious by nature.<br /><span className="text-muted">Practical by design.</span></h2>
          </div>
          <div className="about-content">
            <p className="about-lead">I work at the intersection of application development, connected devices, and data-driven decision-making.</p>
            <p>My experience spans building full-stack dashboards, integrating APIs, visualizing live device data, and improving deployment workflows. I’ve also collaborated with research, government, and enterprise stakeholders — and helped teams move ideas into working solutions.</p>
            <p>I care about making complex systems easier to understand, useful to the people who rely on them, and maintainable for the people who build them.</p>
            <a className="text-link" href="#experience">A little more about my journey <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="section-wrap section-block work-section" id="work">
          <div className="section-heading heading-row">
            <div><span className="section-kicker">02 / Projects</span><h2>Projects with a <span className="text-muted">purpose.</span></h2></div>
            <span className="section-side-note">A selection of engineering<br />work and problem-solving.</span>
          </div>
          <div className="projects-grid">
            {projects.map(project => <ProjectCard key={project.number} project={project} onOpen={() => setActiveProject(project)} />)}
          </div>
          <p className="project-footnote"><Sparkles size={15} /> Project visuals are illustrative. Add approved screenshots and verified live/repository links before publishing.</p>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap section-block">
            <div className="section-heading heading-row">
              <div><span className="section-kicker">03 / EXPERIENCE</span><h2>Where I’ve <span className="text-muted">made an impact.</span></h2></div>
              <BriefcaseBusiness className="heading-icon" size={30} />
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">OCT 2025 — AUG 2026</div>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-title-row"><h3>Senior Research Translation Engineer</h3></div>
                  <p className="timeline-org">IIIT Hyderabad <span>·</span> Smart City Research Center</p>
                  <ul>
                    <li>Contributed to the development and maintenance of a City IoT Operating Platform based on oneM2M standards.</li>
                    <li>Implemented Git-based workflows and Jenkins CI/CD pipelines for build, testing, and deployment.</li>
                    <li>Led and mentored a team of 7 through task planning, code reviews, documentation, and intern training.</li>
                    <li>Co-authored two peer-reviewed research publications.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">AUG 2022 — SEP 2025</div>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-title-row"><h3>Research Translation Engineer</h3></div>
                  <p className="timeline-org">IIIT Hyderabad <span>·</span> Smart City Research Center</p>
                  <ul>
                    <li>Built and deployed a full-stack Wi-SUN streetlight dashboard for real-time monitoring of 60+ devices.</li>
                    <li>Developed IoT analytics dashboards supporting 300+ devices across 10+ utility and environmental monitoring domains.</li>
                    <li>Created transformer health analytics with drill-downs, user management, and alerting.</li>
                    <li>Conducted load testing and performance analysis using Locust; co-authored four peer-reviewed publications.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-heading">
            <span className="section-kicker">04 / Skills</span>
            <h2>The tools behind <span className="text-muted">the work.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <div className="skill-group" key={group.label}>
                <div className="skill-group-head"><span>0{index + 1}</span><h3>{group.label}</h3></div>
                <div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="research-band" id="writing">
          <div className="section-wrap section-block">
            <div className="section-heading heading-row">
              <div><span className="section-kicker">05 / RESEARCH & RECOGNITION</span><h2>Achievements</h2></div>
              <BookOpen className="heading-icon" size={30} />
            </div>
            <div className="research-layout">
              <div className="publication-list">
                {publications.map((item, index) => (
                  <div className="publication-row" key={item.title}>
                    <span className="publication-index">0{index + 1}</span>
                    <div className="publication-info"><h3>{item.title}</h3><p>{item.venue}</p></div>
                    {item.link ? <a className="publication-link" href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}><ArrowUpRight size={18} /></a> : <span className="publication-unlinked" title="Add a verified publication link when available"><ExternalLink size={16} /></span>}
                  </div>
                ))}
              </div>
              <div className="recognition-card">
                <div className="recognition-icon"><Award size={24} /></div>
                <span className="section-kicker">HIGHLIGHTS</span>
                <h3>Recognition for work that matters.</h3>
                <div className="recognition-item"><span className="recognition-bullet" /><p>Awarded by Silicon Labs for excellence in real-time data visualization and dashboard development.</p></div>
                <div className="recognition-item"><span className="recognition-bullet" /><p>Best User Application at the International oneM2M Hackathon 2023.</p></div>
                <div className="recognition-item"><span className="recognition-bullet" /><p>Represented the organization at India Mobile Congress and R&D exhibitions.</p></div>
              </div>
            </div>

            <div className="education-line">
              <div>
                <span className="section-kicker">EDUCATION</span>
                <h3>B.Tech in Computer Science</h3>
                <p>Kakinada Institute of Engineering and Technology for Women · JNTUK</p>
              </div>
              <span className="education-year">
                2018 — 2022 <i>·</i> CGPA 7.85
              </span>
            </div>

            <div className="education-line no-border">
              <div>
                <h3>Intermediate (Class XII)</h3>
                <p>Pragati Vidyalaya Junior College</p>
              </div>
              <span className="education-year">
                2016 — 2018 <i>·</i> CGPA 9.2
              </span>
            </div>

            <div className="education-line no-border">
              <div>
                <h3>Secondary School Certificate (SSC, Class X)</h3>
                <p>Government Girls High School</p>
              </div>
              <span className="education-year">
                2015 — 2016 <i>·</i> CGPA 8.8
              </span>
            </div>

          </div>
        </section>


        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="contact-copy">
              <span className="section-kicker">07 / Contact</span>
              <h2>Open for opportunities</h2>
              <p>Open to software engineering opportunities and projects. If you’re building something useful, I’d love to hear about it.</p>
              <a className="button button-light" href="mailto:ushasrimogadali@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>

            </div>
            <div className="contact-details">
              <span className="contact-label">GET IN TOUCH</span>
              <a href="mailto:ushasrimogadali@gmail.com"><Mail size={17} /> ushasrimogadali@gmail.com <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/search/results/people/?keywords=Ushasri%20Mogadali" target="_blank" rel="noreferrer"><Linkedin size={17} /> Find me on LinkedIn <ArrowUpRight size={15} /></a>
              <a href="https://www.github.com/ushasrimogodali" target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ArrowUpRight size={15} /></a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={17} /> View My Resume <ArrowUpRight size={14} /></a>
            </div>
            <div className="contact-decoration">UM<span>.</span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home"><span className="brand-mark">UM</span><span className="brand-name">ushasri<span>.</span></span></a>
          <span className="footer-copy">© {new Date().getFullYear()} Ushasri Mogadali</span>
        </div>
      </footer>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const Icon = project.icon
  return (
    <article className={`project-card project-${project.theme}`}>
      <button className="project-open" onClick={onOpen} aria-label={`Read more about ${project.title}`}>
        <div className={`project-art art-${project.visual}`}>
          <div className="art-topline"><span>CASE STUDY / {project.number}</span><span className="art-live"><span /> CONCEPT VISUAL</span></div>
          <ProjectVisual type={project.visual} />
          <div className="art-icon"><Icon size={19} /></div>
        </div>
        <div className="project-card-body">
          <div className="project-type">{project.type}</div>
          <div className="project-title-row"><h3>{project.title}</h3><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
          <p>{project.description}</p>
          <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </button>
    </article>
  )
}

function ProjectVisual({ type }) {
  if (type === 'netzero') return (
    <div className="mock-dashboard">
      <div className="mock-side"><span /><span /><span /><span /></div>
      <div className="mock-main"><div className="mock-heading"><b>Resource overview</b><span>↗</span></div><div className="mock-metrics"><div><i>ENERGY</i><b>84.6</b><small>MWh</small></div><div><i>WATER</i><b>62.3</b><small>kL</small></div></div><div className="mock-chart"><span style={{ height: '38%' }} /><span style={{ height: '52%' }} /><span style={{ height: '43%' }} /><span style={{ height: '72%' }} /><span style={{ height: '61%' }} /><span style={{ height: '84%' }} /><span style={{ height: '68%' }} /><span style={{ height: '94%' }} /></div></div>
    </div>
  )
  if (type === 'city') return (
    <div className="city-visual"><div className="city-map-grid" /><div className="city-road road-a" /><div className="city-road road-b" /><div className="city-road road-c" />{Array.from({ length: 13 }, (_, i) => <span className={`map-pin pin-${i + 1}`} key={i}><i /></span>)}<div className="map-legend"><span /> Device online <b>60+</b></div></div>
  )
  if (type === 'transformer') return (
    <div className="transformer-visual"><div className="transformer-top"><span>HEALTH INDEX</span><b>92.8 <small>/ 100</small></b><i>● Within expected range</i></div><div className="transformer-chart"><svg viewBox="0 0 320 100" preserveAspectRatio="none" aria-label="Illustrative monitoring chart"><path d="M0 72 C20 68,25 35,47 44 S70 74,92 57 S121 24,143 40 S170 73,190 51 S218 35,237 44 S266 68,285 37 S304 34,320 21" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></div><div className="transformer-labels"><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span></div></div>
  )
  return (
    <div className="pipeline-visual"><div className="pipeline-node"><Code2 size={17} /><span>Commit</span></div><div className="pipeline-connector"><i /></div><div className="pipeline-node"><Zap size={17} /><span>Build</span></div><div className="pipeline-connector"><i /></div><div className="pipeline-node"><Check size={17} /><span>Test</span></div><div className="pipeline-connector"><i /></div><div className="pipeline-node"><Globe2 size={17} /><span>Deploy</span></div><div className="pipeline-status"><span /> PIPELINE READY</div></div>
  )
}

function ProjectModal({ project, onClose }) {
  const Icon = project.icon
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <div className={`modal-icon ${project.theme}`}><Icon size={22} /></div>
        <span className="section-kicker">PROJECT / {project.number}</span>
        <h2 id="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <div className="modal-impact"><span>THE FOCUS</span><p>{project.impact}</p></div>
        <span className="section-kicker">TECHNOLOGY</span>
        <div className="project-stack modal-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
        <p className="modal-note">This case study is based on the experience described in the supplied resume. Add approved screenshots, detailed process notes, and a verified repository or demo link before publishing.</p>
        <button className="button button-primary modal-done" onClick={onClose}>Back to portfolio <ArrowRight size={16} /></button>
      </section>
    </div>
  )
}

function Service({ icon: Icon, number, title, text }) {
  return <article className="service-card"><div className="service-top"><span>{number}</span><Icon size={21} /></div><h3>{title}</h3><p>{text}</p><ArrowDownRight className="service-arrow" size={18} /></article>
}

createRoot(document.getElementById('root')).render(<App />)
