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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
