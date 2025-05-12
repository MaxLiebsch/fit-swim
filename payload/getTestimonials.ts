import config from "@/app/payload.config";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { TestimonialPage } from "@/types/TestimonialPage";
import { getPayload } from "payload";

export const getTestimonialPage = async () => {
  const payload = await getPayload({ config });
  const testimonials = await payload.find({ collection: "testimonials-page", limit: 1 }) as unknown as PayloadWrapper<TestimonialPage>;
  return testimonials;
};
