import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiCode,
  FiCoffee,
  FiZap,
  FiHeart,
  FiGitBranch,
  FiTarget,
  FiFeather,
  FiTrendingUp,
} from "react-icons/fi";
import profile from "../assets/jafProfile.jpg";

const stats = [
  { value: "12+", label: "Projects Built", icon: <FiCode size={20} /> },
  { value: "3+", label: "Years Coding", icon: <FiCoffee size={20} /> },
  { value: "15+", label: "Technologies", icon: <FiZap size={20} /> },
  { value: "100%", label: "Passion", icon: <FiHeart size={20} /> },
];

// Orbiting badges data
const orbitalBadges = [
  {
    label: "React",
    icon: <FiCode size={18} />,
    color: "#22d3ee",
    duration: 12,
  },
  {
    label: "Full Stack",
    icon: <FiTarget size={18} />,
    color: "#a855f7",
    duration: 14,
  },
  {
    label: "Node.js",
    icon: <FiGitBranch size={18} />,
    color: "#22c55e",
    duration: 16,
  },
  {
    label: "UI/UX",
    icon: <FiFeather size={18} />,
    color: "#f59e0b",
    duration: 13,
  },
  {
    label: "GraphQL",
    icon: <FiTrendingUp size={18} />,
    color: "#ec4899",
    duration: 15,
  },
  {
    label: "Design",
    icon: <FiZap size={18} />,
    color: "#06b6d4",
    duration: 18,
  },
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
          <span className="section-badge">About Me</span>
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
            <div className="profile-container" style={{ position: "relative" }}>
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

              {/* Orbiting floating badges */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 0,
                  height: 0,
                  pointerEvents: "none",
                }}
              >
                {orbitalBadges.map(({ label, icon, color, duration }, i) => (
                  <motion.div
                    key={label}
                    className={`orbital-badge-${i}`}
                    style={{
                      position: "absolute",
                      width: 64,
                      height: 64,
                      left: -32,
                      top: -32,
                      marginLeft: -32,
                      marginTop: -32,
                      pointerEvents: "auto",
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  >
                    <motion.div
                      className="orbital-badge"
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        background: `rgba(${
                          color === "#22d3ee"
                            ? "34,211,238"
                            : color === "#a855f7"
                              ? "168,85,247"
                              : color === "#22c55e"
                                ? "34,197,94"
                                : color === "#f59e0b"
                                  ? "245,158,11"
                                  : color === "#ec4899"
                                    ? "236,72,153"
                                    : "6,182,212"
                        },0.15)`,
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: `1.5px solid ${color}66`,
                        boxShadow: `0 8px 24px rgba(${
                          color === "#22d3ee"
                            ? "34,211,238"
                            : color === "#a855f7"
                              ? "168,85,247"
                              : color === "#22c55e"
                                ? "34,197,94"
                                : color === "#f59e0b"
                                  ? "245,158,11"
                                  : color === "#ec4899"
                                    ? "236,72,153"
                                    : "6,182,212"
                        },0.1), inset 0 0 20px ${color}22`,
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        willChange: "transform, box-shadow",
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 12px 40px rgba(${
                          color === "#22d3ee"
                            ? "34,211,238"
                            : color === "#a855f7"
                              ? "168,85,247"
                              : color === "#22c55e"
                                ? "34,197,94"
                                : color === "#f59e0b"
                                  ? "245,158,11"
                                  : color === "#ec4899"
                                    ? "236,72,153"
                                    : "6,182,212"
                        },0.4), inset 0 0 30px ${color}44`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div
                        style={{
                          color: color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 4,
                        }}
                      >
                        {icon}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: color,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {label}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
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
              {["IT Student", "Open to Work", "Fast Learner"].map((tag) => (
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

        .orbital-badge {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .orbital-badge:hover {
          background: rgba(255, 255, 255, 0.08) !important;
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(60deg) translateX(180px) rotate(-60deg);
          }
          to {
            transform: rotate(420deg) translateX(180px) rotate(-420deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: rotate(120deg) translateX(180px) rotate(-120deg);
          }
          to {
            transform: rotate(480deg) translateX(180px) rotate(-480deg);
          }
        }

        @keyframes orbit-4 {
          from {
            transform: rotate(180deg) translateX(180px) rotate(-180deg);
          }
          to {
            transform: rotate(540deg) translateX(180px) rotate(-540deg);
          }
        }

        @keyframes orbit-5 {
          from {
            transform: rotate(240deg) translateX(180px) rotate(-240deg);
          }
          to {
            transform: rotate(600deg) translateX(180px) rotate(-600deg);
          }
        }

        @keyframes orbit-6 {
          from {
            transform: rotate(300deg) translateX(180px) rotate(-300deg);
          }
          to {
            transform: rotate(660deg) translateX(180px) rotate(-660deg);
          }
        }

        .orbital-badge-0 {
          animation: orbit-1 12s linear infinite;
        }

        .orbital-badge-1 {
          animation: orbit-2 14s linear infinite;
        }

        .orbital-badge-2 {
          animation: orbit-3 16s linear infinite;
        }

        .orbital-badge-3 {
          animation: orbit-4 13s linear infinite;
        }

        .orbital-badge-4 {
          animation: orbit-5 15s linear infinite;
        }

        .orbital-badge-5 {
          animation: orbit-6 18s linear infinite;
        }

        /* Responsive orbit radius */
        @media (max-width: 1024px) {
          .profile-container {
            transform: scale(0.9);
          }
        }

        @media (max-width: 768px) {
          .profile-container {
            transform: scale(0.8);
          }
        }

        @media (max-width: 480px) {
          .profile-container {
            transform: scale(0.65);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
