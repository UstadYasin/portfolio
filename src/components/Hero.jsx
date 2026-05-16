import { motion } from 'framer-motion'
import { Code2, Database, Cpu, BrainCircuit, ArrowDown } from 'lucide-react'

const floatingIcons = [
  { Icon: Code2, className: 'top-20 left-[10%]', delay: 0 },
  { Icon: Database, className: 'top-40 right-[15%]', delay: 1 },
  { Icon: Cpu, className: 'bottom-32 left-[20%]', delay: 2 },
  { Icon: BrainCircuit, className: 'bottom-20 right-[10%]', delay: 0.5 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, className, delay }, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${className} text-white/20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon size={40} />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-gradient animate-gradient-x bg-[length:200%_200%]">Yasin</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Self-taught Data Scientist | ML & AI Engineer
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building intelligent systems from data using machine learning and deep learning.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-white/40" size={24} />
      </motion.div>
    </section>
  )
}