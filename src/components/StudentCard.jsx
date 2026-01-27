import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StudentCard = ({ student, index }) => {
  const [code, setCode] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [clickRipple, setClickRipple] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (code === student.code) {
      setIsRevealed(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  };

  const handleCardClick = () => {
    setClickRipple(true);
    setTimeout(() => setClickRipple(false), 600);
    
    if (isRevealed) {
      setIsRevealed(false);
      setCode('');
      setShowError(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setCode(value);
  };

  const getGradeColor = (mark) => {
    if (mark >= 80) return 'from-green-400 to-emerald-600';
    if (mark >= 50) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-rose-600';
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 0.3,
        rotate: -180,
        y: 100
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        y: 0
      }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{ 
        scale: isRevealed ? 1.08 : 1.06,
        rotate: [0, -2, 2, 0],
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
        transition: {
          duration: 0.3,
          rotate: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.5
          }
        }
      }}
      whileTap={{ 
        scale: 0.9,
        rotate: [0, 15, -15, 0],
        boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
      }}
      onClick={handleCardClick}
      className={`relative backdrop-blur-xl bg-white/15 rounded-3xl p-6 border border-white/30 shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
        isRevealed ? 'ring-4 ring-green-400/30 shadow-green-400/20' : ''
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 rounded-3xl"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent, rgba(147,51,234,0.1))",
            "linear-gradient(to top left, rgba(255,255,255,0.1), transparent, rgba(59,130,246,0.1))",
            "linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent, rgba(147,51,234,0.1))"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, -20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`
          }}
        />
      ))}

      <div className="relative z-10">
        <motion.h3 
          className="text-base font-bold text-white text-center mb-4 leading-tight"
          animate={{
            textShadow: isRevealed 
              ? "0 0 20px rgba(255,255,255,0.5)" 
              : "0 0 10px rgba(255,255,255,0.3)"
          }}
        >
          {student.name}
        </motion.h3>

        {!isRevealed ? (
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <motion.input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={code}
                onChange={handleInputChange}
                onPaste={(e) => e.preventDefault()}
                onCopy={(e) => e.preventDefault()}
                onCut={(e) => e.preventDefault()}
                placeholder="Enter code"
                className={`w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm backdrop-blur-sm ${
                  showError ? 'border-red-400 ring-2 ring-red-400 bg-red-500/10' : ''
                }`}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(59,130,246,0.3)"
                }}
              />
              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-0 right-0 text-center"
                >
                  <span className="text-red-400 text-xs font-semibold bg-red-500/20 px-2 py-1 rounded-full">
                    Incorrect Code
                  </span>
                </motion.div>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59,130,246,0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm backdrop-blur-sm"
            >
              View Mark
            </motion.button>
          </motion.form>
        ) : (
          <motion.div 
            className="text-center space-y-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -360 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className={`text-3xl font-bold bg-gradient-to-r ${getGradeColor(student.mark)} bg-clip-text text-transparent`}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }}
            >
              {student.mark}
            </motion.div>
            <motion.div 
              className="text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              out of 100
            </motion.div>
            <motion.div 
              className="text-white/50 text-xs mt-3 bg-white/10 px-3 py-1 rounded-full inline-block backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Click to hide
            </motion.div>

            {/* Celebration particles for high scores */}
            {student.mark >= 80 && (
              [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                  animate={{
                    x: [0, (Math.random() - 0.5) * 100],
                    y: [0, -Math.random() * 60 - 30],
                    scale: [0, 1, 0],
                    rotate: [0, 360]
                  }}
                  transition={{
                    delay: 0.8 + i * 0.1,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))
            )}
          </motion.div>
        )}

        {showError && (
          <motion.div
            animate={{ 
              x: [0, -15, 15, -15, 15, -10, 10, 0],
              rotate: [0, -5, 5, -5, 5, -3, 3, 0]
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <motion.div 
              className="absolute inset-0 bg-red-500/20 rounded-3xl"
              animate={{
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: 2
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute top-3 right-3 w-3 h-3 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
      <motion.div 
        className="absolute bottom-3 left-3 w-3 h-3 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      />

      {/* Click ripple effect */}
      {clickRipple && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-4 border-white/30 pointer-events-none"
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export default StudentCard;
