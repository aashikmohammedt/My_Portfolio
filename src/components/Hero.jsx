import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import portfolio from "../data/portfolio";
import profilePhoto from "../assets/profile.jpeg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Hero() {
  const { personal } = portfolio;

  return (
    <section
      id="home"
      className="pt-20 sm:pt-24 lg:pt-24 pb-0 lg:pb-24 overflow-hidden"
    >
      <div className="section-wrap">
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "100svh",
            background: `
              radial-gradient(circle at top left, rgba(240,117,108,0.16), transparent 32%),
              radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 38%),
              #111111
            `,
          }}
        >
          <div className="grid lg:grid-cols-[1fr_1fr] items-center gap-1 sm:gap-2 lg:gap-12 min-h-screen">
            {/* Left Content */}

            <div
              className="
  order-1
  lg:order-1
  flex
  flex-col
  justify-center
  items-center
  lg:items-center
  text-center
  lg:text-left
  px-8 sm:px-12 md:px-16 lg:px-12 xl:px-16
"
            >
              {/* Centers the text/CTA block within its grid track so it
                 shifts inward from the raw edge, while the text inside
                 stays left-aligned. Column width/track is untouched, so
                 the image side and mobile layout are unaffected. */}
              <div className="w-full lg:max-w-xl xl:max-w-2xl">
                <motion.h1
                  {...fadeUp()}
                  className="font-black leading-[0.95] text-paper"
                  style={{
                    fontSize: "clamp(2.4rem,5vw + 1rem,5.8rem)",
                  }}
                >
                  Aashik
                  <br />
                  <span className="sm:whitespace-nowrap">
                    Mohammed T
                  </span>
                </motion.h1>

                <motion.p
                  {...fadeUp(0.15)}
                  className="tracked uppercase font-bold text-coral mt-4 lg:mt-6"
                  style={{
                    fontSize: "clamp(.85rem,.9vw + .6rem,1rem)",
                  }}
                >
                  Aspiring Full Stack Developer
                </motion.p>

                <motion.div
                  {...fadeUp(0.3)}
                  className="
                    mt-8
                    lg:mt-12
                    flex
                    flex-wrap
                    justify-center
                    lg:justify-start
                    items-center
                    gap-4
                    lg:gap-6
                  "
                >
                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      h-14
                      px-8
                      w-full
                      max-w-[280px]
                      sm:w-[210px]
                      lg:w-[230px]
                      sm:max-w-none
                      rounded-full
                      bg-coral
                      text-paper
                      font-semibold
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    Get In Touch
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href={personal.resume}
                    download
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      h-14
                      px-8
                      w-full
                      max-w-[280px]
                      sm:w-[210px]
                      lg:w-[230px]
                      sm:max-w-none
                      rounded-full
                      border
                      border-paper/30
                      text-paper
                      font-semibold
                      transition-all
                      duration-300
                      hover:border-white
hover:bg-white/5
                    "
                  >
                    <Download size={18} />
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </div>

            <div
              className="
                order-2
                lg:order-2
                relative
                flex
items-center
justify-center
lg:items-end
                h-[380px]
sm:h-[500px]
md:h-[620px]
lg:h-[100svh]
                overflow-hidden
              "
            >
              <motion.img
                {...fadeUp(0.2)}
                src={profilePhoto}
                alt={personal.name}
                draggable={false}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-top
                  lg:object-bottom
                  pointer-events-none
                  select-none
                "
                style={{
                  filter:
                    "brightness(.84) contrast(1.05) saturate(.95)",
                }}
              />

              {/* Left Fade */}
              <div
                className="absolute inset-y-0 left-0 w-24 sm:w-44 lg:w-72 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right,#111111 0%,rgba(17,17,17,.82) 25%,rgba(17,17,17,.35) 60%,transparent 100%)",
                }}
              />

              {/* Top Fade */}
              <div
                className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom,rgba(17,17,17,.35),transparent)",
                }}
              />

              {/* Bottom Fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top,rgba(17,17,17,.45),transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}