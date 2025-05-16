import config from "@/app/payload.config";
import { Button } from "@/components/ui/button";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { Pricing } from "@/types/Pricing";
import { Award, Check, ChevronRight, Users, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

export const revalidate = 3600;

export default async function PricingPage() {
  const payload = await getPayload({ config });
  const pricing = (await payload.find({
    collection: "pricing",
    limit: 1,
    depth: 4,
  })) as PayloadWrapper<Pricing>;

  const hero = pricing.docs[0].heroSection;
  const trainingConcepts = pricing.docs[0].trainingApproach;
  const specializedPrograms = pricing.docs[0].specializedPrograms;
  const pricingPackages = pricing.docs[0].trainingPackages;
  const additionalServices = pricing.docs[0].additionalServices;
  const faq = pricing.docs[0].faqSection;
  const cta = pricing.docs[0].ctaSection;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {hero.heading}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {hero.subheading}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href={hero.buttonLink}>{hero.buttonText}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={hero.buttonLink2}>{hero.buttonText2}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Concepts */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {trainingConcepts.heading}
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src={trainingConcepts.image.url}
                alt={trainingConcepts.image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="space-y-8">
                {trainingConcepts.approaches.map((item) => (
                  <div key={item.id}>
                    <h3 className="mb-2 flex items-center text-xl font-bold">
                      <Waves className="mr-2 size-5 text-sky-600" />
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            {specializedPrograms.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {specializedPrograms.subheading}
          </p>
          <div
            className={`grid grid-cols-1 place-items-center gap-8 ${
              specializedPrograms.programs.length > 2
                ? "md:grid-cols-3"
                : "md:grid-cols-2"
            }`}
          >
            {specializedPrograms.programs.map((program) => (
              <div
                key={program.id}
                className="rounded-lg border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-block rounded-full bg-sky-100 p-3">
                  {program.icon === "waves" && (
                    <Waves className="size-6 text-sky-600" />
                  )}
                  {program.icon === "award" && (
                    <Award className="size-6 text-sky-600" />
                  )}
                  {program.icon === "users" && (
                    <Users className="size-6 text-sky-600" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-bold">{program.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {program.description}
                  fundamental stroke development.
                </p>
                <ul className="mb-6 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <Check className="mr-2 mt-0.5 size-5 text-sky-600" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link href={specializedPrograms.buttonLink}>
                    {specializedPrograms.buttonText}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            {pricingPackages.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {pricingPackages.subheading}
          </p>
          <div
            className={`grid grid-cols-1 place-items-center gap-8 ${
              `md:grid-cols-${Math.min(pricingPackages.packages.length, 3)}`
            }`}
          >
            {pricingPackages.packages.map((pack) => (
              <div
                key={pack.id}
                className={`relative flex h-full flex-col rounded-lg border p-6 shadow-sm ${pack.isPopular ? 'bg-sky-50' : ''}`}

              >
                {pack.isPopular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-sky-600 px-3 py-1 text-xs font-bold text-white">
                    POPULAR
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold">{pack.name}</h3>
                <div className="mb-4 text-3xl font-bold">
                  €{pack.price}
                  <span className="text-base font-normal text-muted-foreground">
                    /{pack.unit}
                  </span>
                </div>
                <ul className="mb-6 grow space-y-2">
                  {pack.features.map((feature) => (
                    <li key={feature.id} className="flex items-center">
                      <ChevronRight className="mr-2 size-4 text-sky-600" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mb-6 text-sm text-muted-foreground">
                  {pack.description}
                </p>
                <Button asChild className="mt-auto bg-sky-600 hover:bg-sky-700">
                  <Link href={pack.buttonLink}>{pack.cta}</Link>
                </Button>
              </div>
            ))}
            {/* <div className="border rounded-lg p-6 shadow-sm bg-sky-50 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Package</h3>
              <div className="text-3xl font-bold mb-4">
                €200
                <span className="text-base font-normal text-muted-foreground">
                  /5 sessions
                </span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>5 training sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>60 minutes per session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Video analysis included</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Personalized training plan</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Email support between sessions</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Most popular option for consistent improvement and skill
                development.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-2">Premium Package</h3>
              <div className="text-3xl font-bold mb-4">
                €350
                <span className="text-base font-normal text-muted-foreground">
                  /10 sessions
                </span>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>10 training sessions</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>60 minutes per session</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Video analysis included</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Comprehensive training plan</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Priority scheduling</span>
                </li>
                <li className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                  <span>Unlimited email/text support</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Best value for committed swimmers seeking significant
                improvement.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      {additionalServices.services.length > 0 && (
        <section className="bg-sky-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
            {additionalServices.heading}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {additionalServices.subheading}
          </p>
          <div className={`md:grid-cols- grid grid-cols-1${Math.min(additionalServices.services.length, 2)} mx-auto max-w-4xl gap-8`}>
            {additionalServices.services.map((service) => (
              <div key={service.id} className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <div className="mb-4 text-2xl font-bold">
                €{service.price}
                <span className="text-base font-normal text-muted-foreground">
                  /{service.priceLabel}
                </span>
              </div>
              <p className="mb-4 text-muted-foreground">
                {service.description}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href={additionalServices.buttonLink}>{additionalServices.buttonText}</Link>
                </Button>
              </div>
            ))}
            {/* <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Open Water Training</h3>
              <div className="text-2xl font-bold mb-4">
                €60
                <span className="text-base font-normal text-muted-foreground">
                  /session
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Specialized training in Berlin's lakes for triathletes and open
                water swimmers. Available May through September.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">Video Analysis Only</h3>
              <div className="text-2xl font-bold mb-4">
                €75
                <span className="text-base font-normal text-muted-foreground">
                  /session
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Comprehensive underwater video recording and detailed analysis
                of your technique with specific recommendations.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-xl font-bold mb-2">
                Training Plan Development
              </h3>
              <div className="text-2xl font-bold mb-4">
                €100
                <span className="text-base font-normal text-muted-foreground">
                  /plan
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Custom 8-week training plan designed for your specific goals,
                available pool time, and current ability level.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Inquire Now</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>)}

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {faq.heading}
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faq.faqs.map((faq) => (
            <div key={faq.id} className="rounded-lg border p-6">
              <h3 className="mb-2 text-xl font-bold">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">
                {faq.answer}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sky-100 md:text-xl">
            {cta.subheading}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={cta.primaryButtonLink}>{cta.primaryButtonText}</Link>
            </Button>
            <Button
                  asChild
                  variant="outline"
                  className="border-none bg-sky-700 text-white hover:bg-sky-700/20 hover:text-white"
                >
                  <Link href={cta.secondaryButtonLink}>{cta.secondaryButtonText}</Link>
                </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
