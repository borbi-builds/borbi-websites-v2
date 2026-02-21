import { Container } from './Container';

interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  brand?: string;
  description?: string;
  arms?: FooterLink[];
  links?: FooterLink[];
}

const defaultArms: FooterLink[] = [
  { label: 'Marketing', href: '/marketing' },
  { label: 'Website Services', href: '/web-services' },
  { label: 'Automation', href: '/automation' },
  { label: 'Equity Research', href: '/equity-research' },
  { label: 'Training & Agents', href: '/training' },
];

export function Footer({
  brand = 'Borbi Enterprises',
  description = 'AI-powered consulting across marketing, web, automation, research & training.',
  arms = defaultArms,
  links = [],
}: FooterProps) {
  return (
    <footer className="bg-bg-surface border-t border-white/[0.04] py-borbi-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-borbi-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-h2 text-text-primary mb-borbi-4">{brand}</h3>
            <p className="text-body text-text-secondary max-w-sm">{description}</p>
          </div>

          {/* Arms */}
          <div>
            <h4 className="text-small uppercase tracking-wide text-text-muted mb-borbi-5">
              Our Arms
            </h4>
            <ul className="space-y-borbi-3">
              {arms.map((arm) => (
                <li key={arm.href}>
                  <a
                    href={arm.href}
                    className="text-body text-text-secondary hover:text-accent-primary transition-colors duration-fast"
                  >
                    {arm.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-small uppercase tracking-wide text-text-muted mb-borbi-5">
              Company
            </h4>
            <ul className="space-y-borbi-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Contact', href: '/contact' },
                ...links,
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body text-text-secondary hover:text-accent-primary transition-colors duration-fast"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-borbi-10 pt-borbi-7 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-borbi-4">
          <p className="text-small text-text-muted">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </p>
          <p className="text-small text-text-muted">
            Built with precision by Borbi.
          </p>
        </div>
      </Container>
    </footer>
  );
}
