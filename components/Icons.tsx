import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const ArrowDown = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export const MapPin = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Clock = (p: Props) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const Phone = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const WhatsApp = (p: Props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const Instagram = (p: Props) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1Z" />
  </svg>
);

export const Close = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Menu = (p: Props) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Check = (p: Props) => (
  <svg {...base} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export const Glove = (p: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...p}>
    <path d="M16.5 3h-7A2.5 2.5 0 0 0 7 5.5V11a3 3 0 0 0 1 2.24V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.76A4 4 0 0 0 20 13V6.5A3.5 3.5 0 0 0 16.5 3ZM10 17h6v2h-6v-2Zm0-4V5.5a.5.5 0 0 1 .5-.5h6a1.5 1.5 0 0 1 1.5 1.5V13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
  </svg>
);

export const Logo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Otto Boxing Club"
    role="img"
  >
    {/* Left laurel */}
    <g fill="#b8252c">
      <path d="M45 60c-8 8-12 22-10 38 6-4 12-12 14-22 1-6 0-12-4-16Z" />
      <path d="M40 88c-6 10-6 22-2 32 6-6 10-16 10-26 0-4-3-6-8-6Z" />
      <path d="M52 120c-4 8-4 18 0 26 6-4 10-12 10-20 0-4-5-7-10-6Z" />
    </g>
    {/* Right laurel */}
    <g fill="#b8252c">
      <path d="M155 60c8 8 12 22 10 38-6-4-12-12-14-22-1-6 0-12 4-16Z" />
      <path d="M160 88c6 10 6 22 2 32-6-6-10-16-10-26 0-4 3-6 8-6Z" />
      <path d="M148 120c4 8 4 18 0 26-6-4-10-12-10-20 0-4 5-7 10-6Z" />
    </g>
    {/* Stars */}
    <g fill="#0a0a0a">
      <circle cx="62" cy="78" r="2.5" />
      <circle cx="138" cy="78" r="2.5" />
    </g>
    {/* Gloves */}
    <g fill="#0a0a0a">
      <path d="M76 90c-4 4-6 10-4 16 2 6 7 10 13 11 5 0 9-3 11-7l-2-4c-3-2-7-2-10-1-2 1-3-1-2-3 2-4 5-7 9-9 3-2 4-7 1-10-3-3-9-3-13 0-2 1-3 4-3 7Z" />
      <path d="M114 100c-4 2-6 7-4 11 2 4 5 6 9 7 5 1 10-1 13-5 2-3 3-7 1-10-2-3-6-4-9-3-3 1-7 0-10-1Z" />
    </g>
    {/* Crossed batons */}
    <g stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round">
      <line x1="76" y1="155" x2="100" y2="135" />
      <line x1="124" y1="155" x2="100" y2="135" />
    </g>
  </svg>
);
