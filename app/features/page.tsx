import type { Metadata } from 'next';
import FeaturesContent from './FeaturesContent';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore scheduled campus meals and the Meal Direct AI features: personal meal planning, delivery coordination, support and vendor forecasting.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features | Meal Direct',
    description:
      'Explore AI meal planning, a vendor assistant for stock and menus, delivery coordination and order support.',
    url: '/features',
  },
};

export default function Page() {
  return <FeaturesContent />;
}
