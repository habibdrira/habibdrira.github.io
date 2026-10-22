'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Icon } from './Icon'

type Props = {
  locale: 'fr' | 'en'
  name: string
  role?: string
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

export function Header({ locale, name, role = 'Cloud & DevOps Engineer', github, linkedin, labels, sections }: Props) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const pathname = usePathname() || `/${locale}/`
  const other = locale === 'fr' ? 'en' : 'fr'
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/'

  const sectionKeys = ['about', 'projects', 'skills', 'certifications', 'experience', 'education', 'contact'] as const
  const links = sections.filter((key): key is typeof sectionKeys[number] =>
    sectionKeys.some(section => section === key)
  )

  useEffect(() => {
    if (!isHome || typeof window === 'undefined') {
      setActiveSection('')
      return
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If in the hero area, no link is highlighted
          if (window.scrollY < 150) {
            setActiveSection('')
            ticking = false
            return
          }

          // If reached the bottom of the page, activate the last link
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
          if (isAtBottom && links.length > 0) {
            setActiveSection(links[links.length - 1])
            ticking = false
            return
          }

          // Detect active section using getBoundingClientRect relative to viewport
          const threshold = 140
          let current = ''
          for (let i = links.length - 1; i >= 0; i--) {
            const el = document.getElementById(links[i])
            if (el) {
              const rect = el.getBoundingClientRect()
              if (rect.top <= threshold) {
                current = links[i]
                break
              }
            }
          }

          setActiveSection(current)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome, links])

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
      setActiveSection(key)
      try {
        window.history.pushState(null, '', `#${key}`)
      } catch {}

      const headerOffset = 81
      const elementTop = el.getBoundingClientRect().top + window.scrollY
      const targetScroll = Math.max(0, elementTop - headerOffset)

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
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
      setActiveSection('')
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
          <span className="brand-badge" aria-hidden="true">
            DH
          </span>
          <span className="brand-info">
            <span className="brand-name">{name}</span>
            <span className="brand-role">{role}</span>
          </span>
        </Link>

        <nav
          className={`navigation ${open ? 'is-open' : ''}`}
          id="main-navigation"
          aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}
        >
          {links.map(key => {
            const label = key === 'about' ? (locale === 'fr' ? 'À propos' : 'About') : labels[key]
            const isActive = isHome && activeSection === key
            return (
              <a
                key={key}
                href={isHome ? `#${key}` : `/${locale}/#${key}`}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                onClick={e => handleNavClick(e, key)}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <div className="header-socials">
            {github && (
              <a className="icon-button" href={github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <Icon name="github" size={20} />
              </a>
            )}
            {linkedin && (
              <a className="icon-button" href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Icon name="linkedin" size={20} />
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
