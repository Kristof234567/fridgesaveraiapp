import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.fridgesaver.ai";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md shadow-sm">
    <div className="container flex h-16 items-center justify-between">
      <a href="/" className="flex items-center gap-2">
        <Leaf className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-foreground">FridgeSaver AI</span>
      </a>
      <div className="flex items-center gap-6">
        <a href="/legal" className="hidden text-sm text-muted-foreground hover:text-foreground transition-colors sm:inline-block">
          Legal
        </a>
        <Button variant="navCta" size="sm" asChild>
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            Pre-register
          </a>
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
