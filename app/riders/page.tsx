import type { Metadata } from 'next';
import RidersContent from './RidersContent';

export const metadata: Metadata = {
  title: 'Become a Rider',
  description:
    'Connect campus kitchens with students through scheduled meal delivery. Explore the rider portal and our planned delivery coordination features.',
  alternates: { canonical: '/riders' },
  openGraph: {
    title: 'Become a Rider | Meal Direct',
    description:
      'Bring campus meals to students with Meal Direct. Explore rider onboarding and the delivery roadmap.',
    url: '/riders',
  },
};

export default function Page() {
  return <RidersContent />;
}
