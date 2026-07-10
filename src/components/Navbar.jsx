import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "../data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-paper/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div
          className={`section-wrap flex items-center justify-between gap-4 py-3 sm:py-4 transition-colors duration-300 ${scrolled ? "text-ink" : "text-paper"
            }`}
        >
          {/* Logo */}

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex-shrink-0 min-w-0 truncate text-lg sm:text-xl lg:text-2xl font-black uppercase tracked leading-none -ml-1 sm:-ml-2 lg:ml-0"
          >
            Aashik<span className="text-coral">.</span>
          </a>

          {/* Right Side */}

          <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5 flex-shrink-0 -mr-1 sm:-mr-2 lg:mr-0">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.personal.email}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="hover:text-coral transition-colors"
            >
              <Mail
                size={18}
                className="w-[18px] h-[18px] sm:w-5 sm:h-5"
              />
            </a>

            <a
              href={portfolio.personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-coral transition-colors"
            >
              <FaGithub className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            </a>

            <a
              href={portfolio.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-coral transition-colors"
            >
              <FaLinkedin className="w-[18px] h-[18px] sm:w-5 sm:h-5" />
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 hover:text-coral"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Overlay */}

        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer */}

        <aside
          className={`absolute top-0 right-0 h-full w-[86%] max-w-[380px] bg-ink text-paper px-8 sm:px-10 py-8 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header */}

          <div className="flex items-center justify-between mb-16">
            <h2 className="text-lg font-black uppercase tracked">
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close Menu"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-paper/20 hover:border-coral hover:text-coral transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Links */}

          <ul className="space-y-5">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xl sm:text-2xl font-bold hover:text-coral transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer */}

          <div className="mt-auto pt-10 border-t border-paper/10">
            <div className="flex items-center gap-6">
              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral transition-colors"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-coral transition-colors"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolio.personal.email}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="hover:text-coral transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}