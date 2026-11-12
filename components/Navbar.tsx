'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';
const links = [{ label: 'The experience', href: '/#how-it-works' }, { label: 'What’s next', href: '/features' }, { label: 'For kitchens', href: '/vendors' }, { label: 'For riders', href: '/riders' }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="nav-inner"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link aria-current={pathname === link.href ? 'page' : undefined} key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <a className="button button-small nav-order" href="https://user.mealdirectly.com">Find your next meal <ArrowUpRight size={16} /></a>
      <button ref={menuButton} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}<Link href="/faq" onClick={() => setOpen(false)}>Questions & answers</Link><a className="button" href="https://user.mealdirectly.com">Explore your campus menu <ArrowUpRight size={16} /></a></nav>}
  </header>;
}
