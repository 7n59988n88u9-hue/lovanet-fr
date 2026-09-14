import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PremiumBorders } from "./PremiumBorders";
import { ThemeDecorOverlay } from "./ThemeDecorOverlay";

export const PageShell = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <>
    <PremiumBorders />
    <Navbar />
    <div className="theme-shell min-h-screen flex flex-col relative z-0" style={{ background: "transparent" }} data-testid="page-shell">
      <main className={`theme-main-content flex-1 ${className}`}>{children}</main>
      <Footer />
      <ThemeDecorOverlay />
    </div>
  </>
);
