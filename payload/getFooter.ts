import config from "@/app/payload.config";
import { Footer } from "@/types/Footer";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";

export const getFooter = async () => {
  const payload = await getPayload({ config });
  const footer = await payload.find({ collection: "footer", limit: 1, depth:4 }) as unknown as PayloadWrapper<Footer>;
  return footer;
};
