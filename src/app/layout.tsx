import type { Metadata } from 'next'
import { Archivo_Black, Sora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

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
  title: 'Signtec — Sign Writing Coventry | Vehicle Graphics, Shop Signs & Window Tinting',
  description:
    'Signtec — professional-grade large format printing and custom graphics in Coventry. Vehicle signage, shop signs, window graphics, vehicle wraps and office window tinting. Call 0800 849 7484.',
  keywords:
    'sign writing coventry, sign writer coventry, van signage coventry, car signage coventry, office window tinting coventry, shop signs coventry, window graphics coventry, vehicle wraps coventry',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${sora.variable}`}>
      <body>
        <Preloader />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
