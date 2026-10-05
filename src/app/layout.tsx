import type { Metadata } from "next";
import { Montserrat, Permanent_Marker } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aloha | Clases de Baile Urbano en Linares",
  description: "Clases de baile urbano para niños, jóvenes y adultos en Linares. Aprende, muévete y forma parte de la comunidad Aloha. Consulta horarios y cupos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${permanentMarker.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Aloha Crew",
              "description": "Academia de baile urbano en Linares.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Linares",
                "addressRegion": "Maule",
                "addressCountry": "CL"
              }
            })
          }}
        />
      </head>
      <body className="bg-dark text-white font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
