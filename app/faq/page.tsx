import type { Metadata } from 'next';
import FaqContent from './FaqContent';
import { faqs } from './faqs';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers about meal scheduling, weekly subscription plans, campus vendor verification, supported campuses, and delivery windows on Meal Direct.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ | Meal Direct',
    description:
      'How scheduling, weekly plans, vendor verification, and delivery windows work on Meal Direct.',
    url: '/faq',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqContent />
    </>
  );
}
