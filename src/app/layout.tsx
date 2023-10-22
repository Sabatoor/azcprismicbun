import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { clsx } from 'clsx'
import { PrismicPreview } from '@prismicio/next'
import { createClient, repositoryName } from '@/prismicio'
import * as prismic from '@prismicio/client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

/**
 * Heading & Body fonts
 */
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

/**
 * fetch and generate Metadata
 */

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle('settings')
  return {
    metadataBase: new URL('https://zimeras.ca'),
    title: prismic.asText(settings.data.site_title) || 'AZ Copywriting',
    description:
      settings.data.site_meta_description ||
      `This site's dedicated to our relationship with technology and the profound impact it's had on our lives. I provide innovative services such as Prompt Engineering, Data-Driven Content Marketing, and Web Development. If you're interested in how cutting-edge technologies like openAI can enhance our lives, shape societies, and transform the way we communicate, then you are in the right place.`,
    openGraph: {
      images: [settings.data.site_meta_image.url || ''],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA">
      <body
        className={clsx(
          montserrat.variable,
          openSans.variable,
          `font-opensans text-color-neutral`
        )}
      >
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
