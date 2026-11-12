import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Image credits', alternates: { canonical: '/credits' }, robots: { index: false } };
export default function CreditsPage() {
  return <><section className="page-intro shell"><span className="eyebrow">BEHIND THE IMAGERY</span><h1>A taste of the direction.</h1><p>Illustrative food photography created for Meal Direct.</p></section><article className="policy shell"><h2>Food imagery</h2><p>The jollof, chicken and plantain photograph and the beans and dodo photograph were generated with OpenAI for this website design. These are illustrative images, not photographs of meals supplied by a Meal Direct vendor. Actual portions, presentation and availability vary by kitchen.</p><h2>Brand</h2><p>Meal Direct brand assets belong to their respective owner. Meal Direct is a product developed by Sulva Tech.</p></article></>;
}
