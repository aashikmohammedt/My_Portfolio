import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import portfolio from "../data/portfolio";

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

  return (
    <section id="contact" className="py-28 max-w-[1460px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="tracked uppercase text-sm font-semibold text-coral mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl font-black mb-6">Leave a Message</h2>
          <p className="text-muted leading-relaxed mb-10 max-w-md">
            Have a role that fits, or want to talk about a project? I'd love
            to hear from you.
          </p>

          <div className="flex flex-col gap-5">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="flex items-center gap-4 hover:text-coral transition-colors"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-butter">
                <Mail size={18} />
              </span>
              {portfolio.personal.email}
            </a>
            <a
              href={`tel:${portfolio.personal.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 hover:text-coral transition-colors"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-mint">
                <Phone size={18} />
              </span>
              {portfolio.personal.phone}
            </a>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-lilac">
                <MapPin size={18} />
              </span>
              {portfolio.personal.location}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
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
            className="self-start inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 rounded-full font-semibold hover:bg-coral transition-colors"
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
    </section>
  );
}

export default Contact;