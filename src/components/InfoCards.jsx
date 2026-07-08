import { motion } from "framer-motion";
import portfolio from "../data/portfolio";

const ACCENTS = {
  butter: "bg-butter",
  mint: "bg-mint",
  lilac: "bg-lilac",
};

function InfoCards() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="section-wrap">
        <div className="grid md:grid-cols-3 gap-6">
          {portfolio.infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col gap-6 shadow-sm ring-1 ring-ink/5 ${ACCENTS[card.accent]}`}
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <div className="flex flex-col divide-y divide-ink/10">
                {card.entries.map((entry) => (
                  <div key={entry.heading} className="py-4 first:pt-0 last:pb-0">
                    <p className="tracked uppercase text-xs font-semibold text-coral mb-1.5">
                      {entry.period}
                    </p>
                    <p className="font-semibold leading-snug">
                      {entry.heading}
                    </p>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed">
                      {entry.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoCards;