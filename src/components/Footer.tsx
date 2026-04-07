import { Mail } from "lucide-react";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Footer = () => {
  // Automatikusan detektáljuk, ha almappában vagyunk (pl. /fridgesaveraiapp/)
  const isSubpath = window.location.pathname.startsWith('/fridgesaveraiapp');
  const pathPrefix = isSubpath ? '/fridgesaveraiapp' : '';

  return (
    <footer className="py-10" style={{ backgroundColor: 'hsl(var(--footer-bg))', color: 'hsl(var(--footer-fg))' }}>
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between px-6">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FridgeSaver AI" className="h-6 w-6 rounded" />
            <span className="text-sm font-semibold" style={{ color: 'hsl(0 0% 95%)' }}>FridgeSaver AI</span>
          </div>
          <p className="text-xs font-medium" style={{ color: 'hsl(0 0% 70%)' }}>Download FridgeSaver AI</p>
          <StoreBadges badgeHeight="h-9" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 text-sm" style={{ color: 'hsl(var(--footer-fg))' }}>
            {/* 1. JAVÍTÁS: Sima <a> tagek, kiegészítve a prefix-szel */}
            <a href={`${pathPrefix}/privacy.html`} className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href={`${pathPrefix}/terms.html`} className="transition-colors hover:text-primary">
              Terms of Use
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(var(--footer-fg))' }}>
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:FridgeSaverAI@protonmail.com" className="transition-colors hover:text-primary">
              FridgeSaverAI@protonmail.com
            </a>
          </div>
        </div>

        <p className="text-xs" style={{ color: 'hsl(0 0% 50%)' }}>
          © {new Date().getFullYear()} FridgeSaver AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
