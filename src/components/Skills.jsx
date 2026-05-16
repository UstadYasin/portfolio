import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'ML / AI',
    skills: ['Machine Learning', 'Feature Engineering', 'NLP'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Jupyter', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Skills & Tools</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
                    className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-sm text-gray-200 cursor-default transition-colors hover:bg-white/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}