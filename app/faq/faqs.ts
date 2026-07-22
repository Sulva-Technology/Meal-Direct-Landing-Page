// Shared FAQ data — plain module (no 'use client') so it can be imported by both
// the client accordion (FaqContent) and the server component that emits FAQPage
// JSON-LD (page.tsx). Keep this the single source of truth for FAQ content.
export const faqs = [
  {
    q: 'How does meal scheduling work?',
    a: 'You can browse meals and select a specific delivery window (e.g., Lunch slot between 12:30 PM - 1:30 PM). Vendors prepare all orders in batches, and our riders deliver them efficiently to your location during that timeframe.',
  },
  {
    q: 'Can I subscribe for a full week?',
    a: 'Yes! Our weekly plans let you pay once and automatically receive lunch or dinner (or both) every day from Monday to Friday without opening the app again.',
  },
  {
    q: 'How are vendors verified?',
    a: 'We physically inspect every campus vendor for hygiene, food quality, and capacity to handle batch orders before allowing them on Meal Direct. Only highly-rated vendors remain on the platform.',
  },
  {
    q: 'What campuses are currently supported?',
    a: 'We are currently launching at select universities. You can check if your campus is live by entering your school name during sign-up.',
  },
  {
    q: 'What happens if I miss my delivery window?',
    a: 'Riders arrive at specific zone hubs (like Hostel Blocks) within the time window. You will receive notifications when the batch arrives. We wait for a grace period, but standard scheduled rules apply to ensure everyone gets their food hot.',
  },
];
