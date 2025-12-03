import { Code, Database, Layout, Server, Brain, BarChart } from 'lucide-react';

export const profile = {
  name: "Kartik Dhiman",
  role: "Web Developer & Data Science Enthusiast",
  headline: "Final-year B.Tech CSE student crafting web experiences and data-driven solutions.",
  email: "youremail@example.com",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resume: "/Kartik_Dhiman_Resume.pdf", 
  },
  about: "I’m currently pursuing my B.Tech in Computer Science & Engineering (7th semester). I enjoy building efficient web applications and exploring insights through data. My interests span full-stack development, cloud computing, and data visualization.",
  skills: {
    web: [
      { name: "React", icon: Layout },
      { name: "Node.js", icon: Server },
      { name: "Tailwind CSS", icon: Code },
      { name: "MongoDB", icon: Database },
      { name: "Express", icon: Server },
      { name: "AWS (Basics)", icon: Server },
    ],
    data: [
      { name: "Python", icon: Code },
      { name: "Pandas/NumPy", icon: BarChart },
      { name: "SQL", icon: Database },
      { name: "Machine Learning", icon: Brain },
      { name: "Data Visualization", icon: BarChart },
    ]
  },
  projects: [
    {
      title: "Fitness Planner & Meal Tracker",
      desc: "Full-stack MERN application for tracking customized workout plans and nutritional intake.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Movie Recommender System(Processing)",
      desc: "Machine Learning based recommendation engine using cosine similarity and content-based filtering.",
      tags: ["Python", "Scikit-learn", "Streamlit"],
      github: "#",
      demo: null 
    },
    {
      title: "ToDo Web Applications",
      desc: "It is used to track and managemy daily tasks ",
      tags: ["Frontend", "MERN Stack", "js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      desc: "Modern, dark-themed developer portfolio built with React, Vite and Framer Motion.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#"
    }
  ],
  experiences: [
    {
      role: "Web Development Intern",
      company: "SEO Strikers NOida ",
      duration: "July 2025 - Sep 2025",
      desc: "During my internship i have developed some modules of inventory tracking web applications"
    }
  ],
  certifications: [
    { title: "Data Science Foundations" , issuer: "Udemy"},
    { title: "Full Stack Web Development", issuer: "Ducat" }
  ]
};
