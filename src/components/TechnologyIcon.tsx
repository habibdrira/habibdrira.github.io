import Image from 'next/image'
import { Icon } from './Icon'

const logos: Record<string, string> = {
  aws: 'amazonwebservices', 'microsoft azure': 'azure', azure: 'azure',
  'oracle cloud': 'oracle', oci: 'oracle', openstack: 'openstack',
  docker: 'docker', 'docker compose': 'docker', kubernetes: 'kubernetes',
  openshift: 'redhatopenshift', helm: 'helm', 'gitlab ci/cd': 'gitlab', gitlab: 'gitlab',
  jenkins: 'jenkins', 'github actions': 'githubactions', 'argo cd': 'argocd',
  ansible: 'ansible', terraform: 'terraform', puppet: 'puppet',
  prometheus: 'prometheus', grafana: 'grafana', sonarqube: 'sonarqube',
  trivy: 'trivy', 'hashicorp vault': 'vault', vault: 'vault',
  nestjs: 'nestjs', 'next.js': 'nextjs', 'spring boot': 'spring',
  python: 'python', java: 'java', bash: 'bash', graphql: 'graphql',
  postgresql: 'postgresql', linux: 'linux', 'red hat': 'redhat', rhel: 'redhat',
  ubuntu: 'ubuntu', git: 'git',
  c: 'c', 'c++': 'cplusplus', matlab: 'matlab', sdl: 'sdl',
  html: 'html5', css: 'css3', javascript: 'javascript', php: 'php',
  angular: 'angular', 'android studio': 'androidstudio', laravel: 'laravel',
  mysql: 'mysql', 'oracle database': 'oracle', 'raspberry pi': 'raspberrypi',
  arduino: 'arduino', github: 'github', 'visual studio': 'visualstudio',
  figma: 'figma', jira: 'jira',
}

export function TechnologyIcon({ name }: { name: string }) {
  const normalized = name.trim().toLowerCase()
  const logo = logos[normalized]
  if (logo) return <Image className={`technology-icon${['amazonwebservices', 'helm', 'vault', 'bash', 'trivy', 'github'].includes(logo) ? ' technology-icon-contrast' : ''}`} src={`/icons/technologies/${logo}.svg`} alt="" aria-hidden="true" width={24} height={24} unoptimized />
  const network = ['tcp/ip', 'vlan', 'ospf', 'rs485', 'wiegand', 'réseaux (ccna niveau 3)', 'cisco packet tracer'].includes(normalized)
  const hardware = ['esp32', 'stm32', 'fpga', 'nodemcu esp8266', 'sql', 'pl/sql'].includes(normalized)
  return <span className="technology-icon technology-icon-fallback"><Icon name={network ? 'globe' : hardware ? 'server' : 'code'} size={21} /></span>
}
