import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';
import { RiCodeSSlashLine } from 'react-icons/ri';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub size={17} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FiLinkedin size={17} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FiTwitter size={17} />, href: 'https://twitter.com', label: 'Twitter' },
];

const Footer = () => {
  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--dark-800)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 2rem 32px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 300, height: 1,
        background: 'linear-gradient(90deg, transparent, #6366f1, #a855f7, #22d3ee, transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: 32, marginBottom: 48,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, cursor: 'none' }}
              whileHover={{ scale: 1.03 }}
              onClick={scrollToTop}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(99,102,241,0.4)',
              }}>
                <RiCodeSSlashLine size={18} color="white" />
              </div>
              <span style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20,
                background: 'linear-gradient(135deg, #a5b4fc, #22d3ee)',
                backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Jafar
              </span>
            </motion.div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Full Stack Developer crafting elegant digital experiences.
              Available for freelance and full-time opportunities.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}
                  whileHover={{ color: '#a5b4fc', x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social + CTA */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
              Connect
            </p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              {socials.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  whileHover={{ scale: 1.12, y: -4 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="mailto:jafar@example.com"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '9px 20px', borderRadius: 10, textDecoration: 'none',
                background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
                fontSize: 13, fontWeight: 600, color: '#a5b4fc',
              }}
              whileHover={{ background: 'rgba(99,102,241,0.2)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📧 jafar@example.com
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 24 }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Jafar. All rights reserved.
          </p>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 5 }}>
            Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block', color: '#f43f5e' }}
            >
              <FiHeart size={13} fill="#f43f5e" />
            </motion.span>
            {' '}using React &amp; Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '7px 16px', borderRadius: 8, border: 'none',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)',
              cursor: 'none',
            }}
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
