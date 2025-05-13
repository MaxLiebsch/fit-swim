import config from "@/app/payload.config";
import HeroSection from "@/components/hero-section";
import RichText from "@/components/RichText";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { IHome } from "@/types/IHome";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { Award, Calendar, ChevronRight, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
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
    <div className="flex flex-col min-h-screen">
      <HeroSection hero={home.docs[0].hero} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {featureSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {featureSection.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureSection.features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
                <div className="p-3 rounded-full bg-sky-100 mb-4">
                  {feature.icon === "waves" && (
                    <Waves className="h-6 w-6 text-sky-600" />
                  )}
                  {feature.icon === "award" && (
                    <Award className="h-6 w-6 text-sky-600" />
                  )}
                  {feature.icon === "calendar" && (
                    <Calendar className="h-6 w-6 text-sky-600" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                {aboutSection.heading}
              </h2>
              <div className="text-muted-foreground mb-6">
                <RichText content={aboutSection.content as any} />
              </div>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href={aboutSection.buttonLink}>
                  {aboutSection.buttonText}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {pricingSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {pricingSection.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingSection.packages.map((pricePackage) => (
              <div
                key={pricePackage.id}
                className={`border rounded-lg p-6 shadow-sm relative  flex flex-col ${
                  pricePackage.isPopular ? "bg-sky-50" : ""
                }`}
              >
                {pricePackage.isPopular && (
                  <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pricePackage.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  €{pricePackage.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {pricePackage.unit}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pricePackage.features.map((feature) => (
                    <li key={feature.id} className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
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
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {testimonialsSection.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {testimonialsSection.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href={testimonialsSection.buttonLink}>
                {testimonialsSection.buttonText}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {ctaSection.heading}
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            {ctaSection.content}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={ctaSection.primaryButtonLink}>{ctaSection.primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white bg-sky-700 border-none hover:text-white hover:bg-sky-700/20"
            >
              <Link href={ctaSection.secondaryButtonLink}>{ctaSection.secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
