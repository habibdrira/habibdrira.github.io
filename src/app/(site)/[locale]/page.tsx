import type { Metadata } from 'next'
import { Portfolio } from '@/components/Portfolio'
import { getContent, validLocale, type Locale } from '@/lib/content'

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLoc = validLocale(locale) ? locale : 'fr'
  return {
    alternates: {
      canonical: `/${validLoc}/`,
      languages: { fr: '/fr/', en: '/en/' },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const currentLocale: Locale = validLocale(locale) ? locale : 'fr'
  const { profile } = getContent(currentLocale)
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD).replace(/</g, '\\u003c') }}
      />
      <Portfolio locale={currentLocale} />
    </>
  )
}
