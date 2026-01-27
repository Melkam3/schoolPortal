import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GradeReveal = ({ mark, gradeColor }) => {
  const getGradeMessage = (mark) => {
    if (mark >= 80) return 'Excellent! 🎉';
    if (mark >= 50) return 'Good Job! 👍';
    return 'Keep Working! 💪';
  };

  const getProgressPercentage = (mark) => {
    return (mark / 100) * 100;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-center space-y-6"
      >
        {/* Animated Score Display */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="relative"
        >
          <div className={`text-6xl font-bold bg-gradient-to-r ${gradeColor} bg-clip-text text-transparent`}>
            {mark}
          </div>
          <div className="text-white/80 text-sm mt-2">
            out of 100
          </div>
        </motion.div>

        {/* Circular Progress Indicator */}
        <motion.div
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative w-32 h-32 mx-auto"
        >
          <svg className="w-full h-full transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: getProgressPercentage(mark) / 100 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                {mark >= 80 && (
                  <>
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#10b981" />
                  </>
                )}
                {mark >= 50 && mark < 80 && (
                  <>
                    <stop offset="0%" stopColor="#facc15" />
                    <stop offset="100%" stopColor="#f97316" />
                  </>
                )}
                {mark < 50 && (
                  <>
                    <stop offset="0%" stopColor="#f87171" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </>
                )}
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {mark}%
            </span>
          </div>
        </motion.div>

        {/* Grade Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="space-y-2"
        >
          <div className={`text-lg font-semibold bg-gradient-to-r ${gradeColor} bg-clip-text text-transparent`}>
            {getGradeMessage(mark)}
          </div>
          
          {/* Performance indicators */}
          <div className="flex justify-center space-x-2">
            {mark >= 80 && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    className="text-2xl"
                  >
                    ⭐
                  </motion.div>
                ))}
              </>
            )}
            {mark >= 50 && mark < 80 && (
              <>
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                    className="text-2xl"
                  >
                    ⭐
                  </motion.div>
                ))}
              </>
            )}
          </div>
        </motion.div>

        {/* Glow effect for high scores */}
        {mark >= 80 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-2xl blur-xl"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default GradeReveal;
