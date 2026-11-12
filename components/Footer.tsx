import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Brand from './Brand';
export default function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><div><Brand /><p>Good food. A little less wahala.<br />Made for life on campus.</p></div>
      <div className="footer-links"><div><span className="eyebrow">YOUR NEXT MEAL</span><a href="https://user.mealdirectly.com">Student portal <ArrowUpRight size={13} /></a><Link href="/#how-it-works">How it works</Link><Link href="/features">AI features</Link><Link href="/faq">Questions & answers</Link></div>
      <div><span className="eyebrow">OUR COMMUNITY</span><Link href="/vendors">For kitchens</Link><Link href="/riders">For riders</Link><Link href="/#about">Our story</Link><a href="mailto:support@sulvatech.com">Get in touch <ArrowUpRight size={13} /></a></div></div>
    </div>
    <div className="footer-wordmark" aria-hidden="true">Made for your everyday.</div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Meal Direct. A product developed by <a href="https://sulvatech.com" target="_blank" rel="noopener noreferrer">Sulva Tech</a>.</p><div><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><Link href="/credits">Photo credits</Link></div></div>
  </div></footer>;
}
