import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolio from "../data/portfolio";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = portfolio.projects.filter(
    (p) => filter === "all" || p.categories.includes(filter)
  );

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="section-wrap">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracked uppercase text-sm font-semibold text-coral mb-3"
        >
          My work
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-black"
          >
            Projects
          </motion.h2>

          <div className="flex flex-wrap gap-2.5">
            {portfolio.projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  filter === cat.value
                    ? "bg-ink text-paper border-ink"
                    : "bg-transparent text-ink border-ink/15 hover:border-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.button
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActive(project)}
                className="group text-left rounded-3xl overflow-hidden bg-butter shadow-sm ring-1 ring-ink/5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-teal/20 to-coral/20 group-hover:from-teal/30 group-hover:to-coral/30 transition-colors">
                  <Code2
                    size={40}
                    className="text-ink/30 group-hover:text-ink/50 transition-colors"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg leading-snug mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-paper text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6"
          >
            <div
              className="absolute inset-0 bg-ink/70"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="relative bg-paper rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-teal/20 to-coral/20">
                <Code2 size={56} className="text-ink/30" />
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-paper shadow-sm hover:bg-ink hover:text-paper transition-colors"
              >
                <X size={18} />
              </button>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-3">{active.title}</h3>
                <p className="text-muted leading-relaxed mb-5">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-butter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full font-semibold hover:bg-coral transition-colors"
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-cream text-ink px-5 py-3 rounded-full font-semibold hover:bg-ink hover:text-paper transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;