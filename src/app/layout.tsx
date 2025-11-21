import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from "next/font/local";
import './globals.css'
import { Analytics as BeamAnalytics } from '@/components/analytics'
import { Analytics as VercelAnalytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: 'Alikhan - Developer & Innovator',
  description: 'Portfolio of Alikhan - passionate developer, student, and innovator creating solutions through technology and community impact.',
  keywords: [
    'developer',
    'student',
    'portfolio',
    'web development',
    'AI',
    'programming',
    'UWC ISAK Japan',
    'innovation',
    'technology'
  ],
  authors: [{ name: 'Alikhan' }],
  creator: 'Alikhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'www.alikhan.studio', // Replace with your actual URL
    siteName: 'Alikhan Portfolio',
    title: 'Alikhan - Developer & Innovator',
    description: 'Portfolio showcasing projects in web development, AI, hardware, and community initiatives.',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Alikhan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alikhan - Developer & Innovator',
    description: 'Portfolio showcasing projects in web development, AI, hardware, and community initiatives.',
    images: ['/og-image.png'], // You'll need to add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification tokens here if needed
    // google: 'your-google-verification-token',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <BeamAnalytics />
      </head>
      <body
        className={`bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-900 ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}

//
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <head>
//         {/* Preload critical resources */}
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//
//
//         {/* Theme color for mobile browsers */}
//         <meta name="theme-color" content="#0a0a0a" />
//         <meta name="msapplication-TileColor" content="#0a0a0a" />
//
//         {/* Prevent zoom on mobile */}
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
//       </head>
//       <body className={`${inter.className} antialiased`}>
//         {/* Skip to main content for accessibility */}
//         <a
//           href="#main-content"
//           className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon-pink text-white px-4 py-2 rounded-lg z-[9999]"
//         >
//           Skip to main content
//         </a>
//
//         <div id="main-content">
//           {children}
//         </div>
//
//         {/* Analytics and other scripts can go here */}
//       </body>
//     </html>
//   )
// }