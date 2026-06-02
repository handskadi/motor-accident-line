import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import {
  brand,
  emailGeneralHref,
  phoneHref,
} from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Website Terms of Use and Service Terms for ${brand.name}, a trading name of ${brand.legalEntity}.`,
};

export default function TermsOfService() {
  return (
    <PolicyPage
      title="Terms of Service"
      intro={
        <>
          These terms govern your use of this website and our introducer
          service. Please read them carefully. By using this website or by
          calling our team, you agree to these terms.
        </>
      }
    >
      <h2>1. About us</h2>
      <p>
        This website is operated by <strong>{brand.legalEntity}</strong>, a
        company registered in England and Wales (company number{' '}
        <strong>{brand.companyNumber}</strong>), with its registered office
        at {brand.registeredOffice}. We trade as <strong>{brand.name}</strong>.
        In these terms, &ldquo;we&rdquo;, &ldquo;us&rdquo; and
        &ldquo;our&rdquo; refer to {brand.legalEntity}.
      </p>
      <p>
        We are authorised and regulated by the Financial Conduct Authority
        as a claims management company under Firm Reference Number{' '}
        <strong>{brand.fcaFRN}</strong>. You can verify this on the FCA
        Financial Services Register at{' '}
        <a href="https://register.fca.org.uk" rel="noopener">
          register.fca.org.uk
        </a>
        .
      </p>

      <h2>2. The nature of our service</h2>
      <p>
        We are a <strong>claims management introducer</strong>. When you
        call us, our team takes some basic details about your road traffic
        accident and, where appropriate, introduces your enquiry to one of
        our panel partners. Our service is limited to that introduction.
      </p>
      <p>
        <strong>
          We are not a law firm and we are not a firm of solicitors.
        </strong>{' '}
        We do not provide legal advice, legal services or representation.
        We do not act for you in your claim. We do not investigate the
        merits of your claim, value your claim or negotiate on your behalf
        with any insurer or other party.
      </p>
      <p>
        If you would like legal advice, please contact a solicitor of your
        choice. You can find a solicitor authorised by the Solicitors
        Regulation Authority at{' '}
        <a href="https://www.sra.org.uk" rel="noopener">
          sra.org.uk
        </a>
        .
      </p>

      <h2>3. Our partners</h2>
      <p>
        We operate a panel of partner law firms and partner credit hire
        providers. With your consent, we may introduce your enquiry to one
        of these partners so that the partner can contact you directly to
        discuss your potential claim, their service and any agreement they
        may wish to enter into with you.
      </p>
      <p>
        Each partner is a separate business. Each partner is responsible
        for their own service, their own advice and the terms of any
        agreement they enter into with you. We are not party to the
        agreement you enter into with a partner, and we are not responsible
        for the acts or omissions of any partner.
      </p>
      <p>
        Before we make an introduction, you can ask us to confirm the name
        of the partner we intend to introduce you to. You are under no
        obligation to accept the introduction. You can choose to use a
        different solicitor or credit hire provider, or to pursue a claim
        yourself.
      </p>

      <h2>4. Fees — our service is free for you</h2>
      <p>
        Our introducer service is provided to you free of charge. We do
        not take payment from you and you do not have to pay us for the
        introduction.
      </p>
      <p>
        We are paid a referral fee by the partner we introduce you to. The
        amount of that referral fee, and the basis on which it is
        calculated, varies between partners and between case types. The
        referral fee is paid by the partner, not by you, and is not added
        to any amount that you may recover or pay in your claim.
      </p>
      <p>
        Any fees, charges or other costs that a partner may charge you for
        their own service (for example, a success fee under a no-win-no-fee
        agreement, or hire charges payable in certain circumstances under
        a credit hire agreement) are a matter between you and that partner.
        The partner is required to explain those fees to you clearly and
        in writing before you sign any agreement with them.
      </p>

      <h2>5. You do not have to use a claims management company</h2>
      <p>
        You can make a road traffic accident claim yourself without using
        us, without using any of our partners, and without using a claims
        management company at all. You can:
      </p>
      <ul>
        <li>contact the at-fault driver&apos;s insurer directly;</li>
        <li>
          contact your own insurer and ask them to handle the claim on
          your behalf;
        </li>
        <li>
          use the{' '}
          <a
            href="https://www.officialinjuryclaim.org.uk"
            rel="noopener"
          >
            Official Injury Claim service
          </a>{' '}
          for low-value personal injury claims arising from road traffic
          accidents;
        </li>
        <li>instruct a solicitor of your choice.</li>
      </ul>
      <p>
        Your legal rights are the same whether or not you use a claims
        management company or any of our partners. There is no advantage
        in terms of your legal rights to using our service or our
        partners.
      </p>

      <h2>6. Cancelling our service or withdrawing your enquiry</h2>
      <p>
        You can withdraw your enquiry at any time before we make an
        introduction by calling us on <a href={phoneHref}>{brand.phone}</a>{' '}
        or emailing <a href={emailGeneralHref}>{brand.emailGeneral}</a>.
        If we have already made an introduction, we will let the partner
        know that you no longer wish to proceed, although the partner may
        still have a copy of your enquiry data.
      </p>
      <p>
        If you enter into an agreement with a partner, that partner is
        required to explain their own cancellation terms to you. For
        distance contracts (for example, an agreement set up over the
        phone or online), you will normally have a statutory right to
        cancel within 14 days under the Consumer Contracts (Information,
        Cancellation and Additional Charges) Regulations 2013. The partner
        is responsible for telling you about this and giving you a
        cancellation form.
      </p>

      <h2>7. Use of this website</h2>
      <p>You may use this website only for lawful purposes. You must not use this website:</p>
      <ul>
        <li>
          in any way that breaches any applicable local, national or
          international law or regulation;
        </li>
        <li>
          in any way that is fraudulent, or that has any fraudulent purpose
          or effect;
        </li>
        <li>
          to send or upload any unsolicited or unauthorised advertising or
          promotional material;
        </li>
        <li>
          to knowingly transmit any data, or send or upload any material
          that contains viruses, trojans, worms or any other harmful
          programs or similar computer code designed to adversely affect
          the operation of any computer software or hardware.
        </li>
      </ul>
      <p>
        The content of this website is provided for general information
        only. While we make reasonable efforts to keep it accurate and up
        to date, we do not give any warranty that the content is accurate,
        complete or current. Nothing on this website is legal advice. You
        should not rely on the content of this website as a substitute for
        advice from a solicitor or other professional adviser.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        We are the owner or licensee of all intellectual property rights
        in this website and the material published on it. Those works are
        protected by copyright laws and treaties around the world. All
        such rights are reserved. You may print one copy and download
        extracts of any page on this website for your personal reference,
        but you must not use any part of the content for commercial
        purposes without first obtaining our written permission.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        Nothing in these terms excludes or limits our liability for: (a)
        death or personal injury caused by our negligence; (b) fraud or
        fraudulent misrepresentation; or (c) any other liability that
        cannot be excluded or limited under English law.
      </p>
      <p>Subject to the paragraph above:</p>
      <ul>
        <li>
          we are not responsible for the acts, omissions, advice or
          services of any partner law firm, partner credit hire provider,
          solicitor, insurer or other third party that you may be
          introduced to or instruct;
        </li>
        <li>
          we do not warrant that this website will be uninterrupted,
          error-free or free of viruses;
        </li>
        <li>
          to the maximum extent permitted by law, our total liability to
          you in connection with our introducer service or this website is
          limited to £100.
        </li>
      </ul>
      <p>This clause does not affect your statutory rights as a consumer.</p>

      <h2>10. Complaints</h2>
      <p>
        If you are unhappy with our service, please see our{' '}
        <a href="/complaints/">Complaints procedure</a>. We are committed
        to dealing with complaints fairly, promptly and in line with the
        Financial Conduct Authority&apos;s DISP rules. If we cannot
        resolve your complaint within eight weeks, or if you are unhappy
        with our final response, you may be able to refer your complaint
        to the Financial Ombudsman Service free of charge.
      </p>

      <h2>11. Privacy and data protection</h2>
      <p>
        Our use of personal data is explained in our{' '}
        <a href="/privacy/">Privacy Policy</a>, which forms part of these
        terms. Our use of cookies is explained in our{' '}
        <a href="/cookies/">Cookie Policy</a>.
      </p>

      <h2>12. Calls may be recorded</h2>
      <p>
        Telephone calls to and from our team may be recorded for quality,
        training, regulatory and complaint-handling purposes. By calling
        us, you consent to your call being recorded. You can ask for a
        copy of any recording of your own calls under the right of access
        in the UK GDPR — see our <a href="/privacy/">Privacy Policy</a>.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may amend these terms from time to time. The version that
        applies to you is the version in force on the date you use this
        website or our service. The &ldquo;Last updated&rdquo; date at
        the top of this page will show when we last made a change.
      </p>

      <h2>14. Governing law and jurisdiction</h2>
      <p>
        These terms, their subject matter and their formation are governed
        by the laws of England and Wales. You and we both agree that the
        courts of England and Wales have exclusive jurisdiction to settle
        any dispute arising out of or in connection with these terms,
        except that if you live in Scotland or Northern Ireland you can
        also bring proceedings in your local courts.
      </p>

      <h2>15. Contact us</h2>
      <p>If you have any questions about these terms, please contact us:</p>
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
