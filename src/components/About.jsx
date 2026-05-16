import { motion } from 'framer-motion'
import { User2, Globe, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass rounded-3xl p-8 sm:p-10 glow"
      >
        <div className="flex items-center gap-3 mb-6">
          <User2 className="w-8 h-8 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a self‑taught Data Scientist with a deep passion for turning raw data into actionable intelligence. 
          My journey started with curiosity and evolved into expertise in machine learning, feature engineering, 
          and building end‑to‑end AI solutions. I thrive on solving real‑world problems—whether it’s detecting 
          toxic content, forecasting sales, or winning Kaggle competitions.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <span className="inline-flex items-center gap-2 text-sm text-gray-400">
            <Globe className="w-4 h-4 text-purple-400" />
            Remote‑ready for global teams
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-gray-400">
            <Lightbulb className="w-4 h-4 text-yellow-400" />
            Continuous learner & problem solver
          </span>
        </div>
      </motion.div>
    </section>
  )
}