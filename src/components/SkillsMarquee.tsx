'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/content'
import { TechnologyIcon } from './TechnologyIcon'
import { Icon } from './Icon'

const row1 = [
  'AWS', 'Kubernetes', 'Docker', 'Ansible', 'Terraform', 'GitLab CI/CD',
  'Prometheus', 'Grafana', 'OpenStack', 'Linux', 'Red Hat', 'Jenkins', 'GitHub Actions', 'Argo CD'
]

const row2 = [
  'Python', 'NestJS', 'Next.js', 'Spring Boot', 'PostgreSQL', 'Redis',
  'Helm', 'SonarQube', 'Trivy', 'HashiCorp Vault', 'Ubuntu', 'Bash', 'C++', 'Java'
]

export function SkillsMarquee({ locale }: { locale: Locale }) {
  const fr = locale === 'fr'
  const list1 = [...row1, ...row1]
  const list2 = [...row2, ...row2]

  return (
    <section className="section skills-marquee-section" id="skills">
      <div className="container">
        <div className="section-heading text-center">
          <p className="eyebrow-badge">{fr ? 'STACK & OUTILS' : 'FEATURED TECHNOLOGIES'}</p>
          <h2>{fr ? 'Technologies & Outils' : 'Featured Technologies'}</h2>
          <p className="skills-subtitle">
            {fr
              ? 'L’ensemble des technologies que je pratique à travers le cloud, les conteneurs, l’IaC, les systèmes et au-delà.'
              : 'The full stack I work with across cloud, containers, IaC, embedded, and beyond.'}
          </p>
        </div>
      </div>

      <div className="marquee-wrapper" aria-label={fr ? 'Défilement des compétences' : 'Technologies marquee'}>
        <div className="marquee-track marquee-left">
          {list1.map((name, i) => (
            <div key={`r1-${i}`} className="marquee-item">
              <TechnologyIcon name={name} />
              <span className="marquee-label">{name}</span>
            </div>
          ))}
        </div>

        <div className="marquee-track marquee-right">
          {list2.map((name, i) => (
            <div key={`r2-${i}`} className="marquee-item">
              <TechnologyIcon name={name} />
              <span className="marquee-label">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center section-bottom">
        <Link className="all-skills-link" href={`/${locale}/skills/`}>
          {fr ? 'Voir toutes les compétences classées par domaine' : 'View all skills organized by category'}
          <Icon size={18} />
        </Link>
      </div>
    </section>
  )
}
