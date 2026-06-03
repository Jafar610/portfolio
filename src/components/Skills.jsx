import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
  SiGraphql,
  SiRedux,
  SiPython,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { FiCpu, FiLayout, FiServer, FiDatabase } from "react-icons/fi";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <FiLayout size={16} />,
    color: "#22d3ee",
    skills: [
      { name: "React", icon: <SiReact />, color: "#22d3ee", level: 92 },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#f8fafc", level: 85 },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3b82f6",
        level: 80,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "#facc15",
        level: 93,
      },
      { name: "HTML5", icon: <SiHtml5 />, color: "#f97316", level: 96 },
      { name: "CSS3", icon: <SiCss />, color: "#3b82f6", level: 90 },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        color: "#38bdf8",
        level: 88,
      },
      { name: "Redux", icon: <SiRedux />, color: "#a855f7", level: 75 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <FiServer size={16} />,
    color: "#22c55e",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#22c55e", level: 85 },
      { name: "Express", icon: <SiExpress />, color: "#94a3b8", level: 82 },
      { name: "Python", icon: <SiPython />, color: "#facc15", level: 70 },
      { name: "GraphQL", icon: <SiGraphql />, color: "#e879f9", level: 65 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <FiDatabase size={16} />,
    color: "#a855f7",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "#4ade80", level: 83 },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        color: "#60a5fa",
        level: 72,
      },
      { name: "Firebase", icon: <SiFirebase />, color: "#fb923c", level: 78 },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: <FiCpu size={16} />,
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#f97316", level: 90 },
      { name: "Docker", icon: <SiDocker />, color: "#38bdf8", level: 65 },
      { name: "Linux", icon: <SiLinux />, color: "#facc15", level: 72 },
      { name: "Figma", icon: <SiFigma />, color: "#a855f7", level: 68 },
    ],
  },
];

const SkillBar = ({ name, level, color, icon, index }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ marginBottom: 18 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 7,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color, fontSize: 16 }}>{icon}</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            {name}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.07 + 0.4 }}
          style={{ fontSize: 12, fontWeight: 700, color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: index * 0.07 + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </motion.div>
  );
};

const SkillIconCard = ({ skill, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="skill-icon-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.08 }}
    >
      <div
        style={{
          fontSize: 28,
          color: skill.color,
          filter: `drop-shadow(0 0 8px ${skill.color}60)`,
          transition: "filter 0.3s ease",
        }}
      >
        {skill.icon}
      </div>
      <span
        style={{
          fontSize: 11,
          color: "var(--text-secondary)",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const currentCategory = categories.find((c) => c.id === activeCategory);
  const allSkills = categories.flatMap((c) => c.skills);

  return (
    <section
      id="skills"
      style={{
        padding: "120px 2rem",
        background:
          "linear-gradient(180deg, var(--dark-900) 0%, var(--dark-800) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          left: -100,
          bottom: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span className="section-badge">⚡ Tech Stack</span>
          <h2
            className="section-title"
            style={{ color: "var(--text-primary)", marginBottom: 16 }}
          >
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: 480,
              margin: "0 auto",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            The tools and technologies I work with daily to build modern,
            scalable web applications.
          </p>
        </motion.div>

        {/* Icon Grid — all skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(85px, 1fr))",
            gap: 12,
            marginBottom: 64,
          }}
        >
          {allSkills.map((skill, i) => (
            <SkillIconCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Category tabs + progress bars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: 40,
            alignItems: "start",
          }}
          className="skills-layout"
        >
          {/* Sidebar tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-secondary)",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Category
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 16px",
                    borderRadius: 10,
                    border: "none",
                    background:
                      activeCategory === cat.id
                        ? `linear-gradient(135deg, ${cat.color}20, ${cat.color}10)`
                        : "transparent",
                    borderLeft: `3px solid ${activeCategory === cat.id ? cat.color : "transparent"}`,
                    color:
                      activeCategory === cat.id
                        ? cat.color
                        : "var(--text-secondary)",
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "none",
                    textAlign: "left",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span style={{ opacity: 0.8 }}>{cat.icon}</span>
                  {cat.label}
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: 11,
                      fontWeight: 500,
                      color:
                        activeCategory === cat.id
                          ? cat.color
                          : "rgba(148,163,184,0.4)",
                    }}
                  >
                    {cat.skills.length}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Progress bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card"
            style={{ padding: "28px 32px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 24,
              }}
            >
              <span style={{ color: currentCategory.color }}>
                {currentCategory.icon}
              </span>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  fontFamily: "Space Grotesk",
                }}
              >
                {currentCategory.label} Skills
              </h3>
              <span
                style={{
                  marginLeft: "auto",
                  padding: "2px 10px",
                  borderRadius: 100,
                  background: `${currentCategory.color}20`,
                  border: `1px solid ${currentCategory.color}40`,
                  fontSize: 11,
                  fontWeight: 600,
                  color: currentCategory.color,
                }}
              >
                {currentCategory.skills.length} skills
              </span>
            </div>

            <div>
              {currentCategory.skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
