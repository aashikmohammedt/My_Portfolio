import { FaGithub, FaLinkedin } from "react-icons/fa";
import portfolio from "../data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-paper">
      <div className="section-wrap py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="max-w-xs">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="text-xl font-black tracked uppercase"
            >
              Aashik<span className="text-coral">.</span>
            </a>
            <p className="mt-4 text-paper/60 leading-relaxed">
              Python Full Stack Developer building scalable, responsive web
              applications.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-paper/10 hover:bg-coral transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-paper/10 hover:bg-coral transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="tracked uppercase text-xs font-semibold text-paper/40 mb-4">
                Navigate
              </p>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-paper/70 hover:text-coral transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="tracked uppercase text-xs font-semibold text-paper/40 mb-4">
                Contact
              </p>
              <ul className="flex flex-col gap-3 text-paper/70">
                <li>
                  <a
                    href={`mailto:${portfolio.personal.email}`}
                    className="hover:text-coral transition-colors break-all"
                  >
                    {portfolio.personal.email}
                  </a>
                </li>
                <li>{portfolio.personal.phone}</li>
                <li>{portfolio.personal.location}</li>
                <li>
                  <a
                    href={portfolio.personal.resume}
                    download
                    className="hover:text-coral transition-colors"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 text-sm text-paper/40">
          © {new Date().getFullYear()} {portfolio.personal.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;