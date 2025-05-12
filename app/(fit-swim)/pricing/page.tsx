import config from "@/app/payload.config";
import { Button } from "@/components/ui/button";
import { PayloadWrapper } from "@/types/PayloadWrapper";
import { Pricing } from "@/types/Pricing";
import { Award, Check, ChevronRight, Users, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";

export default async function PricingPage() {
  const payload = await getPayload({ config });
  const pricing = (await payload.find({
    collection: "pricing",
    limit: 1,
    depth: 4,
  })) as PayloadWrapper<Pricing>;
  console.log("pricing:", pricing.docs[0]);

  const hero = pricing.docs[0].heroSection;
  const trainingConcepts = pricing.docs[0].trainingApproach;
  const specializedPrograms = pricing.docs[0].specializedPrograms;
  console.log("specializedPrograms:", specializedPrograms);
  const pricingPackages = pricing.docs[0].trainingPackages;
  console.log("pricingPackages:", pricingPackages);
  const additionalServices = pricing.docs[0].additionalServices;
  const faq = pricing.docs[0].faqSection;
  const cta = pricing.docs[0].ctaSection;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              {hero.heading}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {trainingConcepts.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
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
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Waves className="mr-2 h-5 w-5 text-sky-600" />
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
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
            {specializedPrograms.heading}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {specializedPrograms.subheading}
          </p>
          <div
            className={`grid grid-cols-1 gap-8 place-items-center ${
              specializedPrograms.programs.length > 2
                ? "md:grid-cols-3"
                : "md:grid-cols-2"
            }`}
          >
            {specializedPrograms.programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-sm p-6 border"
              >
                <div className="p-3 rounded-full bg-sky-100 inline-block mb-4">
                  {program.icon === "waves" && (
                    <Waves className="h-6 w-6 text-sky-600" />
                  )}
                  {program.icon === "award" && (
                    <Award className="h-6 w-6 text-sky-600" />
                  )}
                  {program.icon === "users" && (
                    <Users className="h-6 w-6 text-sky-600" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {program.description}
                  fundamental stroke development.
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-sky-600 mt-0.5" />
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
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
            {pricingPackages.heading}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {pricingPackages.subheading}
          </p>
          <div
            className={`grid grid-cols-1 gap-8 place-items-center ${
              `md:grid-cols-${Math.min(pricingPackages.packages.length, 3)}`
            }`}
          >
            {pricingPackages.packages.map((pack) => (
              <div
                key={pack.id}
                className="border rounded-lg p-6 shadow-sm flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">Starter Package</h3>
                <div className="text-3xl font-bold mb-4">
                  €{pack.price}
                  <span className="text-base font-normal text-muted-foreground">
                    /{pack.unit}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {pack.features.map((feature) => (
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-sky-600" />
                      <span>{feature.feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mb-6">
                  {pack.description}
                </p>
                <Button asChild className="bg-sky-600 hover:bg-sky-700 mt-auto">
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
        <section className="py-20 bg-sky-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
            {additionalServices.heading}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {additionalServices.subheading}
          </p>
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(additionalServices.services.length, 2)} gap-8 max-w-4xl mx-auto`}>
            {additionalServices.services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm p-6 border">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-2xl font-bold mb-4">
                €{service.price}
                <span className="text-base font-normal text-muted-foreground">
                  /{service.priceLabel}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {faq.heading}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">
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
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {cta.heading}
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            {cta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={cta.primaryButtonLink}>{cta.primaryButtonText}</Link>
            </Button>
            <Button
                  asChild
                  variant="outline"
                  className="text-white bg-sky-700 border-none hover:text-white hover:bg-sky-700/20"
                >
                  <Link href={cta.secondaryButtonLink}>{cta.secondaryButtonText}</Link>
                </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
