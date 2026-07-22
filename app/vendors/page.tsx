import type { Metadata } from 'next';
import VendorsContent from './VendorsContent';

export const metadata: Metadata = {
  title: 'Sell as a Vendor',
  description:
    'Grow your campus food business with Meal Direct. Reach more students, handle batch orders effortlessly, and get paid reliably from your vendor dashboard.',
  alternates: { canonical: '/vendors' },
  openGraph: {
    title: 'Sell as a Vendor | Meal Direct',
    description:
      'Reach more students, fulfil batch orders, and get paid reliably with the Meal Direct vendor platform.',
    url: '/vendors',
  },
};

export default function Page() {
  return <VendorsContent />;
}
