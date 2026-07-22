import type { Metadata } from 'next';
import { buildCampusJsonLd, campusAreaServed } from './data/campuses';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import WhyWeAreBetter from '@/components/WhyWeAreBetter';
import StudentExperience from '@/components/StudentExperience';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  description:
    'Meal Direct is scheduled campus meal delivery — order breakfast, lunch, or dinner in advance from verified campus vendors and get it delivered to your hostel in batches. Pay once for weekly plans.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Meal Direct | Scheduled Campus Meal Delivery',
    description:
      'Order meals in advance from verified campus vendors and get them delivered to your hostel in batches. Weekly plans available.',
    url: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.mealdirectly.com/#organization',
      name: 'Meal Direct',
      url: 'https://www.mealdirectly.com/',
      logo: 'https://www.mealdirectly.com/logofull.png',
      description:
        'Premium scheduled campus meal delivery platform connecting students with verified campus vendors.',
      parentOrganization: { '@type': 'Organization', name: 'Sulva Tech' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.mealdirectly.com/#website',
      url: 'https://www.mealdirectly.com/',
      name: 'Meal Direct',
      inLanguage: 'en',
      publisher: { '@id': 'https://www.mealdirectly.com/#organization' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.mealdirectly.com/#service',
      name: 'Scheduled Campus Meal Delivery',
      serviceType: 'Food delivery',
      provider: { '@id': 'https://www.mealdirectly.com/#organization' },
      areaServed: campusAreaServed(),
      description:
        'Schedule breakfast, lunch, or dinner in advance from verified campus vendors, delivered to your hostel in efficient batches.',
    },
    ...buildCampusJsonLd(),
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhyWeAreBetter />
      <StudentExperience />
      <Testimonials />
      <CTA />
    </>
  );
}
