import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Section from '@/components/Section'
import MobileMenu from './MobileMenu'
import LogoAZC from '@/components/LogoAZC'

export default async function Header() {
  const client = createClient()
  const settings = await client.getSingle('settings')
  const { navigation } = settings.data
  return (
    <Section as="header" width="xl" className="p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <LogoAZC className="h-[50px]" />
          <span className="sr-only">Return to Homepage</span>
        </Link>
        <MobileMenu navigation={navigation} />
        {navigation.length && (
          <nav className="hidden text-xl lg:block">
            <ul className="flex gap-x-12">
              {navigation.map(({ label, link }) => (
                <li key={label}>
                  <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </Section>
  )
}
