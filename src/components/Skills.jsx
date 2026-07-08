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
    <section id="skills" className="py-24 bg-fog">
      <div className="max-w-[1460px] mx-auto px-6">
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
          className="text-4xl font-black mb-12"
        >
          Skills &amp; Toolkit
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            >
              <h3 className="tracked uppercase text-xs font-semibold text-muted mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[group.key].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-paper text-sm font-medium border border-ink/10"
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