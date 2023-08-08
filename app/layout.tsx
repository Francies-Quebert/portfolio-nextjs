import Layout from '@/components/layout'
import './globals.css'
import type { Metadata } from 'next'
import { Jacques_Francois, Roboto, Playfair_Display } from 'next/font/google'
import AmiateTransition from '@/components/AmiateTransition'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
})
const jacques = Jacques_Francois({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jacques',
})

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  description: `
    Frontend developer, React developer, web developer
    Portfolio website for francies
    Home page for my portfolio page
  `,
  generator: 'Francies Fernandes',
  applicationName: 'francies portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Francies fernandes','Quebert fernandes', 'Frontend developer', 'React', 'JavaScript', 'Typescript',
    'Redux', 'Next.js', 'Node.js', 'MongoDB', 'React developer', 'Full stack developer', 'developer'],
  authors: [{ name: 'Francies Quebert Fernandes', url: 'https://github.com/Francies-Quebert' }],
  colorScheme: 'dark',
  creator: 'Francies Fernandes',
  publisher: 'Francies Fernandes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${jacques.variable} ${playfair.variable} dark`}>
      <body className={``}>
        <Layout>
          <AmiateTransition>
            {children}
          </AmiateTransition>
        </Layout>
      </body>
    </html>
  )
}
