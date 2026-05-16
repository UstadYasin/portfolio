import { motion } from 'framer-motion'
import { FileDown } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto glass rounded-3xl p-10 text-center glow"
      >
        <FileDown className="w-12 h-12 text-blue-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-3">Resume</h2>
        <p className="text-gray-400 mb-6">Download my full CV (PDF) to learn more about my experience and projects.</p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
        >
          <FileDown size={20} />
          Download CV
        </a>
      </motion.div>
    </section>
  )
}