import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiReact } from "react-icons/si";
import cvFile from "../assets/File/jafar mohammed cv.pdf";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "IT Student (CGPA 3.46)",
  "Software Engineer",
  "UI/UX Enthusiast",
];

const TypewriterText = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const target = roles[currentRole];
    let timeout;

    if (!isDeleting && displayed.length < target.length) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
        setSpeed(80);
      }, speed);
    } else if (!isDeleting && displayed.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length - 1));
        setSpeed(40);
      }, speed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole, speed]);

  return (
    <span style={{ color: "#22d3ee", fontWeight: 600 }}>
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
};

// Animated floating particle
const Particle = ({ style }) => (
  <motion.div
    style={{
      position: "absolute",
      borderRadius: "50%",
      ...style,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: style.duration || 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: style.delay || 0,
    }}
  />
);

const Hero = () => {
  const canvasRef = useRef(null);

  // Animated canvas grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const size = 60;
      offset = (offset + 0.3) % size;

      // Grid lines
      ctx.strokeStyle = "rgba(99,102,241,0.07)";
      ctx.lineWidth = 1;
      for (let x = -size + offset; x < canvas.width + size; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -size + offset; y < canvas.height + size; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Glowing intersection dots
      ctx.fillStyle = "rgba(99,102,241,0.18)";
      for (let x = -size + offset; x < canvas.width + size; x += size) {
        for (let y = -size + offset; y < canvas.height + size; y += size) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Randomly glowing larger dots
      const t = Date.now() / 1000;
      for (let i = 0; i < 8; i++) {
        const gx = (Math.sin(t * 0.3 + i * 1.7) * 0.5 + 0.5) * canvas.width;
        const gy = (Math.cos(t * 0.2 + i * 2.3) * 0.5 + 0.5) * canvas.height;
        const pulse = (Math.sin(t * 1.5 + i) * 0.5 + 0.5) * 0.25;
        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, 80);
        grad.addColorStop(0, `rgba(99,102,241,${pulse})`);
        grad.addColorStop(0.5, `rgba(168,85,247,${pulse * 0.5})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(gx, gy, 80, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #030712 0%, #0a0f1e 60%, #0f172a 100%)",
      }}
    >
      {/* Canvas Grid */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Large gradient orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          bottom: "0%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 65%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          top: "40%",
          left: "40%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Floating particles */}
      {[
        {
          width: 6,
          height: 6,
          background: "#6366f1",
          top: "25%",
          left: "15%",
          duration: 6,
          delay: 0,
        },
        {
          width: 4,
          height: 4,
          background: "#a855f7",
          top: "60%",
          left: "8%",
          duration: 8,
          delay: 1,
        },
        {
          width: 5,
          height: 5,
          background: "#22d3ee",
          top: "35%",
          right: "20%",
          duration: 7,
          delay: 0.5,
        },
        {
          width: 8,
          height: 8,
          background: "#6366f1",
          bottom: "30%",
          right: "12%",
          duration: 5,
          delay: 2,
        },
        {
          width: 3,
          height: 3,
          background: "#a855f7",
          top: "70%",
          left: "45%",
          duration: 9,
          delay: 1.5,
        },
      ].map((p, i) => (
        <Particle
          key={i}
          style={{ ...p, opacity: 0.4, boxShadow: `0 0 10px ${p.background}` }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 2rem 80px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="section-badge">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ display: "inline-block" }}
                >
                  <SiReact size={13} color="#22d3ee" />
                </motion.span>
                Available for work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                lineHeight: 1.1,
                marginBottom: 8,
                color: "var(--text-primary)",
              }}
            >
              Hi, I'm <span className="gradient-text">Jafar</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              variants={itemVariants}
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                marginBottom: 20,
                fontWeight: 500,
                color: "var(--text-secondary)",
                minHeight: "2em",
              }}
            >
              I'm a <TypewriterText />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 16,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              Crafting beautiful, performant web experiences with modern
              technologies. Passionate about clean code, creative design, and
              building things that matter.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                marginBottom: 40,
              }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
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
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  View Projects <FiArrowRight size={16} />
                </span>
              </motion.a>
              <motion.a
                href={cvFile}
                download="jafar-mohammed-cv.pdf"
                className="btn-outline"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiDownload size={16} /> Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: 12 }}
            >
              {[
                {
                  icon: <FiGithub size={18} />,
                  href: "https://github.com/Jafar610",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin size={18} />,
                  href: "https://www.linkedin.com/in/jafar-mohamed-89119235a/",
                  label: "LinkedIn",
                },
                {
                  icon: <FiTwitter size={18} />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
            className="float-anim"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: 280,
                padding: 28,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: 24,
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 120,
                  height: 120,
                  background:
                    "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                }}
              />

              {/* Avatar ring */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #6366f1, #a855f7, #22d3ee)",
                    padding: 2,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1e293b, #0f172a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#a5b4fc",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    J
                  </div>
                </div>
              </div>

              <div
                style={{ textAlign: "center", position: "relative", zIndex: 1 }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                  }}
                >
                  Jafar
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6366f1",
                    fontWeight: 500,
                    marginBottom: 16,
                  }}
                >
                  Full Stack Developer
                </div>

                {/* Stats */}
                {[
                  { label: "Projects", value: "12+" },
                  { label: "Technologies", value: "15+" },
                  { label: "Experience", value: "3 yrs" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      style={{ fontSize: 12, color: "var(--text-secondary)" }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#a5b4fc",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}

                {/* Status dot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginTop: 14,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                    }}
                  />
                  <span
                    style={{ fontSize: 12, color: "#22c55e", fontWeight: 500 }}
                  >
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", marginTop: 60 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              cursor: "none",
              color: "rgba(148,163,184,0.5)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 24,
                height: 38,
                border: "1.5px solid rgba(148,163,184,0.3)",
                borderRadius: 12,
                display: "flex",
                justifyContent: "center",
                paddingTop: 6,
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#6366f1",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
