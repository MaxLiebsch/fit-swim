import { resolveSiteUrl } from "@/lib/seo";
import type { SiteMetadata } from "@/types/Metadata";

const fallback = {
  email: "info@fit-swim.de",
  streetAddress: "Buschkrugallee 185",
  postalCode: "12359",
  addressLocality: "Berlin",
  addressCountry: "DE",
  founderName: "Robert Sturm",
  founderJobTitle: "Schwimmlehrer und Personaltrainer",
  areaServed: "Berlin",
  description:
    "Professioneller Schwimmunterricht in Berlin für alle Altersgruppen und Schwimmstärken. Verbessern Sie Ihre Technik, bauen Sie Vertrauen und erreichen Sie Ihre Schwimmziele.",
};

function text(value: string | null | undefined, fallbackValue: string) {
  const trimmed = value?.trim();
  return trimmed || fallbackValue;
}

function absoluteUrl(siteUrl: string, value?: string | null) {
  if (!value?.trim()) return undefined;
  try {
    return new URL(value, siteUrl).toString();
  } catch {
    return undefined;
  }
}

export function localBusinessJsonLd(doc?: SiteMetadata | null) {
  const business = doc?.localBusiness;
  const siteName = text(doc?.siteName, "Fit Swim");
  const siteUrl = resolveSiteUrl(doc?.siteUrl);
  const image = absoluteUrl(siteUrl, doc?.ogImage?.url);
  const telephone = business?.telephone?.trim();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    description: text(doc?.description, fallback.description),
    url: siteUrl,
    ...(image ? { image } : {}),
    email: text(business?.email, fallback.email),
    ...(telephone ? { telephone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: text(business?.streetAddress, fallback.streetAddress),
      postalCode: text(business?.postalCode, fallback.postalCode),
      addressLocality: text(business?.addressLocality, fallback.addressLocality),
      addressCountry: text(business?.addressCountry, fallback.addressCountry),
    },
    areaServed: {
      "@type": "City",
      name: text(business?.areaServed, fallback.areaServed),
    },
    founder: {
      "@type": "Person",
      name: text(business?.founderName, fallback.founderName),
      jobTitle: text(business?.founderJobTitle, fallback.founderJobTitle),
    },
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
