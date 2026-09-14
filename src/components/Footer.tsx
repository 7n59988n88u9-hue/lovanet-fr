import { Link } from "react-router-dom";
import { Bot, Compass, Film, Home, Mail, Newspaper, Play, ShoppingBag, Trophy } from "lucide-react";
import footerBannerBackground from "@/assets/footer-banner-background.mp4.asset.json";
import footerMenuVideo from "@/assets/footer-menu-video.mp4.asset.json";

const FOOTER_BACKDROP_VIDEO = footerBannerBackground.url;
const FOOTER_MENU_VIDEO = footerMenuVideo.url;

// Unique destinations — no duplicates between nav and content
const allDestinations = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/anime-moments", label: "Moments Anime", icon: Film },
  { to: "/prime-video", label: "Cinéma", icon: Play },
  { to: "/anime-countdown", label: "Prochainement", icon: Play },
  { to: "/anime-catalog", label: "Sélection", icon: Film },
  { to: "/ai-hub", label: "Studio IA", icon: Bot },
  { to: "/univers", label: "Monde", icon: Compass },
  { to: "/actualites", label: "News", icon: Newspaper },
  { to: "/shop", label: "Magasin", icon: ShoppingBag },
  { to: "/contact", label: "Contact", icon: Mail },
  { to: "/leaderboard", label: "Podium", icon: Trophy },
];

const footerPanel =
  "theme-panel-surface rounded-[2rem]";

export const Footer = () => {
  return (
    <footer className="mt-24 px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto mb-2 flex w-full max-w-6xl justify-end px-3 sm:px-5 lg:px-7">
        <span className="neon-rgb-text-mini text-[11px] font-bold" data-testid="footer-copyright">
          2026 ree3franc
        </span>
      </div>
      <div className={`relative mx-auto w-full max-w-6xl overflow-hidden ${footerPanel}`} data-testid="site-footer-shell">
        <video
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain object-center opacity-100"
          src={FOOTER_BACKDROP_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          data-testid="footer-backdrop-video"
          data-bg-video
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[rgba(255,255,255,0.12)]" />
        <div className="relative z-10 border-b border-[var(--theme-border-soft)] px-5 py-8 sm:px-7 lg:px-8 lg:py-10">
          {/* Premium unified navigation hub — no duplicates */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              {allDestinations.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="glass3d-btn group flex min-h-11 items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold transition-all hover:scale-[1.02]"
                  data-testid={`footer-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white shadow-inner">
                    <item.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="neon-rgb-text-mini text-[11px] font-bold">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-7 flex justify-end pr-1 sm:pr-4" data-testid="footer-video-cluster">
            <div className="w-full max-w-[500px]">
              <div className="glass3d-panel ml-auto aspect-video w-[64%] overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-xl">
                <video
                  className="h-full w-full bg-transparent object-contain object-center"
                  src={FOOTER_MENU_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  data-testid="footer-menu-video"
                  data-bg-video
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
