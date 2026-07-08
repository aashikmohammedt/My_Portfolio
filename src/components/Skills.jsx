import { motion } from "framer-motion";
import portfolio from "../data/portfolio";

const GROUPS = [
  { key: "programmingLanguages", label: "Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "versionControl", label: "Version Control" },
  { key: "tools", label: "Tools" },
  { key: "concepts", label: "Concepts" },
  { key: "softSkills", label: "Soft Skills" },
];

function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="py-20 md:py-24 bg-fog">
      <div className="section-wrap">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracked uppercase text-sm font-semibold text-coral mb-3"
        >
          What I know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-black mb-12"
        >
          Skills &amp; Toolkit
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                <h3 className="tracked uppercase text-xs font-semibold text-muted">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills[group.key].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-paper text-sm font-medium text-ink shadow-sm ring-1 ring-ink/[0.06] hover:ring-coral/40 hover:text-coral transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;