import { pageMetadataPaths } from "@/lib/routes";
import { resolveSiteUrl } from "@/lib/seo";
import { getMetadata } from "@/payload/getMetadata";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metadata = await getMetadata();
  const siteUrl = resolveSiteUrl(metadata.docs[0]?.siteUrl);

  return pageMetadataPaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
