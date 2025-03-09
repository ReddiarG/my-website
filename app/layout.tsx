import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import { siteConfig } from "@/lib/content"

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  )
}
