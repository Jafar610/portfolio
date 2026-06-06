import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

const socials = [
  {
    icon: <FiGithub size={20} />,
    href: "https://github.com/Jafar610",
    label: "GitHub",
    color: "#f8fafc",
  },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/jafar-mohamed-89119235a/",
    label: "LinkedIn",
    color: "#0ea5e9",
  },
  {
    icon: <FiTwitter size={20} />,
    href: "https://twitter.com",
    label: "Twitter / X",
    color: "#60a5fa",
  },
  {
    icon: <FiInstagram size={20} />,
    href: "https://instagram.com",
    label: "Instagram",
    color: "#e879f9",
  },
  {
    icon: <SiDiscord size={20} />,
    href: "https://discord.com",
    label: "Discord",
    color: "#818cf8",
  },
];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jafarmohamed501@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _subject: `New contact form submission from ${form.name}`,
            _captcha: "false",
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || data.status === "error") {
        throw new Error(data.message || "Unable to send message.");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (sendError) {
      setError("Unable to send message. Please try again later.");
      console.error("Contact form error:", sendError);
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 2rem",
        background: "var(--dark-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: "10%",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -60,
          bottom: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
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
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <span className="section-badge"> Get in Touch</span>
          <h2
            className="section-title"
            style={{ color: "var(--text-primary)", marginBottom: 16 }}
          >
            Let's <span className="gradient-text">Connect</span>
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
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 40,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Contact info cards */}
            {[
              {
                icon: <FiMail size={20} />,
                label: "Email",
                value: "jafarmohamed501@gmail.com",
                color: "#6366f1",
                href: "mailto:jafarmohamed501@gmail.com",
              },
              {
                icon: <FiMapPin size={20} />,
                label: "Location",
                value: "Addis Abeba, Ethiopia",
                color: "#22d3ee",
                href: null,
              },
            ].map(({ icon, label, value, color, href }) => (
              <motion.div
                key={label}
                className="glass-card"
                style={{
                  padding: "18px 20px",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
                whileHover={{ x: 4 }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                      marginBottom: 2,
                      letterSpacing: 0.5,
                    }}
                  >
                    {label.toUpperCase()}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontSize: 14,
                        color: "var(--text-primary)",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text-primary)",
                        fontWeight: 600,
                      }}
                    >
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div style={{ marginTop: 28 }}>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: 14,
                  letterSpacing: 0.5,
                }}
              >
                FIND ME ON
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {socials.map(({ icon, href, label, color }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="social-icon"
                    style={{ color: "var(--text-secondary)" }}
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                      color,
                      borderColor: `${color}50`,
                      background: `${color}12`,
                    }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="glass-card"
              style={{ padding: "18px 20px", marginTop: 20 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#22c55e",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#22c55e",
                      marginBottom: 2,
                    }}
                  >
                    Available for Work
                  </p>
                  <p style={{ fontSize: 12, color: "var(--text-secondary)" }}>
                    Currently accepting freelance &amp; full-time roles
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="glass-card" style={{ padding: "32px 36px" }}>
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 24,
                }}
              >
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontSize: 48 }}>🎉</span>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#22c55e",
                      marginTop: 12,
                    }}
                  >
                    Message Sent!
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      marginTop: 6,
                    }}
                  >
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginBottom: 16,
                    }}
                    className="form-row"
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: 7,
                          letterSpacing: 0.5,
                        }}
                      >
                        YOUR NAME
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jafar Mohamed"
                        className="form-input"
                        style={{ cursor: "none" }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: 7,
                          letterSpacing: 0.5,
                        }}
                      >
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="hello@example.com"
                        className="form-input"
                        style={{ cursor: "none" }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: 7,
                        letterSpacing: 0.5,
                      }}
                    >
                      SUBJECT
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Collaboration"
                      className="form-input"
                      style={{ cursor: "none" }}
                    />
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: 7,
                        letterSpacing: 0.5,
                      }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="form-input"
                      style={{ resize: "vertical", cursor: "none" }}
                    />
                  </div>

                  {error && (
                    <div
                      style={{
                        marginBottom: 16,
                        padding: "14px 16px",
                        borderRadius: 12,
                        background: "rgba(244, 63, 94, 0.1)",
                        border: "1px solid rgba(244, 63, 94, 0.2)",
                        color: "#f43f5e",
                        fontSize: 13,
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <motion.button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      position: "relative",
                      zIndex: 1,
                      cursor: "none",
                    }}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            width: 18,
                            height: 18,
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTop: "2px solid white",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ position: "relative", zIndex: 1 }}>
                          Sending...
                        </span>
                      </>
                    ) : (
                      <span
                        style={{
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        Send Message <FiSend size={16} />
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
