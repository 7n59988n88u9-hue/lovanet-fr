import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Footer } from "@/components/Footer";

// Minimal in-memory routing harness — simulates a click on each footer link
// and asserts the router lands on the exact internal URL.

const InternalSitelinks: Array<[RegExp, string]> = [
  [/^Accueil$/i, "/"],
  [/^Moments Anime$/i, "/anime-moments"],
  [/^Monde$/i, "/univers"],
  [/^Cinéma$/i, "/prime-video"],
  [/^Prochainement$/i, "/anime-countdown"],
  [/^Actus$/i, "/actualites"],
  [/^Magasin$/i, "/shop"],
];

function AppUnderTest({ path }: { path: string }) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<div><h1>route:/</h1><Footer /></div>} />
        <Route path="/univers" element={<div><h1>route:/univers</h1><Footer /></div>} />
        <Route path="/shop" element={<div><h1>route:/shop</h1><Footer /></div>} />
        <Route path="/anime-countdown" element={<div><h1>route:/anime-countdown</h1><Footer /></div>} />
        <Route path="/anime-moments" element={<div><h1>route:/anime-moments</h1><Footer /></div>} />
        <Route path="/prime-video" element={<div><h1>route:/prime-video</h1><Footer /></div>} />
        <Route path="/actualites" element={<div><h1>route:/actualites</h1><Footer /></div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("E2E — footer navigation", () => {
  it.each(InternalSitelinks)("clicking %s navigates to %s (no _blank)", async (label, path) => {
    const user = (await import("@testing-library/react")).fireEvent;
    const { unmount } = render(<AppUnderTest path="/" />);
    const link = screen.getAllByRole("link", { name: label })[0];
    expect(link.getAttribute("href")).toBe(path);
    expect(link).not.toHaveAttribute("target", "_blank");
    user.click(link, { button: 0 });
    expect(await screen.findByRole("heading", { name: `route:${path}` })).toBeInTheDocument();
    unmount();
  });
});
