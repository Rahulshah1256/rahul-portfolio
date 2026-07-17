'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particle data on the client only to avoid hydration mismatch
    const generated = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xStart: Math.random() * 100,
      xEnd: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-50">
      {/* Dark base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1224] via-[#1a1a3e] to-[#0d1224]" />

      {/* Animated orbs */}
      <motion.div
        animate={{
          top: ['0%', '100%', '0%'],
          left: ['0%', '30%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
        style={{ top: '0%', left: '10%' }}
      />

      <motion.div
        animate={{
          top: ['50%', '0%', '50%'],
          right: ['10%', '30%', '10%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          bottom: ['0%', '50%', '0%'],
          left: ['60%', '40%', '60%'],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{
            y: ['0vh', '100vh'],
            x: [particle.xStart + 'vw', particle.xEnd + 'vw'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.id * 0.5,
          }}
          style={{
            left: particle.left + '%',
            top: particle.top + '%',
          }}
        />
      ))}
    </div>
  );
}
