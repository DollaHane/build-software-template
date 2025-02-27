import "@/styles/globals.css"
import { Metadata, type Viewport } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer"
import Providers from "@/components/Global/Providers"
import NavBar from "@/components/NavBar/NavBar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                {/* @ts-expect-error Server Component */}
                <NavBar />
                <Footer />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
              <Toaster />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
