import logo from "@/assets/logofridge.png";

const Footer = () => (
  <footer className="py-10" style={{ backgroundColor: 'hsl(var(--footer-bg))', color: 'hsl(var(--footer-fg))' }}>
    <div className="container flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="FridgeSaver AI" className="h-6 w-6 rounded" />
        <span className="text-sm font-semibold" style={{ color: 'hsl(0 0% 95%)' }}>FridgeSaver AI</span>
      </div>

      <div className="flex gap-6 text-sm" style={{ color: 'hsl(var(--footer-fg))' }}>
        <a href="/legal" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="/legal" className="hover:text-primary transition-colors">Terms of Use</a>
        <a href="mailto:contact@fridgesaver.ai" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <p className="text-xs" style={{ color: 'hsl(0 0% 50%)' }}>
        © {new Date().getFullYear()} FridgeSaver AI. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
