import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import portfolio from "../data/portfolio";

const CONTACT_ITEMS = (personal) => [
  {
    icon: Mail,
    accent: "bg-butter",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    accent: "bg-mint",
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: MapPin,
    accent: "bg-lilac",
    label: "Location",
    value: personal.location,
    href: null,
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const items = CONTACT_ITEMS(portfolio.personal);

  return (
    <section id="contact" className="py-20 md:py-24 bg-fog">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="tracked uppercase text-sm font-semibold text-coral mb-3">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              Leave a Message
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Have a role that fits, or want to talk about a project? I'd
              love to hear from you.
            </p>

            <div className="flex flex-col gap-5">
              {items.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full shrink-0 ${item.accent}`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs text-muted tracked uppercase">
                        {item.label}
                      </span>
                      <span className="font-medium">{item.value}</span>
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 hover:text-coral transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bg-paper rounded-3xl shadow-sm ring-1 ring-ink/5 p-6 md:p-8 flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl bg-fog px-6 py-4 outline-none focus:ring-2 focus:ring-coral transition-shadow"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl bg-fog px-6 py-4 outline-none focus:ring-2 focus:ring-coral transition-shadow"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-2xl bg-fog px-6 py-4 outline-none focus:ring-2 focus:ring-coral transition-shadow resize-none"
            />
            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 bg-ink text-paper px-8 py-3.5 rounded-full font-semibold hover:bg-coral transition-colors"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-sm text-teal">
                Opening your email client to send this message…
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;