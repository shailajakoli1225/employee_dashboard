import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const logoVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 gradient-bg flex items-center justify-center z-50 particle-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="text-center z-10">
        {/* Logo SVG Animation */}
        <motion.div className="mb-8">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="mx-auto"
          >
            <motion.path
              d="M60 10 L100 35 L100 85 L60 110 L20 85 L20 35 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M40 40 L60 30 L80 40 L80 80 L60 90 L40 80 Z"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="2"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            />
            <motion.circle
              cx="60"
              cy="60"
              r="8"
              fill="url(#gradient3)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#33CBFF" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b3ee" />
                <stop offset="100%" stopColor="#33CBFF" />
              </linearGradient>
              <radialGradient id="gradient3">
                <stop offset="0%" stopColor="#33CBFF" />
                <stop offset="100%" stopColor="#2563eb" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Company Name Animation */}
        <motion.div
          className="mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-5xl font-heading font-bold text-white mb-2">
            {'Swifttruste'.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block gradient-text"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-cyan-400 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Dynamic Digital Creation Hub
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-64 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="glass rounded-full h-2 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
          </div>
          <motion.p
            className="text-white/80 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading amazing experiences... {progress}%
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;