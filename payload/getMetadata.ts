import config from "@/app/payload.config";
import { SiteMetadata } from "@/types/Metadata";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";
import { cache } from "react";

export const getMetadata = cache(async () => {
  const payload = await getPayload({ config });
  const metadata = (await payload.find({
    collection: "metadata",
    limit: 1,
    depth: 1,
  })) as unknown as PayloadWrapper<SiteMetadata>;
  return metadata;
});
