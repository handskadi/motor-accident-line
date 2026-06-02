import Link from 'next/link';
import {
  brand,
  emailGeneralHref,
  phoneHref,
} from '@/lib/brand';

type Props = {
  variant?: 'home' | 'policy';
};

export default function Footer({ variant = 'home' }: Props) {
  // Different link set depending on which page we're on, so we never link to
  // the page the user is already viewing.
  const links =
    variant === 'home'
      ? [
          { href: '/privacy/', label: 'Privacy Policy' },
          { href: '/terms/', label: 'Terms of Service' },
          { href: '/cookies/', label: 'Cookie Policy' },
          { href: '/complaints/', label: 'Complaints' },
          { href: emailGeneralHref, label: 'Contact', external: true },
        ]
      : [
          { href: '/', label: 'Home' },
          { href: '/privacy/', label: 'Privacy' },
          { href: '/terms/', label: 'Terms' },
          { href: '/cookies/', label: 'Cookies' },
          { href: '/complaints/', label: 'Complaints' },
          { href: emailGeneralHref, label: 'Contact', external: true },
        ];

  return (
    <footer className="site">
      <div className="top">
        {variant === 'home' ? (
          <p>
            {brand.name} is a claims management introducer operated by{' '}
            {brand.legalEntity}. We are not an insurer, we are not a law firm,
            and we do not provide legal advice. We introduce enquiries to a
            panel of partner law firms and partner credit hire providers and
            are paid a referral fee by those partners for doing so. Our
            introducer service is free for you to use. You may contact your
            own insurer directly at any time, and you do not have to use a
            claims management company in order to make a claim.
          </p>
        ) : (
          <p>
            {brand.name} is a trading name of {brand.legalEntity}. We are a
            claims management introducer authorised and regulated by the
            Financial Conduct Authority (FRN {brand.fcaFRN}) and registered
            with the Information Commissioner&apos;s Office (ICO registration{' '}
            {brand.icoNumber}). Our service is free for you to use. You do not
            have to use a claims management company to make a claim.
          </p>
        )}
      </div>
      <nav className="links" aria-label="Footer">
        {links.map((link) =>
          link.external ? (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ) : (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          )
        )}
      </nav>
      <div className="legal">
        {variant === 'home' ? (
          <>
            <p>
              {brand.name} is a trading name of {brand.legalEntity}.
            </p>
            <p>Registered office: {brand.registeredOffice}.</p>
            <p>
              Registered in England and Wales. Company number:{' '}
              {brand.companyNumber}.
            </p>
            <p>
              {brand.legalEntity} is authorised and regulated by the Financial
              Conduct Authority. FCA Firm Reference Number: {brand.fcaFRN}.
              You can check this on the FCA Financial Services Register at{' '}
              <a href="https://register.fca.org.uk" rel="noopener">
                register.fca.org.uk
              </a>
              .
            </p>
            <p>
              Registered with the Information Commissioner&apos;s Office. ICO
              registration number: {brand.icoNumber}.
            </p>
            <p>
              Contact: <a href={emailGeneralHref}>{brand.emailGeneral}</a>.
            </p>
            <p>
              Phone: <a href={phoneHref}>{brand.phone}</a>.
            </p>
          </>
        ) : (
          <>
            <p>
              {brand.legalEntity}. Registered in England and Wales. Company
              number {brand.companyNumber}.
            </p>
            <p>Registered office: {brand.registeredOffice}.</p>
            <p>
              FCA Firm Reference Number: {brand.fcaFRN}. ICO registration:{' '}
              {brand.icoNumber}.
            </p>
          </>
        )}
      </div>
    </footer>
  );
}
