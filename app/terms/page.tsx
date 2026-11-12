import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms of service — draft', robots: { index: false, follow: false }, alternates: { canonical: '/terms' } };
export default function TermsPage() {
  return <><section className="page-intro shell"><span className="eyebrow">MEAL DIRECT / SERVICE INFORMATION</span><h1>Terms of service.</h1><p>Meal Direct is a product developed by Sulva Tech.</p></section><article className="policy shell"><div className="draft-notice"><strong>Draft for review — not the final customer agreement.</strong><br />The operator’s legal details and ordering, cancellation, refund and delivery policies must be confirmed before these terms are published as effective.</div>
  <h2>About the service</h2><p>Meal Direct connects students, campus kitchens and riders through scheduled meal delivery. Available menus, prices, delivery windows and service areas are shown in the relevant portal.</p>
  <h2>Using the website</h2><p>This website introduces Meal Direct and links to its student, vendor and rider portals. AI capabilities labelled “planned” and concept previews are not live services or confirmed launch commitments. Food photography is illustrative.</p>
  <h2>Before placing an order</h2><p>Review the selected meal, portion information, vendor, delivery point, ordering cutoff, delivery window and total in the portal. Confirm ingredients and dietary requirements directly with the kitchen.</p>
  <h2>Ordering and delivery policies</h2><p>The final agreement must state when an order is accepted, how payments are processed, how delivery windows work, and what happens when an order is late, unavailable, incorrect or missed.</p>
  <h2>Cancellations and refunds</h2><p>Cancellation cutoffs, refund eligibility, processing times and the dispute process are awaiting confirmation. This draft does not establish a cancellation or refund entitlement.</p>
  <h2>Company details and contact</h2><p>The final agreement must include the legal operator’s registered name, address, applicable terms and effective date. For current service questions, contact <a href="mailto:support@sulvatech.com">support@sulvatech.com</a>.</p>
  </article></>;
}
