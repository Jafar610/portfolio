import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', width: 300, height: 300,
        borderRadius: '50%', top: '20%', left: '30%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', width: 200, height: 200,
        borderRadius: '50%', bottom: '25%', right: '30%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
        filter: 'blur(30px)',
      }} />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="loading-logo"
      >
        &lt;Jafar /&gt;
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{ color: 'rgba(148,163,184,0.7)', fontSize: 13, marginTop: 8, fontFamily: 'Inter' }}
      >
        Building something awesome...
      </motion.p>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="loading-bar"
      >
        <div className="loading-bar-fill" />
      </motion.div>

      {/* Spinning ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          marginTop: 32,
          width: 40, height: 40,
          border: '2px solid transparent',
          borderTop: '2px solid #6366f1',
          borderRight: '2px solid #a855f7',
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
