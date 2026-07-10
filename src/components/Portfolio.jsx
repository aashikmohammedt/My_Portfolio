import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { X, ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import portfolio from "../data/portfolio";

/* ---------------------------------------------------------
   Motion variants
--------------------------------------------------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22, mass: 0.7 },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.95,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 6, scale: 0.85 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.15 + i * 0.05, type: "spring", stiffness: 320, damping: 20 },
  }),
};

/* ---------------------------------------------------------
   Ripple hook — reusable click-ripple for buttons / links
--------------------------------------------------------- */
function useRipple() {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now() + Math.random();
    setRipples((r) => [...r, { id, x, y, size }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 650);
  };

  const rippleLayer = (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((rp) => (
        <span
          key={rp.id}
          className="absolute rounded-full bg-paper/50 animate-[ripple_0.65s_ease-out_forwards]"
          style={{ left: rp.x, top: rp.y, width: rp.size, height: rp.size }}
        />
      ))}
    </span>
  );

  return { addRipple, rippleLayer };
}

/* ---------------------------------------------------------
   Shine/ripple CTA button used inside the project modal
--------------------------------------------------------- */
function ShineLink({ href, icon, children, variant = "solid" }) {
  const { addRipple, rippleLayer } = useRipple();

  const base =
    "group/btn relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold overflow-hidden transition-transform duration-300 active:scale-95";
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-coral"
      : "bg-cream text-ink hover:bg-ink hover:text-paper";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={addRipple}
      className={`${base} ${styles}`}
    >
      {/* shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-paper/25 to-transparent group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-out" />
      {rippleLayer}
      <span className="relative z-10 flex items-center gap-2">
        {icon}
        {children}
      </span>
    </a>
  );
}

/* ---------------------------------------------------------
   Individual project card — magnetic lift + 3D tilt + glow
--------------------------------------------------------- */
function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [9, -9]), {
    stiffness: 220,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-9, 9]), {
    stiffness: 220,
    damping: 18,
  });
  const liftY = useSpring(0, { stiffness: 260, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleEnter = () => liftY.set(-8);
  const handleLeave = () => {
    x.set(0);
    y.set(0);
    liftY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      variants={cardVariants}
      exit="exit"
      layout
      onClick={() => onOpen(project)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        y: liftY,
        transformPerspective: 900,
      }}
      className="group relative text-left rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
    >
      {/* animated conic-gradient glow border */}
      <span
        className="absolute -inset-[3px] rounded-[26px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-70 animate-[spinSlow_3.5s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 0deg, theme(colors.coral), theme(colors.teal), theme(colors.lilac), theme(colors.coral))",
        }}
      />

      <div
        className="relative rounded-3xl overflow-hidden bg-butter shadow-sm ring-1 ring-ink/5 transition-shadow duration-400 group-hover:shadow-2xl group-hover:shadow-ink/15 animate-[floatCard_6s_ease-in-out_infinite]"
        style={{ animationDelay: `${index * 0.5}s` }}
      >
        <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-teal/20 to-coral/20 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6"
          >
            <Code2
              size={40}
              className="text-ink/30 group-hover:text-ink/55 transition-colors duration-300"
            />
          </motion.div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-lg leading-snug mb-2.5 transition-colors duration-300 group-hover:text-coral">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-xs font-medium px-3 py-1 rounded-full bg-paper text-muted transition-colors duration-300 group-hover:bg-ink group-hover:text-paper"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}

/* ---------------------------------------------------------
   Main Portfolio / Projects section
--------------------------------------------------------- */
function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = portfolio.projects.filter(
    (p) => filter === "all" || p.categories.includes(filter)
  );

  return (
    <section id="projects" className="py-16 md:py-20">
      {/* local keyframes — no tailwind config changes required */}
      <style>{`
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ripple {
          from { transform: scale(0); opacity: 0.55; }
          to { transform: scale(1); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[spinSlow_3\\.5s_linear_infinite\\],
          .animate-\\[floatCard_6s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>

      <div className="section-wrap">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracked uppercase text-sm font-semibold text-coral mb-2.5"
        >
          My work
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-9">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-4xl font-black"
          >
            Projects
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {portfolio.projectCategories.map((cat, i) => (
              <motion.button
                key={cat.value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setFilter(cat.value)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold border overflow-hidden transition-colors duration-300 touch-manipulation ${
                  filter === cat.value
                    ? "text-paper border-ink"
                    : "text-ink border-ink/15 hover:border-ink/50 active:scale-95"
                }`}
              >
                {filter === cat.value && (
                  <motion.span
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 bg-ink rounded-full"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={setActive}
              />
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="relative bg-paper rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-teal/20 to-coral/20 overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Code2 size={56} className="text-ink/30" />
                </motion.div>
              </div>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-paper shadow-md hover:bg-ink hover:text-paper transition-colors touch-manipulation"
              >
                <X size={18} />
              </motion.button>

              <div className="p-6 md:p-8">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="text-2xl font-bold mb-3"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 }}
                  className="text-muted leading-relaxed mb-5"
                >
                  {active.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 8, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-butter"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="flex flex-wrap gap-3"
                >
                  <ShineLink
                    href={active.github}
                    icon={<FaGithub size={16} />}
                    variant="solid"
                  >
                    View Code
                  </ShineLink>
                  {active.demo && (
                    <ShineLink
                      href={active.demo}
                      icon={<ExternalLink size={16} />}
                      variant="soft"
                    >
                      Live Demo
                    </ShineLink>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;