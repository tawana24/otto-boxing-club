import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Modal from "@/components/Modal";
import { ModalProvider } from "@/components/modalContext";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, WhatsApp, Instagram, Facebook } from "@/components/Icons";
import {
  fighters,
  findFighter,
  recordString,
  winRate,
  koRate,
  totalFights,
} from "@/lib/fighters";
import { club, waLink } from "@/lib/config";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return fighters.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const f = findFighter(slug);
  if (!f) return { title: "Fighter not found" };
  const cleanName = f.name.replace(/&[^;]+;/g, "");
  return {
    title: `${cleanName} — ${club.name}`,
    description: `${f.title}. Record: ${recordString(f)}.`,
    openGraph: {
      title: `${cleanName} — ${f.title}`,
      images: [f.portrait],
    },
  };
}

export default async function FighterPage({ params }: Params) {
  const { slug } = await params;
  const f = findFighter(slug);
  if (!f) notFound();
  const wr = winRate(f);
  const kr = koRate(f);
  const total = totalFights(f);

  return (
    <ModalProvider>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[70svh] min-h-[520px] w-full overflow-hidden grain">
            <Image
              src={f.portrait}
              alt={`${f.name.replace(/&[^;]+;/g, "")} portrait`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-6 lg:px-10 pb-12 lg:pb-16">
              <Link
                href="/#champions"
                className="eyebrow text-bone/70 hover:text-bone inline-flex items-center gap-2 mb-6 cursor-pointer"
              >
                ← Roster
              </Link>
              <p className="eyebrow text-blood mb-3">{f.weight}</p>
              <h1
                className="font-display text-bone tracking-wide leading-[0.95] text-[clamp(3rem,9vw,7rem)]"
                dangerouslySetInnerHTML={{ __html: f.name }}
              />
              {f.alias && (
                <p className="mt-4 text-bone/80 text-xl italic">
                  &ldquo;{f.alias}&rdquo;
                </p>
              )}
              <p className="mt-6 text-bone/85 text-lg max-w-xl">{f.title}</p>

              {f.socials && (f.socials.instagram || f.socials.facebook) && (
                <div className="mt-6 flex items-center gap-3">
                  <span className="eyebrow text-bone/50">Follow</span>
                  {f.socials.instagram && (
                    <a
                      href={f.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${f.name.replace(/&[^;]+;/g, "")} on Instagram`}
                      className="h-10 w-10 flex items-center justify-center border border-bone/30 text-bone hover:border-blood hover:text-blood transition-colors cursor-pointer"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {f.socials.facebook && (
                    <a
                      href={f.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${f.name.replace(/&[^;]+;/g, "")} on Facebook`}
                      className="h-10 w-10 flex items-center justify-center border border-bone/30 text-bone hover:border-blood hover:text-blood transition-colors cursor-pointer"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-grey-line bg-grey-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <dl className="grid grid-cols-2 md:grid-cols-5 divide-x divide-grey-line">
              {[
                { l: "Wins", v: f.wins, sub: `${wr}% rate`, color: "blood" },
                { l: "KOs", v: f.ko, sub: `${kr}% rate`, color: "gold" },
                {
                  l: "Losses",
                  v: f.losses,
                  sub: total ? `${Math.round((f.losses / total) * 100)}%` : "—",
                  color: "bone",
                },
                {
                  l: "Draws",
                  v: f.draws,
                  sub: total ? `${Math.round((f.draws / total) * 100)}%` : "—",
                  color: "bone",
                },
                { l: "Fights", v: total, sub: "Pro record", color: "bone" },
              ].map((s, idx) => (
                <div
                  key={s.l}
                  className={[
                    "py-8 lg:py-10 px-6 lg:px-8",
                    idx === 0 ? "border-l border-grey-line" : "",
                  ].join(" ")}
                >
                  <dt className="eyebrow text-bone/50 mb-3">{s.l}</dt>
                  <dd
                    className={[
                      "font-display text-5xl lg:text-6xl font-tabular leading-none",
                      s.color === "blood"
                        ? "text-blood"
                        : s.color === "gold"
                          ? "text-gold"
                          : "text-bone",
                    ].join(" ")}
                  >
                    {s.v}
                  </dd>
                  <p className="text-bone/50 text-xs mt-2 eyebrow">{s.sub}</p>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <div className="sticky top-28">
                <p className="eyebrow text-blood mb-4">The Story</p>
                <h2 className="font-display tracking-wide text-bone leading-[0.95] text-[clamp(2rem,4.5vw,3.5rem)]">
                  How{" "}
                  <span
                    className="text-blood"
                    dangerouslySetInnerHTML={{
                      __html: f.name.split(" ")[0],
                    }}
                  />
                  <br />
                  got here.
                </h2>
                <div className="mt-8 flex flex-col gap-3">
                  <button
                    type="button"
                    className="hidden"
                    aria-hidden
                    tabIndex={-1}
                  />
                  <a
                    href={waLink(
                      `I'd like to train under the same program as ${f.name.replace(/&[^;]+;/g, "")}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary cursor-pointer inline-flex items-center gap-2"
                  >
                    <WhatsApp className="w-4 h-4" /> Train like this
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7 space-y-7 text-bone/85 text-lg leading-relaxed">
              {f.quote && (
                <Reveal>
                  <blockquote className="relative border-l-2 border-blood pl-6 sm:pl-8 py-1 mb-4">
                    <span
                      className="font-display text-blood/80 text-6xl leading-none block mb-1 select-none"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <p className="italic text-bone text-xl sm:text-2xl leading-relaxed">
                      {f.quote}
                    </p>
                    <footer className="mt-5">
                      <p className="eyebrow text-bone/60">
                        — {f.name.replace(/&[^;]+;/g, "")}
                      </p>
                      {f.quoteContext && (
                        <p className="text-bone/45 text-sm leading-relaxed mt-2 max-w-prose">
                          {f.quoteContext}
                        </p>
                      )}
                    </footer>
                  </blockquote>
                </Reveal>
              )}

              {f.story.map((p, idx) => (
                <Reveal key={idx} delay={idx * 0.06}>
                  <p dangerouslySetInnerHTML={{ __html: p }} />
                </Reveal>
              ))}

              {f.walkout && (
                <Reveal delay={0.15}>
                  <figure className="mt-10 border border-grey-line">
                    <div className="relative aspect-[4/5] sm:aspect-[3/2]">
                      <Image
                        src={f.walkout}
                        alt={`${f.name.replace(/&[^;]+;/g, "")} on walkout`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="eyebrow text-bone/50 text-xs px-4 py-3 border-t border-grey-line">
                      Walkout · Otto Boxing Club
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {f.gallery && f.gallery.length > 0 && (
          <section className="pb-24 lg:pb-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <Reveal>
                <p className="eyebrow text-blood mb-6">Gallery</p>
              </Reveal>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {f.gallery.map((src, idx) => (
                  <Reveal key={src} delay={idx * 0.05}>
                    <div className="relative aspect-[3/4] border border-grey-line overflow-hidden bg-grey-card group">
                      <Image
                        src={src}
                        alt={`${f.name.replace(/&[^;]+;/g, "")} — gallery ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other fighters */}
        <section className="py-20 border-t border-grey-line bg-grey-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="eyebrow text-blood mb-3">Roster</p>
            <h3 className="font-display tracking-wide text-bone text-3xl lg:text-4xl mb-10">
              More from the gym
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {fighters
                .filter((x) => x.slug !== f.slug)
                .map((x) => (
                  <Link
                    key={x.slug}
                    href={`/fighters/${x.slug}`}
                    className="group fighter-card block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={x.portrait}
                        alt={x.name.replace(/&[^;]+;/g, "")}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p
                          className="font-display tracking-wide text-bone text-lg leading-tight"
                          dangerouslySetInnerHTML={{ __html: x.name }}
                        />
                        <p className="eyebrow text-bone/60 text-[0.65rem] mt-1">
                          {x.weight}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="mt-10">
              <Link
                href="/#champions"
                className="inline-flex items-center gap-2 font-display tracking-wider text-sm uppercase text-bone hover:text-blood transition-colors cursor-pointer"
              >
                See full roster <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
      <Modal />
    </ModalProvider>
  );
}
