import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiCoffee, FiZap, FiHeart } from "react-icons/fi";
import profile from "../assets/jafProfile.jpg";

const stats = [
  { value: "12+", label: "Projects Built", icon: <FiCode size={20} /> },
  { value: "3+", label: "Years Coding", icon: <FiCoffee size={20} /> },
  { value: "15+", label: "Technologies", icon: <FiZap size={20} /> },
  { value: "100%", label: "Passion", icon: <FiHeart size={20} /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "120px 2rem",
        background:
          "linear-gradient(180deg, var(--dark-900) 0%, var(--dark-800) 50%, var(--dark-900) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="section-badge">👨‍💻 About Me</span>
          <h2
            className="section-title"
            style={{ color: "var(--text-primary)" }}
          >
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: Profile visual */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ position: "relative" }}>
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: -20,
                  border: "1.5px dashed rgba(99,102,241,0.3)",
                  borderRadius: "50%",
                }}
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: -12,
                  border: "1px solid transparent",
                  borderTop: "1px solid rgba(34,211,238,0.4)",
                  borderRight: "1px solid rgba(168,85,247,0.4)",
                  borderRadius: "50%",
                }}
              />

              {/* Avatar circle (larger) */}
              <motion.div
                className="float-anim"
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #22d3ee 100%)",
                  padding: 4,
                  boxShadow: "0 40px 120px rgba(99,102,241,0.35)",
                  cursor: "pointer",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={profile}
                    alt="Jafar profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </motion.div>

              {/* Floating badges (explicit positions around avatar) */}
              {[
                { label: "React", color: "#22d3ee", x: -350, y: -10 },
                { label: "Node.js", color: "#22c55e", x: 210, y: 10 },
                { label: "UI/UX", color: "#a855f7", x: -160, y: 175 },
                { label: "GraphQL", color: "#e535ab", x: 0, y: -220 },
                { label: "Design", color: "#f59e0b", x: 0, y: 220 },
              ].map(({ label, color, x, y }, i) => {
                return (
                  <motion.div
                    key={label}
                    className="float-anim"
                    style={{
                      animationDelay: `${i * 0.8}s`,
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: `translate(-30%, -70%) translate(${x}px, ${y}px)`,
                      width: 64,
                      height: 64,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      background: `rgba(${color === "#22d3ee" ? "34,211,238" : color === "#22c55e" ? "34,197,94" : "168,85,247"},0.18)`,
                      border: `1px solid ${color}40`,
                      borderRadius: "50%",
                      boxShadow: `0 18px 40px rgba(15,23,42,0.15)`,
                      padding: 10,
                      fontSize: 11,
                      fontWeight: 700,
                      color,
                      whiteSpace: "normal",
                      lineHeight: 1.2,
                      backdropFilter: "blur(12px)",
                      pointerEvents: "none",
                    }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              Building the future,
              <br />
              <span className="gradient-text">one line at a time</span>
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 16,
              }}
            >
              Hey! I'm <strong style={{ color: "#a5b4fc" }}>Jafar</strong>, a
              passionate Full Stack Developer and IT Student who loves turning
              ideas into elegant digital experiences. I specialize in building
              modern web applications using React, Node.js, and cutting-edge
              tools.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                fontSize: 15,
                marginBottom: 32,
              }}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or designing user interfaces
              that blend aesthetics with functionality. I believe great software
              is both beautiful and powerful.
            </p>

            {/* Quick info pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginBottom: 32,
              }}
            >
              {[
                "IT Student",
                "Open to Work",
                "Fast Learner",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 100,
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    fontSize: 13,
                    color: "#a5b4fc",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                position: "relative",
                zIndex: 1,
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                Let's Talk
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginTop: 60,
          }}
          className="stats-grid"
        >
          {stats.map(({ value, label, icon }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-card"
              style={{ padding: "24px", textAlign: "center" }}
              whileHover={{ y: -4 }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  margin: "0 auto 12px",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a5b4fc",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 28,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #a5b4fc, #22d3ee)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
