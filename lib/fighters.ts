// Otto Boxing Club roster.
// The DATA lives in the CMS: editing a fighter in /keystatic writes to
// content/fighters/index.json, which is imported below. The type + computed
// helpers stay here so every component that imports `fighters` is unchanged.
import fightersDoc from "@/content/fighters/index.json";

export type Fighter = {
  slug: string;
  name: string;
  alias?: string;
  age?: number;
  hometown?: string;
  residence?: string;
  weight: string;
  division?: string;
  style?: "Orthodox" | "Southpaw";
  title: string;
  status: "champion" | "contender" | "rising" | "veteran";
  // Record
  wins: number;
  losses: number;
  draws: number;
  ko: number;
  rounds?: number;
  // Honors list
  honors: string[];
  // Media
  portrait: string;
  walkout?: string;
  profileSheet?: string; // path to the full PDF render
  gallery?: string[]; // additional photos shown under the bio
  // Bio
  quote?: string;
  quoteContext?: string; // grey sub-line shown under the pull-quote
  story: string[]; // paragraphs
  // Contact
  phone?: string;
  handle?: string;
  // Social links — only added for boxers whose pages meet the pro standard
  socials?: { facebook?: string; instagram?: string };
};

// Computed helpers
export const totalFights = (f: Fighter) => f.wins + f.losses + f.draws;
export const winRate = (f: Fighter) =>
  totalFights(f) === 0 ? 0 : Math.round((f.wins / totalFights(f)) * 100);
export const koRate = (f: Fighter) =>
  f.wins === 0 ? 0 : Math.round((f.ko / f.wins) * 100);
export const recordString = (f: Fighter) =>
  `${f.wins}–${f.losses}${f.draws ? `–${f.draws}` : ""}, ${f.ko} KO`;

// Roster data, sourced from the CMS-managed JSON.
export const fighters = fightersDoc.list as unknown as Fighter[];

export const findFighter = (slug: string) =>
  fighters.find((f) => f.slug === slug);

// Status display — label + Tailwind colour classes
export const statusMeta = (status: Fighter["status"]) => {
  switch (status) {
    case "champion":
      return { label: "Champion", cls: "text-blood border-blood/60" };
    case "contender":
      return { label: "Contender", cls: "text-gold border-gold/50" };
    case "veteran":
      return { label: "Veteran", cls: "text-bone/80 border-bone/40" };
    case "rising":
    default:
      return { label: "Rising", cls: "text-bone/70 border-bone/30" };
  }
};
