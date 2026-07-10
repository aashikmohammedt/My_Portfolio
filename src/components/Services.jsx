import { motion } from "framer-motion";
import { Monitor, Plug, LayoutTemplate } from "lucide-react";
import portfolio from "../data/portfolio";

const ICONS = {
  monitor: Monitor,
  api: Plug,
  layout: LayoutTemplate,
};

function Services() {
  return (
    <section
      className="pt-8 md:pt-10 pb-6 md:pb-8 overflow-hidden relative"
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
          What I do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-4xl font-black mb-12 max-w-lg text-paper"
        >
          Core areas I build in
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {portfolio.services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-3xl p-10 flex flex-col h-full overflow-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 transition-[border-color,box-shadow] duration-500 hover:border-coral/40 hover:shadow-[0_0_50px_-12px_rgba(255,140,66,0.45)]"
              >
                {/* Ambient glow that fades in on hover */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(249,115,22,.22), transparent 60%)",
                  }}
                />

                {/* Animated top accent line */}
                <span className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-coral via-coral/60 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-coral mb-5 transition-all duration-500 group-hover:bg-coral group-hover:text-white group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={26} />
                </span>
                <h3 className="relative text-xl font-bold mb-4 text-paper">
                  {service.title}
                </h3>
                <p className="relative text-white/55 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;