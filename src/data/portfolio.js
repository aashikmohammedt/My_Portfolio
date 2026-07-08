const portfolio = {
  personal: {
    name: "Aashik Mohammed T",
    title: "Software Developer",
    subtitle: "Python Full Stack Developer",
    tagline: "React Developer  •  Django Developer  •  MERN Stack",
    email: "aashikmohammedt7@gmail.com",
    phone: "+91 9994689996",
    location: "Chidambaram, Tamil Nadu, India",
    github: "https://github.com/aashikmohammedt",
    linkedin: "https://linkedin.com/in/aashikmohammedt",
    resume: "/resume.pdf",
  },

  about: {
    description:
      "Final-year Computer Science Engineering student with internship experience in Python Full Stack Development and hands-on experience in web application development using Python, Django, React.js, and MongoDB through academic projects and internship training. Seeking an entry-level Software Developer role to apply programming, web development, and problem-solving skills while contributing to innovative software solutions.",
  },

  stats: [
    { number: "3+", label: "Projects built" },
    { number: "1", label: "Internship completed" },
    { number: "7.61", label: "CGPA score" },
    { number: "2", label: "NPTEL certifications" },
  ],

  services: [
    {
      icon: "monitor",
      title: "Full-Stack Development",
      description:
        "Building scalable web apps with Python, Django, React.js, Node.js, Express.js and MongoDB.",
    },
    {
      icon: "api",
      title: "REST API Integration",
      description:
        "Designing and integrating RESTful APIs for smooth client-server communication.",
    },
    {
      icon: "layout",
      title: "Responsive Web Design",
      description:
        "Crafting mobile-friendly, responsive interfaces that work well across all devices.",
    },
  ],

  skills: {
    programmingLanguages: ["Python", "Java"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js"],
    backend: ["Node.js", "Express.js", "Django"],
    database: ["MongoDB"],
    versionControl: ["Git", "GitHub"],
    tools: ["VS Code", "Adobe Photoshop", "Canva"],
    concepts: [
      "REST API Integration",
      "Responsive Web Design",
      "Software Development Lifecycle (SDLC)",
      "Object-Oriented Programming (OOPS)",
    ],
    softSkills: [
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Attention to Detail",
    ],
  },

  infoCards: [
    {
      title: "Education",
      accent: "butter",
      entries: [
        {
          period: "2022 - 2026",
          heading: "B.E. Computer Science Engineering",
          detail:
            "C.K. College of Engineering & Technology, Cuddalore (Anna University) — CGPA 7.61/10",
        },
        {
          period: "2021 - 2022",
          heading: "HSC — 68.3%",
          detail: "Kamaraj Matriculation Higher Secondary School, Chidambaram",
        },
      ],
    },
    {
      title: "Experience",
      accent: "mint",
      entries: [
        {
          period: "Feb - Apr 2026",
          heading: "Python Full Stack Intern, Ocean Academy",
          detail:
            "Developed web applications, integrated RESTful APIs, and maintained responsive UIs using Python, Django, JavaScript, and MongoDB.",
        },
        {
          period: "Ongoing",
          heading: "Hackathon Coordinator",
          detail:
            "Coordinated a 5-hour college hackathon involving 100+ participants.",
        },
      ],
    },
    {
      title: "Activities",
      accent: "lilac",
      entries: [
        {
          period: "Tech Fest 2026",
          heading: "Event Volunteer, Ocean Academy",
          detail:
            "Supported event coordination and participant management at a national-level conference.",
        },
        {
          period: "Industrial Visits",
          heading: "NSIC & 8Queens Software Technologies, Chennai",
          detail:
            "Gained exposure to real-world software development workflows and practices.",
        },
      ],
    },
  ],

  projectCategories: [
    { label: "All", value: "all" },
    { label: "Django", value: "django" },
    { label: "MERN", value: "mern" },
    { label: "Full Stack", value: "fullstack" },
  ],

  projects: [
    {
      title: "Web-Based Campus Library Management System",
      categories: ["mern", "fullstack"],
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description:
        "Full-stack library system with user authentication, book management, reservations, overdue tracking, and fine calculation.",
      github: "https://github.com/aashikmohammedt",
      demo: "",
    },
    {
      title: "Student Management System",
      categories: ["django", "fullstack"],
      stack: ["Python", "Django", "MongoDB"],
      description:
        "CRUD-based student record management system with database integration and responsive interfaces.",
      github: "https://github.com/aashikmohammedt",
      demo: "",
    },
    {
      title: "Placement Drive Management System",
      categories: ["django", "fullstack"],
      stack: ["Python", "Django", "MongoDB"],
      description:
        "Role-based placement platform with company/drive management, eligibility verification, and application tracking.",
      github: "https://github.com/aashikmohammedt",
      demo: "",
    },
  ],

  certifications: [
    {
      title: "Joy of Computing using Python",
      issuer: "NPTEL",
      level: "Elite Certification",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      level: "Elite + Silver Certification",
    },
  ],

  faqs: [
    {
      question: "What technologies do you work with?",
      answer:
        "Python, Java, Django, React.js, Node.js, Express.js, MongoDB, and REST API integration, with a focus on responsive full-stack web applications.",
    },
    {
      question: "Are you open to internship or full-time roles?",
      answer:
        "Yes — actively seeking entry-level Software Developer roles, primarily in Chennai and Tamil Nadu, and open to remote opportunities as well.",
    },
    {
      question: "Can I see your resume?",
      answer:
        "Absolutely — you can download it directly using the résumé button in the hero section or the link in the footer.",
    },
    {
      question: "How can I get in touch?",
      answer:
        "Reach out via email at aashikmohammedt7@gmail.com, call +91 9994689996, or connect on LinkedIn/GitHub linked in the footer.",
    },
  ],
};

export default portfolio;