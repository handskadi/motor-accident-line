import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import {
  brand,
  emailGeneralHref,
  phoneHref,
} from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Cookie Policy for ${brand.name}, a trading name of ${brand.legalEntity}. What cookies and similar technologies we use.`,
};

export default function CookiePolicy() {
  return (
    <PolicyPage
      title="Cookie Policy"
      intro={
        <>
          This Cookie Policy explains what cookies and similar technologies
          we use on this website, why we use them, and how you can control
          them. It is written to comply with the Privacy and Electronic
          Communications (EC Directive) Regulations 2003 (PECR) and the
          UK GDPR.
        </>
      }
    >
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device
        (computer, tablet or mobile phone) when you visit a website. They
        are widely used to make websites work, or to work more efficiently,
        as well as to provide information to the owners of the site.
        &ldquo;Similar technologies&rdquo; include pixels, web beacons,
        local storage and similar tracking technologies.
      </p>

      <h2>2. The cookies we use</h2>
      <p>
        We aim to keep cookie use on this website to a minimum. We group
        cookies into the following categories.
      </p>

      <h3>Strictly necessary cookies</h3>
      <p>
        These cookies are essential to make this website work. They do
        things like remember your cookie preferences and protect against
        basic security threats. They do not collect information that could
        be used to identify you for marketing. We do not need your consent
        for these cookies, but we still tell you about them.
      </p>

      <h3>Analytics cookies</h3>
      <p>
        If we use analytics tools (for example, to count how many people
        visit this website and which pages they look at), the cookies set
        by those tools are analytics cookies. We only set analytics cookies
        if you have agreed to them through our cookie banner. You can
        withdraw your agreement at any time.
      </p>

      <h3>Marketing cookies</h3>
      <p>
        If we use marketing tools (for example, to measure the performance
        of online advertising campaigns), the cookies set by those tools
        are marketing cookies. We only set marketing cookies if you have
        agreed to them through our cookie banner. You can withdraw your
        agreement at any time.
      </p>

      <p>
        The specific cookies in use on the website at any given time,
        including the name of each cookie, its purpose and how long it
        lasts, are listed in our in-page cookie banner. If you cannot see
        the cookie banner, you can re-open it by clearing your cookies for
        this site in your browser settings, then refreshing the page.
      </p>

      <h2>3. Your consent</h2>
      <p>
        The first time you visit this website you will see a cookie banner.
        The banner lets you accept or reject non-essential cookies. We will
        only set analytics and marketing cookies if you have actively
        agreed to them. You can change your mind at any time by re-opening
        the cookie banner.
      </p>
      <p>
        If you do not make a choice on the banner, we will only set
        strictly necessary cookies.
      </p>

      <h2>4. Managing cookies through your browser</h2>
      <p>
        You can also control cookies through your browser settings. Most
        browsers let you block all cookies, block third-party cookies,
        delete cookies, or be notified when a cookie is being set. Helpful
        guidance is available at:
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647"
            rel="noopener"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
            rel="noopener"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
            rel="noopener"
          >
            Safari (macOS)
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/en-gb/microsoft-edge"
            rel="noopener"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
      <p>
        Blocking all cookies through your browser may affect how this and
        other websites work.
      </p>

      <h2>5. Personal data and cookies</h2>
      <p>
        Some cookies may collect information that counts as personal data
        under the UK GDPR (for example, online identifiers). Where that is
        the case, our <a href="/privacy/">Privacy Policy</a> explains how
        we use that information and what your rights are.
      </p>

      <h2>6. Changes to this policy</h2>
      <p>
        We may update this Cookie Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page will always show when
        we last made a change.
      </p>

      <h2>7. Contact us</h2>
      <p>
        If you have any questions about our use of cookies, please contact
        us:
      </p>
      <ul>
        <li>
          Email: <a href={emailGeneralHref}>{brand.emailGeneral}</a>
        </li>
        <li>
          Phone: <a href={phoneHref}>{brand.phone}</a>
        </li>
        <li>
          Post: {brand.legalEntity}, {brand.registeredOffice}
        </li>
      </ul>
    </PolicyPage>
  );
}
