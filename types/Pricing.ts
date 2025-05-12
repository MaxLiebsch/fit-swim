import { Image, Package } from "./IHome"

export interface Pricing {
    createdAt: string
    updatedAt: string
    title: string
    heroSection: HeroSection
    trainingApproach: TrainingApproach
    specializedPrograms: SpecializedPrograms
    trainingPackages: TrainingPackages
    additionalServices: AdditionalServices
    faqSection: FaqSection
    ctaSection: CtaSection
    id: string
  }
  
  export interface HeroSection {
    heading: string
    subheading: string
    buttonText: string
    buttonLink: string
    buttonText2: string
    buttonLink2: string
  }
  
  export interface TrainingApproach {
    heading: string
    image: Image
    approaches: Approach[]
  }
  

  export interface Sizes {
    thumbnail: Thumbnail
    card: Card
  }
  
  export interface Thumbnail {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  
  export interface Card {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  
  export interface Approach {
    title: string
    description: string
    id: string
  }
  
  export interface SpecializedPrograms {
    heading: string
    subheading: string
    programs: Program[]
    buttonText: string
    buttonLink: string
  }
  
  export interface Program {
    title: string
    description: string
    icon: string
    features: Feature[]
    id: string
  }
  
  export interface Feature {
    feature: string
    id: string
  }
  
  export interface TrainingPackages {
    heading: string
    subheading: string
    packages: Package[]
  }
  
 
  export interface Feature2 {
    feature: string
    id: string
  }
  
  export interface AdditionalServices {
    heading: string
    subheading: string
    services: Service[]
    buttonText: string
    buttonLink: string
  }
  
  export interface Service {
    title: string
    price: number
    priceLabel: string
    description: string
    id: string
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
  
  export interface CtaSection {
    heading: string
    subheading: string
    primaryButtonText: string
    primaryButtonLink: string
    secondaryButtonText: string
    secondaryButtonLink: string
  }
  