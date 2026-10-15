import Image from 'next/image'
import Link from 'next/link'
import type { CertificationData } from '@/lib/content'
import { getContent, words, type Locale } from '@/lib/content'
import { Icon } from './Icon'
import { HeroTerminal } from './HeroTerminal'
import { ProjectCard } from './ProjectCard'
import { SkillsMarquee } from './SkillsMarquee'

function Paragraphs({ text }: { text?: string | null }) {
  return text?.split('\n\n').filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)
}

function CertificationCard({ certification, locale }: { certification: CertificationData; locale: Locale }) {
  return (
    <article className="certification">
      <div className="certification-badge">
        {certification.badgeUrl ? (
          <Image src={certification.badgeUrl} alt={certification.title} width={180} height={160} unoptimized />
        ) : (
          <span className="cert-mark"><Icon name="check" size={34} /></span>
        )}
      </div>
      <h3>{certification.title}</h3>
      <p>{locale === 'fr' ? 'Délivrée par' : 'Issued by'} {certification.issuer}<span className="certification-year">{certification.year}</span></p>
      {certification.credential && (
        <a className="button button-secondary" href={certification.credential} target="_blank" rel="noreferrer">
          <Icon size={16} />{locale === 'fr' ? 'Voir la certification' : 'View credential'}
        </a>
      )}
    </article>
  )
}

function SectionHeading({ title }: { title: string }) {
  return <div className="section-heading"><h2>{title}</h2></div>
}

export function Portfolio({ locale }: { locale: Locale }) {
  const { profile, homepage, projects, experiences, education, certifications } = getContent(locale)
  const t = words[locale]
  const fr = locale === 'fr'
  const cv = profile.cvUrl
  const portrait = profile.portraitUrl
  const visibleProjects = projects.filter(project => project.featured).slice(0, 3)

  const terminalFrames = [
    { command: 'whoami', lines: [{ label: 'name', value: profile.name }, { label: 'role', value: profile.role }, { label: 'location', value: profile.location }] },
    { command: 'cat skills.json', lines: [{ label: 'cloud', value: 'AWS · Azure · OCI · OpenStack' }, { label: 'devops', value: 'K8s · Docker · Ansible · CI/CD' }, { label: 'backend', value: 'NestJS · Spring · Python · Go' }] },
    { command: 'ls ~/projects', lines: projects.slice(0, 3).map((project, index) => ({ label: String(index + 1).padStart(2, '0'), value: project.title || project.slug })) },
  ]

  const sectionMap: Record<string, React.ReactNode> = {
    about: (
      <section className="section about-section container" id="about">
        <SectionHeading title={fr ? 'À propos de moi' : 'About me'} />
        <div className="about-grid">
          <div className="about-copy">
            <Paragraphs text={profile.about} />
            <div className="about-links">
              {profile.linkedin && <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<Icon size={16} /></a>}
              {profile.github && <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub<Icon size={16} /></a>}
            </div>
          </div>
          <aside className="about-profile">
            <div className="about-profile-heading">
              {portrait ? (
                <Image className="about-portrait" src={portrait} alt={profile.name} width={140} height={140} unoptimized priority />
              ) : (
                <span className="profile-icon"><Icon name="code" size={26} /></span>
              )}
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
              </div>
            </div>
            <div className="profile-detail"><Icon name="pin" size={19} /><span>{profile.location}</span></div>
            {!!profile.languages?.length && (
              <div className="languages">
                <h4>{t.languages}</h4>
                {profile.languages.map((language, i) => (
                  <div key={i}><span>{language.name}</span><span>{language.level}</span></div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </section>
    ),
    projects: (
      <section className="section container" id="projects">
        <SectionHeading title={fr ? 'Mes projets' : 'My projects'} />
        <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} locale={locale} />)}</div>
        {projects.length > 0 && (
          <div className="section-bottom">
            <Link className="all-projects-link" href={`/${locale}/projects/`}>
              {fr ? 'Voir tous les projets' : 'See all projects'}<span className="count-badge">{projects.length}</span><Icon size={20} />
            </Link>
          </div>
        )}
        {!visibleProjects.length && <p className="empty-state">{t.empty}</p>}
      </section>
    ),
    skills: <SkillsMarquee locale={locale} />,
    experience: (
      <section className="section container" id="experience">
        <SectionHeading title={fr ? 'Mes expériences' : 'My experience'} />
        <div className="experience-list">
          {experiences.map(experience => (
            <article className="experience-row" key={experience.id}>
              <div className="experience-date"><span className="timeline-dot" />{experience.period}</div>
              <div className="experience-role"><h3>{experience.company}</h3><p>{experience.title}</p></div>
              <div className="experience-copy">
                <p>{experience.description}</p>
                <ul>{experience.highlights?.map((point, i) => <li key={i}>{point.text}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
    certifications: (
      <section className="section container" id="certifications">
        <SectionHeading title="Certifications" />
        <div className="certifications-grid">
          {certifications.map(cert => <CertificationCard key={cert.id} certification={cert} locale={locale} />)}
        </div>
      </section>
    ),
    contact: (
      <section className="section contact-section container" id="contact">
        <SectionHeading title="Contact" />
        {profile.contactIntro && <p className="contact-intro">{profile.contactIntro}</p>}
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="card-icon"><Icon name="mail" size={24} /></span>
            <span><strong>Email</strong><span>{profile.email}</span></span>
            <Icon className="contact-arrow" size={19} />
          </a>
          {profile.phone && (
            <a className="contact-card" href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
              <span className="card-icon"><Icon name="phone" size={24} /></span>
              <span><strong>{fr ? 'Téléphone' : 'Phone'}</strong><span>{profile.phone}</span></span>
              <Icon className="contact-arrow" size={19} />
            </a>
          )}
          {profile.linkedin && (
            <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="card-icon"><Icon name="linkedin" size={24} /></span>
              <span><strong>LinkedIn</strong><span>{fr ? 'Profil professionnel' : 'Professional profile'}</span></span>
              <Icon className="contact-arrow" size={19} />
            </a>
          )}
          {profile.github && (
            <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
              <span className="card-icon"><Icon name="code" size={24} /></span>
              <span><strong>GitHub</strong><span>{fr ? 'Code et projets' : 'Code and projects'}</span></span>
              <Icon className="contact-arrow" size={19} />
            </a>
          )}
        </div>
      </section>
    ),
    education: (
      <section className="section container" id="education">
        <SectionHeading title={fr ? 'Formation' : 'Education'} />
        <div className="education-list">
          {education.map(item => (
            <article key={item.id}>
              <span className="education-period">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.school}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
  }

  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-terminal-wrapper">
          <HeroTerminal frames={terminalFrames} locale={locale} />
        </div>
        <div className="hero-copy">
          <p className="hero-greeting">{fr ? 'Bonjour, je suis' : 'Hi, I’m'}</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-details">
            <span><Icon name="pin" size={18} />{profile.location}</span>
            {profile.availability && <span><span className="live-dot" />{profile.availability}</span>}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {fr ? 'Me contacter' : 'Contact me'}<Icon name="mail" size={18} />
            </a>
            {cv && (
              <a className="button button-secondary" href={cv} target="_blank" rel="noreferrer">
                {fr ? 'Télécharger mon CV' : 'Download my CV'}<Icon name="download" size={18} />
              </a>
            )}
          </div>
        </div>
      </section>
      {homepage.sections?.filter(section => section.visible).map(section => (
        <div key={section.section}>{sectionMap[section.section]}</div>
      ))}
    </main>
  )
}
