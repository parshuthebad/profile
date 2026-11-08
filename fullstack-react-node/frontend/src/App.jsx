import { useEffect, useState } from "react";
import "./App.css";

const FALLBACK_DATA = {
  name: "Parashuram Vaddekunta",
  headline: "CSE Student @ KMIT | NxtWave CCBP 4.0 Academy | Python Java SQL Web Development Machine Learning | Building Projects",
  location: "Greater Hyderabad Area, India",
  linkedin: "https://www.linkedin.com/in/parashuramvaddekunta",
  github: "https://github.com/parshuthebad",
  twitter: "https://x.com/parshuthebad",
  contact: {
    address: "3-6-573/1, Street Number 8, Advocates Colony, Himayatnagar, Hyderabad, Telangana 500029, India",
    mobile: "+91 9346875514",
    email: "parashuramvaddekunta@gmail.com"
  },
  skills: [
    "Algorithms", "Problem Solving", "Python", "Java", "SQL",
    "Web Development", "Machine Learning", "Full Stack Development", "Generative AI"
  ],
  projects: [
    {
      title: "Integrated Urban Risk Analytics & Resource Prioritization",
      badge: "Machine Learning & Spatial AI",
      description: "Accident severity prediction and spatial clustering prioritization system built with US Road Accidents dataset.",
      tech: ["Python", "Scikit-Learn", "Spatial Clustering"]
    },
    {
      title: "AI-Based Crop Disease Detection Platform",
      badge: "Deep Learning + FastAPI",
      description: "MobileNetV2 crop disease diagnostic suite with FastAPI backend and WhatsApp bot integration.",
      tech: ["MobileNetV2", "FastAPI", "React"]
    },
    {
      title: "Amaze - Competitive Programming Platform",
      badge: "Full-Stack Web",
      description: "Interactive coding and algorithmic problem-solving portal with live learning tracks.",
      tech: ["JavaScript", "HTML/CSS", "SQL"]
    }
  ],
  certifications: [
    "One Day Workshop In Generative AI & Agentic AI",
    "Python 101 for Data Science",
    "Ethical Hacking & Cybersecurity Workshop",
    "Data Analysis with Python",
    "ALGOTHON'26 - National Level Hackathon (Participation)"
  ],
  education: [
    { institution: "Keshav Memorial Institute of Technology (KMIT)", program: "B.Tech in Computer Science and Engineering", duration: "August 2025 - August 2029" },
    { institution: "NxtWave", program: "CCBP 4.0 Academy, Full Stack Development, AI and ML", duration: "June 2025 - June 2029" },
    { institution: "Narayana Junior College - Bhagyalatha", program: "Intermediate", duration: "June 2023 - April 2025" },
    { institution: "Board of Secondary Education, Telangana (BSET)", program: "Secondary School Certificate (SSC)", duration: "June 2018 - March 2023" },
    { institution: "Krishnaveni Talent UPS School, Thripuraram", program: "Primary Education (Class 5)", duration: "June 2017 - March 2018" }
  ]
};

export default function App() {
  const [data, setData] = useState(FALLBACK_DATA);
  const [theme, setTheme] = useState("dark");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((profile) => setData(profile))
      .catch(() => {});
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await res.json();
      setStatus(result.message);
      setForm({ name: "", email: "", message: "" });
    } catch {
      window.location.href = `mailto:${data.contact.email}?subject=LinkedIn Portfolio Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    }
  };

  return (
    <div>
      <header className="navbar">
        <a href="#home" className="logo">PV<span>.dev</span></a>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn-linkedin-mini">
            <i className="fa-brands fa-linkedin"></i> Connect
          </a>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Theme">
            <i className={theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid">
          <div>
            <div className="status-pill">
              <span className="pulse-dot"></span> Open to Internships & Collaborations
            </div>
            <h1>Hi, I'm <span className="gradient-text">{data.name}</span></h1>
            <p className="hero-bio">{data.headline}</p>
            <div className="hero-cta">
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn btn-linkedin">
                <i className="fa-brands fa-linkedin"></i> LinkedIn Profile
              </a>
              <a href={data.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="li-banner">
              <span className="li-tag"><i className="fa-brands fa-linkedin"></i> LinkedIn Verified</span>
            </div>
            <div className="li-body">
              <div className="li-avatar">PV</div>
              <h3>{data.name} <i className="fa-solid fa-circle-check verified-icon"></i></h3>
              <p className="li-headline">{data.headline}</p>
              <p className="li-location"><i className="fa-solid fa-location-dot"></i> {data.location}</p>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="li-btn-primary">
                <i className="fa-brands fa-linkedin"></i> linkedin.com/in/parashuramvaddekunta
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <span className="section-kicker">PORTFOLIO</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {data.projects.map((p, i) => (
            <div key={i} className="project-card">
              <div>
                <div className="project-top">
                  <span className="project-badge">{p.badge}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className="tech-stack-row">
                {p.tech.map((t, idx) => <span key={idx} className="tech-pill">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <span className="section-kicker">COMPETENCIES</span>
          <h2 className="section-title">Top Skills</h2>
        </div>
        <div className="skills-bento">
          {data.skills.map((s, i) => (
            <div key={i} className="skill-card">
              <i className="fa-solid fa-bolt"></i>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-header">
          <span className="section-kicker">ACADEMICS</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="timeline">
          {data.education.map((e, i) => (
            <div key={i} className="timeline-item">
              <h3>{e.institution}</h3>
              <p className="degree">{e.program}</p>
              <p className="date">{e.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="section-header">
          <span className="section-kicker">CREDENTIALS</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <div className="cert-grid">
          {data.certifications.map((c, i) => (
            <div key={i} className="cert-card">
              <div className="cert-icon"><i className="fa-solid fa-award"></i></div>
              <div>
                <h3>{c}</h3>
                <p>Verified on LinkedIn</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-header">
          <span className="section-kicker">CONTACT</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-bento">
          <div className="contact-cards">
            <div className="contact-card highlight-li">
              <div className="cc-icon"><i className="fa-brands fa-linkedin"></i></div>
              <div className="cc-info">
                <h4>LinkedIn</h4>
                <a href={data.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/parashuramvaddekunta</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="cc-icon"><i className="fa-regular fa-envelope"></i></div>
              <div className="cc-info">
                <h4>Email</h4>
                <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              </div>
            </div>
            <div className="contact-card">
              <div className="cc-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="cc-info">
                <h4>Mobile</h4>
                <a href={`tel:${data.contact.mobile}`}>{data.contact.mobile}</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form glass-panel">
            <h3>Send a Message</h3>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn btn-linkedin full-width">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
