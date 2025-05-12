export interface IHome {
  createdAt: string;
  updatedAt: string;
  title: string;
  hero: Hero;
  featuresSection: FeaturesSection;
  aboutPreview: AboutPreview;
  pricingPreview: PricingPreview;
  testimonialsSection: TestimonialsSection;
  ctaSection: CtaSection;
  id: string;
}

export interface Hero {
  heading: string;
  subheading: string;
  image: Image;
  ctaText: string;
  ctaLink: string;
  ctaLink2: string;
  ctaText2: string;
}

export interface Image {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: Sizes;
  id: string;
  url: string;
  thumbnailURL: any;
}

export interface Sizes {
  thumbnail: Thumbnail;
  card: Card;
}

export interface Thumbnail {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface Card {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface FeaturesSection {
  heading: string;
  subheading: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  id: string;
}

export interface AboutPreview {
  heading: string;
  content: Content;
  image: Image;
  buttonText: string;
  buttonLink: string;
}

export interface Content {
  root: Root2;
}

export interface Root2 {
  children: Children[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
}

export interface Children {
  children: Children2[];
  direction: string;
  format: string;
  indent: number;
  type: string;
  version: number;
  textFormat: number;
  textStyle: string;
}

export interface Children2 {
  detail?: number;
  format?: number;
  mode?: string;
  style?: string;
  text?: string;
  type: string;
  version: number;
}

export interface Image2 {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: Sizes2;
  id: string;
  url: string;
  thumbnailURL: any;
}

export interface Sizes2 {
  thumbnail: Thumbnail2;
  card: Card2;
}

export interface Thumbnail2 {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface Card2 {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface PricingPreview {
  heading: string;
  subheading: string;
  packages: Package[];
  buttonText: string;
  buttonLink: string;
}

export interface Package {
  createdAt: string;
  updatedAt: string;
  name: string;
  price: number;
  unit: string;
  features: Feature2[];
  isPopular: boolean;
  buttonVariant: string;
  id: string;
  cta: string;
  buttonLink: string;
  description: string;
}

export interface Feature2 {
  feature: string;
  id: string;
}

export interface TestimonialsSection {
  heading: string;
  subheading: string;
  testimonials: Testimonial[];
  buttonText: string;
  buttonLink: string;
}

export interface Testimonial {
  createdAt: string;
  updatedAt: string;
  name: string;
  location: string;
  quote: string;
  image?: Image;
  id: string;
}

export interface CtaSection {
  heading: string;
  content: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}
