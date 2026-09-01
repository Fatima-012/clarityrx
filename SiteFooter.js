const FOOTER_LINKS = [
  { href: "#what-i-do", label: "What I Do" },
  { href: "#how-it-works", label: "Process" },
  { href: "#samples", label: "Samples" },
  { href: "#drafts", label: "Drafts" },
  { href: "#integrity", label: "Integrity" },
  { href: "#contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <a href="#home" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="ClarityRx" className="brand-logo brand-logo--footer" />
        </a>

        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        {/* EDIT: swap in your real inbox */}
        <a href="mailto:hello@clarityrx.com" className="footer-email">hello@clarityrx.com</a>
      </div>
      <div className="wrap">
        <p className="footer-fine">&copy; {year} ClarityRx. Editing, not writing — always.</p>
      </div>
    </footer>
  );
}
