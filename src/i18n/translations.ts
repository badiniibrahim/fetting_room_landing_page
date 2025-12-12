import type { Language } from '../types';

export const translations: Record<Language, unknown> = {
  fr: {
    header: {
      title: 'Fitting Room',
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
    stats: {
      users: 'Utilisateurs actifs',
      rating: 'Note moyenne',
      tryOns: 'Essayages réalisés',
    },
    testimonials: {
      title: 'Ce que disent nos utilisateurs',
      testimonial1: {
        name: 'Sophie Martin',
        role: 'Styliste',
        content: 'Fitting Room a complètement transformé ma façon de travailler. Je peux maintenant tester des combinaisons pour mes clientes en quelques secondes !',
      },
      testimonial2: {
        name: 'Thomas Dubois',
        role: 'Entrepreneur',
        content: 'Enfin une app qui m\'aide à gérer mon dressing professionnel. Plus jamais de stress le matin, je planifie mes tenues à l\'avance.',
      },
      testimonial3: {
        name: 'Emma Laurent',
        role: 'Étudiante',
        content: 'J\'adore pouvoir essayer virtuellement des vêtements avant d\'acheter. Ça m\'a fait économiser beaucoup d\'argent en retours !',
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
          description: 'Essayage virtuel via IA',
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
      title: 'Achetez des crédits pour vos essayages',
      description: 'Les essayages virtuels nécessitent des crédits. Achetez des packs de crédits selon vos besoins et utilisez-les quand vous voulez. Gestion des achats via RevenueCat.',
      free: 'Gratuit',
      credits: 'Crédits',
      pack1: {
        credits: '10 crédits',
        price: '4,99 €',
        description: 'Idéal pour tester l\'application',
      },
      pack2: {
        credits: '50 crédits',
        price: '19,99 €',
        description: 'Parfait pour une utilisation régulière',
      },
      pack3: {
        credits: '100 crédits',
        price: '34,99 €',
        description: 'Le meilleur rapport qualité-prix',
      },
      features: {
        tryOn: 'Essayages virtuels illimités',
        closet: 'Gestion de placard complète',
        suggestions: 'Suggestions de tenues IA',
        planner: 'Planificateur de looks',
      },
      buy: 'Acheter',
      popular: 'Populaire',
    },
    security: {
      title: 'Vos données, votre style, en sécurité',
      description: 'Nous prenons la sécurité de vos données au sérieux. Authentification sécurisée via , Google et Apple. Vos photos restent privées et votre historique est sauvegardé en toute sécurité.',
      features: {
        auth: 'Authentification  Google et Apple',
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
    trust: {
      secure: 'Sécurisé',
      rated: '4.8/5 étoiles',
      users: '10K+ utilisateurs',
      gdpr: 'Conforme RGPD',
    },
  },
  en: {
    header: {
      title: 'Fitting Room',
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
    stats: {
      users: 'Active users',
      rating: 'Average rating',
      tryOns: 'Try-ons completed',
    },
    testimonials: {
      title: 'What our users say',
      testimonial1: {
        name: 'Sophie Martin',
        role: 'Stylist',
        content: 'Fitting Room has completely transformed the way I work. I can now test combinations for my clients in seconds!',
      },
      testimonial2: {
        name: 'Thomas Dubois',
        role: 'Entrepreneur',
        content: 'Finally an app that helps me manage my professional wardrobe. No more morning stress, I plan my outfits in advance.',
      },
      testimonial3: {
        name: 'Emma Laurent',
        role: 'Student',
        content: 'I love being able to try on clothes virtually before buying. It has saved me a lot of money on returns!',
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
          description: 'Virtual try-on via AI',
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
      title: 'Buy credits for your try-ons',
      description: 'Virtual try-ons require credits. Purchase credit packs according to your needs and use them whenever you want. Purchase management via RevenueCat.',
      free: 'Free',
      credits: 'Credits',
      pack1: {
        credits: '10 credits',
        price: '$4.99',
        description: 'Perfect for testing the app',
      },
      pack2: {
        credits: '50 credits',
        price: '$19.99',
        description: 'Great for regular use',
      },
      pack3: {
        credits: '100 credits',
        price: '$34.99',
        description: 'Best value for money',
      },
      features: {
        tryOn: 'Unlimited virtual try-ons',
        closet: 'Complete closet management',
        suggestions: 'AI outfit suggestions',
        planner: 'Outfit planner',
      },
      buy: 'Buy',
      popular: 'Popular',
    },
    security: {
      title: 'Your data, your style, secure',
      description: 'We take the security of your data seriously. Secure authentication via  Google and Apple. Your photos remain private and your history is securely saved.',
      features: {
        auth: 'Auth Google and Apple authentication',
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
    trust: {
      secure: 'Secure',
      rated: '4.8/5 stars',
      users: '10K+ users',
      gdpr: 'GDPR compliant',
    },
  },
} as const;

