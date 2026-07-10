import { motion, useReducedMotion } from "framer-motion";
import portfolio from "../data/portfolio";

// Accent chips — small identity markers per card, not full backgrounds.
// Keeps cards premium/neutral while still giving each category a distinct read.
const ACCENTS = {
  butter: "bg-coral",
  mint: "bg-[#ff9d5c]",
  lilac: "bg-[#e0621f]",
};

// --- Motion variants -------------------------------------------------

const headerReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

// Outer wrapper: one-time scroll-triggered entrance (fade + blur + rise).
const cardEntrance = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 16,
      mass: 0.9,
      delay: i * 0.12,
    },
  }),
};

// Inner wrapper: idle float loop + hover response. Kept on a separate
// element from the entrance animation so the two transforms compose
// instead of fighting over the same `y`/`filter` properties.
const cardBody = {
  idle: (i) => ({
    y: [0, -7, 0],
    transition: {
      duration: 5.5 + i * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.35,
    },
  }),
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow:
      "0 24px 60px -12px rgba(255,140,66,0.35), 0 10px 28px -8px rgba(17,17,17,0.16)",
    transition: { type: "spring", stiffness: 280, damping: 22 },
  },
};

// Propagates from cardBody's hover/idle state — no separate gesture
// props needed on these children.
const glowOverlay = {
  idle: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const titleShift = {
  idle: { x: 0 },
  hover: { x: 4, transition: { duration: 0.35, ease: "easeOut" } },
};

const dividerGrow = {
  idle: { scaleX: 1, opacity: 0.4 },
  hover: {
    scaleX: 1.06,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function InfoCards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="pt-16 md:pt-20 pb-20 md:pb-24 bg-paper">
      <div className="section-wrap">
        {/* Section heading */}
        <motion.div
          className="mb-14 md:mb-20 max-w-2xl"
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          variants={headerReveal}
        >
          <p className="tracked uppercase text-xs font-semibold text-coral mb-4">
            About Me
          </p>
          <h2
            className="font-black text-ink leading-[0.95]"
            style={{ fontSize: "clamp(2.2rem, 2.4vw + 1.6rem, 3.6rem)" }}
          >
            My Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial={prefersReducedMotion ? undefined : "hidden"}
              whileInView={prefersReducedMotion ? undefined : "visible"}
              viewport={{ once: true, margin: "-60px" }}
              variants={cardEntrance}
            >
              <motion.div
                custom={i}
                animate={prefersReducedMotion ? undefined : "idle"}
                whileHover={prefersReducedMotion ? undefined : "hover"}
                whileTap={prefersReducedMotion ? undefined : "hover"}
                variants={cardBody}
                className="group relative rounded-3xl p-8 sm:p-9 lg:p-10 flex flex-col gap-7 sm:gap-8 bg-paper ring-1 ring-ink/8 shadow-sm overflow-hidden [will-change:transform] [-webkit-tap-highlight-color:transparent]"
              >
                {/* Soft gradient glow that brightens on hover */}
                <motion.div
                  variants={glowOverlay}
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 0% 0%, rgba(255,140,66,0.14) 0%, rgba(255,140,66,0.04) 45%, transparent 75%)",
                  }}
                />

                <div className="relative flex flex-col gap-6">
                  {/* Accent chip + title */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${ACCENTS[card.accent]}`}
                    />
                    <motion.h3
                      variants={titleShift}
                      className="text-2xl font-bold text-ink"
                    >
                      {card.title}
                    </motion.h3>
                  </div>

                  {/* Animated divider */}
                  <motion.div
                    variants={dividerGrow}
                    className="h-px w-full bg-ink/20 origin-left"
                  />

                  <div className="flex flex-col divide-y divide-ink/10">
                    {card.entries.map((entry) => (
                      <div
                        key={entry.heading}
                        className="py-4 first:pt-0 last:pb-0"
                      >
                        <p className="tracked uppercase text-xs font-semibold text-ink/60 mb-1.5">
                          {entry.period}
                        </p>
                        <p className="font-semibold leading-snug text-ink">
                          {entry.heading}
                        </p>
                        <p className="text-sm text-ink/70 mt-1.5 leading-relaxed">
                          {entry.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoCards;