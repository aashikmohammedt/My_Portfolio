import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "../data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-paper/90 backdrop-blur shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1460px] mx-auto flex items-center justify-between px-6 py-5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-xl font-black tracked uppercase"
          >
            Aashik<span className="text-coral">.</span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex text-ink hover:text-coral transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:inline-flex text-ink hover:text-coral transition-colors"
            >
              <FaLinkedin size={18} />
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink/15 hover:border-coral hover:text-coral transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/60"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-ink text-paper px-10 py-10 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-16">
            <span className="text-lg font-black tracked uppercase">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-paper/20 hover:border-coral hover:text-coral transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-3xl font-bold hover:text-coral transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-center gap-5 pt-10">
            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-coral transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-coral transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="text-sm text-paper/70 hover:text-coral transition-colors ml-2"
            >
              {portfolio.personal.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;