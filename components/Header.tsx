import Link from 'next/link';
import { brand } from '@/lib/brand';
import { ShieldIcon, MenuIcon } from './Icons';

type Props = {
  variant?: 'home' | 'policy';
};

export default function Header({ variant = 'home' }: Props) {
  return (
    <header className="head">
      <div className="head-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            <ShieldIcon />
          </span>
          <span>
            <span className="brand-name">{brand.name}</span>
            <br />
            <span className="brand-sub">{brand.tagline}</span>
          </span>
        </Link>
        {variant === 'home' ? (
          <button className="menu" aria-label="Open menu" type="button">
            <MenuIcon />
          </button>
        ) : (
          <Link className="back" href="/">
            ← Back to home
          </Link>
        )}
      </div>
    </header>
  );
}
