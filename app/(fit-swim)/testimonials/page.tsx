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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-yellow-400 fill-yellow-400"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {featuredTestimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-sky-50 rounded-lg p-8 relative"
              >
                <div className="absolute -top-6 left-8 bg-sky-600 rounded-full p-3">
                  <Star className="h-6 w-6 text-white fill-white" />
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
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
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="italic mb-4">
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
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <section className="py-20 b]g-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
              Before and After
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              See the real progress my clients have made with these before and
              after comparisons
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Before Training Video
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Before: Inefficient Freestyle
                </h3>
                <p className="text-muted-foreground">
                  Notice the high head position, crossed-over arm entry, and
                  inefficient kick pattern that was causing excessive drag.
                </p>
              </div>
              <div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground">
                      After Training Video
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  After: Streamlined Technique
                </h3>
                <p className="text-muted-foreground">
                  After 8 sessions, see the improved body position, proper arm
                  entry, and efficient kick resulting in faster swimming with
                  less effort.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
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
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            {ctaTitle}
          </h2>
          <p className="mb-8 text-sky-100 md:text-xl max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-sky-600 hover:bg-sky-50">
              <Link href={primaryButtonLink}>{primaryButtonText}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-white bg-sky-700 border-none hover:text-white hover:bg-sky-700/20"
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
