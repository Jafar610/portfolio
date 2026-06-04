import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiTypescript, SiFirebase, SiExpress } from 'react-icons/si';

const techColors = {
  React: '#22d3ee', 'Node.js': '#22c55e', MongoDB: '#4ade80', TailwindCSS: '#38bdf8',
  'Next.js': '#f8fafc', TypeScript: '#3b82f6', Firebase: '#f59e0b', Express: '#94a3b8',
  JavaScript: '#facc15', 'REST API': '#a855f7',
};

const techIcons = {
  React: <SiReact size={12} />, 'Node.js': <SiNodedotjs size={12} />,
  MongoDB: <SiMongodb size={12} />, TailwindCSS: <SiTailwindcss size={12} />,
  'Next.js': <SiNextdotjs size={12} />, TypeScript: <SiTypescript size={12} />,
  Firebase: <SiFirebase size={12} />, Express: <SiExpress size={12} />,
};

const projects = [
  {
    id: 1,
    title: 'DevFlow Dashboard',
    description: 'A full-featured developer productivity dashboard with task management, GitHub integration, real-time analytics, and team collaboration tools.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    emoji: '🚀',
    featured: true,
  },
  {
    id: 2,
    title: 'ShopSphere E-Commerce',
    description: 'Modern e-commerce platform with product catalog, cart management, Stripe payments, and admin dashboard with sales analytics.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)',
    emoji: '🛍️',
    featured: true,
  },
  {
    id: 3,
    title: 'ChatSphere Realtime',
    description: 'Real-time chat application with rooms, direct messaging, file sharing, emoji reactions, and end-to-end encrypted conversations.',
    tech: ['React', 'Firebase', 'Node.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #22d3ee 100%)',
    emoji: '💬',
    featured: false,
  },
  {
    id: 4,
    title: 'TaskFlow AI',
    description: 'AI-powered task management app with smart scheduling, priority detection, deadline reminders, and productivity insights.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #a855f7 100%)',
    emoji: '🤖',
    featured: false,
  },
  {
    id: 5,
    title: 'PortfolioGen',
    description: 'Dynamic portfolio generator that creates beautiful, customizable portfolios from a simple YAML config file with live preview.',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #22d3ee 100%)',
    emoji: '✨',
    featured: false,
  },
  {
    id: 6,
    title: 'WeatherVista',
    description: 'Stunning weather app with hourly forecasts, interactive maps, air quality index, and beautiful animated weather visualizations.',
    tech: ['React', 'Node.js', 'REST API'],
    github: 'https://github.com',
    live: 'https://example.com',
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
    emoji: '🌤️',
    featured: false,
  },
];

const categories = ['All', 'Featured', 'React', 'Next.js', 'Full Stack'];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="project-card glass-card"
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      whileHover={{ y: -8 }}
    >
      {/* Project image / banner */}
      <div className="card-img" style={{
        height: 180, background: project.gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid overlay on card */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} />
        <span style={{ fontSize: 56, position: 'relative', zIndex: 1 }}>{project.emoji}</span>
        {project.featured && (
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 100, padding: '3px 10px',
            fontSize: 11, fontWeight: 600, color: 'white',
          }}>
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: 17, fontWeight: 700, color: 'var(--text-primary)',
          marginBottom: 8, fontFamily: 'Space Grotesk',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7,
          marginBottom: 16, flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 10px', borderRadius: 6,
              background: `${techColors[t]}18`,
              border: `1px solid ${techColors[t]}30`,
              fontSize: 11, fontWeight: 600,
              color: techColors[t] || '#a5b4fc',
            }}>
              {techIcons[t]} {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: 10 }}>
          <motion.a
            href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)',
              flex: 1, justifyContent: 'center',
            }}
            whileHover={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-primary)' }}
          >
            <FiGithub size={13} /> GitHub
          </motion.a>
          <motion.a
            href={project.live} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
              background: 'linear-gradient(135deg, #6366f1, #a855f7)',
              fontSize: 12, fontWeight: 600, color: 'white',
              flex: 1, justifyContent: 'center',
            }}
            whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(99,102,241,0.4)' }}
          >
            <FiExternalLink size={13} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    if (filter === 'Full Stack') return p.tech.includes('Node.js') || p.tech.includes('Express');
    return p.tech.some((t) => t.toLowerCase().includes(filter.toLowerCase())) ||
      p.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section
      id="projects"
      style={{
        padding: '100px 2rem',
        background: 'var(--dark-900)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span className="section-badge">My Work</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)', marginBottom: 16 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', fontSize: 15, lineHeight: 1.7 }}>
            A collection of projects I've built — from full-stack apps to creative experiments.
            Each one pushed me to learn something new.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: '8px 20px', borderRadius: 100,
                border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                background: filter === cat ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'rgba(255,255,255,0.04)',
                color: filter === cat ? 'white' : 'var(--text-secondary)',
                fontSize: 13, fontWeight: 600, cursor: 'none',
                boxShadow: filter === cat ? '0 4px 20px rgba(99,102,241,0.35)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <motion.a
            href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiGithub size={16} /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
