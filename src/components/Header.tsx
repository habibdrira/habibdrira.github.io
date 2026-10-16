'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Icon } from './Icon'

type Props = {
  locale: 'fr' | 'en'
  name: string
  github?: string | null
  linkedin?: string | null
  labels: {
    about: string
    projects: string
    experience: string
    skills: string
    certifications: string
    education: string
    contact: string
    menu: string
    close: string
    theme: string
  }
  sections: string[]
}

export function Header({ locale, name, github, linkedin, labels, sections }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || `/${locale}/`
  const other = locale === 'fr' ? 'en' : 'fr'
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/'

  const sectionKeys = ['about', 'projects', 'skills', 'certifications', 'experience', 'education', 'contact'] as const
  const links = sections.filter((key): key is typeof sectionKeys[number] =>
    sectionKeys.some(section => section === key)
  )

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {}
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, key: string) {
    setOpen(false)
    const el = typeof document !== 'undefined' ? document.getElementById(key) : null
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      try {
        window.history.pushState(null, '', `#${key}`)
      } catch {}
    }
  }

  function handleBrandClick(e: React.MouseEvent<HTMLAnchorElement>) {
    setOpen(false)
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      try {
        window.history.pushState(null, '', `/${locale}/`)
      } catch {}
    }
  }

  return (
    <header className="header">
      <div className="header-inner container">
        <Link
          href={`/${locale}/`}
          className="brand"
          onClick={handleBrandClick}
          aria-label={`${name} — ${locale === 'fr' ? 'Accueil' : 'Home'}`}
        >
          {name}
        </Link>
        <nav
          className={`navigation ${open ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}
        >
          {links.map(key => (
            <a
              key={key}
              href={isHome ? `#${key}` : `/${locale}/#${key}`}
              onClick={e => handleNavClick(e, key)}
            >
              {labels[key]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-socials">
            {github && (
              <a className="icon-button" href={github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <Icon name="github" size={21} />
              </a>
            )}
            {linkedin && (
              <a className="icon-button" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Icon name="linkedin" size={21} />
              </a>
            )}
          </div>
          <span className="header-divider" />
          <Link
            className="locale-button"
            href={pathname.replace(/^\/(fr|en)/, `/${other}`) || `/${other}/`}
            lang={other}
            hrefLang={other}
            aria-label={other === 'en' ? 'Read in English' : 'Lire en français'}
          >
            {other.toUpperCase()}
          </Link>
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={labels.theme}>
            <Icon name="sun" className="theme-sun" />
            <Icon name="moon" className="theme-moon" />
          </button>
          <button
            className="icon-button menu-button"
            aria-label={open ? labels.close : labels.menu}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
