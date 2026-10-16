import type { Locale, ProfileData, ProjectData, SkillGroupData, ExperienceData, EducationData, CertificationData, HomepageSection } from './types'

export interface LocaleContent {
  profile: ProfileData
  projects: ProjectData[]
  skills: SkillGroupData[]
  experiences: ExperienceData[]
  education: EducationData[]
  certifications: CertificationData[]
  homepage: {
    sections: HomepageSection[]
  }
}

export const contentData: Record<Locale, LocaleContent> = {
  "fr": {
    "profile": {
      "name": "Habib Drira",
      "email": "habibdrira6@gmail.com",
      "phone": "+216 26 362 348",
      "github": "https://github.com/Habibdrira",
      "linkedin": "https://www.linkedin.com/in/habibdrira/",
      "role": "Ingénieur Cloud & DevOps",
      "headline": "Ingénieur Cloud & DevOps",
      "intro": "Ingénieur en informatique spécialisé en Cloud Computing et DevOps, certifié RHCSA. Mon expérience porte sur l’administration Linux, les pipelines CI/CD, Docker, Kubernetes et OpenStack.",
      "about": "Ingénieur en informatique spécialisé en Cloud Computing et DevOps, je travaille à la rencontre du développement et de l’infrastructure. Linux, les conteneurs et l’automatisation sont au cœur de ma pratique.\n\nMon parcours m’a amené à développer une plateforme interne de déploiement, orchestrer des microservices sur Kubernetes et mettre en place un cloud privé OpenStack. J’aime comprendre un système de bout en bout, puis rendre son fonctionnement plus clair.",
      "location": "Tunis, Tunisie",
      "availability": "",
      "contactIntro": "Pour une opportunité professionnelle ou une question sur mes projets, contactez-moi par email, téléphone ou sur LinkedIn.",
      "languages": [
        {
          "name": "Arabe",
          "level": "Langue maternelle"
        },
        {
          "name": "Français",
          "level": "Courant"
        },
        {
          "name": "Anglais",
          "level": "Courant"
        }
      ],
      "seoDescription": "Habib Drira, ingénieur Cloud & DevOps à Tunis. Découvrez mes projets en automatisation, CI/CD, Docker, Kubernetes et infrastructure cloud.",
      "cvUrl": "/cv.pdf",
      "portraitUrl": "/portrait.png"
    },
    "projects": [
      {
        "id": "project-plateforme-devops",
        "slug": "plateforme-devops",
        "title": "Plateforme CI/CD et déploiement automatisé",
        "category": "Platform Engineering · Vayetek",
        "year": "2026",
        "description": "Développée lors de mon projet de fin d’études chez Vayetek, de février à juin 2026, cette plateforme interne centralise la gestion des projets, des pipelines CI/CD et des déploiements. Elle associe un backend NestJS, une interface Next.js et PostgreSQL pour suivre les applications et leurs environnements.\n\nL’intégration de GitLab CI/CD et des webhooks GitLab/GitHub permet de piloter les tâches de déploiement, orchestrées avec Redis et BullMQ. Ansible automatise la préparation des VPS, les accès SSH et l’installation des outils, tandis que la Docker API permet de gérer les applications avec Docker et Docker Compose depuis la plateforme.",
        "technologies": [
          {
            "name": "NestJS"
          },
          {
            "name": "Next.js"
          },
          {
            "name": "Docker"
          },
          {
            "name": "GitLab CI/CD"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "PostgreSQL"
          },
          {
            "name": "Redis"
          },
          {
            "name": "BullMQ"
          }
        ],
        "visual": "pipeline",
        "website": "https://deployarc.tech/",
        "featured": true,
        "order": 1
      },
      {
        "id": "project-crm-kubernetes",
        "slug": "crm-kubernetes",
        "title": "Déploiement d’un CRM sur Kubernetes",
        "category": "Kubernetes · Ningen",
        "year": "2025",
        "description": "Réalisé pendant mon stage chez Ningen en août et septembre 2025, ce projet porte sur le déploiement d’une plateforme CRM en microservices sur un cluster Kubernetes local. Les services conteneurisés avec Docker sont orchestrés pour assurer leur découverte, leur mise à l’échelle et le suivi de leur état.\n\nAnsible automatise la configuration de l’environnement et Jenkins prend en charge le build, les tests et le déploiement continu. Prometheus et Grafana complètent l’ensemble pour surveiller les services et suivre le fonctionnement de la plateforme.",
        "technologies": [
          {
            "name": "Kubernetes"
          },
          {
            "name": "Docker"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "Prometheus"
          },
          {
            "name": "Grafana"
          }
        ],
        "visual": "kubernetes",
        "repository": "https://github.com/Habibdrira/CRM-system-go-microservices",
        "featured": true,
        "order": 2
      },
      {
        "id": "project-docker-control-panel",
        "slug": "docker-control-panel",
        "title": "Plateforme SaaS de gestion Docker",
        "category": "Conteneurisation · SaaS",
        "year": "Lab",
        "description": "Cette plateforme SaaS, développée en microservices Python et Flask, permet d’administrer des conteneurs Docker depuis une API. Le Docker SDK prend en charge leur création, leur démarrage, leur arrêt et leur suppression.\n\nChaque utilisateur dispose d’un environnement conteneurisé isolé. L’ensemble des services est orchestré et déployé avec Docker Compose sur Linux, afin de réunir le provisionnement des environnements et la gestion de leur cycle de vie dans une même application.",
        "technologies": [
          {
            "name": "Python"
          },
          {
            "name": "Flask"
          },
          {
            "name": "Docker SDK"
          },
          {
            "name": "Docker Compose"
          },
          {
            "name": "Linux"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/Habibdrira/saas-control-panel",
        "featured": true,
        "order": 3
      },
      {
        "id": "project-cloud-prive-openstack",
        "slug": "cloud-prive-openstack",
        "title": "Infrastructure cloud privée OpenStack",
        "category": "Infrastructure · OpenStack",
        "year": "Lab",
        "description": "Déploiement d’une infrastructure cloud privée OpenStack avec DevStack sur Ubuntu Server. La configuration couvre Keystone pour l’identité, Nova pour le calcul, Neutron pour le réseau, Glance pour les images et Cinder pour le stockage.\n\nLe projet comprend la création des réseaux, sous-réseaux, routeurs, groupes de sécurité et volumes, puis le déploiement de machines virtuelles réparties entre plusieurs projets. Des automatisations avec Terraform et Ansible complètent la gestion de l’infrastructure selon une approche Infrastructure as Code.",
        "technologies": [
          {
            "name": "OpenStack"
          },
          {
            "name": "Ubuntu Server"
          },
          {
            "name": "DevStack"
          },
          {
            "name": "Neutron"
          },
          {
            "name": "Nova"
          },
          {
            "name": "Cinder"
          }
        ],
        "visual": "cloud",
        "featured": true,
        "order": 4
      },
      {
        "id": "project-fleetman-kubernetes",
        "slug": "fleetman-kubernetes",
        "title": "Fleetman — gestion de flotte sur Kubernetes",
        "category": "Microservices · Kubernetes",
        "year": "",
        "description": "Déploiement de Fleetman, une application de gestion de flotte organisée en microservices, sur un cluster Kubernetes avec Minikube. Les services sont conteneurisés avec Docker et déployés dans cet environnement local.\n\nUn pipeline CI/CD Jenkins automatise la livraison de l’application. SonarQube est intégré au processus pour analyser la qualité du code avant son déploiement.",
        "technologies": [
          {
            "name": "Docker"
          },
          {
            "name": "Kubernetes"
          },
          {
            "name": "Minikube"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "SonarQube"
          }
        ],
        "visual": "kubernetes",
        "repository": "https://github.com/Habibdrira/fleetman-k8s",
        "featured": true,
        "order": 5
      },
      {
        "id": "project-microservices-corebanking",
        "slug": "microservices-corebanking",
        "title": "Plateforme bancaire en microservices",
        "category": "Backend · Spring Cloud",
        "year": "",
        "description": "Développement d’une plateforme Core Banking en architecture microservices avec Spring Boot et Spring Cloud. Eureka assure la découverte des services et une API Gateway centralise les accès aux différentes API.\n\nLes services sont exposés via REST, GraphQL et SOAP. Le projet comprend également la documentation avec Swagger et les tests des API, pour décrire et vérifier les échanges entre les composants de la plateforme.",
        "technologies": [
          {
            "name": "Spring Boot"
          },
          {
            "name": "Spring Cloud"
          },
          {
            "name": "Eureka"
          },
          {
            "name": "API Gateway"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          },
          {
            "name": "SOAP"
          },
          {
            "name": "Swagger"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/Habibdrira/microservices-corebanking",
        "featured": true,
        "order": 6
      },
      {
        "id": "project-gestion-employes-laravel",
        "slug": "gestion-employes-laravel",
        "title": "Gestion des employés avec Laravel",
        "category": "Développement web · Laravel",
        "year": "",
        "description": "Application web Laravel et MySQL pour la gestion des employés, des absences, des congés, des primes et des performances. Des interfaces dédiées aux administrateurs et aux employés permettent de consulter et de mettre à jour les informations, avec validation des données saisies. Les vues sont réalisées avec Blade. Le projet a été mené en équipe selon la méthode Scrum, avec Jira pour le suivi du travail.",
        "technologies": [
          {
            "name": "PHP"
          },
          {
            "name": "Laravel"
          },
          {
            "name": "Blade"
          },
          {
            "name": "MySQL"
          },
          {
            "name": "Jira"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/Habibdrira/Gestion-Employee-Laravel",
        "featured": true,
        "order": 7
      },
      {
        "id": "project-agriculture-precision",
        "slug": "agriculture-precision",
        "title": "Plateforme agricole de précision",
        "category": "Backend · Agriculture",
        "year": "",
        "description": "Développement d’une API Spring Boot pour une plateforme d’agriculture de précision. Les données agricoles sont accessibles à travers des services SOAP, REST et GraphQL, réunis dans une architecture flexible pour leur gestion et leur exploitation.",
        "technologies": [
          {
            "name": "Spring Boot"
          },
          {
            "name": "SOAP"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Plateforme-Agricole-de-Precision",
        "featured": false,
        "order": 8
      },
      {
        "id": "project-plateforme-elearning",
        "slug": "plateforme-elearning",
        "title": "Plateforme e-learning",
        "category": "Développement web · Éducation",
        "year": "",
        "description": "Conception et développement du frontend et du backend d’un site éducatif. La plateforme distingue les rôles administrateur, formateur et étudiant et permet la publication de cours. Les interfaces utilisent HTML, CSS et JavaScript, avec un backend PHP et une base SQL. Le développement est réalisé en local avec XAMPP et le code est suivi avec Git et GitHub.",
        "technologies": [
          {
            "name": "HTML"
          },
          {
            "name": "CSS"
          },
          {
            "name": "JavaScript"
          },
          {
            "name": "PHP"
          },
          {
            "name": "SQL"
          },
          {
            "name": "Git"
          },
          {
            "name": "XAMPP"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/E-learning-plateforme",
        "featured": false,
        "order": 9
      },
      {
        "id": "project-pacman-c-sdl",
        "slug": "pacman-c-sdl",
        "title": "Jeu Pac-Man en C",
        "category": "Programmation · Jeu vidéo",
        "year": "",
        "description": "Conception d’un jeu Pac-Man en langage C avec la bibliothèque SDL. Le projet comprend la logique du jeu, la gestion des niveaux et les interactions avec le joueur, en reliant le fonctionnement du jeu à son interface graphique.",
        "technologies": [
          {
            "name": "C"
          },
          {
            "name": "SDL"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/pacman-sdl2",
        "featured": false,
        "order": 10
      },
      {
        "id": "project-medina-tunis-ux-ui",
        "slug": "medina-tunis-ux-ui",
        "title": "Parcours gamifié dans la Médina de Tunis",
        "category": "UX/UI · Patrimoine",
        "year": "",
        "description": "Création d’un parcours interactif reliant les monuments de la Médina de Tunis. Les maquettes et le prototype réalisés dans Figma explorent une expérience de découverte du patrimoine fondée sur la gamification et l’interaction avec les lieux du parcours.",
        "technologies": [
          {
            "name": "Figma"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/Exploration-Gamifie-UX-UI",
        "featured": false,
        "order": 11
      },
      {
        "id": "project-controle-acces-easytek",
        "slug": "controle-acces-easytek",
        "title": "Panneau de contrôle d’accès physique",
        "category": "Systèmes embarqués · Easytek",
        "year": "2023",
        "description": "Conception et réalisation, pendant mon stage de fin d’études chez Easytek, d’un panneau de contrôle d’accès pour un maximum de quatre portes à contact sec. Les liaisons RS485 et Wiegand assurent la communication avec les lecteurs. Une connexion TCP/IP et une API REST permettent l’intégration du panneau au logiciel de gestion des accès.",
        "technologies": [
          {
            "name": "RS485"
          },
          {
            "name": "Wiegand"
          },
          {
            "name": "TCP/IP"
          },
          {
            "name": "REST"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Panneau-de-controle-dacces",
        "featured": false,
        "order": 12
      },
      {
        "id": "project-site-concours-springboot-angular",
        "slug": "site-concours-springboot-angular",
        "title": "Plateforme de gestion de concours",
        "category": "Full Stack · Spring Boot & Angular",
        "year": "2023",
        "description": "Application web complète dédiée à l’organisation et à la gestion de concours. Architecture découplée associant un backend en Java Spring Boot exposant des API REST, une base de données relationnelle MySQL, et une interface utilisateur moderne développée avec Angular.",
        "technologies": [
          { "name": "Java" },
          { "name": "Spring Boot" },
          { "name": "Angular" },
          { "name": "TypeScript" },
          { "name": "MySQL" },
          { "name": "REST" },
          { "name": "Git" }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/Site-Concours-Springboot-Angular",
        "featured": false,
        "order": 13
      },
      {
        "id": "project-chatbot-arabe",
        "slug": "chatbot-arabe",
        "title": "Chatbot intelligent en langue arabe",
        "category": "Intelligence Artificielle · NLP",
        "year": "2023",
        "description": "Conception et entraînement d’un agent conversationnel en langue arabe basé sur le traitement automatique du langage naturel (NLP). Le modèle s'appuie sur Python, NLTK pour le prétraitement linguistique, Keras et TensorFlow pour l'entraînement d'un réseau neuronal de classification d'intentions, intégré à une interface graphique interactive.",
        "technologies": [
          { "name": "Python" },
          { "name": "TensorFlow" },
          { "name": "Keras" },
          { "name": "NLTK" },
          { "name": "NLP" },
          { "name": "Git" }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Chatbot-en-arabe",
        "featured": false,
        "order": 14
      }
    ],
    "skills": [
      {
        "id": "skill-1",
        "title": "Cloud & infrastructure",
        "icon": "cloud",
        "items": [
          {
            "name": "AWS"
          },
          {
            "name": "Microsoft Azure"
          },
          {
            "name": "Oracle Cloud"
          },
          {
            "name": "OpenStack"
          }
        ],
        "order": 1
      },
      {
        "id": "skill-2",
        "title": "Conteneurs & orchestration",
        "icon": "layers",
        "items": [
          {
            "name": "Docker"
          },
          {
            "name": "Docker Compose"
          },
          {
            "name": "Kubernetes"
          },
          {
            "name": "Helm"
          },
          {
            "name": "OpenShift"
          }
        ],
        "order": 2
      },
      {
        "id": "skill-3",
        "title": "CI/CD & automatisation",
        "icon": "workflow",
        "items": [
          {
            "name": "GitLab CI/CD"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "Terraform"
          },
          {
            "name": "GitHub Actions"
          },
          {
            "name": "Argo CD"
          },
          {
            "name": "Puppet"
          }
        ],
        "order": 3
      },
      {
        "id": "skill-4",
        "title": "Systèmes & réseaux",
        "icon": "server",
        "items": [
          {
            "name": "Linux"
          },
          {
            "name": "Red Hat"
          },
          {
            "name": "Ubuntu"
          },
          {
            "name": "TCP/IP"
          },
          {
            "name": "VLAN"
          },
          {
            "name": "OSPF"
          },
          {
            "name": "Cisco Packet Tracer"
          },
          {
            "name": "Réseaux (CCNA niveau 3)"
          }
        ],
        "order": 4
      },
      {
        "id": "skill-5",
        "title": "Observabilité, qualité & sécurité",
        "icon": "activity",
        "items": [
          {
            "name": "Prometheus"
          },
          {
            "name": "Grafana"
          },
          {
            "name": "SonarQube"
          },
          {
            "name": "Trivy"
          },
          {
            "name": "HashiCorp Vault"
          }
        ],
        "order": 5
      },
      {
        "id": "skill-6",
        "title": "Langages & scripting",
        "icon": "code",
        "items": [
          {
            "name": "Python"
          },
          {
            "name": "Bash"
          },
          {
            "name": "Java"
          },
          {
            "name": "C"
          },
          {
            "name": "C++"
          },
          {
            "name": "JavaScript"
          },
          {
            "name": "PHP"
          }
        ],
        "order": 6
      },
      {
        "id": "skill-7",
        "title": "Backend & API",
        "icon": "code",
        "items": [
          {
            "name": "NestJS"
          },
          {
            "name": "Spring Boot"
          },
          {
            "name": "Laravel"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          },
          {
            "name": "SOAP"
          }
        ],
        "order": 7
      },
      {
        "id": "skill-8",
        "title": "Interfaces web & mobile",
        "icon": "code",
        "items": [
          {
            "name": "HTML"
          },
          {
            "name": "CSS"
          },
          {
            "name": "Next.js"
          },
          {
            "name": "Angular"
          },
          {
            "name": "Android Studio"
          }
        ],
        "order": 8
      },
      {
        "id": "skill-9",
        "title": "Bases de données",
        "icon": "server",
        "items": [
          {
            "name": "PostgreSQL"
          },
          {
            "name": "MySQL"
          },
          {
            "name": "Oracle Database"
          },
          {
            "name": "SQL"
          },
          {
            "name": "PL/SQL"
          }
        ],
        "order": 9
      },
      {
        "id": "skill-10",
        "title": "Systèmes embarqués & IoT",
        "icon": "server",
        "items": [
          {
            "name": "ESP32"
          },
          {
            "name": "STM32"
          },
          {
            "name": "Raspberry Pi"
          },
          {
            "name": "Arduino"
          },
          {
            "name": "FPGA"
          },
          {
            "name": "NodeMCU ESP8266"
          },
          {
            "name": "RS485"
          },
          {
            "name": "Wiegand"
          }
        ],
        "order": 10
      },
      {
        "id": "skill-11",
        "title": "Électronique & simulation",
        "icon": "activity",
        "items": [
          {
            "name": "VHDL"
          },
          {
            "name": "MATLAB"
          },
          {
            "name": "Quartus"
          },
          {
            "name": "Proteus"
          },
          {
            "name": "Altium Designer"
          }
        ],
        "order": 11
      },
      {
        "id": "skill-12",
        "title": "Outils de développement",
        "icon": "code",
        "items": [
          {
            "name": "Git"
          },
          {
            "name": "GitHub"
          },
          {
            "name": "GitLab"
          },
          {
            "name": "Visual Studio"
          },
          {
            "name": "XAMPP"
          },
          {
            "name": "SDL"
          }
        ],
        "order": 12
      },
      {
        "id": "skill-13",
        "title": "Conception & collaboration",
        "icon": "workflow",
        "items": [
          {
            "name": "Figma"
          },
          {
            "name": "Scrum"
          },
          {
            "name": "Jira"
          }
        ],
        "order": 13
      }
    ],
    "experiences": [
      {
        "id": "exp-1",
        "company": "Vayetek",
        "title": "Stage de fin d’études · Cloud & DevOps",
        "period": "Fév. — Juin 2026",
        "description": "Conception d’une plateforme interne de CI/CD et de déploiement automatisé.",
        "highlights": [
          {
            "text": "Backend NestJS, frontend Next.js et intégration GitLab CI/CD."
          },
          {
            "text": "Automatisation des VPS avec Ansible et gestion des applications Docker."
          }
        ],
        "order": 1
      },
      {
        "id": "exp-2",
        "company": "Ningen",
        "title": "Stage d’été · DevOps",
        "period": "Août — Sept. 2025",
        "description": "Déploiement d’un CRM microservices sur Kubernetes.",
        "highlights": [
          {
            "text": "Pipeline Jenkins pour le build, les tests et le déploiement."
          },
          {
            "text": "Supervision avec Prometheus et Grafana."
          }
        ],
        "order": 2
      },
      {
        "id": "exp-3",
        "company": "Centre National de l’Informatique",
        "title": "Stage d’été · Développement backend",
        "period": "Août — Sept. 2024",
        "description": "Développement d’un portail de gestion des concours et candidatures.",
        "highlights": [
          {
            "text": "Backend Spring Boot et base de données PostgreSQL."
          },
          {
            "text": "Gestion des candidatures et sécurisation des données."
          }
        ],
        "order": 3
      },
      {
        "id": "exp-4",
        "company": "Easytek",
        "title": "Stage de fin d’études · Systèmes embarqués",
        "period": "Fév. — Juin 2023",
        "description": "Conception et développement d’un panneau de contrôle d’accès physique pour quatre portes.",
        "highlights": [
          {
            "text": "Communication avec les lecteurs via RS485 et Wiegand."
          },
          {
            "text": "Intégration au logiciel de gestion par TCP/IP et API REST."
          }
        ],
        "order": 4
      }
    ],
    "education": [
      {
        "id": "edu-1",
        "school": "iTeam University",
        "title": "Cycle d’ingénieur en informatique",
        "period": "2023 — 2026",
        "description": "Cloud Computing & Virtualisation · Tunis",
        "order": 1
      },
      {
        "id": "edu-2",
        "school": "Faculté des Sciences de Tunis",
        "title": "Licence en ingénierie des systèmes informatiques",
        "period": "2020 — 2023",
        "description": "IoT & Systèmes embarqués · Tunis",
        "order": 2
      }
    ],
    "certifications": [
      {
        "id": "cert-1",
        "title": "Red Hat Certified System Administrator (RHCSA)",
        "issuer": "Red Hat",
        "year": "2026",
        "order": 1,
        "credential": "https://www.credly.com/badges/97e1b361-f35d-4d63-9838-01a6332f01b7",
        "badgeUrl": "/certifications/redhat-rhcsa.png"
      },
      {
        "id": "cert-2",
        "title": "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
        "issuer": "Oracle",
        "year": "2025",
        "order": 2,
        "credential": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=843C2FE400ACA39BD8194C76CFED7637F8471AA8D1AFAC6B31F207CFF1AAF0AA",
        "badgeUrl": "/certifications/oracle-architect-2025.png"
      },
      {
        "id": "cert-3",
        "title": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        "issuer": "Oracle",
        "year": "2025",
        "order": 3,
        "credential": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6A5BD117D27CBC3DA27DA598CB656735FE4289B1418798F9E968583072CE8863",
        "badgeUrl": "/certifications/oracle-foundations-2025.png"
      }
    ],
    "homepage": {
      "sections": [
        {
          "section": "about",
          "visible": true
        },
        {
          "section": "projects",
          "visible": true
        },
        {
          "section": "skills",
          "visible": true
        },
        {
          "section": "certifications",
          "visible": true
        },
        {
          "section": "experience",
          "visible": true
        },
        {
          "section": "education",
          "visible": true
        },
        {
          "section": "contact",
          "visible": true
        }
      ]
    }
  },
  "en": {
    "profile": {
      "name": "Habib Drira",
      "email": "habibdrira6@gmail.com",
      "phone": "+216 26 362 348",
      "github": "https://github.com/Habibdrira",
      "linkedin": "https://www.linkedin.com/in/habibdrira/",
      "role": "Cloud & DevOps Engineer",
      "headline": "Cloud & DevOps Engineer",
      "intro": "Computer engineer specialising in Cloud Computing and DevOps, with an RHCSA certification. My experience covers Linux administration, CI/CD pipelines, Docker, Kubernetes and OpenStack.",
      "about": "I am a computer engineer specializing in Cloud Computing and DevOps, working at the intersection of software and infrastructure. Linux, containers and automation are at the heart of my practice.\n\nMy work includes an internal deployment platform, Kubernetes microservices and a private OpenStack cloud. I enjoy understanding a system end to end, then making it easier to operate.",
      "location": "Tunis, Tunisia",
      "availability": "",
      "contactIntro": "For a professional opportunity or a question about my projects, get in touch by email, phone or LinkedIn.",
      "languages": [
        {
          "name": "Arabic",
          "level": "Native"
        },
        {
          "name": "French",
          "level": "Fluent"
        },
        {
          "name": "English",
          "level": "Fluent"
        }
      ],
      "seoDescription": "Habib Drira, Cloud & DevOps engineer in Tunis. Explore my work in automation, CI/CD, Docker, Kubernetes and cloud infrastructure.",
      "cvUrl": "/cv.pdf",
      "portraitUrl": "/portrait.png"
    },
    "projects": [
      {
        "id": "project-plateforme-devops",
        "slug": "plateforme-devops",
        "title": "CI/CD and automated deployment platform",
        "category": "Platform Engineering · Vayetek",
        "year": "2026",
        "description": "Developed during my final-year internship at Vayetek, from February to June 2026, this internal platform centralises projects, CI/CD pipelines and deployments. A NestJS backend, a Next.js interface and PostgreSQL bring application and environment tracking into one place.\n\nGitLab CI/CD and GitLab/GitHub webhooks trigger deployment tasks orchestrated with Redis and BullMQ. Ansible automates VPS preparation, SSH access and tool installation, while the Docker API manages applications through Docker and Docker Compose.",
        "technologies": [
          {
            "name": "NestJS"
          },
          {
            "name": "Next.js"
          },
          {
            "name": "Docker"
          },
          {
            "name": "GitLab CI/CD"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "PostgreSQL"
          },
          {
            "name": "Redis"
          },
          {
            "name": "BullMQ"
          }
        ],
        "visual": "pipeline",
        "website": "https://deployarc.tech/",
        "featured": true,
        "order": 1
      },
      {
        "id": "project-crm-kubernetes",
        "slug": "crm-kubernetes",
        "title": "CRM deployment on Kubernetes",
        "category": "Kubernetes · Ningen",
        "year": "2025",
        "description": "Built during my internship at Ningen in August and September 2025, this project deploys a microservices CRM platform on a local Kubernetes cluster. Docker containers are orchestrated with service discovery, scaling and health monitoring.\n\nAnsible automates environment configuration, while Jenkins handles build, test and continuous deployment pipelines. Prometheus and Grafana provide monitoring and visibility into the running services.",
        "technologies": [
          {
            "name": "Kubernetes"
          },
          {
            "name": "Docker"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "Prometheus"
          },
          {
            "name": "Grafana"
          }
        ],
        "visual": "kubernetes",
        "repository": "https://github.com/Habibdrira/CRM-system-go-microservices",
        "featured": true,
        "order": 2
      },
      {
        "id": "project-docker-control-panel",
        "slug": "docker-control-panel",
        "title": "SaaS Docker management platform",
        "category": "Containers · SaaS",
        "year": "Lab",
        "description": "This SaaS platform uses Python and Flask microservices to administer Docker containers through an API. The Docker SDK handles container creation, start, stop and deletion.\n\nEach user receives an isolated container environment. Docker Compose orchestrates and deploys the services on Linux, bringing environment provisioning and lifecycle management together in one application.",
        "technologies": [
          {
            "name": "Python"
          },
          {
            "name": "Flask"
          },
          {
            "name": "Docker SDK"
          },
          {
            "name": "Docker Compose"
          },
          {
            "name": "Linux"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/Habibdrira/saas-control-panel",
        "featured": true,
        "order": 3
      },
      {
        "id": "project-cloud-prive-openstack",
        "slug": "cloud-prive-openstack",
        "title": "Private OpenStack cloud infrastructure",
        "category": "Infrastructure · OpenStack",
        "year": "Lab",
        "description": "Deployment of a private OpenStack cloud using DevStack on Ubuntu Server. The configuration covers Keystone for identity, Nova for compute, Neutron for networking, Glance for images and Cinder for storage.\n\nThe project includes networks, subnets, routers, security groups and volumes, followed by virtual machine deployment across multiple projects. Terraform and Ansible automation complement infrastructure management using an Infrastructure as Code approach.",
        "technologies": [
          {
            "name": "OpenStack"
          },
          {
            "name": "Ubuntu Server"
          },
          {
            "name": "DevStack"
          },
          {
            "name": "Neutron"
          },
          {
            "name": "Nova"
          },
          {
            "name": "Cinder"
          }
        ],
        "visual": "cloud",
        "featured": true,
        "order": 4
      },
      {
        "id": "project-fleetman-kubernetes",
        "slug": "fleetman-kubernetes",
        "title": "Fleetman — fleet management on Kubernetes",
        "category": "Microservices · Kubernetes",
        "year": "",
        "description": "Deployment of Fleetman, a fleet management application built with microservices, on a Kubernetes cluster using Minikube. Its services are containerised with Docker and deployed in this local environment.\n\nA Jenkins CI/CD pipeline automates application delivery. SonarQube is integrated into the workflow to analyse code quality before deployment.",
        "technologies": [
          {
            "name": "Docker"
          },
          {
            "name": "Kubernetes"
          },
          {
            "name": "Minikube"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "SonarQube"
          }
        ],
        "visual": "kubernetes",
        "repository": "https://github.com/Habibdrira/fleetman-k8s",
        "featured": true,
        "order": 5
      },
      {
        "id": "project-microservices-corebanking",
        "slug": "microservices-corebanking",
        "title": "Core banking microservices platform",
        "category": "Backend · Spring Cloud",
        "year": "",
        "description": "Development of a Core Banking platform with a microservices architecture using Spring Boot and Spring Cloud. Eureka provides service discovery, while an API Gateway centralises access to the APIs.\n\nServices are exposed through REST, GraphQL and SOAP. The project also includes Swagger documentation and API testing to describe and verify communication between platform components.",
        "technologies": [
          {
            "name": "Spring Boot"
          },
          {
            "name": "Spring Cloud"
          },
          {
            "name": "Eureka"
          },
          {
            "name": "API Gateway"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          },
          {
            "name": "SOAP"
          },
          {
            "name": "Swagger"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/Habibdrira/microservices-corebanking",
        "featured": true,
        "order": 6
      },
      {
        "id": "project-gestion-employes-laravel",
        "slug": "gestion-employes-laravel",
        "title": "Employee management with Laravel",
        "category": "Web development · Laravel",
        "year": "",
        "description": "A Laravel and MySQL web application for managing employees, absences, leave, bonuses and performance. Dedicated administrator and employee interfaces support viewing and updating records, with validation of submitted data. The views use Blade. The project was developed as a team using Scrum, with Jira to track the work.",
        "technologies": [
          {
            "name": "PHP"
          },
          {
            "name": "Laravel"
          },
          {
            "name": "Blade"
          },
          {
            "name": "MySQL"
          },
          {
            "name": "Jira"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/Habibdrira/Gestion-Employee-Laravel",
        "featured": true,
        "order": 7
      },
      {
        "id": "project-agriculture-precision",
        "slug": "agriculture-precision",
        "title": "Precision agriculture platform",
        "category": "Backend · Agriculture",
        "year": "",
        "description": "Developed a Spring Boot API for a precision agriculture platform. Agricultural data is exposed through SOAP, REST and GraphQL services within a flexible architecture for managing and using that data.",
        "technologies": [
          {
            "name": "Spring Boot"
          },
          {
            "name": "SOAP"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Plateforme-Agricole-de-Precision",
        "featured": false,
        "order": 8
      },
      {
        "id": "project-plateforme-elearning",
        "slug": "plateforme-elearning",
        "title": "E-learning platform",
        "category": "Web development · Education",
        "year": "",
        "description": "Designed and developed the frontend and backend of an educational website. The platform supports administrator, instructor and student roles, along with course publishing. HTML, CSS and JavaScript power the interfaces, with a PHP backend and SQL database. Development uses a local XAMPP environment and version control with Git and GitHub.",
        "technologies": [
          {
            "name": "HTML"
          },
          {
            "name": "CSS"
          },
          {
            "name": "JavaScript"
          },
          {
            "name": "PHP"
          },
          {
            "name": "SQL"
          },
          {
            "name": "Git"
          },
          {
            "name": "XAMPP"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/E-learning-plateforme",
        "featured": false,
        "order": 9
      },
      {
        "id": "project-pacman-c-sdl",
        "slug": "pacman-c-sdl",
        "title": "Pac-Man game in C",
        "category": "Programming · Game development",
        "year": "",
        "description": "Created a Pac-Man game in C using the SDL library. The project covers game logic, level management and player interaction, connecting the game mechanics to its graphical interface.",
        "technologies": [
          {
            "name": "C"
          },
          {
            "name": "SDL"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/pacman-sdl2",
        "featured": false,
        "order": 10
      },
      {
        "id": "project-medina-tunis-ux-ui",
        "slug": "medina-tunis-ux-ui",
        "title": "Gamified journey through the Medina of Tunis",
        "category": "UX/UI · Heritage",
        "year": "",
        "description": "Designed an interactive journey connecting monuments in the Medina of Tunis. Mockups and a Figma prototype explore a heritage discovery experience through gamification and interaction with locations along the route.",
        "technologies": [
          {
            "name": "Figma"
          }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/Exploration-Gamifie-UX-UI",
        "featured": false,
        "order": 11
      },
      {
        "id": "project-controle-acces-easytek",
        "slug": "controle-acces-easytek",
        "title": "Physical access control panel",
        "category": "Embedded systems · Easytek",
        "year": "2023",
        "description": "Designed and built an access control panel for up to four dry-contact doors during my final-year internship at Easytek. RS485 and Wiegand connections communicate with the readers, while TCP/IP and a REST API integrate the panel with access management software.",
        "technologies": [
          {
            "name": "RS485"
          },
          {
            "name": "Wiegand"
          },
          {
            "name": "TCP/IP"
          },
          {
            "name": "REST"
          }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Panneau-de-controle-dacces",
        "featured": false,
        "order": 12
      },
      {
        "id": "project-site-concours-springboot-angular",
        "slug": "site-concours-springboot-angular",
        "title": "Examination & Contest Management Platform",
        "category": "Full Stack · Spring Boot & Angular",
        "year": "2023",
        "description": "Full-stack web application dedicated to organizing and managing competitive examinations. Built with a decoupled architecture featuring a robust Java Spring Boot backend exposing REST APIs, a MySQL relational database, and a dynamic frontend built with Angular.",
        "technologies": [
          { "name": "Java" },
          { "name": "Spring Boot" },
          { "name": "Angular" },
          { "name": "TypeScript" },
          { "name": "MySQL" },
          { "name": "REST" },
          { "name": "Git" }
        ],
        "visual": "containers",
        "repository": "https://github.com/habibdrira/Site-Concours-Springboot-Angular",
        "featured": false,
        "order": 13
      },
      {
        "id": "project-chatbot-arabe",
        "slug": "chatbot-arabe",
        "title": "Arabic Intelligent Chatbot",
        "category": "Artificial Intelligence · NLP",
        "year": "2023",
        "description": "Design and training of an intelligent conversational chatbot in Arabic based on Natural Language Processing (NLP). The model leverages Python, NLTK for linguistic preprocessing, Keras and TensorFlow for intent classification neural network training, integrated with an interactive graphical interface.",
        "technologies": [
          { "name": "Python" },
          { "name": "TensorFlow" },
          { "name": "Keras" },
          { "name": "NLTK" },
          { "name": "NLP" },
          { "name": "Git" }
        ],
        "visual": "pipeline",
        "repository": "https://github.com/habibdrira/Chatbot-en-arabe",
        "featured": false,
        "order": 14
      }
    ],
    "skills": [
      {
        "id": "skill-1",
        "title": "Cloud & infrastructure",
        "icon": "cloud",
        "items": [
          {
            "name": "AWS"
          },
          {
            "name": "Microsoft Azure"
          },
          {
            "name": "Oracle Cloud"
          },
          {
            "name": "OpenStack"
          }
        ],
        "order": 1
      },
      {
        "id": "skill-2",
        "title": "Containers & orchestration",
        "icon": "layers",
        "items": [
          {
            "name": "Docker"
          },
          {
            "name": "Docker Compose"
          },
          {
            "name": "Kubernetes"
          },
          {
            "name": "Helm"
          },
          {
            "name": "OpenShift"
          }
        ],
        "order": 2
      },
      {
        "id": "skill-3",
        "title": "CI/CD & automation",
        "icon": "workflow",
        "items": [
          {
            "name": "GitLab CI/CD"
          },
          {
            "name": "Jenkins"
          },
          {
            "name": "Ansible"
          },
          {
            "name": "Terraform"
          },
          {
            "name": "GitHub Actions"
          },
          {
            "name": "Argo CD"
          },
          {
            "name": "Puppet"
          }
        ],
        "order": 3
      },
      {
        "id": "skill-4",
        "title": "Systems & networking",
        "icon": "server",
        "items": [
          {
            "name": "Linux"
          },
          {
            "name": "Red Hat"
          },
          {
            "name": "Ubuntu"
          },
          {
            "name": "TCP/IP"
          },
          {
            "name": "VLAN"
          },
          {
            "name": "OSPF"
          },
          {
            "name": "Cisco Packet Tracer"
          },
          {
            "name": "Réseaux (CCNA niveau 3)"
          }
        ],
        "order": 4
      },
      {
        "id": "skill-5",
        "title": "Observability, quality & security",
        "icon": "activity",
        "items": [
          {
            "name": "Prometheus"
          },
          {
            "name": "Grafana"
          },
          {
            "name": "SonarQube"
          },
          {
            "name": "Trivy"
          },
          {
            "name": "HashiCorp Vault"
          }
        ],
        "order": 5
      },
      {
        "id": "skill-6",
        "title": "Languages & scripting",
        "icon": "code",
        "items": [
          {
            "name": "Python"
          },
          {
            "name": "Bash"
          },
          {
            "name": "Java"
          },
          {
            "name": "C"
          },
          {
            "name": "C++"
          },
          {
            "name": "JavaScript"
          },
          {
            "name": "PHP"
          }
        ],
        "order": 6
      },
      {
        "id": "skill-7",
        "title": "Backend & APIs",
        "icon": "code",
        "items": [
          {
            "name": "NestJS"
          },
          {
            "name": "Spring Boot"
          },
          {
            "name": "Laravel"
          },
          {
            "name": "REST"
          },
          {
            "name": "GraphQL"
          },
          {
            "name": "SOAP"
          }
        ],
        "order": 7
      },
      {
        "id": "skill-8",
        "title": "Web & mobile interfaces",
        "icon": "code",
        "items": [
          {
            "name": "HTML"
          },
          {
            "name": "CSS"
          },
          {
            "name": "Next.js"
          },
          {
            "name": "Angular"
          },
          {
            "name": "Android Studio"
          }
        ],
        "order": 8
      },
      {
        "id": "skill-9",
        "title": "Databases",
        "icon": "server",
        "items": [
          {
            "name": "PostgreSQL"
          },
          {
            "name": "MySQL"
          },
          {
            "name": "Oracle Database"
          },
          {
            "name": "SQL"
          },
          {
            "name": "PL/SQL"
          }
        ],
        "order": 9
      },
      {
        "id": "skill-10",
        "title": "Embedded systems & IoT",
        "icon": "server",
        "items": [
          {
            "name": "ESP32"
          },
          {
            "name": "STM32"
          },
          {
            "name": "Raspberry Pi"
          },
          {
            "name": "Arduino"
          },
          {
            "name": "FPGA"
          },
          {
            "name": "NodeMCU ESP8266"
          },
          {
            "name": "RS485"
          },
          {
            "name": "Wiegand"
          }
        ],
        "order": 10
      },
      {
        "id": "skill-11",
        "title": "Electronics & simulation",
        "icon": "activity",
        "items": [
          {
            "name": "VHDL"
          },
          {
            "name": "MATLAB"
          },
          {
            "name": "Quartus"
          },
          {
            "name": "Proteus"
          },
          {
            "name": "Altium Designer"
          }
        ],
        "order": 11
      },
      {
        "id": "skill-12",
        "title": "Development tools",
        "icon": "code",
        "items": [
          {
            "name": "Git"
          },
          {
            "name": "GitHub"
          },
          {
            "name": "GitLab"
          },
          {
            "name": "Visual Studio"
          },
          {
            "name": "XAMPP"
          },
          {
            "name": "SDL"
          }
        ],
        "order": 12
      },
      {
        "id": "skill-13",
        "title": "Design & collaboration",
        "icon": "workflow",
        "items": [
          {
            "name": "Figma"
          },
          {
            "name": "Scrum"
          },
          {
            "name": "Jira"
          }
        ],
        "order": 13
      }
    ],
    "experiences": [
      {
        "id": "exp-1",
        "company": "Vayetek",
        "title": "Final-year internship · Cloud & DevOps",
        "period": "Feb — Jun 2026",
        "description": "Built an internal CI/CD and automated deployment platform.",
        "highlights": [
          {
            "text": "NestJS backend, Next.js frontend and GitLab CI/CD integration."
          },
          {
            "text": "VPS automation with Ansible and Docker application management."
          }
        ],
        "order": 1
      },
      {
        "id": "exp-2",
        "company": "Ningen",
        "title": "Summer internship · DevOps",
        "period": "Aug — Sep 2025",
        "description": "Deployed a microservices CRM on Kubernetes.",
        "highlights": [
          {
            "text": "Jenkins pipeline for build, test and deployment."
          },
          {
            "text": "Monitoring with Prometheus and Grafana."
          }
        ],
        "order": 2
      },
      {
        "id": "exp-3",
        "company": "Centre National de l’Informatique",
        "title": "Summer internship · Backend development",
        "period": "Aug — Sep 2024",
        "description": "Developed a portal for competitions and applications.",
        "highlights": [
          {
            "text": "Spring Boot backend and PostgreSQL database."
          },
          {
            "text": "Application management and data protection features."
          }
        ],
        "order": 3
      },
      {
        "id": "exp-4",
        "company": "Easytek",
        "title": "Final-year internship · Embedded systems",
        "period": "Feb — Jun 2023",
        "description": "Designed and developed a physical access control panel for four doors.",
        "highlights": [
          {
            "text": "Reader communication through RS485 and Wiegand."
          },
          {
            "text": "Integration with management software through TCP/IP and a REST API."
          }
        ],
        "order": 4
      }
    ],
    "education": [
      {
        "id": "edu-1",
        "school": "iTeam University",
        "title": "Engineering degree in Computer Science",
        "period": "2023 — 2026",
        "description": "Cloud Computing & Virtualization · Tunis",
        "order": 1
      },
      {
        "id": "edu-2",
        "school": "Faculté des Sciences de Tunis",
        "title": "Bachelor’s degree in Computer Systems Engineering",
        "period": "2020 — 2023",
        "description": "IoT & Embedded Systems · Tunis",
        "order": 2
      }
    ],
    "certifications": [
      {
        "id": "cert-1",
        "title": "Red Hat Certified System Administrator (RHCSA)",
        "issuer": "Red Hat",
        "year": "2026",
        "order": 1,
        "credential": "https://www.credly.com/badges/97e1b361-f35d-4d63-9838-01a6332f01b7",
        "badgeUrl": "/certifications/redhat-rhcsa.png"
      },
      {
        "id": "cert-2",
        "title": "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
        "issuer": "Oracle",
        "year": "2025",
        "order": 2,
        "credential": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=843C2FE400ACA39BD8194C76CFED7637F8471AA8D1AFAC6B31F207CFF1AAF0AA",
        "badgeUrl": "/certifications/oracle-architect-2025.png"
      },
      {
        "id": "cert-3",
        "title": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
        "issuer": "Oracle",
        "year": "2025",
        "order": 3,
        "credential": "https://catalog-education.oracle.com/ords/certview/sharebadge?id=6A5BD117D27CBC3DA27DA598CB656735FE4289B1418798F9E968583072CE8863",
        "badgeUrl": "/certifications/oracle-foundations-2025.png"
      }
    ],
    "homepage": {
      "sections": [
        {
          "section": "about",
          "visible": true
        },
        {
          "section": "projects",
          "visible": true
        },
        {
          "section": "skills",
          "visible": true
        },
        {
          "section": "certifications",
          "visible": true
        },
        {
          "section": "experience",
          "visible": true
        },
        {
          "section": "education",
          "visible": true
        },
        {
          "section": "contact",
          "visible": true
        }
      ]
    }
  }
}

export function getContent(locale: Locale): LocaleContent {
  return contentData[locale] || contentData.fr
}
