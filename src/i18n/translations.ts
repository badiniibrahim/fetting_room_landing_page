import type { Language } from '../types';

export const translations: Record<Language, any> = {
  fr: {
    header: {
      nav: {
        features: 'Fonctionnalités',
        howItWorks: 'Comment ça marche',
        premium: 'Premium',
        gallery: 'Galerie',
      },
    },
    hero: {
      title: 'Votre cabine d\'essayage virtuelle, dans votre poche',
      subtitle: 'Fitting Room révolutionne votre façon de vous habiller. Essayez virtuellement des vêtements sur votre propre photo grâce à l\'IA, gérez votre placard digital, obtenez des suggestions de tenues personnalisées et planifiez vos looks pour la semaine.',
      benefits: {
        reduceReturns: 'Réduisez les retours d\'achats en ligne',
        tryOutfits: 'Essayez des tenues sans vous changer',
        planLooks: 'Planifiez vos looks pour la semaine',
      },
      cta: {
        googlePlay: 'Télécharger sur Google Play',
        appStore: 'Télécharger sur l\'App Store',
        youtube: 'Voir la démo sur YouTube',
      },
    },
    howItWorks: {
      title: 'Comment fonctionne Fitting Room ?',
      steps: {
        step1: {
          title: 'Importez votre photo',
          description: 'Téléchargez ou prenez une photo de vous',
        },
        step2: {
          title: 'Choisissez un vêtement',
          description: 'Depuis votre placard digital ou un produit',
        },
        step3: {
          title: 'L\'IA ajuste la tenue',
          description: 'Essayage virtuel via IA (Google Gemini)',
        },
        step4: {
          title: 'Sauvegardez et planifiez vos looks',
          description: 'Ajoutez au planner ou à vos favoris',
        },
      },
    },
    closet: {
      title: 'Votre placard, digitalisé',
      description: 'Cataloguez tous vos vêtements en un seul endroit. Ajoutez des photos avec métadonnées (couleur, taille, catégorie) et organisez-les par catégories pour retrouver facilement vos pièces favorites.',
      features: {
        catalog: 'Catalogue de vêtements',
        metadata: 'Métadonnées complètes',
        categories: 'Organisation par catégories',
      },
    },
    aiStylist: {
      title: 'L\'IA devient votre styliste personnel',
      description: 'Notre IA analyse votre style, vos vêtements et vos besoins pour vous proposer des tenues complètes adaptées à chaque occasion. Que ce soit pour le travail, une soirée ou le week-end, recevez des conseils personnalisés 24/7.',
      features: {
        suggestions: 'Suggestions de tenues',
        analysis: 'Analyse de style',
        advice: 'Conseils personnalisés',
      },
    },
    planner: {
      title: 'Planifiez vos looks à l\'avance',
      description: 'Organisez vos tenues sur un calendrier, par date, pour la semaine ou pour des événements spécifiques. Plus jamais de stress le matin, préparez vos looks à l\'avance.',
    },
    benefits: {
      title: 'Pourquoi choisir Fitting Room ?',
      items: {
        stressFree: {
          title: 'Achat en ligne sans stress',
          description: 'Essayez avant d\'acheter, moins de retours',
        },
        organized: {
          title: 'Placard organisé',
          description: 'Visualisez tous vos vêtements en un coup d\'œil',
        },
        inspiration: {
          title: 'Plus d\'inspiration',
          description: 'Idées de looks pour chaque occasion',
        },
        timeSaving: {
          title: 'Gagnez du temps',
          description: 'Planifiez vos tenues pour la semaine',
        },
        avoidReturns: {
          title: 'Évitez les retours coûteux',
          description: 'Voyez le rendu sur vous avant de commander',
        },
        aiStylist: {
          title: 'Styliste IA accessible 24/7',
          description: 'Des conseils instantanés',
        },
        virtualTry: {
          title: 'Testez des combinaisons sans vous changer',
          description: 'Essayages virtuels rapides',
        },
      },
    },
    premium: {
      title: 'Passez en mode premium',
      description: 'Débloquez toutes les fonctionnalités avancées de Fitting Room avec un abonnement premium. Plus de crédits pour les essayages virtuels, plus de suggestions de tenues et des fonctionnalités exclusives.',
      features: {
        credits: 'Crédits pour les essayages virtuels',
        subscriptions: 'Abonnements gérés via RevenueCat',
        moreSuggestions: 'Plus de suggestions de tenues',
        advanced: 'Fonctionnalités avancées',
      },
      free: 'Gratuit',
      premium: 'Premium',
    },
    security: {
      title: 'Vos données, votre style, en sécurité',
      description: 'Nous prenons la sécurité de vos données au sérieux. Authentification sécurisée via Firebase Auth, Google et Apple. Vos photos restent privées et votre historique est sauvegardé en toute sécurité.',
      features: {
        auth: 'Authentification Firebase Auth, Google et Apple',
        privacy: 'Confidentialité des photos',
        history: 'Historique des essayages et sauvegarde des tenues favorites',
      },
    },
    gallery: {
      title: 'Découvrez Fitting Room en action',
    },
    youtube: {
      title: 'Regardez la démo complète de Fitting Room',
      cta: 'Voir la démo sur YouTube',
    },
    cta: {
      title: 'Prêt·e à révolutionner vos essayages ?',
      subtitle: 'Rejoignez des milliers d\'utilisateurs qui ont transformé leur façon de s\'habiller',
      buttons: {
        googlePlay: 'Télécharger sur Google Play',
        appStore: 'Télécharger sur l\'App Store',
        youtube: 'Voir la démo sur YouTube',
      },
    },
  },
  en: {
    header: {
      nav: {
        features: 'Features',
        howItWorks: 'How it works',
        premium: 'Premium',
        gallery: 'Gallery',
      },
    },
    hero: {
      title: 'Your virtual fitting room, in your pocket',
      subtitle: 'Fitting Room revolutionizes the way you dress. Try on clothes virtually on your own photo using AI, manage your digital closet, get personalized outfit suggestions and plan your looks for the week.',
      benefits: {
        reduceReturns: 'Reduce online shopping returns',
        tryOutfits: 'Try outfits without changing',
        planLooks: 'Plan your looks for the week',
      },
      cta: {
        googlePlay: 'Download on Google Play',
        appStore: 'Download on App Store',
        youtube: 'Watch demo on YouTube',
      },
    },
    howItWorks: {
      title: 'How does Fitting Room work?',
      steps: {
        step1: {
          title: 'Import your photo',
          description: 'Upload or take a photo of yourself',
        },
        step2: {
          title: 'Choose a garment',
          description: 'From your digital closet or a product',
        },
        step3: {
          title: 'AI adjusts the outfit',
          description: 'Virtual try-on via AI (Google Gemini)',
        },
        step4: {
          title: 'Save and plan your looks',
          description: 'Add to planner or favorites',
        },
      },
    },
    closet: {
      title: 'Your closet, digitized',
      description: 'Catalog all your clothes in one place. Add photos with metadata (color, size, category) and organize them by categories to easily find your favorite pieces.',
      features: {
        catalog: 'Clothing catalog',
        metadata: 'Complete metadata',
        categories: 'Organization by categories',
      },
    },
    aiStylist: {
      title: 'AI becomes your personal stylist',
      description: 'Our AI analyzes your style, your clothes and your needs to suggest complete outfits adapted to each occasion. Whether for work, an evening or the weekend, receive personalized advice 24/7.',
      features: {
        suggestions: 'Outfit suggestions',
        analysis: 'Style analysis',
        advice: 'Personalized advice',
      },
    },
    planner: {
      title: 'Plan your looks in advance',
      description: 'Organize your outfits on a calendar, by date, for the week or for specific events. Never stress in the morning again, prepare your looks in advance.',
    },
    benefits: {
      title: 'Why choose Fitting Room?',
      items: {
        stressFree: {
          title: 'Stress-free online shopping',
          description: 'Try before you buy, fewer returns',
        },
        organized: {
          title: 'Organized closet',
          description: 'View all your clothes at a glance',
        },
        inspiration: {
          title: 'More inspiration',
          description: 'Outfit ideas for every occasion',
        },
        timeSaving: {
          title: 'Save time',
          description: 'Plan your outfits for the week',
        },
        avoidReturns: {
          title: 'Avoid costly returns',
          description: 'See how it looks on you before ordering',
        },
        aiStylist: {
          title: 'AI stylist available 24/7',
          description: 'Instant advice',
        },
        virtualTry: {
          title: 'Try combinations without changing',
          description: 'Quick virtual try-ons',
        },
      },
    },
    premium: {
      title: 'Go premium',
      description: 'Unlock all advanced features of Fitting Room with a premium subscription. More credits for virtual try-ons, more outfit suggestions and exclusive features.',
      features: {
        credits: 'Credits for virtual try-ons',
        subscriptions: 'Subscriptions managed via RevenueCat',
        moreSuggestions: 'More outfit suggestions',
        advanced: 'Advanced features',
      },
      free: 'Free',
      premium: 'Premium',
    },
    security: {
      title: 'Your data, your style, secure',
      description: 'We take the security of your data seriously. Secure authentication via Firebase Auth, Google and Apple. Your photos remain private and your history is securely saved.',
      features: {
        auth: 'Firebase Auth, Google and Apple authentication',
        privacy: 'Photo privacy',
        history: 'Try-on history and favorite outfits saved',
      },
    },
    gallery: {
      title: 'Discover Fitting Room in action',
    },
    youtube: {
      title: 'Watch the complete Fitting Room demo',
      cta: 'Watch demo on YouTube',
    },
    cta: {
      title: 'Ready to revolutionize your try-ons?',
      subtitle: 'Join thousands of users who have transformed the way they dress',
      buttons: {
        googlePlay: 'Download on Google Play',
        appStore: 'Download on App Store',
        youtube: 'Watch demo on YouTube',
      },
    },
  },
} as const;

