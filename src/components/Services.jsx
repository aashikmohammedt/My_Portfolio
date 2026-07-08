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
    <section className="py-28 max-w-[1460px] mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10">
        {portfolio.services.map((service, i) => {
          const Icon = ICONS[service.icon];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-5"
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-butter text-teal">
                <Icon size={28} />
              </span>
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;