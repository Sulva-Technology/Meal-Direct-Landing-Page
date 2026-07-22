import type { Metadata } from 'next';
import FeaturesContent from './FeaturesContent';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Scheduled ordering, a verified campus vendor marketplace, direct hostel delivery, batch dispatch, and secure payments — everything Meal Direct gives students.',
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Features | Meal Direct',
    description:
      'Scheduled ordering, a verified vendor marketplace, hostel delivery, and secure payments — built for campus.',
    url: '/features',
  },
};

export default function Page() {
  return <FeaturesContent />;
}
