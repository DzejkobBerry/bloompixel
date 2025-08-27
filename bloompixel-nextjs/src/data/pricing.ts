export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonVariant: 'outline' | 'primary' | 'premium';
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 1500,
    period: 'miesiąc',
    description: 'Idealny dla małych projektów i startupów',
    features: [
      'Responsywna strona internetowa',
      'Do 5 podstron',
      'Podstawowe SEO',
      'Formularz kontaktowy',
      'Integracja z Google Analytics',
      '30 dni wsparcia technicznego',
      'Hosting na 1 rok (gratis)'
    ],
    buttonText: 'Wybierz Basic',
    buttonVariant: 'outline'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 3000,
    period: 'miesiąc',
    description: 'Najlepszy wybór dla rozwijających się firm',
    features: [
      'Wszystko z pakietu Basic',
      'Do 15 podstron',
      'Zaawansowane SEO',
      'Panel administracyjny (CMS)',
      'Integracja z mediami społecznościowymi',
      'Blog z systemem komentarzy',
      'Optymalizacja szybkości',
      '90 dni wsparcia technicznego',
      'Hosting na 2 lata (gratis)',
      'Certyfikat SSL'
    ],
    popular: true,
    buttonText: 'Wybierz Premium',
    buttonVariant: 'premium'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 5000,
    period: 'miesiąc',
    description: 'Kompleksowe rozwiązanie dla dużych firm',
    features: [
      'Wszystko z pakietu Premium',
      'Nieograniczona liczba podstron',
      'Sklep internetowy (e-commerce)',
      'Zaawansowane funkcjonalności',
      'Integracja z systemami zewnętrznymi',
      'Wielojęzyczność',
      'Zaawansowana analityka',
      'Backup automatyczny',
      'Priorytetowe wsparcie 24/7',
      'Hosting Premium na 3 lata',
      'Dedykowany opiekun projektu'
    ],
    buttonText: 'Skontaktuj się',
    buttonVariant: 'primary'
  }
];