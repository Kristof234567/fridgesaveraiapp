import { Link } from "react-router-dom";
import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
    <div className="container flex h-16 items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="FridgeSaver AI" className="h-8 w-8 rounded" />
        <span className="text-lg font-bold text-foreground">FridgeSaver AI</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block">
          Home
        </Link>
        <Link
          to="/manage-subscription"
          className="hidden sm:inline-flex items-center rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Manage Subscription
        </Link>
        <StoreBadges badgeHeight="h-8" />
      </div>
    </div>
  </nav>
);

export default Navbar;
