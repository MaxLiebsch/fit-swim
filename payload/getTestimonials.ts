import config from "@/app/payload.config";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { TestimonialPage } from "@/types/TestimonialPage";
import { getPayload } from "payload";
import { cache } from "react";

export const getTestimonialPage = cache(async () => {
  const payload = await getPayload({ config });
  const testimonials = await payload.find({ collection: "testimonials-page", limit: 1 }) as unknown as PayloadWrapper<TestimonialPage>;
  return testimonials;
});
