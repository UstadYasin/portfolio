const projects = [
  {
    title: 'Toxic Comment Classifier',
    problem: 'Detect toxic and harmful comments in online platforms using NLP.',
    approach: 'Built a multi-label text classifier with TF-IDF, word embeddings, and logistic regression / LSTM.',
    tech: 'Python, Scikit-learn, TensorFlow, NLP',
    github: 'https://github.com/UstadYasin/farsi-dari-toxic-detection',
  },
  {
    title: 'Rossmann Sales Prediction',
    problem: 'Forecast daily sales for 1,115 drug stores across Europe.',
    approach: 'Engineered time-series features, handled missing data, and trained an XGBoost model with hyperparameter tuning.',
    tech: 'Python, Pandas, XGBoost, Time Series',
    github: 'https://github.com/UstadYasin/rossman-store-sales',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-400 mb-2">
                <span className="text-gray-300 font-semibold">Problem:</span> {project.problem}
              </p>

              <p className="text-sm text-gray-400 mb-2">
                <span className="text-gray-300 font-semibold">Approach:</span> {project.approach}
              </p>

              <p className="text-sm text-gray-400 mb-5">
                <span className="text-gray-300 font-semibold">Stack:</span> {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-block text-center px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                View on GitHub
              </a>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}