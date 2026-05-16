import { motion } from 'framer-motion'
import { BookOpen, Trophy, Hammer, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: BookOpen,
    title: 'Self‑Learning Foundation',
    desc: 'Mastered Python, SQL, statistics, and machine learning through online courses and documentation.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Trophy,
    title: 'Kaggle Competitions',
    desc: 'Applied skills to real datasets, climbed leaderboards, and learned from top data scientists.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Hammer,
    title: 'Building ML Projects',
    desc: 'Developed end‑to‑end pipelines for NLP, time‑series, and tabular data, deploying models locally.',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    desc: 'Expanding into deep learning, MLOps, and contributing to open‑source AI.',
    color: 'from-cyan-400 to-cyan-600',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">My Learning Journey</span>
        </h2>

        <div className="relative border-l-2 border-white/10 pl-8 ml-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="mb-12 relative"
              >
                {/* dot on the timeline */}
                <div className="absolute -left-[2.35rem] w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-[#030014]" />

                <div className="glass rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}