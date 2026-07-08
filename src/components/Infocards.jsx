import { motion } from "framer-motion";
import portfolio from "../data/portfolio";

const ACCENTS = {
  butter: "bg-butter",
  mint: "bg-mint",
  lilac: "bg-lilac",
};

function InfoCards() {
  return (
    <section id="about" className="py-16 max-w-[1460px] mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {portfolio.infoCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-3xl p-8 flex flex-col gap-6 ${ACCENTS[card.accent]}`}
          >
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <div className="flex flex-col gap-5">
              {card.entries.map((entry) => (
                <div key={entry.heading}>
                  <p className="tracked uppercase text-xs font-semibold text-coral mb-1">
                    {entry.period}
                  </p>
                  <p className="font-semibold leading-snug">
                    {entry.heading}
                  </p>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    {entry.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default InfoCards;