const profileData = {
  roles: [
    "CSE Student @ KMIT (2025 - 2029)",
    "NxtWave CCBP 4.0 Academy Fellow",
    "Full-Stack Web & Machine Learning Developer",
    "Algorithms & Competitive Problem Solver"
  ],
  projects: [
    {
      title: "Integrated Urban Risk Analytics & Resource Prioritization",
      badge: "Machine Learning & Spatial AI",
      description: "Real-time accident severity prediction and spatial cluster prioritization system powered by US Road Accidents data and ensemble ML pipelines.",
      tech: ["Python", "Scikit-Learn", "Spatial Clustering", "Data Science"],
      link: "https://github.com/parshuthebad"
    },
    {
      title: "AI-Based Crop Disease Detection Platform",
      badge: "Deep Learning + FastAPI",
      description: "End-to-end agricultural diagnostics platform utilizing MobileNetV2 trained on the PlantVillage dataset with a FastAPI backend and WhatsApp bot interface.",
      tech: ["MobileNetV2", "FastAPI", "Python", "React"],
      link: "https://github.com/parshuthebad/ai-based-crop-disease-detection"
    },
    {
      title: "Amaze - Competitive Programming & Learning Hub",
      badge: "Full-Stack Platform",
      description: "Interactive coding platform featuring multi-language problem sets, live execution environments, structured learning tracks, and user analytics.",
      tech: ["JavaScript", "HTML/CSS", "REST APIs", "SQL"],
      link: "https://github.com/parshuthebad"
    },
    {
      title: "TruthTrace Documentation & Verification Suite",
      badge: "Web Application",
      description: "Modern single-page documentation and investigative workflow web application deployed with automated GitHub CI/CD pipelines.",
      tech: ["React", "JavaScript", "GitHub Actions", "UI/UX"],
      link: "https://github.com/parshuthebad"
    }
  ],
  skills: [
    { name: "Algorithms", category: "core", icon: "fa-solid fa-diagram-project" },
    { name: "Problem Solving", category: "core", icon: "fa-solid fa-brain" },
    { name: "Python", category: "ai", icon: "fa-brands fa-python" },
    { name: "Java", category: "core", icon: "fa-brands fa-java" },
    { name: "SQL & Databases", category: "web", icon: "fa-solid fa-database" },
    { name: "Web Development", category: "web", icon: "fa-solid fa-code" },
    { name: "Machine Learning", category: "ai", icon: "fa-solid fa-robot" },
    { name: "Full-Stack Development", category: "web", icon: "fa-solid fa-layer-group" },
    { name: "Generative & Agentic AI", category: "ai", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Data Analysis", category: "ai", icon: "fa-solid fa-chart-line" },
    { name: "React & Node.js", category: "web", icon: "fa-brands fa-react" },
    { name: "Cybersecurity Basics", category: "core", icon: "fa-solid fa-shield-halved" }
  ],
  education: [
    {
      school: "Keshav Memorial Institute of Technology (KMIT)",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "August 2025 - August 2029"
    },
    {
      school: "NxtWave",
      degree: "CCBP 4.0 Academy — Full Stack Development, AI and ML",
      period: "June 2025 - June 2029"
    },
    {
      school: "Narayana Junior College - Bhagyalatha",
      degree: "Intermediate Education (MPC)",
      period: "June 2023 - April 2025"
    },
    {
      school: "Board of Secondary Education, Telangana (BSET)",
      degree: "Secondary School Certificate (SSC)",
      period: "June 2018 - March 2023"
    },
    {
      school: "Krishnaveni Talent UPS School, Thripuraram",
      degree: "Primary Education (Class 5)",
      period: "June 2017 - March 2018"
    }
  ],
  certifications: [
    { title: "One Day Workshop In Generative AI & Agentic AI", issuer: "AI & Agentic Systems Workshop" },
    { title: "Python 101 for Data Science", issuer: "Data Science Certification" },
    { title: "Ethical Hacking & Cybersecurity Workshop", issuer: "Cybersecurity Training" },
    { title: "Data Analysis with Python", issuer: "Analytics Credential" },
    { title: "ALGOTHON'26 - National Level Hackathon", issuer: "Hackathon Participation" }
  ]
};

// 1. Typewriter Effect
let roleIdx = 0;
let charIdx = 0;
let deleting = false;
const typeEl = document.getElementById("typewriter");

function runTypewriter() {
  const current = profileData.roles[roleIdx];
  if (!deleting) {
    typeEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(runTypewriter, 1800);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % profileData.roles.length;
    }
  }
  setTimeout(runTypewriter, deleting ? 35 : 65);
}
runTypewriter();

// 2. Render Projects
const projectsContainer = document.getElementById("projects-container");
profileData.projects.forEach((proj) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div>
      <div class="project-top">
        <span class="project-badge">${proj.badge}</span>
        <a href="${proj.link}" target="_blank" rel="noreferrer" style="color: var(--muted);"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    </div>
    <div class="tech-stack-row">
      ${proj.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
    </div>
  `;
  projectsContainer.appendChild(card);
});

// 3. Render Filterable Skills
const skillsContainer = document.getElementById("skills-container");
function renderSkills(filter = "all") {
  skillsContainer.innerHTML = "";
  profileData.skills
    .filter((s) => filter === "all" || s.category === filter)
    .forEach((s) => {
      const div = document.createElement("div");
      div.className = "skill-card";
      div.innerHTML = `<i class="${s.icon}"></i><span>${s.name}</span>`;
      skillsContainer.appendChild(div);
    });
}
renderSkills();

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderSkills(btn.dataset.category);
  });
});

// 4. Render Education
const eduContainer = document.getElementById("education-container");
profileData.education.forEach((item) => {
  const div = document.createElement("div");
  div.className = "timeline-item";
  div.innerHTML = `
    <h3>${item.school}</h3>
    <p class="degree">${item.degree}</p>
    <p class="date"><i class="fa-regular fa-calendar"></i> ${item.period}</p>
  `;
  eduContainer.appendChild(div);
});

// 5. Render Certifications
const certContainer = document.getElementById("cert-container");
profileData.certifications.forEach((cert) => {
  const div = document.createElement("div");
  div.className = "cert-card";
  div.innerHTML = `
    <div class="cert-icon"><i class="fa-solid fa-award"></i></div>
    <div>
      <h3>${cert.title}</h3>
      <p>${cert.issuer} &bull; Verified on LinkedIn</p>
    </div>
  `;
  certContainer.appendChild(div);
});

// 6. Copy to Clipboard buttons
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.copy);
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => (btn.innerHTML = original), 1500);
  });
});

// 7. Theme Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  themeBtn.innerHTML = next === "dark" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

// 8. Contact Form Handler
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const status = document.getElementById("form-status");
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  status.textContent = "Opening your mail client to send message...";
  window.location.href = `mailto:parashuramvaddekunta@gmail.com?subject=LinkedIn Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
});
