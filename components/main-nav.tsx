"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#trainers", label: "Trainers" },
    { href: "/transformations", label: "Transformations" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "top-0 left-0 right-0 z-50 transition-all duration-300",
        isHomePage ? "absolute" : "fixed bg-background shadow-md",
        isScrolled && "fixed bg-background shadow-md",
        className
      )}
      {...props}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={cn(
            "flex items-center space-x-2 text-2xl font-bold tracking-tight transition-colors",
            (!isHomePage || isScrolled) ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
          )}
        >
          <Image
            src="/logo.png"
            alt="Life Change Gym Logo"
            width={1000}
            height={1000}
            className="h-14 w-14"
            priority
          />
          <span>Life Change Gym</span>
        </Link>
        <div className="hidden md:flex items-center space-x-3">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="lg"
              className={cn(
                "font-medium text-base transition-colors",
                (!isHomePage || isScrolled)
                  ? pathname === item.href
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-foreground hover:bg-background hover:text-primary"
                  : "text-white hover:bg-white/10"
              )}
            >
              <Link href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
        <Button 
          variant="ghost"
          size="icon" 
          className={cn(
            "md:hidden",
            (!isHomePage || isScrolled) ? "text-foreground" : "text-white hover:bg-white/10"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </nav>
  )
}
