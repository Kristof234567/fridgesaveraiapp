import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Navbar = () => {
  const location = useLocation();
  const isManagePage = location.pathname === "/manage-subscription";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* LOGO: Ha a Manage oldalon vagyunk, a fő domainre vigyen vissza */}
        <a href="https://www.fridgesaverai.com" className="flex items-center gap-2">
          <img src={logo} alt="FridgeSaver AI" className="h-8 w-8 rounded" />
          <span className="text-lg font-bold text-foreground">FridgeSaver AI</span>
        </a>

        <div className="flex items-center gap-4">
          {/* HOME: Sima <a> tag a biztos visszatéréshez a főoldalra */}
          <a 
            href="https://www.fridgesaverai.com" 
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            Home
          </a>

          {/* MANAGE SUBSCRIPTION: Ez marad Link, mert ez a React app része */}
          <Link
            to="/manage-subscription"
            className={`hidden sm:inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors ${
              isManagePage 
                ? "bg-muted text-foreground" 
                : "bg-transparent text-foreground hover:bg-muted"
            }`}
          >
            Manage Subscription
          </Link>

          <StoreBadges badgeHeight="h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
