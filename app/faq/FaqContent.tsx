import { ArrowUpRight } from 'lucide-react';
import ClosingCTA from '@/components/ClosingCTA';
import { faqs } from './faqs';
export default function FaqContent() {
  return <><section className="page-intro shell"><span className="eyebrow">A FEW THINGS TO KNOW</span><h1>Good questions.<br /><em>Clear answers.</em></h1><p>From choosing your first meal to understanding what’s coming next.</p></section><section className="faq-layout shell"><aside className="faq-aside"><h2>Need a hand?</h2><p>For an existing order, include your order reference so the team can help you find the right answer.</p><a className="text-link" href="mailto:support@sulvatech.com">Contact the team <ArrowUpRight size={17} /></a></aside><div className="faq-list">{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section><ClosingCTA /></>;
}
