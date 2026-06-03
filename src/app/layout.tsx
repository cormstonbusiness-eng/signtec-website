import type { Metadata } from 'next'
import { Archivo_Black, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'
import { CartProvider } from '@/context/CartContext'

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://signtec.co.uk'),
  title: 'Signtec | Sign Writing & Vehicle Graphics Coventry',
  description: 'Professional sign writing and vehicle graphics in Coventry. Shop signs, fascias, fleet branding, window tinting & large format printing.',
  keywords: 'sign writing coventry, vehicle graphics, shop signs, fascias, vehicle wraps, window tinting',
  icons: {
    icon: '/logo-header.svg',
    apple: '/logo-header.svg',
  },
  openGraph: {
    title: 'Signtec | Sign Writing & Vehicle Graphics Coventry',
    description: 'Professional sign writing and vehicle graphics in Coventry. Shop signs, fascias, fleet branding, window tinting & large format printing.',
    url: 'https://signtec.co.uk',
    siteName: 'Signtec',
    type: 'website',
    images: [
      {
        url: '/logo-header.svg',
        width: 335,
        height: 113,
        alt: 'Signtec Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signtec | Sign Writing & Vehicle Graphics Coventry',
    description: 'Professional sign writing and vehicle graphics in Coventry. Shop signs, fascias, fleet branding, window tinting & large format printing.',
    images: ['/logo-header.svg'],
  },
  other: {
    'canonical': 'https://signtec.co.uk',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${sora.variable}`}>
      <body>
        <CartProvider>
          <Preloader />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  )
}
