export const personalInfo = {
  name: "Raj Sharma",
  displayName: "thefstack",
  title: "Full Stack Developer",
  email: "rajsharmahwh19@gmail.com",
  phone: "+91 9142892678",
  location: "Kolkata, India",
  availability: "Immediate",
  locationPreference: "Open to relocate",
  links: {
    linkedin: "linkedin.com/in/thefstack",
    github: "github.com/thefstack",
    website: "www.thefstack.com",
  },
}

export const experience = [
  {
    title: "Full Stack Developer",
    company: "IVY Knowledge Service Pvt Ltd",
    period: "September 2024 - Present",
    description:
      "IVY Knowledge Services Pvt. Ltd is a leading data analytics training institute operating as Ivy Professional School. During my time there, I contributed to the development of AI-integrated learning systems and internal web tools.",
    responsibilities: [
      "Integrated AI-powered chatbot features for resolving user queries on topics like Data Science, Data Engineering, and Power BI.",
      "Developed an AI-based quiz system generating questions based on selected topics and subtopics.",
      "Implemented an AI-driven review system analyzing quiz performance and offering personalized improvement suggestions.",
      "Built a dynamic lesson plan feature that unlocks quizzes upon completion of daily lessons to encourage progressive learning.",
      "Created an AI-powered resume builder with ATS score analysis and skill scoring for optimized resume building.",
      "Collaborated with Agile teams, managing repositories and project workflows using GitHub.",
    ],
  },
]

export const projects = [
  {
    title: "Full-Stack Portfolio Web Application",
    demoLink: "#",
    description: "Personal portfolio using Next.js with Node.js and MongoDB backend.",
    points: [
      "Integrated a Markdown-based blog system to optimize content structure and reduce database load.",
      "Enhanced SEO and performance through SSR, structured metadata, and API-level caching.",
      "Ensured responsive, accessible UI using Tailwind CSS and Material UI.",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Digital E-Gram Panchayat",
    githubLink: "#",
    description: "A digital platform for Gram Panchayat services.",
    points: [
      "User Authentication – Secure login & registration via Firebase",
      "Service Applications – Users can apply for services",
      "Admin Panel – Create services, manage staff, and update applications",
      "Staff Dashboard – Process applications & update statuses",
      "Firebase Integration – Firestore for data storage, Firebase Hosting for deployment",
    ],
    technologies: ["React", "Firebase", "Firestore"],
  },
  {
    title: "Real Time Chat Application",
    githubLink: "#",
    description: "A real-time chat application with user authentication.",
    points: [
      "Developed a real-time chat app where users can sign up, log in, and communicate in a shared chat room.",
      "Enabled instant messaging using Socket.io, ensuring smooth, real-time communication.",
      "Integrated Strapi as a headless CMS backend for user and message management.",
      "Built a secure authentication system for user registration and login.",
    ],
    technologies: ["React", "Socket.io", "Strapi", "Node.js"],
  },
]

export const skills = {
  languages: ["JavaScript", "Java"],
  frameworks: ["React.js", "Next.js", "Express.js", "Node.js"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Git", "Postman"],
  other: ["REST APIs", "State Management (Context API)", "Agile Methodologies"],
  soft: ["Problem-solving", "Team Collaboration"],
}

export const education = [
  {
    degree: "B.Sc (Hons.) Computer Science",
    institution: "University of Delhi",
    period: "2021-2024",
  },
]
