export interface SiteConfig {
  name: string;
  description: string;
  logo: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
  };
  services: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  testimonials: Array<{
    name: string;
    role: string;
    content: string;
    image?: string;
  }>;
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  location: {
    title: string;
    address: string;
    mapUrl: string;
  };
  businessHours: {
    title: string;
    timezone: string;
    hours: Array<{
      day: string;
      hours: string;
      isClosed?: boolean;
    }>;
  };
  pricing: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      price?: string;
      description: string;
      features: string[];
      isPopular?: boolean;
      ctaText?: string;
      ctaLink?: string;
    }>;
  };
}

// Configuration par défaut
export const defaultConfig: SiteConfig = {
  name: "Massyl Ouaddour",
  description: "Créateur de sites web performants et accessibles",
  logo: "/images/logo.svg",
  contact: {
    email: "contact@massylouaddour.com",
    phone: "+33 6 XX XX XX XX",
    address: "Toulouse, France"
  },
  social: {
    twitter: "https://twitter.com/massylouaddour",
    linkedin: "https://linkedin.com/in/massylouaddour",
    github: "https://github.com/massylouaddour"
  },
  services: {
    title: "Mes Services",
    description: "Des sites web modernes, rapides et accessibles pour votre entreprise",
    items: [
      {
        title: "Sites Vitrines",
        description: "Présentez votre activité avec un site web élégant et performant",
        icon: "🎨"
      },
      {
        title: "Sites E-commerce",
        description: "Vendez vos produits en ligne avec une boutique optimisée",
        icon: "🛍️"
      },
      {
        title: "Sites Professionnels",
        description: "Solutions sur-mesure pour les professions libérales",
        icon: "💼"
      }
    ]
  },
  testimonials: [
    {
      name: "Luna Rossa",
      role: "Pizzeria",
      content: "Un site magnifique qui met en valeur notre cuisine artisanale. Les clients adorent la facilité de réservation en ligne.",
      image: "/images/testimonials/luna-rossa.jpg"
    }
  ],
  cta: {
    title: "Prêt à lancer votre projet ?",
    description: "Contactez-moi pour discuter de votre site web",
    buttonText: "Demander un devis",
    buttonLink: "/contact"
  },
  location: {
    title: "Localisation",
    address: "Toulouse, France",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8004846854457!2d1.444209315509614!3d43.60446297912194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411100!2sToulouse!5e0!3m2!1sfr!2sfr!4v1647874586708!5m2!1sfr!2sfr"
  },
  businessHours: {
    title: "Horaires de travail",
    timezone: "Europe/Paris",
    hours: [
      { day: "Lundi", hours: "9h00 - 18h00" },
      { day: "Mardi", hours: "9h00 - 18h00" },
      { day: "Mercredi", hours: "9h00 - 18h00" },
      { day: "Jeudi", hours: "9h00 - 18h00" },
      { day: "Vendredi", hours: "9h00 - 18h00" },
      { day: "Samedi", hours: "Fermé", isClosed: true },
      { day: "Dimanche", hours: "Fermé", isClosed: true }
    ]
  },
  pricing: {
    title: "Mes Formules",
    description: "Des solutions adaptées à tous les budgets",
    items: [
      {
        title: "Découverte",
        price: "300-500€",
        description: "Site one-page parfait pour démarrer",
        features: [
          "1 page d'accueil complète",
          "Formulaire de contact",
          "Intégration Google Maps",
          "Optimisation SEO basique",
          "Design responsive",
          "Hébergement inclus"
        ],
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Business",
        price: "600-900€",
        description: "Site multi-pages pour une présence complète",
        features: [
          "3-5 pages personnalisées",
          "Blog intégré",
          "Galerie photos",
          "Optimisation SEO avancée",
          "Intégration réseaux sociaux",
          "Statistiques de visite"
        ],
        isPopular: true,
        ctaText: "Choisir cette formule",
        ctaLink: "/contact"
      },
      {
        title: "Premium",
        price: "Sur devis",
        description: "Solution sur-mesure avec fonctionnalités avancées",
        features: [
          "Site sur-mesure",
          "Système de réservation",
          "Espace client",
          "Newsletter",
          "Multilingue",
          "API personnalisée"
        ],
        ctaText: "Demander un devis",
        ctaLink: "/contact"
      }
    ]
  }
}; 