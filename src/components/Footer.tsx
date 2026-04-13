import { Mail } from "lucide-react";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Footer = () => {
  const isSubpath = window.location.pathname.startsWith('/fridgesaveraiapp');
  const pathPrefix = isSubpath ? '/fridgesaveraiapp' : '';

  return (
    <footer className="py-10" style={{ backgroundColor: 'hsl(var(--footer-bg))', color: 'hsl(var(--footer-fg))' }}>
      <div className="container flex flex-col gap-10 px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <div className="flex items-center gap-2">
              <img src={logo} alt="FridgeSaver AI" className="h-6 w-6 rounded" />
              <span className="text-sm font-semibold" style={{ color: 'hsl(0 0% 95%)' }}>FridgeSaver AI</span>
            </div>
            <p className="text-xs font-medium" style={{ color: 'hsl(0 0% 70%)' }}>Download FridgeSaver AI</p>
            <StoreBadges badgeHeight="h-9" />
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex gap-6 text-sm" style={{ color: 'hsl(var(--footer-fg))' }}>
              <a href={`${pathPrefix}/privacy.html`} className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
              <a href={`${pathPrefix}/terms.html`} className="transition-colors hover:text-primary">
                Terms of Use
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'hsl(var(--footer-fg))' }}>
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:FridgeSaverAI@protonmail.hu" className="transition-colors hover:text-primary font-medium">
                FridgeSaverAI@protonmail.hu
              </a>
            </div>
          </div>
        </div>

        {/* Highlighted Delete Section - Ez lett az új, jól látható rész */}
        <div className="flex flex-col items-center border-t border-white/10 pt-8 gap-4">
          <div className="text-center">
            <p className="text-xs mb-3" style={{ color: 'hsl(0 0% 50%)' }}>
              © {new Date().getFullYear()} FridgeSaver AI. All rights reserved.
            </p>
            <a 
              href={`${pathPrefix}/delete-account.html`} 
              className="inline-block px-6 py-2 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
            >
              Delete Data(s) or Account
            </a>
          </div>
          <p className="text-[10px] italic opacity-40">
            Requests are typically processed within 7 business days.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
