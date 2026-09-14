import { Helmet } from "react-helmet-async";
import { PageShell } from "@/components/PageShell";

const pageStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Lovanet : accueil anime manga officiel",
  description: "Accueil Lovanet pour explorer Moments Anime, les vidéos, les actus et la magasin collector.",
  url: "https://ree3franc.com/",
};

export default function RootLandingPage() {
  return (
    <PageShell>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(pageStructuredData)}</script>
      </Helmet>

    </PageShell>
  );
}
