import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { brand } from '@/lib/brand';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: {
    default: `${brand.name} — Road traffic accident claims introducer`,
    template: `%s — ${brand.name}`,
  },
  description: `${brand.name} is a UK-based road traffic accident claims management introducer. Call us and we will, where appropriate, introduce you to a partner law firm or credit hire provider. Authorised and regulated by the FCA (FRN ${brand.fcaFRN}).`,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: brand.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-K5MGJ27V" />
      <body>{children}</body>
    </html>
  );
}
