import React from 'react';
import { motion } from 'framer-motion';
import StudentCard from './components/StudentCard';
import { studentsData } from './data/students.js';

// DEBUG flag - set to true for development, false for production
const DEBUG = false;

// Professional logging with DEBUG flag
const log = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};

function App() {
  log("Students data:", studentsData);
  log("Number of students:", studentsData.length);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Amazing animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -100, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.3, 0.7, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Medium floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          animate={{
            x: [0, -50, 70, 0],
            y: [0, 50, -30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />

        {/* Small floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white rounded-full opacity-10"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, -Math.random() * 300 - 100],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"
          animate={{
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 right-1/3 w-32 h-32 border-2 border-white/10 rotate-45"
          animate={{
            rotate: [45, 135, 225, 315, 45],
            scale: [1, 1.2, 1, 0.8, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1, 0.5, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Wave effect */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,64 C150,32 350,96 600,64 C850,32 1050,96 1200,64 L1200,128 L0,128 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,64 C150,32 350,96 600,64 C850,32 1050,96 1200,64 L1200,128 L0,128 Z",
                "M0,96 C150,64 350,32 600,64 C850,96 1050,32 1200,64 L1200,128 L0,128 Z",
                "M0,64 C150,32 350,96 600,64 C850,32 1050,96 1200,64 L1200,128 L0,128 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-12 px-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          animate={{
            textShadow: [
              "0 0 20px rgba(255,255,255,0.3)",
              "0 0 40px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Student Grades Portal
          </span>
        </motion.h1>
        <p className="text-xl text-white/80 mb-4">
          Enter your 4-digit code to view your grades
        </p>
        <motion.div 
          className="text-white/60 text-sm inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {studentsData.length} Students • Secure Grade Access
        </motion.div>
      </motion.header>

      {/* Main Content - Student Cards Form */}
      <main className="relative z-10 container mx-auto px-4 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {studentsData.map((student, index) => {
            log(`Rendering student ${index + 1}:`, student.name);
            return (
              <motion.div key={student.id} variants={itemVariants}>
                <StudentCard student={student} index={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      {/* Footer removed */}
    </div>
  );
}

export default App;
