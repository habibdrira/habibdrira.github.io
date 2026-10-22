# Habib Drira — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat-square&logo=github)](https://habibdrira.github.io/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

> Portfolio professionnel bilingue (Français & Anglais) d’**Habib Drira**, Ingénieur Cloud & DevOps certifié RHCSA.  
> Conçu pour offrir une expérience fluide, rapide et moderne avec un temps de chargement instantané.

🌐 **Site en production :** [https://habibdrira.github.io/](https://habibdrira.github.io/)

---

## ✨ Points Forts & Fonctionnalités

- ⚡ **Performance & Haute Disponibilité** : Rendu statique optimisé (SSG via Next.js `output: 'export'`) sans backend requis, hébergé gratuitement et mondialement sur GitHub Pages.
- 🌐 **Bilingue Natif (FR / EN)** : Routage internationalisé avec détection de langue, métadonnées SEO complètes (`hreflang`, Open Graph, balises canoniques) et URLs dédiées (`/fr/` et `/en/`).
- 🎨 **Design Moderne & Épuré** : Interface soignée avec tokens CSS personnalisés, animations fluides, typographie *DM Sans* auto-hébergée et bascule de thème Sombre / Clair mémorisée.
- 📁 **Catalogue de Projets Structuré** : Présentation détaillée des réalisations en Cloud, DevOps, automatisation CI/CD, conteneurs et développement fullstack avec liens directs vers les dépôts GitHub.
- 🛠️ **Cartographie des Compétences** : Plus de 40 technologies réparties en 11 domaines d'expertise, accompagnées de leurs logos officiels et d'un carrousel interactif.
- 🚀 **Déploiement Continu (CI/CD)** : Pipeline automatisé via GitHub Actions assurant la validation des types TypeScript, le build de production et le déploiement sur la branche `gh-pages` à chaque commit.

---

## 🛠️ Stack Technique

| Domaine | Technologies |
| :--- | :--- |
| **Framework & Runtime** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styles & UI** | Vanilla CSS avec Design System & Tokens HSL, Thèmes Dark/Light |
| **Typographie** | `@fontsource-variable/dm-sans` (auto-hébergée pour zéro dépendance externe) |
| **Iconographie** | Composants SVG vectoriels sur mesure |
| **Hébergement & CI/CD** | [GitHub Pages](https://pages.github.com/), [GitHub Actions](https://github.com/features/actions) |

---

## 📂 Structure du Projet

```text
├── .github/workflows/       # Workflow de déploiement continu GitHub Actions
├── public/                  # Assets statiques, favicon SVG/PNG, logos de certifications
├── src/
│   ├── app/
│   │   ├── (site)/[locale]/ # Pages bilingues (Accueil, /projects/, /skills/)
│   │   │   ├── layout.tsx   # Layout principal avec balises meta et script de thème
│   │   │   └── styles.css   # Système de design global & tokens CSS
│   ├── components/          # Composants UI (Header, HeroTerminal, SkillsMarquee, Cards...)
│   ├── data/                # Données des projets, expériences, formations et certifications
│   └── lib/                 # Utilitaires i18n et typages TypeScript
├── next.config.mjs          # Configuration Next.js (output: 'export', trailingSlash)
└── package.json             # Dépendances et scripts de build
```

---

## 🚀 Lancement en Local

### Prérequis
- **Node.js** >= 20.x
- **npm** >= 10.x

### Installation et Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/habibdrira/habibdrira.github.io.git
cd habibdrira.github.io

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`.

### Autres Commandes

```bash
# Vérifier les types TypeScript
npm run typecheck

# Compiler et exporter le site statique (génère le dossier out/)
npm run build
```

---

## 📬 Contact & Réseaux

- **Site Web :** [habibdrira.github.io](https://habibdrira.github.io/)
- **LinkedIn :** [linkedin.com/in/habibdrira](https://www.linkedin.com/in/habibdrira/)
- **GitHub :** [github.com/Habibdrira](https://github.com/Habibdrira)
- **Email :** [habibdrira6@gmail.com](mailto:habibdrira6@gmail.com)

---

## 📄 Licence

Ce projet est sous licence MIT — libre d'utilisation et d'adaptation.
