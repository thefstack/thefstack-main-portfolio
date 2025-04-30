import "./globals.css"
import { Inter } from "next/font/google"
import JsonLd from "./JsonLd"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "thefstack - Full Stack Developer",
  description: "Portfolio of thefstack, a Full Stack Developer specializing in React, Next.js, Node.js, and more.",
  keywords: [
    "thefstack",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB",
    "Portfolio",
    "Kolkata",
    "India",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "thefstack", url: "https://portfolio.thefstack.com" }],
  creator: "thefstack",
  publisher: "thefstack",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://portfolio.thefstack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "thefstack - Full Stack Developer",
    description: "Portfolio of thefstack, a Full Stack Developer specializing in React, Next.js, Node.js, and more.",
    url: "https://portfolio.thefstack.com",
    siteName: "thefstack Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "thefstack - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "thefstack - Full Stack Developer",
    description: "Portfolio of thefstack, a Full Stack Developer specializing in React, Next.js, Node.js, and more.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <JsonLd />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
