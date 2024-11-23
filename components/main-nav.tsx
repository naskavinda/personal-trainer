"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/trainers", label: "Trainers" },
    { href: "/transformations", label: "Transformations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn("sticky top-0 z-50 flex items-center space-x-4 lg:space-x-6 bg-primary text-primary-foreground", className)}
      {...props}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Supun Kavinda
        </Link>
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  pathname === item.href
                    ? "text-secondary"
                    : "text-primary-foreground"
                )}
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

