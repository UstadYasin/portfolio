export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Yasin. Built with React & Passion for AI.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/UstadYasin"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-yasin-jamal-6a42a4260"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}