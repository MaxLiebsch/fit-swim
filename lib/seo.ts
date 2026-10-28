import type { Metadata } from "next";
import type { SiteMetadata } from "@/types/Metadata";

export const DEFAULT_SITE_NAME = "Fit Swim";
export const DEFAULT_SITE_URL = "https://fit-swim.de";

const fallbackDescription =
  "Professioneller Schwimmunterricht in Berlin für alle Altersgruppen und Schwimmstärken. Verbessern Sie Ihre Technik, bauen Sie Vertrauen und erreichen Sie Ihre Schwimmziele.";

export function resolveSiteUrl(siteUrl?: string | null) {
  const candidate = siteUrl?.trim() || DEFAULT_SITE_URL;
  try {
    return new URL(candidate).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function pageMetadata({
  path,
  heading,
  subheading,
  metaTitle,
  metaDescription,
}: {
  path: string;
  heading?: string | null;
  subheading?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
}): Metadata {
  const title = metaTitle?.trim() || heading?.trim() || undefined;
  const description = metaDescription?.trim() || subheading?.trim() || undefined;

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      url: path,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    },
    twitter: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    },
  };
}

export function siteMetadata(doc?: SiteMetadata | null): Metadata {
  const siteName = doc?.siteName?.trim() || DEFAULT_SITE_NAME;
  const siteUrl = resolveSiteUrl(doc?.siteUrl);
  const title = doc?.title?.trim() || `${siteName} - Professioneller Schwimmunterricht`;
  const description = doc?.description?.trim() || fallbackDescription;
  const keywords = doc?.keywords?.map((item) => item.keyword).filter(Boolean);
  const image = doc?.ogImage?.url;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    ...(keywords?.length ? { keywords } : {}),
    openGraph: {
      title,
      description,
      siteName,
      locale: "de_DE",
      type: "website",
      url: siteUrl,
      ...(image
        ? { images: [{ url: image, alt: doc?.ogImage?.alt || siteName }] }
        : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    manifest: "/site.webmanifest",
  };
}
