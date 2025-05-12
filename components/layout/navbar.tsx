"use client";

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { NavbarProps } from "@/types/Navbar";
import { Menu, Waves, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ data }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItem = (item: NavbarProps['data']['menuItems'][0], onClick?: () => void) => {
    if (item.isButton) {
      return (
        <Button 
          asChild 
          className={`${item.buttonStyle?.backgroundColor} ${item.buttonStyle?.hoverColor}`}
          key={item.link}
        >
          <Link href={item.link} onClick={onClick}>{item.label}</Link>
        </Button>
      );
    }
    
    return (
      <Link
        key={item.link}
        href={item.link}
        className="text-sm font-medium"
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Waves className={`h-6 w-6 ${data.logo.color}`} />
          <span className="text-lg font-bold">{data.logo.text}</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4">
                {data.menuItems.map((item) => renderMenuItem(item, toggleMenu))}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {data.menuItems.map((item) => 
                !item.isButton && renderMenuItem(item)
              )}
            </nav>
            {data.menuItems.map((item) => 
              item.isButton && renderMenuItem(item)
            )}
          </div>
        )}
      </div>
    </header>
  );
}
