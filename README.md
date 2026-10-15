# Habib Drira — Portfolio (GitHub Pages)

Portfolio professionnel bilingue (Français & Anglais) d’**Habib Drira**, Ingénieur Cloud & DevOps.  
Site statique ultra-performant, hébergé sur **GitHub Pages** avec déploiement continu via **GitHub Actions**.

🌐 **Site en direct :** [https://habibdrira.github.io/](https://habibdrira.github.io/)

---

## 🛠️ Stack Technique

- **Framework :** [Next.js 16](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
- **UI & Runtime :** [React 19](https://react.dev/), TypeScript
- **Styles :** Vanilla CSS avec Design Tokens personnalisés, support natif des thèmes Sombre & Clair
- **Polices :** DM Sans auto-hébergée (`@fontsource-variable/dm-sans`)
- **CI/CD :** Pipeline GitHub Actions automatisé (`.github/workflows/deploy.yml`)

---

## 🚀 Développement Local

### Prérequis
- Node.js >= 20
- npm >= 10

### Commandes

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Vérifier les types TypeScript
npm run typecheck

# Compiler et exporter le site statique (dossier out/)
npm run build
```

---

## 🏗️ Architecture Fullstack Alternative

Ce dépôt est optimisé pour un hébergement statique à haute disponibilité et à coût nul sur GitHub Pages.  
Pour la version d'architecture **Fullstack complète avec CMS intégré (Payload CMS 3 + PostgreSQL 16 + Docker Compose)**, consultez le dépôt :  
👉 [habibdrira/habib-drira-portfolio](https://github.com/habibdrira/habib-drira-portfolio)
