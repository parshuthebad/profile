const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const profile = {
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

app.get("/api/profile", (req, res) => res.json(profile));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New LinkedIn Portfolio Inquiry from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: "Thank you! Parashuram has received your message." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
