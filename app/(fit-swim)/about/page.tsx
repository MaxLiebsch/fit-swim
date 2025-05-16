import RichText from "@/components/RichText";
import { Button } from "@/components/ui/button";
import { getAbout } from "@/payload/getAbout";
import { SerializedEditorState, SerializedLexicalNode } from "@payloadcms/richtext-lexical/lexical";
import { Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

export default async function AboutPage() {
  const about = await getAbout();
  const hero = about.docs[0].hero;
  const bio = about.docs[0].bio;
  const qualifications = about.docs[0].qualifications;
  const trainingLocations = about.docs[0].trainingLocations;
  const cta = about.docs[0].cta;
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {hero.heading}
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">
                {hero.subheading}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
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
            <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">{bio.heading}</h2>
            <div className="prose prose-lg max-w-none">
              <RichText content={bio.content as SerializedEditorState<SerializedLexicalNode>} />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Qualifications & Experience
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold">
                {qualifications.certificationsHeading}
              </h3>
              <ul className="space-y-4">
                {qualifications.certifications.map((certification) => (
                  <li key={certification.id} className="flex items-start">
                    <Award className="mr-3 mt-0.5 size-6 text-sky-600" />
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
              <h3 className="mb-4 text-xl font-bold">
                Professional Experience
              </h3>
              <ul className="space-y-4">
                {qualifications.experience.map((experience) => (
                  <li key={experience.id} className="flex items-start">
                    <Calendar className="mr-3 mt-0.5 size-6 text-sky-600" />
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              {trainingLocations.heading}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              {trainingLocations.subheading}
            </p>
          </div>
          <div
            className={` md:grid-cols-${trainingLocations.locations.length} mx-auto grid max-w-5xl gap-8`}
          >
            {trainingLocations.locations.map((location) => (
              <div
                key={location.id}
                className="rounded-lg border p-6 shadow-sm"
              >
                <MapPin className="mb-4 size-10 text-sky-600" />
                <h3 className="mb-2 text-xl font-bold">
                  {location.facilityName}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {location.address}
                  <br />
                  {location.area}
                </p>
                <p className="text-sm">{location.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">
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
      <section className="bg-sky-600 py-20 text-white">
        <div className="container mx-auto  px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sky-100 md:text-xl">
            {cta.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={cta.leftCtaBtnLink}>{cta.leftCtaBtnText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-sky-700 text-white hover:bg-sky-700/20 hover:text-white"
            >
              <Link href={cta.rightCtaBtnLink}>{cta.rightCtaBtnText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
