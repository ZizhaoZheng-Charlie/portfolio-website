export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#1e3a42] bg-[#0d2028]/30">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-b from-yellow-400 to-blue-500 rounded-sm"></div>
            <span className="text-[#a0b3b8] text-sm">
              © {currentYear} Zizhao Zheng. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <FooterLink
              href="mailto:zizhaozheng87@gmail.com"
              label="Email"
              ariaLabel="Send email"
            />
            <FooterLink
              href="https://www.linkedin.com/in/zizhao-zheng/"
              label="LinkedIn"
              ariaLabel="Visit LinkedIn profile"
            />
            <FooterLink
              href="https://github.com/ZizhaoZheng-Charlie"
              label="GitHub"
              ariaLabel="Visit GitHub profile"
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#1e3a42]/50">
          <p className="text-center text-xs text-[#7a9199] tracking-wide">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
}

function FooterLink({ href, label, ariaLabel }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-[#a0b3b8] hover:text-[#2a9d8f] transition-colors duration-200 text-sm font-medium tracking-wide"
    >
      {label}
    </a>
  );
}

