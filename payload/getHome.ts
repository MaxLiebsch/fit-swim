import config from "@/app/payload.config";
import { IHome } from "@/types/IHome";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";
import { cache } from "react";

export const getHome = cache(async () => {
  const payload = await getPayload({ config });
  const home = (await payload.find({
    collection: "home",
    limit: 1,
    depth: 4,
  })) as unknown as PayloadWrapper<IHome>;
  return home;
});
