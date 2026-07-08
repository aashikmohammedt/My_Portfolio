import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import portfolio from "../data/portfolio";

function Hero() {
  const { personal, stats } = portfolio;

  return (
    <section id="home" className="relative pt-40 pb-32 bg-dot-grid">
      <div className="max-w-[1460px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracked uppercase text-sm font-semibold text-coral mb-6"
        >
          {personal.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-heading"
        >
          {personal.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="max-w-xl text-muted text-lg leading-relaxed">
            {portfolio.about.description}
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 rounded-full font-semibold hover:bg-coral transition-colors"
            >
              Get in touch
              <ArrowDownRight size={18} />
            </a>
            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full font-semibold hover:bg-ink hover:text-paper transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-[1320px] mx-6 lg:mx-auto mt-20 rounded-3xl bg-ink text-paper grid grid-cols-2 md:grid-cols-4 gap-y-10"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-10 text-center ${
              i !== 0 ? "md:border-l md:border-paper/10" : ""
            }`}
          >
            <p className="text-4xl md:text-5xl font-black text-coral">
              {stat.number}
            </p>
            <p className="mt-2 text-sm text-paper/70">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;