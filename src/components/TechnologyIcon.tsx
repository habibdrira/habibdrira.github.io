import Image from 'next/image'
import { Icon } from './Icon'

const logos: Record<string, string> = {
  // Cloud & Infrastructure
  aws: 'amazonwebservices',
  'amazon web services': 'amazonwebservices',
  'microsoft azure': 'azure',
  azure: 'azure',
  'oracle cloud': 'oracle',
  'oracle cloud (oci)': 'oracle',
  oci: 'oracle',
  openstack: 'openstack',

  // Containers & Orchestration
  docker: 'docker',
  'docker compose': 'docker',
  kubernetes: 'kubernetes',
  k8s: 'kubernetes',
  helm: 'helm',
  openshift: 'redhatopenshift',
  'red hat openshift': 'redhatopenshift',

  // CI/CD & Automation
  'gitlab ci/cd': 'gitlab',
  gitlab: 'gitlab',
  jenkins: 'jenkins',
  'github actions': 'githubactions',
  ansible: 'ansible',
  terraform: 'terraform',
  'argo cd': 'argocd',
  'argo cd (gitops)': 'argocd',
  argocd: 'argocd',
  puppet: 'puppet',

  // Observability & Security
  prometheus: 'prometheus',
  grafana: 'grafana',
  sonarqube: 'sonarqube',
  trivy: 'trivy',
  'hashicorp vault': 'vault',
  vault: 'vault',

  // Systems & Networks
  linux: 'linux',
  'red hat': 'redhat',
  'linux (red hat rhcsa, ubuntu server)': 'redhat',
  'linux (red hat, ubuntu)': 'redhat',
  rhel: 'redhat',
  ubuntu: 'ubuntu',
  'cisco networking (ccna)': 'cisco',
  cisco: 'cisco',
  'cisco packet tracer': 'cisco',
  'réseaux & routage (ccna)': 'cisco',
  'réseaux (ccna niveau 3)': 'cisco',
  'protocoles tcp/ip, vlan, ospf': 'network',
  'tcp/ip, vlan, ospf': 'network',
  'tcp/ip': 'network',
  vlan: 'network',
  ospf: 'network',

  // Languages & Scripting
  python: 'python',
  bash: 'bash',
  java: 'java',
  c: 'c',
  'c++': 'cplusplus',
  'c / c++': 'cplusplus',
  javascript: 'javascript',
  'javascript / typescript': 'javascript',
  typescript: 'typescript',
  php: 'php',
  'sql & pl/sql': 'sql',
  'sql / pl-sql': 'sql',
  sql: 'sql',
  'pl/sql': 'sql',

  // Backend & APIs
  'spring boot': 'spring',
  spring: 'spring',
  nestjs: 'nestjs',
  laravel: 'laravel',
  rest: 'rest',
  'rest api': 'rest',
  'rest apis': 'rest',
  graphql: 'graphql',
  soap: 'soap',

  // Frontend & Mobile
  'next.js': 'nextjs',
  nextjs: 'nextjs',
  angular: 'angular',
  html: 'html5',
  html5: 'html5',
  'html5 & css3': 'html5',
  css: 'css3',
  css3: 'css3',
  'android studio': 'androidstudio',
  android: 'androidstudio',

  // Databases
  postgresql: 'postgresql',
  mysql: 'mysql',
  'oracle database': 'oracle',
  oracle: 'oracle',
  redis: 'redis',

  // Embedded & IoT & Electronics
  esp32: 'espressif',
  stm32: 'stmicroelectronics',
  arduino: 'arduino',
  'raspberry pi': 'raspberrypi',
  'nodemcu esp8266': 'espressif',
  fpga: 'fpga',
  'fpga & vhdl': 'fpga',
  'fpga (vhdl)': 'fpga',
  vhdl: 'fpga',
  matlab: 'matlab',
  proteus: 'electronic',
  'altium designer': 'altiumdesigner',
  'proteus & altium designer': 'altiumdesigner',
  quartus: 'electronic',
  rs485: 'serial',
  wiegand: 'serial',
  'rs485 & wiegand': 'serial',
  'protocoles rs485 & wiegand': 'serial',
  'liaisons rs485 & wiegand': 'serial',

  // Tools & Collaboration
  git: 'git',
  github: 'github',
  'visual studio': 'visualstudio',
  jira: 'jira',
  scrum: 'scrum',
  figma: 'figma',
  sdl: 'sdl',
}

export function TechnologyIcon({ name }: { name: string }) {
  const normalized = name.trim().toLowerCase()
  const logo = logos[normalized]

  if (logo) {
    const contrastIcons = ['amazonwebservices', 'helm', 'vault', 'bash', 'trivy', 'github']
    return (
      <Image
        className={`technology-icon${contrastIcons.includes(logo) ? ' technology-icon-contrast' : ''}`}
        src={`/icons/technologies/${logo}.svg`}
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
        unoptimized
      />
    )
  }

  const network = ['tcp/ip', 'vlan', 'ospf', 'rs485', 'wiegand', 'réseaux (ccna niveau 3)', 'cisco packet tracer'].some(k => normalized.includes(k))
  const hardware = ['esp32', 'stm32', 'fpga', 'nodemcu', 'sql', 'pl/sql'].some(k => normalized.includes(k))

  return (
    <span className="technology-icon technology-icon-fallback">
      <Icon name={network ? 'globe' : hardware ? 'server' : 'code'} size={21} />
    </span>
  )
}
