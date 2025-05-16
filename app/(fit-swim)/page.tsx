import config from "@/app/payload.config";
import HeroSection from "@/components/hero-section";
import RichText from "@/components/RichText";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { IHome } from "@/types/IHome";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { SerializedEditorState, SerializedLexicalNode } from "@payloadcms/richtext-lexical/lexical";
import { Award, Calendar, ChevronRight, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

export const revalidate = 3600;

export default async function Home() {
  const payload = await getPayload({ config });

  const home = (await payload.find({
    collection: "home",
    limit: 1,
    depth: 4,
  })) as PayloadWrapper<IHome>;
  const featureSection = home.docs[0].featuresSection;
  const aboutSection = home.docs[0].aboutPreview;
  const pricingSection = home.docs[0].pricingPreview;
  const testimonialsSection = home.docs[0].testimonialsSection;
  const ctaSection = home.docs[0].ctaSection;
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection hero={home.docs[0].hero} />

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {featureSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {featureSection.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featureSection.features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center rounded-lg bg-sky-50 p-6 text-center">
                <div className="mb-4 rounded-full bg-sky-100 p-3">
                  {feature.icon === "waves" && (
                    <Waves className="size-6 text-sky-600" />
                  )}
                  {feature.icon === "award" && (
                    <Award className="size-6 text-sky-600" />
                  )}
                  {feature.icon === "calendar" && (
                    <Calendar className="size-6 text-sky-600" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                {aboutSection.heading}
              </h2>
              <div className="mb-6 text-muted-foreground">
                <RichText content={aboutSection.content as SerializedEditorState<SerializedLexicalNode>} />
              </div>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href={aboutSection.buttonLink}>
                  {aboutSection.buttonText}
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={aboutSection.image.url}
                alt={aboutSection.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {pricingSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {pricingSection.subheading}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {pricingSection.packages.map((pricePackage) => (
              <div
                key={pricePackage.id}
                className={`relative flex flex-col rounded-lg border  p-6 shadow-sm ${
                  pricePackage.isPopular ? "bg-sky-50" : ""
                }`}
              >
                {pricePackage.isPopular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-sky-600 px-3 py-1 text-xs font-bold text-white">
                    POPULAR
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold">{pricePackage.name}</h3>
                <div className="mb-4 text-3xl font-bold">
                  €{pricePackage.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {pricePackage.unit}
                  </span>
                </div>
                <ul className="mb-6 grow space-y-2">
                  {pricePackage.features.map((feature) => (
                    <li key={feature.id} className="flex items-center">
                      <ChevronRight className="mr-2 size-4 text-sky-600" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pricePackage.isPopular ? "default" : "outline"}
                  className="mt-auto"
                >
                  <Link href={pricingSection.buttonLink}>
                    {pricingSection.buttonText}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {testimonialsSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {testimonialsSection.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonialsSection.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                imageSrc={testimonial.image?.url || "/app-icon.svg"}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href={testimonialsSection.buttonLink}>
                {testimonialsSection.buttonText}
                <ChevronRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {ctaSection.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sky-100 md:text-xl">
            {ctaSection.content}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={ctaSection.primaryButtonLink}>{ctaSection.primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-sky-700 text-white hover:bg-sky-700/20 hover:text-white"
            >
              <Link href={ctaSection.secondaryButtonLink}>{ctaSection.secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
