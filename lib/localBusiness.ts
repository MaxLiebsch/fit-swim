import { resolveSiteUrl } from "@/lib/seo";
import type { SiteMetadata } from "@/types/Metadata";
import type { Pricing } from "@/types/Pricing";

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
  const priceRange = business?.priceRange?.trim();
  const hasGeo =
    typeof business?.latitude === "number" &&
    typeof business?.longitude === "number";
  const openingHours = business?.openingHours
    ?.filter((item) => item.days?.length && item.opens && item.closes)
    .map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.days,
      opens: item.opens,
      closes: item.closes,
    }));
  const sameAs = business?.sameAs
    ?.map((item) => item.url?.trim())
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId(siteUrl),
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
    ...(hasGeo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: business?.latitude,
            longitude: business?.longitude,
          },
        }
      : {}),
    ...(priceRange ? { priceRange } : {}),
    ...(openingHours?.length
      ? { openingHoursSpecification: openingHours }
      : {}),
    ...(sameAs?.length ? { sameAs } : {}),
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

export function businessId(siteUrl: string) {
  return `${siteUrl}/#business`;
}

// Offers and FAQ from the pricing page, linked to the LocalBusiness above.
export function pricingJsonLd(siteUrl: string, pricing?: Pricing | null) {
  if (!pricing) return null;
  const provider = { "@id": businessId(siteUrl) };
  const offers = [
    ...(pricing.trainingPackages?.packages ?? []).map((pack) => ({
      name: pack.name,
      description: pack.description,
      price: pack.price,
    })),
    ...(pricing.additionalServices?.services ?? []).map((service) => ({
      name: service.title,
      description: service.description,
      price: service.price,
    })),
  ].filter((offer) => offer.name && typeof offer.price === "number");
  const faqs = (pricing.faqSection?.faqs ?? []).filter(
    (faq) => faq.question?.trim() && faq.answer?.trim()
  );

  const graph: Record<string, unknown>[] = [];
  if (offers.length) {
    graph.push({
      "@type": "OfferCatalog",
      "@id": `${siteUrl}/pricing#offers`,
      name: pricing.trainingPackages?.heading || "Preise",
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        price: offer.price,
        priceCurrency: "EUR",
        url: `${siteUrl}/pricing`,
        seller: provider,
        itemOffered: {
          "@type": "Service",
          name: offer.name.trim(),
          ...(offer.description ? { description: offer.description } : {}),
          provider,
        },
      })),
    });
  }
  if (faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteUrl}/pricing#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.trim(),
        acceptedAnswer: { "@type": "Answer", text: faq.answer.trim() },
      })),
    });
  }

  return graph.length
    ? { "@context": "https://schema.org", "@graph": graph }
    : null;
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
