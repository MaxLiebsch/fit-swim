import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, location, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="mb-6 italic text-muted-foreground">&quot;{quote}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="relative size-12 overflow-hidden rounded-full">
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
