import { personalInfo } from "@/data/portfolio-data"

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: personalInfo.name,
          alternateName: personalInfo.displayName,
          url: "https://portfolio.thefstack.com",
          image: "https://portfolio.thefstack.com/android-chrome-512x512.png",
          sameAs: ["https://linkedin.com/in/thefstack", "https://github.com/thefstack"],
          jobTitle: "Full Stack Developer",
          worksFor: {
            "@type": "Organization",
            name: "IVY Knowledge Service Pvt Ltd",
          },
          description: "Full Stack Developer specializing in React, Next.js, Node.js, and more.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kolkata",
            addressCountry: "India",
          },
          email: personalInfo.email,
          telephone: personalInfo.phone,
          knowsAbout: [
            "JavaScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Git",
            "REST APIs",
          ],
        }),
      }}
    />
  )
}
