export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-center justify-center bg-transparent px-4 py-16"
    >
      <div className="max-w-2xl w-full">
        <div className="flex justify-center mb-8">
          <h2 className="text-center text-sm font-medium tracking-[0.3em] text-[#a0b3b8] pb-3 border-b border-[#2a9d8f]">
            CONTACT
          </h2>
        </div>

        <p className="text-center text-[#c5d4d8] mb-12 leading-relaxed">
          If you'd like to discuss frontend work, architecture-heavy problems or
          products in the FinTech space, feel free to reach out.
        </p>

        <div className="border border-[#1e3a42] rounded-lg p-8 bg-[#0d2028]/50">
          <div className="space-y-4">
            <ContactItem
              label="EMAIL"
              value="Zizhaozheng87@gmail.com"
              href="mailto:zizhaozheng87@gmail.com"
            />
            <ContactItem
              label="LINKEDIN"
              value="Linkedin.com/in/zizhao-zheng"
              href="https://www.linkedin.com/in/zizhao-zheng/"
            />
            <ContactItem
              label="GITHUB"
              value="Github.com/ZizhaoZheng-Charlie"
              href="https://github.com/ZizhaoZheng-Charlie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
}

function ContactItem({ label, value, href }: ContactItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 pb-2 border-b border-[#2a9d8f]/30">
      <span className="text-xs font-medium tracking-wider text-[#7a9199] sm:w-32">
        {label}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#e8f1f3] hover:text-white transition-colors font-mono text-sm sm:ml-auto"
      >
        {value}
      </a>
    </div>
  );
}
