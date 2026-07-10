const portfolio = {
  personal: {
    name: "Aashik Mohammed T",
    title: "Software Developer",
    subtitle: "Aspiring Full Stack Developer",
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
  "Computer Science Engineering graduate with hands-on experience building full-stack web applications using Python, Django, React.js, Node.js, Express.js, and MongoDB. Passionate about developing scalable software, solving real-world problems, and continuously learning modern technologies while pursuing an entry-level Software Developer role.",
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
    database: ["MySQL","MongoDB"],
    versionControl: ["Git", "GitHub"],
    tools: ["VS Code", "Adobe Photoshop", "Canva", "Splunk"],
    concepts: [
      "REST API Integration",
      "Responsive Web Design",
      "Software Development Lifecycle",
      "Object-Oriented Programming ",
      "Basics of Cybersecurity"
    ],
    softSkills: [
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Attention to Detail",
      "Curious Learner",
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
            "C.K. College of Engineering & Technology, Cuddalore",
        },
        {
          period: "2021 - 2022",
          heading: "HSC",
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
          heading: "Python Full Stack Intern, Ocean Academy, Pondicherry",
          detail:
            "Developed web applications, integrated RESTful APIs, and maintained responsive UIs using Python, Django, JavaScript, and MongoDB.",
        },
        {
          period: "2024 – 2025",
          heading: "Hackathon Coordinator",
          detail:
            "Coordinated two college hackathons, managing event operations and supporting 100+ participants across the 2024 and 2025 editions.",
        },
      ],
    },
    {
      title: "Activities",
      accent: "lilac",
      entries: [
        {
          period: "Tech Fest 2026",
          heading: "Event Volunteer, Ocean Academy, Pondicherry",
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
      demo: "https://frontend-web-based-campus-library.onrender.com/",
    },
    {
      title: "Student Management System",
      categories: ["django", "fullstack"],
      stack: ["Python", "Django", "MongoDB"],
      description:
        "CRUD-based student record management system with database integration and responsive interfaces.",
      github: "https://github.com/aashikmohammedt",
      demo: "https://student-management-system-cy6d.onrender.com/students/",
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
};

export default portfolio;