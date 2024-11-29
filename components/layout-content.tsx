"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from '@/components/main-nav'
import { Footer } from '@/components/footer'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col min-h-screen">
        <MainNav />
        <main className={cn(
          "flex-grow",
          !isHomePage && "pt-24"
        )}>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
