import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Ressurser",
      links: [
        { label: "Alle guider", href: "/guides" },
        { label: "Kategorier", href: "/categories" },
        { label: "Populære", href: "/popular" },
        { label: "Nyeste", href: "/newest" },
      ],
    },
    {
      title: "Selskap",
      links: [
        { label: "Om oss", href: "/about" },
        { label: "Kontakt", href: "/contact" },
        { label: "Personvern", href: "#" },
        { label: "Vilkår", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaEnvelope, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-white">Tech Verden</span>
            </div>
            <p className="text-slate-400 text-sm">
              Din kilde for klare, handlingsrettede tekniske veiledninger.
            </p>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
  <li key={`${link.href}-${i}`}>
    <Link
      to={link.href}
      className="text-slate-400 hover:text-white transition-colors text-sm"
    >
      {link.label}
    </Link>
  </li>
))}

              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © {currentYear} Tech Verden. Alle rettigheter reservert.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
