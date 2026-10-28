import config from "@/app/payload.config";
import { About } from "@/types/About";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";
import { cache } from "react";

export const getAbout = cache(async () => {
  const payload = await getPayload({ config });
  const about = await payload.find({ collection: "about", limit: 1 }) as unknown as PayloadWrapper<About>;
  return about;
});
