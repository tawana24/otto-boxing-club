// Otto Boxing Club — partners & sponsors
// Add each sponsor with a logo in /public/sponsors/ and an optional link.
// When this array is empty, the Sponsors section shows a "become a partner"
// invitation instead of an empty grid.
//
// TODO: drop real sponsor logos into /public/sponsors/ and fill this in, e.g.:
// { name: "Body Active Gym", logo: "/sponsors/body-active.png", url: "https://..." }

export type Sponsor = {
  name: string;
  logo?: string; // path under /public (PNG/SVG with transparent or light bg)
  url?: string; // optional link to their site
};

export const sponsors: Sponsor[] = [];
