import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Download, ChevronRight } from 'lucide-react';
import { profile } from '../data/portfile.js';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SectionHeading = ({ children }) => (
  <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
    {children}
  </h2>
);

export const Hero = () => (
  <section className="min-h-screen flex items-center pt-16 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 items-center">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          Welcome to my portfolio
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
          {profile.headline}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
            View My Work <ChevronRight size={18} />
          </a>
          <a href={profile.social.resume} download className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-all flex items-center gap-2">
            <Download size={18} /> Resume
          </a>
        </div>

        <div className="flex gap-6 mt-12">
          <a href={profile.social.github} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
          <a href={profile.social.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex justify-center"
      >
        <div className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-slate-800 rounded-2xl rotate-3 border border-slate-700 flex items-center justify-center shadow-2xl">
            <span className="text-7xl">💻</span>
        </div>
        <div className="absolute w-64 h-64 bg-slate-900/90 backdrop-blur rounded-2xl -rotate-6 border border-slate-700 flex items-center justify-center shadow-2xl z-10">
           <span className="text-7xl">📊</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50">
    <div className="max-w-4xl mx-auto px-4">
      <SectionHeading>About Me</SectionHeading>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {profile.about}
        </p>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {profile.experiences.map((exp, idx) => (
             <div key={idx} className="mb-4">
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-medium text-slate-900 dark:text-white">{exp.role} @ {exp.company}</h4>
                 <span className="text-sm text-slate-500">{exp.duration}</span>
               </div>
               <p className="text-slate-600 dark:text-slate-400 text-sm">{exp.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Skills = () => (
  <section id="skills" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeading>Technical Expertise</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.web.map((skill) => (
              <span key={skill.name} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-primary transition-colors cursor-default">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
           <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            Data Science
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.data.map((skill) => (
              <span key={skill.name} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:border-secondary transition-colors cursor-default">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Projects = () => (
  <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profile.projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 h-20 overflow-hidden text-sm leading-relaxed">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <a href={project.github} className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
                <Github size={16} /> Code
              </a>
              {project.demo && (
                <a href={project.demo} className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Certifications = () => (
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-4">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4">
        {profile.certifications.map((cert, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Download size={20} /> 
            </div>
            <div>
              <h4 className="font-semibold">{cert.title}</h4>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Have a project in mind? I'm always open to new opportunities.
      </p>
      
      <form className="max-w-md mx-auto space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Your Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Message</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all"
            placeholder="Hi Kartik..."
          ></textarea>
        </div>
        <button type="submit" className="w-full py-3 px-6 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Built with <span className="text-red-500">❤️</span> using React & Tailwind.
      </p>
    </div>
  </footer>
);