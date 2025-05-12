export interface ContactPage {
    createdAt: string
    updatedAt: string
    title: string
    heroSection: HeroSection
    contactFormSection: ContactFormSection
    contactInfo: ContactInfo
    faqSection: FaqSection
    mapSection: MapSection
    ctaSection: CtaSection
    id: string
  }
  
  export interface HeroSection {
    heading: string
    subheading: string
  }
  
  export interface ContactFormSection {
    heading: string
    description: string
    formHeading: string
    submitButtonText: string
  }
  
  export interface ContactInfo {
    email: string
    phone: string
    locations: string
    availabilityWeekdays: string
    availabilityWeekends: string
  }
  
  export interface FaqSection {
    heading: string
    faqs: Faq[]
  }
  
  export interface Faq {
    question: string
    answer: string
    id: string
  }
  
  export interface MapSection {
    heading: string
    description: string
    mapPlaceholder: string
  }
  
  export interface CtaSection {
    heading: string
    description: string
    buttonText: string
  }
  