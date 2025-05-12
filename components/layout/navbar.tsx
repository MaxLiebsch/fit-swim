"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Waves, Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-sky-600" />
          <span className="text-lg font-bold">Berlin Swim Trainer</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium" onClick={toggleMenu}>
                  About
                </Link>
                <Link href="/pricing" className="text-sm font-medium" onClick={toggleMenu}>
                  Pricing
                </Link>
                <Link href="/testimonials" className="text-sm font-medium" onClick={toggleMenu}>
                  Testimonials
                </Link>
                <Link href="/contact" className="text-sm font-medium" onClick={toggleMenu}>
                  Contact
                </Link>
                <Button asChild className="w-full bg-sky-600 hover:bg-sky-700">
                  <Link href="/contact" onClick={toggleMenu}>
                    Book a Session
                  </Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              <Link href="/pricing" className="text-sm font-medium">
                Pricing
              </Link>
              <Link href="/testimonials" className="text-sm font-medium">
                Testimonials
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                Contact
              </Link>
            </nav>
            <Button asChild className="bg-sky-600 hover:bg-sky-700">
              <Link href="/contact">Book a Session</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
