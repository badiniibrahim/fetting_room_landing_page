# Fitting Room - Landing Page

Landing page moderne et responsive pour **AI Fitting Room**, une application révolutionnaire de cabine d'essayage virtuelle utilisant l'intelligence artificielle.

## 🎯 À propos

Fitting Room est une application mobile qui révolutionne la façon de s'habiller en permettant :
- **Essayage virtuel** : Essayez des vêtements sur votre propre photo grâce à l'IA
- **Placard digital** : Gérez et organisez tous vos vêtements en un seul endroit
- **Suggestions personnalisées** : Recevez des conseils de style adaptés à votre morphologie
- **Planificateur de looks** : Organisez vos tenues à l'avance pour la semaine

## 🚀 Technologies utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Outil de build rapide et moderne
- **CSS3** - Styles personnalisés avec design moderne
- **i18n** - Support multilingue (Français/Anglais)

## 📦 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- Yarn ou npm

### Étapes d'installation

1. Clonez le repository :
```bash
git clone <repository-url>
cd fetting_room
```

2. Installez les dépendances :
```bash
yarn install
# ou
npm install
```

3. Lancez le serveur de développement :
```bash
yarn dev
# ou
npm run dev
```

4. Ouvrez votre navigateur sur `http://localhost:5173`

## 🛠️ Scripts disponibles

- `yarn dev` - Lance le serveur de développement
- `yarn build` - Compile le projet pour la production
- `yarn preview` - Prévisualise le build de production
- `yarn lint` - Vérifie le code avec ESLint

## 📱 Liens des applications

- **App Store (iOS)** : [AI Fitting Room](https://apps.apple.com/us/app/ai-fitting-room/id6754843782)
- **Google Play (Android)** : [AI Fitting Room](https://play.google.com/store/apps/details?id=badiniibrahim.fitting_room)
- **Démo YouTube** : [Voir la vidéo](https://youtube.com/shorts/cBdMmTZJEOk?si=FNcC9MZQqw1aC7di)

## 📂 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # En-tête avec navigation
│   ├── Hero.tsx        # Section hero principale
│   ├── HowItWorks.tsx  # Comment ça marche
│   ├── Closet.tsx      # Placard digital
│   ├── AIStylist.tsx   # Styliste IA
│   ├── Planner.tsx     # Planificateur
│   ├── Benefits.tsx    # Avantages
│   ├── Premium.tsx     # Section premium
│   ├── Security.tsx    # Sécurité
│   ├── Testimonials.tsx # Témoignages
│   ├── Gallery.tsx     # Galerie
│   ├── YouTube.tsx      # Vidéo YouTube
│   ├── CTASection.tsx  # Section CTA
│   ├── TrustBadges.tsx # Badges de confiance
│   └── Footer.tsx      # Pied de page
├── contexts/           # Contextes React
│   └── LanguageContext.tsx # Contexte de langue
├── hooks/              # Hooks personnalisés
│   └── useTranslation.ts  # Hook de traduction
├── i18n/               # Fichiers de traduction
│   └── translations.ts # Traductions FR/EN
└── types/              # Types TypeScript
    └── index.ts        # Définitions de types
```

## 🌍 Internationalisation

Le site supporte deux langues :
- **Français** (par défaut)
- **English**

Les traductions sont gérées via le système i18n personnalisé dans `src/i18n/translations.ts`.

## 🎨 Fonctionnalités de la landing page

- ✅ Design moderne et responsive
- ✅ Navigation fluide avec sections ancrées
- ✅ Support multilingue (FR/EN)
- ✅ Intégration vidéo YouTube
- ✅ Galerie d'images
- ✅ Section de témoignages
- ✅ Badges de confiance
- ✅ Boutons CTA vers les stores
- ✅ Footer informatif
- ✅ Optimisé pour mobile et desktop

## 🚀 Déploiement

Pour déployer le projet en production :

1. Build le projet :
```bash
yarn build
```

2. Les fichiers optimisés se trouvent dans le dossier `dist/`

3. Déployez le contenu du dossier `dist/` sur votre hébergeur (Vercel, Netlify, etc.)

## 📄 Licence

Ce projet est privé et appartient à Badini Ibrahim SAWADOGO.

## 👤 Auteur

**Badini Ibrahim SAWADOGO**
- Email: sawadogo.badiniibrahim@gmail.com
- Adresse: 12 Rue des Voyageurs, 95800 Cergy, France

---

Made with ❤️ for Fitting Room
