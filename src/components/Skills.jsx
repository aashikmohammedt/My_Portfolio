import { motion } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiSplunk,
} from "react-icons/si";
import { FaJava, FaPalette } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
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

// Original brand icons for concrete tools/technologies.
// Items with no matching brand icon (e.g. Concepts, Soft Skills) simply render as text.
const ICON_MAP = {
  Python: SiPython,
  Java: FaJava,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Django: SiDjango,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  "Adobe Photoshop": TbBrandAdobePhotoshop,
  Canva: FaPalette,
  Splunk: SiSplunk,
};

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1 },
};

function Skills() {
  const { skills } = portfolio;

  return (
    <section
      id="skills"
      className="py-20 md:py-24 overflow-hidden relative"
      style={{
        background: `
      radial-gradient(circle at top left,
        rgba(249,115,22,.18) 0%,
        rgba(249,115,22,.10) 20%,
        transparent 55%
      ),
      #111111
    `,
      }}
    >
      <div className="section-wrap relative">
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
          className="text-3xl md:text-4xl font-black mb-12 text-paper"
        >
          Skills &amp; Toolkit
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GROUPS.map((group, i) => {
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-5 overflow-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 shadow-sm transition-[border-color,box-shadow] duration-500 hover:border-coral/40 hover:shadow-[0_0_50px_-12px_rgba(255,140,66,0.45)]"
              >
                {/* Ambient glow that fades in on hover */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(249,115,22,.22), transparent 60%)",
                  }}
                />

                {/* Animated top accent line */}
                <span className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-coral via-coral/60 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="relative flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                  <h3 className="tracked uppercase text-xs font-semibold text-white/50">
                    {group.label}
                  </h3>
                </div>

                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="relative flex flex-wrap gap-2.5"
                >
                  {skills[group.key].map((item) => {
                    const Icon = ICON_MAP[item];
                    return (
                      <motion.span
                        key={item}
                        variants={tagVariants}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        whileHover={{
                          y: -2,
                          x: [0, -3, 3, -3, 3, 0],
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        whileTap={{
                          y: -2,
                          scale: 0.97,
                          x: [0, -3, 3, -3, 3, 0],
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-sm font-medium text-paper shadow-sm ring-1 ring-white/10 hover:ring-coral/40 hover:bg-coral hover:text-black active:ring-coral/40 active:bg-coral active:text-black transition-colors duration-300"
                      >
                        {Icon && <Icon size={15} />}
                        {item}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;