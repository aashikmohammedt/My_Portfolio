import { motion } from "framer-motion";
import portfolio from "../data/portfolio";

export default function AboutBanner() {
  const { about } = portfolio;

  return (
    <section className="bg-coral">
      <div className="section-wrap">
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="
              text-ink text-center font-medium
              leading-relaxed
            "
            style={{
              fontSize: "clamp(1rem, 0.75rem + 1.1vw, 1.6rem)",
            }}
          >
            {about.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}