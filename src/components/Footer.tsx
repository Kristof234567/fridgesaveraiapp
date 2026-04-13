import { Mail } from "lucide-react";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Footer = () => {
  const isSubpath = window.location.pathname.startsWith('/fridgesaveraiapp');
  const pathPrefix = isSubpath ? '/fridgesaveraiapp' : '';

  return (
    <footer className="py-10 bg-[#030712] text-gray-300 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Egyetlen soros elrendezés asztali nézetben */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          
          {/* BAL OLDAL: Logo, Szöveg és Badges */}
          <div className="flex flex-col items-center sm:items-start gap-3 flex-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="FridgeSaver AI" className="h-6 w-6 rounded" />
              <span className="text-sm font-semibold text-white">FridgeSaver AI</span>
            </div>
            <p className="text-xs font-medium text-gray-500">Download FridgeSaver AI</p>
            <StoreBadges badgeHeight="h-9" />
          </div>

          {/* KÖZÉP: Linkek és Email (Tökéletesen középre igazítva) */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="flex items-center gap-6 text-sm">
              <a href={`${pathPrefix}/privacy.html`} className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href={`${pathPrefix}/terms.html`} className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <a 
                href={`${pathPrefix}/delete-account.html`} 
                className="text-white border-b border-red-500 font-medium hover:border-red-400 transition-colors"
              >
                Delete Data
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-green-500" />
              <a href="mailto:FridgeSaverAI@protonmail.hu" className="hover:text-white transition-colors font-medium">
                FridgeSaverAI@protonmail.hu
              </a>
            </div>
          </div>

          {/* JOBB OLDAL: Copyright (Jobbra igazítva a kép alapján) */}
          <div className="flex flex-col items-center sm:items-end flex-1">
            <p className="text-xs text-gray-600">
              © 2026 FridgeSaver AI. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
