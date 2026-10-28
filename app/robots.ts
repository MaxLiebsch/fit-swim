import { resolveSiteUrl } from "@/lib/seo";
import { getMetadata } from "@/payload/getMetadata";
import type { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const metadata = await getMetadata();
  const siteUrl = resolveSiteUrl(metadata.docs[0]?.siteUrl);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
