import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ClosingCTA from './ClosingCTA';
type PartnerPageProps = { type: 'vendor' | 'rider' };
export default function PartnerPage({ type }: PartnerPageProps) {
  const vendor = type === 'vendor';
  const steps = vendor ? [
    ['Bring your kitchen to campus.', 'Start in the vendor portal and follow the onboarding steps for your campus.'],
    ['Set the menu. Set the pace.', 'Manage your meals, prices and availability around the delivery windows you can fulfil.'],
    ['Prepare for the orders ahead.', 'Use scheduled orders to organise preparation and coordinate pickup with the delivery team.']
  ] : [
    ['Start with your campus.', 'Visit the rider portal to check onboarding and delivery opportunities in your area.'],
    ['Pick up with a plan.', 'Review assigned orders, pickup details and the delivery window before setting out.'],
    ['Make the handoff count.', 'Follow the delivery details and keep the student informed when you reach their collection point.']
  ];
  return <><section className="page-intro shell"><span className="eyebrow">{vendor ? 'FOR THE KITCHENS THAT FEED OUR CAMPUSES' : 'FOR THE PEOPLE WHO KEEP CAMPUS MOVING'}</span><h1>{vendor ? 'Your food. Their favourite.' : 'Good food. Great handoffs.'}<br /><em>{vendor ? 'Let’s bring them together.' : 'A better way to deliver.'}</em></h1><p>{vendor ? 'Make your kitchen part of the campus routine. Connect with students and prepare for scheduled orders with Meal Direct.' : 'Help connect campus kitchens with hungry students. Bring care to every pickup, every journey and every handoff.'}</p><a className="button" href={vendor ? 'https://vendor.mealdirectly.com' : 'https://rider.mealdirectly.com'}>{vendor ? 'Open the vendor portal' : 'Open the rider portal'}<ArrowUpRight size={18} /></a></section>
    <section className="partner-grid shell"><div className="partner-steps">{steps.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="partner-panel"><span className="eyebrow">WHAT WE’RE PLANNING <span className="status">PLANNED</span></span><h2>{vendor ? 'A clearer picture of what’s cooking.' : 'Every trip, better considered.'}</h2><p>{vendor ? 'Vendor demand forecasting will help kitchens anticipate demand by delivery window. Meal-quality monitoring will help the team understand recurring feedback and follow up with care.' : 'Delivery batching and route optimisation will suggest efficient sequences based on hostels, kitchen readiness and rider capacity. Early delay alerts will help the team respond before a window is missed.'}</p><p style={{ marginTop: 15 }}>These AI capabilities are on the roadmap and are not yet available.</p><Link className="text-link" href={vendor ? '/features#forecasting' : '/features#routing'}>Explore the roadmap <ArrowUpRight size={17} /></Link></div></section><ClosingCTA /></>;
}
