import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedFeedback = ({ type }) => {
  if (type === 'error') {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Red glow effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.8, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 bg-red-500/20 rounded-2xl blur-lg"
          />
          
          {/* Warning icon */}
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10"
          >
            <svg
              className="w-12 h-12 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </motion.div>

          {/* Shake animation container */}
          <motion.div
            animate={{ x: [0, -10, 10, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-red-400 font-semibold text-sm">
              Access Denied
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (type === 'success') {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Green glow effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-green-500/20 rounded-2xl blur-lg"
          />
          
          {/* Success checkmark */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative z-10"
          >
            <svg
              className="w-12 h-12 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Confetti effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                rotate: 0
              }}
              animate={{
                x: (Math.random() - 0.5) * 100,
                y: -Math.random() * 50 - 20,
                scale: [0, 1, 0],
                rotate: Math.random() * 360
              }}
              transition={{
                delay: i * 0.1,
                duration: 1,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    );
  }

  return null;
};

export default AnimatedFeedback;
