import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { getTestimonialPage } from "@/payload/getTestimonials";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

export default async function TestimonialsPage() {
  const testimonials = await getTestimonialPage();
  const page = testimonials.docs[0];
  const {
    title,
    description,
    statsText,
    ctaTitle,
    ctaDescription,
    primaryButtonText,
    primaryButtonLink,
    secondaryButtonText,
    secondaryButtonLink,
    featuredTestimonialsTitle,
    testimonialsTitle,
  } = page;
  const featuredTestimonials = testimonials.docs[0].featuredTestimonials;
  const allTestimonials = testimonials.docs[0].testimonials;
  const beforeAfter = testimonials.docs[0].beforeAfterVideos;
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              {description}
            </p>
            <div className="mb-8 flex justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">
              {statsText}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {featuredTestimonialsTitle}
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative rounded-lg bg-sky-50 p-8"
              >
                <div className="absolute -top-6 left-8 rounded-full bg-sky-600 p-3">
                  <Star className="size-6 fill-white text-white" />
                </div>
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                  <div className="relative size-24 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={
                        testimonial.testimonial.image?.url || "/app-icon.svg"
                      }
                      alt={
                        testimonial.testimonial.image?.alt || "Client portrait"
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      {testimonial.testimonial.quote}
                    </p>
                    <p className="font-bold">{testimonial.testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="bg-sky-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            {testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {allTestimonials.map((testimonials) => (
              <TestimonialCard
                key={testimonials.id}
                name={testimonials.name}
                location={testimonials.location}
                quote={testimonials.quote}
                imageSrc={testimonials.image?.url || "/app-icon.svg"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      {beforeAfter.length && (
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight">
              Before and After
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              See the real progress my clients have made with these before and
              after comparisons
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="flex size-full items-center justify-center">
                    <p className="text-muted-foreground">
                      Before Training Video
                    </p>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Before: Inefficient Freestyle
                </h3>
                <p className="text-muted-foreground">
                  Notice the high head position, crossed-over arm entry, and
                  inefficient kick pattern that was causing excessive drag.
                </p>
              </div>
              <div>
                <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="flex size-full items-center justify-center">
                    <p className="text-muted-foreground">
                      After Training Video
                    </p>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  After: Streamlined Technique
                </h3>
                <p className="text-muted-foreground">
                  After 8 sessions, see the improved body position, proper arm
                  entry, and efficient kick resulting in faster swimming with
                  less effort.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-6 text-muted-foreground">
                These results are typical for clients who commit to regular
                training and practice.
              </p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/contact">Start Your Transformation</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {ctaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sky-100 md:text-xl">
            {ctaDescription}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-sky-700 text-white hover:bg-sky-700/20 hover:text-white"
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
