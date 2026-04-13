import { Mail } from "lucide-react";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Footer = () => {
  const isSubpath = window.location.pathname.startsWith('/fridgesaveraiapp');
  const pathPrefix = isSubpath ? '/fridgesaveraiapp' : '';

  return (
    <footer className="py-12 bg-[#030712] border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        
        {/* BAL OLDAL: Logo és Letöltés */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FridgeSaver AI" className="h-6 w-6 rounded" />
            <span className="text-sm font-semibold text-gray-100">FridgeSaver AI</span>
          </div>
          <p className="text-xs font-medium text-gray-500">Download FridgeSaver AI</p>
          <StoreBadges badgeHeight="h-9" />
        </div>

        {/* KÖZÉP: Navigáció és Email (Ez került vissza középre) */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href={`${pathPrefix}/privacy.html`} className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href={`${pathPrefix}/terms.html`} className="text-gray-300 hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href={`${pathPrefix}/delete-account.html`} className="text-white underline underline-offset-8 decoration-red-500/50 hover:decoration-red-500 transition-all font-medium">
              Delete Data
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail className="h-4 w-4 text-green-500" />
            <a href="mailto:FridgeSaverAI@protonmail.hu" className="hover:text-white transition-colors font-medium">
              FridgeSaverAI@protonmail.hu
            </a>
          </div>
        </div>

        {/* JOBB OLDAL: Copyright */}
        <div className="flex flex-col items-center sm:items-end">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} FridgeSaver AI.<br className="sm:hidden" /> All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
