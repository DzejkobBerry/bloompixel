import type { Metadata } from 'next'
import { Poppins, Orbitron } from 'next/font/google'
import './globals.css'
import '../styles/main.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'BloomPixel.pl - Profesjonalne usługi web development',
  description: 'Profesjonalne usługi tworzenia stron internetowych, sklepów online i aplikacji webowych. Nowoczesne rozwiązania dla Twojego biznesu.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><style>rect{animation:pulse 2s infinite alternate}@keyframes pulse{0%{fill:%238b5cf6}50%{fill:%23ec4899}100%{fill:%2306b6d4}}</style><rect x=%2210%22 y=%2210%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%238b5cf6%22 /><rect x=%2237.5%22 y=%2210%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%23ec4899%22 /><rect x=%2265%22 y=%2210%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%238b5cf6%22 /><rect x=%2210%22 y=%2237.5%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%2306b6d4%22 /><rect x=%2237.5%22 y=%2237.5%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%238b5cf6%22 /><rect x=%2265%22 y=%2237.5%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%2306b6d4%22 /><rect x=%2210%22 y=%2265%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%238b5cf6%22 /><rect x=%2237.5%22 y=%2265%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%23ec4899%22 /><rect x=%2265%22 y=%2265%22 width=%2225%22 height=%2225%22 rx=%222%22 fill=%22%238b5cf6%22 /></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${poppins.variable} ${orbitron.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
