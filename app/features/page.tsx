import type { Metadata } from 'next';
import FeaturesContent from './FeaturesContent';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore scheduled campus meals and the Meal Direct AI roadmap: personal meal planning, delivery coordination, support and vendor forecasting.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features | Meal Direct',
    description:
      'Scheduled campus meals today, with personalised planning and intelligent delivery features on the roadmap.',
    url: '/features',
  },
};

export default function Page() {
  return <FeaturesContent />;
}
