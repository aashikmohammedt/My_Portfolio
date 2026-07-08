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
    <section className="py-20 md:py-24">
      <div className="section-wrap">
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
          className="text-3xl md:text-4xl font-black mb-12 max-w-lg"
        >
          Core areas I build in
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl bg-fog p-8 flex flex-col gap-5 hover:bg-butter transition-colors"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-paper text-teal">
                  <Icon size={26} />
                </span>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted leading-relaxed">
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