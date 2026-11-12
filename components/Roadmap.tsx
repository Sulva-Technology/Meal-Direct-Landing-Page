'use client';
import { useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, Check, CalendarDays, Route, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { roadmap } from '@/app/data/roadmap';
const previews = [
  { id: 'vendor-assistant', label: 'Your kitchen', icon: Sparkles, heading: 'Say it. Review it. Update it.', subtitle: 'Example: “Add 20 portions of jollof for lunch today.”', rows: [['01', 'Tell the assistant', 'Ask for a stock, price or menu change'], ['02', 'Review the suggestion', 'Check the dish, delivery slot and quantity'], ['03', 'Approve the update', 'You choose which changes to apply']], note: 'Your kitchen stays in your hands. Every change needs your approval.' },
  { id: 'planner', label: 'Your week', icon: CalendarDays, heading: 'Lunch, already thought through.', subtitle: 'Illustrative weekly plan', rows: [['MON', 'Jollof rice & plantain', 'A familiar favourite'], ['TUE', 'Beans & dodo', 'Something hearty'], ['WED', 'Rice & pepper stew', 'Comfort, on repeat']], note: 'Your budget. Your preferences. Your final say.' },
  { id: 'routing', label: 'Your delivery', icon: Route, heading: 'Every stop, considered.', subtitle: 'Illustrative delivery sequence', rows: [['01', 'Kitchen pickup', 'Meals checked before dispatch'], ['02', 'Hostel cluster', 'Orders grouped by destination'], ['03', 'Your handoff', 'Updates along the way']], note: 'Suggested routes, reviewed by the delivery team.' },
  { id: 'support', label: 'Your support', icon: Sparkles, heading: 'A helpful place to turn.', subtitle: 'Illustrative support journey', rows: [['01', 'Choose your order', 'Support with the right context'], ['02', 'Get a clear answer', 'Order details and service guidance'], ['03', 'Speak to the team', 'A person when you need one']], note: 'No automatic refunds or changes without permission.' },
];
export default function Roadmap({ full = false }: { full?: boolean }) {
  const [active, setActive] = useState(0);
  const preview = previews[active];
  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === 'ArrowRight' ? (index + 1) % previews.length
      : event.key === 'ArrowLeft' ? (index + previews.length - 1) % previews.length
      : event.key === 'Home' ? 0 : event.key === 'End' ? previews.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }
  return <section className={full ? 'intelligence intelligence-full' : 'intelligence'} id="intelligence"><div className="shell">
    <div className="intelligence-grid"><div className="intelligence-copy"><span className="eyebrow"><Sparkles size={14} /> AI THAT HELPS WITH THE EVERYDAY</span><h2>Your meals. Your kitchen.<br /><em>A little AI help.</em></h2><p>Find meals that fit your budget. Ask an AI assistant to update your kitchen’s stock and menu. Give delivery teams a clearer plan. That’s what AI means at Meal Direct.</p>
      <div className="preview-tabs" role="tablist" aria-label="AI feature examples">{previews.map((item, index) => <button key={item.id} id={`tab-${item.id}`} role="tab" tabIndex={active === index ? 0 : -1} onKeyDown={event => handleTabKey(event, index)} aria-selected={active === index} aria-controls="feature-preview" onClick={() => setActive(index)}><item.icon size={17} />{item.label}</button>)}</div>
      <p className="roadmap-disclosure">Explore the examples below. Your app is where you manage meals, orders and kitchen updates.</p>
      {!full && <Link href="/features" className="text-link light">Explore all AI features <ArrowUpRight size={17} /></Link>}
    </div>
    <div className="plan-preview" id="feature-preview" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${preview.id}`}><div className="preview-top"><span className="eyebrow">MEAL DIRECT / AI IN EVERYDAY LIFE</span><Sparkles size={18} /></div><span className="preview-subtitle">{preview.subtitle}</span><h3>{preview.heading}</h3><div className="plan-rows">{preview.rows.map(([day, meal, desc]) => <div className="plan-row" key={day}><span className="day">{day}</span><div><strong>{meal}</strong><small>{desc}</small></div><Check size={17} aria-hidden="true" /></div>)}</div><p className="preview-note">{preview.note}</p><span className="concept-label">ILLUSTRATIVE EXAMPLE</span></div></div>
    {full && <div className="roadmap-list">{roadmap.map((item, index) => <article id={item.id} key={item.id}><span className="roadmap-index">0{index + 1}</span><div><span className="eyebrow">{item.audience}</span><h3>{item.name}</h3><p>{item.description}</p><details><summary>How it helps</summary><p>{item.detail}</p></details></div></article>)}</div>}
  </div></section>;
}
