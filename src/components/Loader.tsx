import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-900 via-orange-600 to-yellow-500 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Mandala */}
        <motion.div
          className="w-32 h-32 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white">
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Lotus petals */}
            {[...Array(8)].map((_, i) => (
              <motion.path
                key={i}
                d={`M50,50 L${50 + 15 * Math.cos(i * Math.PI / 4)},${50 + 15 * Math.sin(i * Math.PI / 4)} L${50 + 25 * Math.cos((i + 0.5) * Math.PI / 4)},${50 + 25 * Math.sin((i + 0.5) * Math.PI / 4)} Z`}
                fill="currentColor"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
            Hanusattva
          </span>
        </motion.h1>

        {/* Sacred Text */}
        <motion.p
          className="text-orange-100 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ॐ सत्यं शिवं सुन्दरम्
        </motion.p>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;