import { Image } from "./IHome";

export interface LocalBusinessInfo {
  email?: string | null;
  telephone?: string | null;
  streetAddress?: string | null;
  postalCode?: string | null;
  addressLocality?: string | null;
  addressCountry?: string | null;
  founderName?: string | null;
  founderJobTitle?: string | null;
  areaServed?: string | null;
  priceRange?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  openingHours?:
    | {
        days: string[];
        opens: string;
        closes: string;
      }[]
    | null;
  sameAs?: { url: string }[] | null;
}

export interface SiteMetadata {
  title: string;
  siteName?: string | null;
  siteUrl?: string | null;
  description: string;
  keywords?: {
    keyword: string;
  }[];
  ogImage?: Image | null;
  localBusiness?: LocalBusinessInfo | null;
}
