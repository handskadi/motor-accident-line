import Header from './Header';
import Footer from './Footer';
import { brand } from '@/lib/brand';

type Props = {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

export default function PolicyPage({
  eyebrow = 'Legal',
  title,
  intro,
  children,
}: Props) {
  return (
    <>
      <Header variant="policy" />
      <main className="policy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="meta">
          Last updated: {brand.policiesLastUpdated} · Version{' '}
          {brand.policiesVersion}
        </p>
        {intro && <div className="note">{intro}</div>}
        {children}
      </main>
      <Footer variant="policy" />
    </>
  );
}
