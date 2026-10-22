import type { Metadata } from 'next'
import Script from 'next/script'
import '@fontsource-variable/dm-sans'
import { getContent, validLocale, words, type Locale } from '@/lib/content'
import { Header } from '@/components/Header'
import './styles.css'

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLoc = validLocale(locale) ? locale : 'fr'
  const { profile } = getContent(validLoc)
  return {
    metadataBase: new URL('https://habibdrira.github.io'),
    title: { default: profile.name, template: `%s — ${profile.name}` },
    description: profile.seoDescription,
    openGraph: {
      type: 'website',
      siteName: profile.name,
      locale: validLoc === 'fr' ? 'fr_FR' : 'en_US',
      title: profile.name,
      description: profile.seoDescription || '',
    },
    icons: {
      icon: [
        { url: '/favicon.svg?v=hd', type: 'image/svg+xml' },
        { url: '/favicon.png?v=hd', type: 'image/png' },
      ],
      apple: '/favicon.png?v=hd',
    },
  }
}

const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='light'?'light':'dark'}catch(e){}`

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const currentLocale: Locale = validLocale(locale) ? locale : 'fr'
  const { profile, homepage } = getContent(currentLocale)
  const t = words[currentLocale]
  return (
    <html lang={currentLocale} data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="portfolio-theme" strategy="beforeInteractive">{themeScript}</Script>
      </head>
      <body>
        <a className="skip-link" href="#main-content">{t.skip}</a>
        <Header
          locale={currentLocale}
          name={profile.name || "Habib Drira"}
          role="Cloud & DevOps Engineer"
          github={profile.github}
          linkedin={profile.linkedin}
          labels={t}
          sections={homepage.sections?.filter(s => s.visible).map(s => s.section) || []}
        />
        {children}
        <footer className="footer container">
          <a className="footer-brand" href={`/${currentLocale}/`}>{profile.name}<span>© {new Date().getFullYear()}</span></a>
          <a className="footer-top" href="#top" aria-label={currentLocale === 'fr' ? 'Retour en haut' : 'Back to top'}>↑</a>
        </footer>
        <div id="top" className="page-top" />
      </body>
    </html>
  )
}
