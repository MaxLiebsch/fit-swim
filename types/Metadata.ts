import { Image } from "./IHome";

export interface SiteMetadata {
  title: string;
  siteName?: string | null;
  siteUrl?: string | null;
  description: string;
  keywords?: {
    keyword: string;
  }[];
  ogImage?: Image | null;
}
