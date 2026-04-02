import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2">
        <Leaf className="h-5 w-5 text-primary" />
        <span className="text-sm font-semibold text-foreground">FridgeSaver AI</span>
      </div>

      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="/legal" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="/legal" className="hover:text-foreground transition-colors">Terms of Use</a>
        <a href="mailto:contact@fridgesaver.ai" className="hover:text-foreground transition-colors">Contact</a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} FridgeSaver AI. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
