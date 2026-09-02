import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pathways from "@/components/Pathways";
import Champions from "@/components/Champions";
import Story from "@/components/Story";
import Coach from "@/components/Coach";
import Proof from "@/components/Proof";
import BigCTA from "@/components/BigCTA";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Divider from "@/components/Divider";
import Modal from "@/components/Modal";
import TrainingVideo from "@/components/TrainingVideo";
import EventsCountdown from "@/components/EventsCountdown";
import Tickets from "@/components/Tickets";
import Merch from "@/components/Merch";
import BookingPortal from "@/components/BookingPortal";
import Sponsors from "@/components/Sponsors";
import { ModalProvider } from "@/components/modalContext";
import { club, siteUrl } from "@/lib/config";

// LocalBusiness structured data — lets Google tie this site to the verified
// Google Business Profile (Maps/local results) via matching name, address,
// phone and the canonical listing link.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "SportsClub"],
  "@id": `${siteUrl}/#organization`,
  name: club.name,
  alternateName: `${club.shortName} Boxing Club`,
  description:
    "Zimbabwe's boxing nucleus at Gate 3, Borrowdale Racecourse, Harare. Home to ABU, WBF and national champions — a development pipeline plus professional training, fighter management and on-demand fitness & wellness.",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  image: `${siteUrl}/team.jpg`,
  telephone: `+${club.whatsapp.primary.number}`,
  email: club.emails[0].address,
  foundingDate: "2018",
  slogan: club.tagline,
  sport: "Boxing",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${club.location.venue}, ${club.location.street}`,
    addressLocality: club.location.city,
    addressCountry: "ZW",
  },
  areaServed: { "@type": "City", name: "Harare" },
  hasMap: club.location.mapsUrl,
  sameAs: [club.location.mapsUrl],
};

export default function Home() {
  return (
    <ModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Champions />
        <Divider />
        <Pathways />
        <TrainingVideo />
        <Story />
        <Coach />
        <EventsCountdown />
        <Tickets />
        <Merch />
        <BookingPortal />
        <Proof />
        <BigCTA />
        <Visit />
        <Sponsors />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Modal />
    </ModalProvider>
  );
}
