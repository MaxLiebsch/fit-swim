import config from "@/app/payload.config";
import { ContactPage } from "@/types/Contact";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { getPayload } from "payload";
import { cache } from "react";

export const getContact = cache(async () => {
  const payload = await getPayload({ config });
  const contact = await payload.find({ collection: "contact", limit: 1 }) as unknown as PayloadWrapper<ContactPage>;
  return contact;
});
