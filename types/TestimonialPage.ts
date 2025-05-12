import { Testimonial } from "./IHome"

export interface TestimonialPage {
    createdAt: string
    updatedAt: string
    title: string
    description: string
    statsText: string
    featuredTestimonialsTitle: string
    featuredTestimonials: FeaturedTestimonial[]
    testimonialsTitle: string
    testimonials: Testimonial[]
    videoTestimonialsTitle: string
    videoTestimonialsDescription: string
    beforeAfterVideos: any[]
    videoFooterText: string
    videoCtaText: string
    ctaTitle: string
    ctaDescription: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
    _status: string
    id: string
  }
  
  export interface FeaturedTestimonial {
    testimonial: Testimonial
    id: string
  }
  
  