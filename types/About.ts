import { Image } from "./IHome"

export interface About {
    createdAt: string
    updatedAt: string
    title: string
    hero: Hero
    bio: Bio
    qualifications: Qualifications
    trainingLocations: TrainingLocations
    cta: Cta
    id: string
  }
  
  export interface Hero {
    heading: string
    subheading: string
    image: Image,
    leftCtaBtnText: string,
    leftCtaBtnLink: string,
    rightCtaBtnText: string,
    rightCtaBtnLink: string,
  }

  
  export interface Card {
    url: string
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
  }
  
  export interface Bio {
    heading: string
    content: Content
  }
  
  export interface Content {
    root: Root2
  }
  
  export interface Root2 {
    children: Children[]
    direction: string
    format: string
    indent: number
    type: string
    version: number
  }
  
  export interface Children {
    children: Children2[]
    direction: string
    format: string
    indent: number
    type: string
    version: number
    textFormat: number
    textStyle: string
  }
  
  export interface Children2 {
    detail: number
    format: number
    mode: string
    style: string
    text: string
    type: string
    version: number
  }
  
  export interface Qualifications {
    heading: string
    certificationsHeading: string
    certifications: Certification[]
    experienceHeading: string
    experience: Experience[]
  }
  
  export interface Certification {
    title: string
    description: string
    id: string
  }
  
  export interface Experience {
    position: string
    location?: string
    period: string
    description: string
    id: string
  }
  
  export interface TrainingLocations {
    heading: string
    subheading: string
    locations: Location[]
    additionalInfo: string
    buttonText: string
    buttonLink: string
  }
  
  export interface Location {
    area: string
    facilityName: string
    address: string
    description: string
    id: string
  }
  
  export interface Cta {
    heading: string
    description: string
    rightCtaBtnText: string
    rightCtaBtnLink: string
    leftCtaBtnText: string
    leftCtaBtnLink: string
  }
  