import type { Metadata } from 'next';
import VendorsContent from './VendorsContent';

export const metadata: Metadata = {
  title: 'Sell as a Vendor',
  description:
    'Connect your kitchen with campus students through Meal Direct. Explore scheduled ordering, vendor onboarding and planned demand forecasting.',
  alternates: { canonical: '/vendors' },
  openGraph: {
    title: 'Sell as a Vendor | Meal Direct',
    description:
      'Bring your kitchen to campus with Meal Direct. Explore the vendor portal and planned demand forecasting.',
    url: '/vendors',
  },
};

export default function Page() {
  return <VendorsContent />;
}
