import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import portfolio from "../data/portfolio";
import profilePhoto from "../assets/profile.jpeg";
import resume from "../assets/resume/Aashik Mohammed T_Resume.pdf";

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
      className="pt-28 sm:pt-32 md:pt-36 lg:pt-0 pb-0 overflow-hidden relative"
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
      <div className="relative overflow-hidden lg:min-h-[100svh]">
        <div className="grid lg:grid-cols-[1fr_1fr] items-center gap-1 sm:gap-2 lg:gap-12 lg:min-h-screen">
          {/* Left Content */}
          <div className="order-1 flex justify-center lg:justify-end lg:-translate-y-10">
            <div className="section-wrap w-full">
              <div
                className="
        flex
        flex-col
        justify-center
        items-center
        lg:items-start
        text-center
        lg:text-left
        px-8
        sm:px-12
        md:px-16
        lg:px-0
      "
              >
                {/* Centers the text/CTA block within its grid track so it
                 shifts inward from the raw edge, while the text inside
                 stays left-aligned. Column width/track is untouched, so
                 the image side and mobile layout are unaffected. */}
                <div className="w-full lg:max-w-xl xl:max-w-2xl flex flex-col mb-8 sm:mb-10 lg:mb-0">
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
                    className="tracked uppercase font-bold text-coral mt-2 sm:mt-3 lg:mt-4"
                    style={{
                      fontSize: "clamp(.85rem,.9vw + .6rem,1rem)",
                    }}
                  >
                    Aspiring Full Stack Developer
                  </motion.p>

                  <motion.div
                    {...fadeUp(0.3)}
                    className="
                    hidden
                    lg:flex
                    flex-wrap
                    justify-center
                    lg:justify-start
                    items-center
                    gap-4
                    lg:gap-6
                    mt-8
                    sm:mt-10
                    lg:mt-10
                    mb-12
                    sm:mb-16
                    lg:mb-0
                  "
                  >
                    <a
                      href="#contact"
                      className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      lg:gap-1.5
                      h-11
                      lg:h-11
                      px-6
                      lg:px-6
                      w-full
                      max-w-[220px]
                      sm:w-[180px]
                      lg:w-[190px]
                      sm:max-w-none
                      rounded-full
                      bg-coral
                      text-paper
                      font-semibold
                      text-sm
                      lg:text-sm
                      lg:whitespace-nowrap
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                    >
                      Get In Touch
                      <ArrowRight size={16} className="lg:hidden" />
                      <ArrowRight size={15} className="hidden lg:block" />
                    </a>

                    <a
                      href={resume}
                      download
                      className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      lg:gap-1.5
                      h-11
                      lg:h-11
                      px-6
                      lg:px-6
                      w-full
                      max-w-[220px]
                      sm:w-[180px]
                      lg:w-[190px]
                      sm:max-w-none
                      rounded-full
                      border
                      border-paper/30
                      bg-[#111111]
                      !text-white
                      font-semibold
                      text-sm
                      lg:text-sm
                      lg:whitespace-nowrap
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-coral
                      hover:border-coral
                      hover:!text-black
                      active:scale-105
                      active:bg-coral
                      active:border-coral
                      active:!text-black
                    "
                    >
                      <Download size={16} className="lg:hidden" />
                      <Download size={15} className="hidden lg:block" />
                      Download Resume
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - image column, full-bleed, no container restricting its width */}
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
                  object-[center_32%]
                  lg:object-bottom
                  pointer-events-none
                  select-none
                  [filter:brightness(.84)_contrast(1.05)_saturate(.95)]
                  lg:[filter:brightness(1.15)_contrast(1.05)_saturate(1.05)]
                "
            />

            {/* Left Fade - all screen sizes */}
            <div
              className="absolute inset-y-0 left-0 pointer-events-none w-[clamp(140px,32vw,520px)] lg:w-[14%] xl:w-[12%]"
              style={{
                background:
                  "linear-gradient(to right, #111111 0%, rgba(17,17,17,.92) 18%, rgba(17,17,17,.65) 45%, rgba(17,17,17,.25) 75%, transparent 100%)",
              }}
            />

            {/* Right Fade - all screen sizes */}
            <div
              className="absolute inset-y-0 right-0 pointer-events-none w-[clamp(140px,32vw,520px)] lg:w-[14%] xl:w-[12%]"
              style={{
                background:
                  "linear-gradient(to left, #111111 0%, rgba(17,17,17,.92) 18%, rgba(17,17,17,.65) 45%, rgba(17,17,17,.25) 75%, transparent 100%)",
              }}
            />

            {/* Top Fade - all screen sizes */}
            <div
              className="absolute inset-x-0 top-0 pointer-events-none h-[clamp(120px,22vw,220px)] lg:h-[9%]"
              style={{
                background:
                  "linear-gradient(to bottom, #111111 0%, rgba(17,17,17,.85) 20%, rgba(17,17,17,.55) 50%, rgba(17,17,17,.2) 80%, transparent 100%)",
              }}
            />

            {/* Bottom Fade */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none h-[clamp(100px,14vw,220px)] lg:h-[6%]"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,17,17,.50), transparent)",
              }}
            />

            {/* Mobile/Tablet CTA row - overlaid on the photo, hidden on desktop */}
            <motion.div
              {...fadeUp(0.3)}
              className="
                flex
                lg:hidden
                absolute
                inset-x-0
                bottom-6
                sm:bottom-8
                z-10
                justify-center
                items-center
                gap-4
                px-8
                sm:px-12
              "
            >
              <a
                href="#contact"
                className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                h-10
                sm:h-11
                px-3
                sm:px-6
                flex-1
                max-w-[190px]
                rounded-full
                bg-coral
                text-paper
                font-semibold
                text-xs
                sm:text-sm
                transition-all
                duration-300
                hover:scale-105
              "
              >
                Get In Touch
                <ArrowRight size={14} className="sm:hidden" />
                <ArrowRight size={16} className="hidden sm:block" />
              </a>

              <a
                href={resume}
                download
                className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                sm:gap-2
                h-10
                sm:h-11
                px-3
                sm:px-6
                flex-1
                max-w-[190px]
                whitespace-nowrap
                rounded-full
                border
                border-paper/30
                bg-[#111111]
                !text-white
                font-semibold
                text-xs
                sm:text-sm
                transition-all
                duration-300
                hover:scale-105
                hover:bg-coral
                hover:border-coral
                hover:!text-black
                active:scale-105
                active:bg-coral
                active:border-coral
                active:!text-black
              "
              >
                <Download size={14} className="sm:hidden" />
                <Download size={16} className="hidden sm:block" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}