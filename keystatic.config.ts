import { config, fields, singleton } from "@keystatic/core";

// ─────────────────────────────────────────────────────────────────────────
// Otto Boxing Club — content model for the /keystatic editor.
//
// Storage is "local" for now: edits write straight to the JSON files in this
// project (content/…/index.json). To let Coach Alie edit from his own browser
// and have saves auto-deploy, switch `storage` to the GitHub block at the
// bottom (commented) once the repo + Keystatic GitHub app are set up.
//
// IMPORTANT: every field a fighter/event can have MUST be declared here, or
// Keystatic will drop it on the next save. Keep this in sync with the
// `Fighter` / `OttoEvent` types in lib/.
// ─────────────────────────────────────────────────────────────────────────

export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "Otto Boxing Club" },
  },
  singletons: {
    fighters: singleton({
      label: "Fighters (roster)",
      path: "content/fighters",
      format: { data: "json" },
      schema: {
        list: fields.array(
          fields.object({
            slug: fields.text({
              label: "URL slug",
              description:
                "Web address of the profile (e.g. hassan-milanzi). Changing this changes the page's link — avoid unless needed.",
              validation: { isRequired: true },
            }),
            name: fields.text({
              label: "Name",
              validation: { isRequired: true },
            }),
            alias: fields.text({ label: "Nickname / alias" }),
            age: fields.integer({
              label: "Age",
              validation: { isRequired: false },
            }),
            hometown: fields.text({ label: "Hometown" }),
            residence: fields.text({ label: "Lives in" }),
            weight: fields.text({
              label: "Weight class",
              validation: { isRequired: true },
            }),
            division: fields.text({ label: "Division (optional)" }),
            style: fields.select({
              label: "Stance",
              options: [
                { label: "Orthodox", value: "Orthodox" },
                { label: "Southpaw", value: "Southpaw" },
              ],
              defaultValue: "Orthodox",
            }),
            title: fields.text({
              label: "Title / one-line status",
              validation: { isRequired: true },
            }),
            status: fields.select({
              label: "Status",
              options: [
                { label: "Champion", value: "champion" },
                { label: "Contender", value: "contender" },
                { label: "Rising", value: "rising" },
                { label: "Veteran", value: "veteran" },
              ],
              defaultValue: "rising",
            }),
            wins: fields.integer({
              label: "Wins",
              validation: { isRequired: true },
              defaultValue: 0,
            }),
            losses: fields.integer({
              label: "Losses",
              validation: { isRequired: true },
              defaultValue: 0,
            }),
            draws: fields.integer({
              label: "Draws",
              validation: { isRequired: true },
              defaultValue: 0,
            }),
            ko: fields.integer({
              label: "Wins by KO",
              validation: { isRequired: true },
              defaultValue: 0,
            }),
            rounds: fields.integer({
              label: "Total pro rounds (optional)",
              validation: { isRequired: false },
            }),
            honors: fields.array(fields.text({ label: "Honor" }), {
              label: "Honors",
              itemLabel: (p) => p.value,
            }),
            portrait: fields.text({
              label: "Main photo path",
              description: "e.g. /fighters/hassan-main.jpg (file must exist).",
              validation: { isRequired: true },
            }),
            walkout: fields.text({ label: "Walkout photo path (optional)" }),
            profileSheet: fields.text({
              label: "Profile sheet image path (optional)",
            }),
            gallery: fields.array(fields.text({ label: "Image path" }), {
              label: "Gallery photo paths",
              itemLabel: (p) => p.value,
            }),
            quote: fields.text({
              label: "Pull quote",
              multiline: true,
            }),
            quoteContext: fields.text({
              label: "Quote context (grey sub-line)",
              multiline: true,
            }),
            story: fields.array(
              fields.text({ label: "Paragraph", multiline: true }),
              { label: "Story paragraphs", itemLabel: (p) => p.value },
            ),
            phone: fields.text({ label: "Phone (optional)" }),
            handle: fields.text({ label: "Social handle (optional)" }),
            socials: fields.object(
              {
                facebook: fields.text({ label: "Facebook URL" }),
                instagram: fields.text({ label: "Instagram URL" }),
              },
              { label: "Social links" },
            ),
          }),
          {
            label: "Fighters",
            itemLabel: (p) => p.fields.name.value || p.fields.slug.value,
          },
        ),
      },
    }),

    events: singleton({
      label: "Events / fight nights",
      path: "content/events",
      format: { data: "json" },
      schema: {
        list: fields.array(
          fields.object({
            slug: fields.text({
              label: "URL slug",
              validation: { isRequired: true },
            }),
            series: fields.text({ label: "Promotion / series" }),
            title: fields.text({
              label: "Event title",
              validation: { isRequired: true },
            }),
            date: fields.text({
              label: "Date & time (ISO 8601)",
              description:
                "Leave blank for 'to be announced'. Otherwise format: 2026-09-13T19:00:00+02:00 (that's 13 Sept 2026, 7:00pm Harare time). The countdown and auto-hide use this.",
            }),
            venue: fields.text({
              label: "Venue",
              validation: { isRequired: true },
            }),
            city: fields.text({ label: "City (optional)" }),
            status: fields.select({
              label: "Status",
              options: [
                { label: "Announced", value: "announced" },
                { label: "Tickets open", value: "tickets-open" },
                { label: "Sold out", value: "sold-out" },
                { label: "Past", value: "past" },
              ],
              defaultValue: "announced",
            }),
            poster: fields.text({ label: "Poster image path (optional)" }),
            ticketUrl: fields.text({ label: "Ticket link (optional)" }),
            ticketPhone: fields.text({ label: "Ticket phone (optional)" }),
            card: fields.array(
              fields.object({
                bout: fields.text({ label: "Bout" }),
                detail: fields.text({ label: "Detail (optional)" }),
              }),
              { label: "Fight card", itemLabel: (p) => p.fields.bout.value },
            ),
            blurb: fields.text({
              label: "Description",
              multiline: true,
            }),
          }),
          {
            label: "Events",
            itemLabel: (p) => p.fields.title.value || p.fields.slug.value,
          },
        ),
      },
    }),
  },
});
