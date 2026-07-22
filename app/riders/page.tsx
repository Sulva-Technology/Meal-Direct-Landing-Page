import type { Metadata } from 'next';
import RidersContent from './RidersContent';

export const metadata: Metadata = {
  title: 'Become a Rider',
  description:
    'Earn more with batched deliveries. Pick up grouped campus orders and deliver to student zones for higher hourly earnings — ride with Meal Direct.',
  alternates: { canonical: '/riders' },
  openGraph: {
    title: 'Become a Rider | Meal Direct',
    description:
      'Stop making single trips. Deliver batched campus orders and earn more per hour with Meal Direct.',
    url: '/riders',
  },
};

export default function Page() {
  return <RidersContent />;
}
