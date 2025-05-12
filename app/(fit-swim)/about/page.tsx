import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { getAbout } from "@/payload/getAbout";
import { Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function AboutPage() {
  const about = await getAbout();
  const hero = about.docs[0].hero;
  const bio = about.docs[0].bio;
  const qualifications = about.docs[0].qualifications;
  const trainingLocations = about.docs[0].trainingLocations;
  const cta = about.docs[0].cta;
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                {hero.heading}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-sky-600 hover:bg-sky-700">
                  <Link href={hero.leftCtaBtnLink}>{hero.leftCtaBtnText}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={hero.rightCtaBtnLink}>
                    {hero.rightCtaBtnText}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={hero.image.url}
                alt={hero.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{bio.heading}</h2>
            <div className="prose prose-lg max-w-none">
              <RichText content={bio.content as any} />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Qualifications & Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {qualifications.certificationsHeading}
              </h3>
              <ul className="space-y-4">
                {qualifications.certifications.map((certification) => (
                  <li key={certification.id} className="flex items-start">
                    <Award className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{certification.title}</p>
                      <p className="text-muted-foreground">
                        {certification.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Professional Experience
              </h3>
              <ul className="space-y-4">
                {qualifications.experience.map((experience) => (
                  <li key={experience.id} className="flex items-start">
                    <Calendar className="mr-3 h-6 w-6 text-sky-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{experience.position}</p>
                      <p className="text-muted-foreground">
                        {experience?.location} {experience?.period}
                      </p>
                      <p className="text-sm">{experience.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              {trainingLocations.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {trainingLocations.subheading}
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-${trainingLocations.locations.length} gap-8 max-w-5xl mx-auto`}
          >
            {trainingLocations.locations.map((location) => (
              <div
                key={location.id}
                className="border rounded-lg p-6 shadow-sm"
              >
                <MapPin className="h-10 w-10 text-sky-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  {location.facilityName}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {location.address}
                  <br />
                  {location.area}
                </p>
                <p className="text-sm">{location.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              {trainingLocations.additionalInfo}
            </p>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href={trainingLocations.buttonLink}>
                {trainingLocations.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto  px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {cta.heading}
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={cta.leftCtaBtnLink}>{cta.leftCtaBtnText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white bg-sky-700 border-none hover:text-white hover:bg-sky-700/20"
            >
              <Link href={cta.rightCtaBtnLink}>{cta.rightCtaBtnText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
