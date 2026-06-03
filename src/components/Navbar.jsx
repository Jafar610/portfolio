import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { RiCodeSSlashLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["home", "about", "projects", "skills", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#home");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.04 }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 15px rgba(99,102,241,0.4)",
              }}
            >
              <RiCodeSSlashLine size={20} color="white" />
            </div>
            <span
              style={{
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: 20,
                background: "linear-gradient(135deg, #a5b4fc, #22d3ee)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jafar
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div
            style={{ alignItems: "center", gap: 8 }}
            className="hidden md:flex"
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                  style={{
                    textDecoration: "none",
                    padding: "7px 16px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    color: isActive ? "#a5b4fc" : "var(--text-secondary)",
                    background: isActive
                      ? "rgba(99,102,241,0.1)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(99,102,241,0.25)"
                      : "1px solid transparent",
                    transition: "all 0.25s ease",
                    position: "relative",
                  }}
                  whileHover={{
                    color: "#a5b4fc",
                    background: "rgba(99,102,241,0.08)",
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              style={{
                marginLeft: 8,
                width: 38,
                height: 38,
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                transition: "all 0.25s ease",
              }}
            >
              {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div
            style={{ alignItems: "center", gap: 10 }}
            className="flex md:hidden"
          >
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileTap={{ scale: 0.92 }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
              }}
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
              }}
            >
              {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: "fixed",
            top: 70,
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(3,7,18,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                display: "block",
                textDecoration: "none",
                padding: "12px 0",
                fontSize: 16,
                fontWeight: 500,
                color:
                  active === link.href.replace("#", "")
                    ? "#a5b4fc"
                    : "var(--text-secondary)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
