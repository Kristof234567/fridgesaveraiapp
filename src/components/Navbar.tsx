import logo from "@/assets/logofridge.png";
import StoreBadges from "@/components/StoreBadges";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
    <div className="container flex h-16 items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="FridgeSaver AI" className="h-8 w-8 rounded" />
        <span className="text-lg font-bold text-foreground">FridgeSaver AI</span>
      </a>
      <div className="flex items-center gap-6">
        <a href="/legal" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors sm:inline-block">
          Legal
        </a>
        <StoreBadges badgeHeight="h-8" />
      </div>
    </div>
  </nav>
);

export default Navbar;
