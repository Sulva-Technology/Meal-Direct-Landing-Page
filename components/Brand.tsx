import Image from 'next/image';
import Link from 'next/link';
export default function Brand() {
  return <Link className="brand" href="/" aria-label="Meal Direct home"><Image src="/logo.png" alt="" width={35} height={35} /><span>meal<span className="brand-light">direct</span><span className="brand-dot">.</span></span></Link>;
}
