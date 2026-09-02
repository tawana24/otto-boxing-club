// Otto Boxing Club — site configuration
// Sourced from official Otto Boxing Club mini-profile (Sept 2025) + Alie Phiri CV

// Canonical public origin (the custom domain). Drives metadataBase, canonical
// tags, the sitemap and robots.txt — so search engines index ottoboxingclub.co.zw
// rather than the *.vercel.app deployment URL.
export const siteUrl = "https://ottoboxingclub.co.zw";

export type WhatsAppContact = {
  number: string; // E.164 without "+"
  display: string;
  label?: string;
};

export const club = {
  name: "Otto Boxing Club",
  shortName: "Otto",
  tagline: "Where Champions Are Built",
  motto: "Passion first. Everything else will fall into place.",
  // Founder quote — source: club mini-profile
  signatureQuote:
    "We measure success not in belts alone, but in lives transformed — from Harare's streets to the world's brightest arenas.",
  signatureQuoteBy: "Alie “Otto” Phiri · Founder",
  // The phenomenon line — source: club mini-profile
  phenomenon:
    "Discover diamonds in township dust → Polish them into world champions → Unleash them on international stages.",
  vision:
    "To become Africa's epicenter of boxing excellence and a global benchmark — where every jab thrown under our banner sets the standard for sporting greatness, community impact, and human triumph.",
  mission:
    "To weaponize African resilience — transforming raw potential into world championship glory through scientific training, warrior mentality, and stages that force the world to watch.",
  location: {
    venue: "Gate 3, Borrowdale Racecourse",
    street: "Liberation Legacy Way",
    city: "Harare",
    country: "Zimbabwe",
    full: "Gate 3, Borrowdale Racecourse, Liberation Legacy Way, Harare, Zimbabwe",
    // Verified Google Business Profile — canonical cid link (stable, never expires,
    // unlike the maps.app.goo.gl short link). Drives the "Get directions" button
    // and the LocalBusiness structured data.
    mapsUrl: "https://www.google.com/maps?cid=1591485364453823712",
    mapsEmbed:
      "https://www.google.com/maps?q=Otto+Boxing+Club,+Borrowdale+Racecourse,+Harare&output=embed",
  },
  emails: [
    { address: "ali.phiri1@icloud.com", label: "Coach Alie Phiri · Founder & Head Coach" },
    { address: "tamuringi1@gmail.com", label: "Takue Muringi · Manager" },
    { address: "sachinogara@gmail.com", label: "Brian Chinogara · Communications" },
  ] as { address: string; label: string }[],
  whatsapp: {
    // Coach Alie is the central contact for bookings & all enquiries —
    // he relays through the whole value chain.
    primary: {
      number: "263772694405",
      display: "+263 77 269 4405",
      label: "Coach Alie — bookings & enquiries",
    } as WhatsAppContact,
    all: [
      {
        number: "263772694405",
        display: "+263 77 269 4405",
        label: "Coach Alie — bookings & enquiries",
      },
      {
        number: "263773647830",
        display: "+263 77 364 7830",
        label: "Brian Chinogara — communications",
      },
    ] as WhatsAppContact[],
    defaultMessage:
      "Hi Coach Alie — I'd like to learn more about Otto Boxing Club and book a service.",
  },
  socials: {
    // TODO: paste the real club handles here, then the IG/FB buttons
    // reappear automatically across the site. Leave "" to hide them.
    instagram: "",
    facebook: "",
  },
  // Note: no scheduled classes — all services are on-demand and personalized.
  notes: {
    onDemandOnly: true,
    onDemandLine:
      "Otto runs no scheduled group classes. Every service — fitness, training camps, fight prep, corporate — is personalized and booked on demand.",
  },
} as const;

export const waLink = (msg?: string, contact?: WhatsAppContact) => {
  const n = contact?.number ?? club.whatsapp.primary.number;
  return `https://wa.me/${n}?text=${encodeURIComponent(
    msg ?? club.whatsapp.defaultMessage,
  )}`;
};

// Only true when a real handle has been provided
export const hasInstagram = Boolean(club.socials.instagram);
export const hasFacebook = Boolean(club.socials.facebook);

// Cross-platform booking links — unified intake from any channel.
// instagram/facebook are undefined until a real handle is set, so callers
// can skip rendering those buttons (no broken links).
export const bookingChannels = (msg?: string) => ({
  whatsapp: waLink(msg),
  instagram: club.socials.instagram || undefined,
  facebook: club.socials.facebook || undefined,
  email: `mailto:${club.emails[0].address}?subject=${encodeURIComponent(
    "Otto Boxing Club — Booking enquiry",
  )}&body=${encodeURIComponent(msg ?? club.whatsapp.defaultMessage)}`,
});
