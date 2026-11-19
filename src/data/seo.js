import { services, MAPS_URL, INSTAGRAM_URL } from "./services";
import { faqs } from "./faq";

export const SITE_URL = "https://www.shapenglow.co";
export const SITE_NAME = "Shape N Glow";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PHONE = "+96181588171";

export const routes = {
  "/": {
    title: "Shape N Glow | Physiotherapy, EMS and Body Sculpting in Lebanon",
    description:
      "Physiotherapy and wellness center in Lebanon. EMS training, maderotherapy, body sculpting, cellulite reduction, pressotherapy and physical therapy. Book online.",
    type: "WebPage",
  },
  "/services": {
    title: "Treatments: EMS, Maderotherapy, Pressotherapy and More | Shape N Glow",
    description:
      "Explore our six treatments: EMS training, maderotherapy, body sculpting, cellulite and fat reduction, pressotherapy and physical therapy in Lebanon.",
    type: "CollectionPage",
    crumb: "Services",
  },
  "/about": {
    title: "About Shape N Glow | Physiotherapy and Wellness Center in Lebanon",
    description:
      "Shape N Glow bridges the clinic and the spa: real physiotherapy and EMS training alongside advanced sculpting treatments, with personal, guided plans.",
    type: "AboutPage",
    crumb: "About",
  },
  "/contact": {
    title: "Book a Session | Contact Shape N Glow, Lebanon",
    description:
      "Book a physiotherapy, EMS or body sculpting session online, or call or WhatsApp +961 81 588 171. Open Monday to Saturday by appointment.",
    type: "ContactPage",
    crumb: "Contact",
  },
};

export const getRoute = (path) => routes[path] || routes["/"];
export const canonicalFor = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

const business = {
  "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
  "@id": businessId,
  name: SITE_NAME,
  description:
    "Physiotherapy and wellness center in Lebanon offering physical therapy, EMS training, maderotherapy, body sculpting, cellulite and fat reduction, and pressotherapy.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.jpg`,
  image: OG_IMAGE,
  telephone: PHONE,
  address: { "@type": "PostalAddress", addressCountry: "LB" },
  areaServed: { "@type": "Country", name: "Lebanon" },
  hasMap: MAPS_URL,
  sameAs: [INSTAGRAM_URL],
  medicalSpecialty: "Physiotherapy",
  knowsAbout: services.map((s) => s.t),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Treatments",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.t, description: s.d },
    })),
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/contact` },
    name: "Book a session",
  },
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": businessId },
};

export function buildJsonLd(path) {
  const r = getRoute(path);
  const url = canonicalFor(path);
  const graph = [
    business,
    website,
    {
      "@type": r.type,
      "@id": `${url}#webpage`,
      url,
      name: r.title,
      description: r.description,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      primaryImageOfPage: OG_IMAGE,
    },
  ];

  if (r.crumb) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: r.crumb, item: url },
      ],
    });
  }

  if (path === "/") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (path === "/services") {
    graph.push({
      "@type": "ItemList",
      name: "Shape N Glow treatments",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.t,
          description: s.d,
          serviceType: s.t,
          provider: { "@id": businessId },
          areaServed: { "@type": "Country", name: "Lebanon" },
        },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function buildHead(path) {
  const r = getRoute(path);
  const url = canonicalFor(path);
  const json = JSON.stringify(buildJsonLd(path)).replace(/</g, "\\u003c");
  return [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Shape N Glow physiotherapy and wellness center" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n    ");
}
