import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, location, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="italic mb-6 text-muted-foreground">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={imageSrc || "/placeholder.svg"} alt={`${name} portrait`} fill className="object-cover" />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  )
}
