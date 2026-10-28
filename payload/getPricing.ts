import config from "@/app/payload.config";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { Pricing } from "@/types/Pricing";
import { getPayload } from "payload";
import { cache } from "react";

export const getPricing = cache(async () => {
  const payload = await getPayload({ config });
  const pricing = (await payload.find({
    collection: "pricing",
    limit: 1,
    depth: 4,
  })) as unknown as PayloadWrapper<Pricing>;
  return pricing;
});
