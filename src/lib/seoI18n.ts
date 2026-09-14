// SEO i18n dictionary — controls the title / description / og:* that Google
// serves in the SERP snippet for each supported UI language. Selection is
// driven by `?hl=<code>` (explicit) or `navigator.language` (implicit).

export const SUPPORTED_LOCALES = ["fr", "en", "es", "de", "it", "pt", "ja", "zh"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

export type RouteKey =
  | "/"
  | "/anime-moments"
  | "/univers"
  | "/shop"
  | "/anime-catalog"
  | "/anime-countdown"
  | "/prime-video"
  | "/actualites"
  | "/leaderboard"
  | "/profile"
  | "/login"
  | "/contact"
  | "/legals";

export const ROUTES: RouteKey[] = [
  "/",
  "/anime-moments",
  "/univers",
  "/shop",
  "/anime-catalog",
  "/anime-countdown",
  "/prime-video",
  "/actualites",
  "/leaderboard",
  "/profile",
  "/login",
  "/contact",
  "/legals",
];

type Meta = { title: string; description: string };

// Route-level snippets used by search engines for each service page.
const ROUTE_DESCRIPTIONS: Record<RouteKey, string> = {
  "/": "ree3franc  Accueil anime, manga, gaming, pop culture japonaise.",
  "/anime-moments": "Moments Anime : page officielle avec sélections vidéo, aperçus, nouveautés et accès direct aux services ree3franc.",
  "/univers": "Monde ree3franc : entrée rapide vers les vidéos, le magasin, le catalogue, les actus et les services du compte.",
  "/shop": "Magasin ree3franc : posters, collectors, vêtements et produits manga, avec accès panier et parcours client.",
  "/anime-catalog": "Sélection anime ree3franc : fiches, trailers et recherche de titres pour explorer les séries et films.",
  "/anime-countdown": "Anime prochainement : calendrier et compte à rebours des prochaines sorties d'épisodes et de saisons.",
  "/prime-video": "Cinéma ree3franc : sélection d'anime, lecture continue et recommandations par univers.",
  "/actualites": "Actus ree3franc : annonces, nouveautés vidéo, sorties produits et informations de la plateforme.",
  "/leaderboard": "Podium ree3franc : top membres, points, progression et activités de la communauté.",
  "/profile": "Espace client ree3franc : profil, préférences, favoris et paramètres de compte utilisateur.",
  "/login": "Connexion ree3franc : accès sécurisé à votre compte, à vos favoris et à vos services personnalisés.",
  "/contact": "Contact ree3franc : support, assistance compte, demandes magasin et informations générales.",
  "/legals": "Mentions légales ree3franc : informations éditeur, conditions d'utilisation et politique de confidentialité.",
};

// Titles use " : " as separator (never em-dash). Homepage title matches the
// exact wording requested by the brand.
const TITLES: Record<Locale, Record<RouteKey, string>> = {
  fr: {
    "/": "ree3franc : accueil anime manga officiel",
    "/anime-moments": "ree3franc : page officielle ree3franc",
    "/univers": "Monde ree3franc : vidéos, shorts, catalogue anime et magasin",
    "/shop": "Magasin ree3franc : Posters, collectors et vêtements anime",
    "/anime-catalog": "Sélection Anime : 1500+ animés avec trailers",
    "/anime-countdown": "Anime prochainement : Countdown live des sorties",
    "/prime-video": "Cinéma : ree3franc streaming",
    "/actualites": "Actus Anime : nouveautés vidéos, produits et manga",
    "/leaderboard": "Podium : Podium ree3franc",
    "/profile": "Espace client : Profil ree3franc",
    "/login": "Connexion : Compte ree3franc",
    "/contact": "Contact : ree3franc ree3franc",
    "/legals": "Mentions légales : ree3franc ree3franc",
  },
  en: {
    "/": "ree3franc : official anime manga portal",
    "/anime-moments": "ree3franc : official ree3franc page",
    "/univers": "ree3franc World : anime videos, shorts, catalog and shop",
    "/shop": "ree3franc Shop : anime posters, collectors and apparel",
    "/anime-catalog": "Anime Catalog : 1500+ shows with trailers",
    "/anime-countdown": "Upcoming Anime : Live release countdown",
    "/prime-video": "Cinéma : ree3franc streaming",
    "/actualites": "Anime News : videos, products and manga updates",
    "/leaderboard": "Podium : ree3franc ranking",
    "/profile": "Client Area : ree3franc profile",
    "/login": "Sign in : ree3franc account",
    "/contact": "Contact : ree3franc ree3franc",
    "/legals": "Legal notice : ree3franc ree3franc",
  },
  es: {
    "/": "ree3franc : portal oficial de anime y manga",
    "/anime-moments": "ree3franc : página oficial ree3franc",
    "/univers": "Mundo ree3franc : vídeos anime, shorts, catálogo y tienda",
    "/shop": "Tienda ree3franc : pósteres, coleccionables y ropa anime",
    "/anime-catalog": "Catálogo Anime : 1500+ series con tráilers",
    "/anime-countdown": "Próximos anime : cuenta atrás en directo",
    "/prime-video": "Cinéma : ree3franc streaming",
    "/actualites": "Noticias Anime : novedades de vídeos, productos y manga",
    "/leaderboard": "Podium : clasificación ree3franc",
    "/profile": "Área cliente : perfil ree3franc",
    "/login": "Iniciar sesión : cuenta ree3franc",
    "/contact": "Contacto : ree3franc ree3franc",
    "/legals": "Aviso legal : ree3franc ree3franc",
  },
  de: {
    "/": "ree3franc : offizielles Anime- und Manga-Portal",
    "/anime-moments": "ree3franc : offizielle ree3franc-Seite",
    "/univers": "ree3franc-Welt : Anime-Videos, Shorts, Katalog und Shop",
    "/shop": "ree3franc Shop : Anime-Poster, Sammlerstuecke und Kleidung",
    "/anime-catalog": "Anime-Katalog : 1500+ Serien mit Trailern",
    "/anime-countdown": "Kommende Anime : Live-Countdown",
    "/prime-video": "Cinéma : ree3franc Streaming",
    "/actualites": "Anime News : Videos, Produkte und Manga Updates",
    "/leaderboard": "Podium : ree3franc Rangliste",
    "/profile": "Kundenbereich : ree3franc Profil",
    "/login": "Anmeldung : ree3franc Konto",
    "/contact": "Kontakt : ree3franc ree3franc",
    "/legals": "Impressum : ree3franc ree3franc",
  },
  it: {
    "/": "ree3franc : portale ufficiale anime e manga",
    "/anime-moments": "ree3franc : pagina ufficiale ree3franc",
    "/univers": "Mundo ree3franc : video anime, shorts, catalogo e shop",
    "/shop": "Shop ree3franc : poster, collector e abbigliamento anime",
    "/anime-catalog": "Catalogo Anime : 1500+ serie con trailer",
    "/anime-countdown": "Anime in arrivo : countdown live",
    "/prime-video": "Cinéma : ree3franc streaming",
    "/actualites": "News Anime : novità video, prodotti e manga",
    "/leaderboard": "Podium : classifica ree3franc",
    "/profile": "Area cliente : profilo ree3franc",
    "/login": "Accesso : account ree3franc",
    "/contact": "Contatti : ree3franc ree3franc",
    "/legals": "Note legali : ree3franc ree3franc",
  },
  pt: {
    "/": "ree3franc : portal oficial de anime e manga",
    "/anime-moments": "ree3franc : página oficial ree3franc",
    "/univers": "Mundo ree3franc : vídeos anime, shorts, catálogo e loja",
    "/shop": "Loja ree3franc : pôsteres, colecionáveis e roupas anime",
    "/anime-catalog": "Catálogo Anime : 1500+ séries com trailers",
    "/anime-countdown": "Próximos anime : contagem regressiva ao vivo",
    "/prime-video": "Cinéma : ree3franc streaming",
    "/actualites": "Notícias Anime : novidades de vídeos, produtos e manga",
    "/leaderboard": "Podium : ranking ree3franc",
    "/profile": "Área do cliente : perfil ree3franc",
    "/login": "Entrar : conta ree3franc",
    "/contact": "Contato : ree3franc ree3franc",
    "/legals": "Aviso legal : ree3franc ree3franc",
  },
  ja: {
    "/": "ree3franc : 公式アニメ・マンガポータル",
    "/anime-moments": "ree3franc : ree3franc 公式ページ",
    "/univers": "ree3francの世界 : アニメ動画、ショート、カタログ、ショップ",
    "/shop": "ree3franc ショップ : アニメポスター・コレクション・アパレル",
    "/anime-catalog": "アニメカタログ : 1500本以上・予告編付き",
    "/anime-countdown": "配信予定アニメ : ライブ カウントダウン",
    "/prime-video": "Cinéma : ree3franc 配信",
    "/actualites": "アニメニュース : 動画・商品・マンガ最新情報",
    "/leaderboard": "Podium : ree3franc ランキング",
    "/profile": "会員ページ : ree3franc プロフィール",
    "/login": "ログイン : ree3franc アカウント",
    "/contact": "お問い合わせ : ree3franc ree3franc",
    "/legals": "法的通知 : ree3franc ree3franc",
  },
  zh: {
    "/": "ree3franc : 官方动漫漫画门户",
    "/anime-moments": "ree3franc : ree3franc 官方页面",
    "/univers": "ree3franc宇宙 : 动漫视频、短片、目录与商店",
    "/shop": "ree3franc 商店 : 动漫海报、收藏品与服饰",
    "/anime-catalog": "动漫目录 : 1500+ 部作品含预告",
    "/anime-countdown": "即将上线动漫 : 实时倒计时",
    "/prime-video": "Cinéma : ree3franc 流媒体",
    "/actualites": "动漫新闻 : 视频、商品与漫画更新",
    "/leaderboard": "Podium : ree3franc 排行榜",
    "/profile": "用户空间 : ree3franc 个人资料",
    "/login": "登录 : ree3franc 账户",
    "/contact": "联系我们 : ree3franc ree3franc",
    "/legals": "法律声明 : ree3franc ree3franc",
  },
};

function buildLocale(locale: Locale): Record<RouteKey, Meta> {
  const out = {} as Record<RouteKey, Meta>;
  for (const r of ROUTES) out[r] = { title: TITLES[locale][r], description: ROUTE_DESCRIPTIONS[r] };
  return out;
}

export const SEO_I18N: Record<Locale, Record<RouteKey, Meta>> = {
  fr: buildLocale("fr"),
  en: buildLocale("en"),
  es: buildLocale("es"),
  de: buildLocale("de"),
  it: buildLocale("it"),
  pt: buildLocale("pt"),
  ja: buildLocale("ja"),
  zh: buildLocale("zh"),
};

export const HREFLANG_MAP: Record<Locale, string> = {
  fr: "fr", en: "en", es: "es", de: "de", it: "it", pt: "pt", ja: "ja", zh: "zh",
};

export function detectLocale(search: string, navLang: string | undefined): Locale {
  const params = new URLSearchParams(search);
  const hl = params.get("hl")?.toLowerCase();
  if (hl && (SUPPORTED_LOCALES as readonly string[]).includes(hl)) return hl as Locale;
  const nav = (navLang || "").slice(0, 2).toLowerCase();
  if ((SUPPORTED_LOCALES as readonly string[]).includes(nav)) return nav as Locale;
  return DEFAULT_LOCALE;
}

export function normalizeRoute(pathname: string): RouteKey {
  let key = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  const parts = key.split("/").filter(Boolean);
  if (parts.length > 0 && (SUPPORTED_LOCALES as readonly string[]).includes(parts[0].toLowerCase())) {
    key = "/" + parts.slice(1).join("/");
    if (key === "/") return "/";
  }
  if (key.startsWith("/actualites/")) return "/actualites";
  return (ROUTES.includes(key as RouteKey) ? (key as RouteKey) : "/");
}

export function localeFromPathname(pathname: string): Locale | null {
  const parts = pathname.split("?")[0].split("/").filter(Boolean);
  const first = parts[0]?.toLowerCase();
  if (first && (SUPPORTED_LOCALES as readonly string[]).includes(first)) return first as Locale;
  return null;
}

export function metaFor(locale: Locale, route: RouteKey): Meta {
  return SEO_I18N[locale][route] ?? SEO_I18N[DEFAULT_LOCALE][route];
}
