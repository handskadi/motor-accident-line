import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import {
  brand,
  emailGeneralHref,
  phoneHref,
} from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${brand.name}, a trading name of ${brand.legalEntity}. How we collect, use and share your personal data.`,
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro={
        <>
          This Privacy Policy explains how {brand.legalEntity} (trading as{' '}
          {brand.name}) collects, uses, shares and protects your personal
          data. It is written to comply with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </>
      }
    >
      <h2>1. Who we are</h2>
      <p>
        The data controller responsible for your personal data is{' '}
        <strong>{brand.legalEntity}</strong>, a company registered in England
        and Wales (company number <strong>{brand.companyNumber}</strong>),
        with its registered office at <strong>{brand.registeredOffice}</strong>.
        We trade as <strong>{brand.name}</strong>.
      </p>
      <p>
        We are authorised and regulated by the Financial Conduct Authority
        as a claims management company, Firm Reference Number{' '}
        <strong>{brand.fcaFRN}</strong>, and we are registered with the
        Information Commissioner&apos;s Office, registration number{' '}
        <strong>{brand.icoNumber}</strong>.
      </p>
      <p>
        If you have any questions about this policy or about how we use
        your personal data, you can contact us at:
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

      <h2>2. What personal data we collect</h2>
      <p>
        We collect personal data that you provide to us when you call our
        team or submit an enquiry. This may include:
      </p>
      <ul>
        <li>
          Your name, date of birth, address, postcode, telephone number and
          email address;
        </li>
        <li>
          Details of the road traffic accident, including the date, location,
          vehicles involved and a description of what happened;
        </li>
        <li>
          Details of any injury, vehicle damage or other loss you have
          suffered;
        </li>
        <li>Details of any insurance policy you hold;</li>
        <li>
          Details of the other driver and their insurer, where you know
          them;
        </li>
        <li>Records of our calls and correspondence with you.</li>
      </ul>
      <p>
        We may also collect limited technical data when you visit our
        website (such as your IP address, device information and pages
        visited). See our <a href="/cookies/">Cookie Policy</a> for more
        information.
      </p>

      <h2>3. How we use your personal data and our lawful bases</h2>
      <p>
        We use your personal data only where we have a lawful basis under
        the UK GDPR. The lawful basis depends on the purpose.
      </p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Lawful basis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              To take your enquiry, identify whether a partner may be able
              to help and provide our introducer service
            </td>
            <td>
              Legitimate interests (operating our claims management
              introducer business) and steps to enter a contract at your
              request
            </td>
          </tr>
          <tr>
            <td>
              To share your enquiry with a partner law firm or credit hire
              provider so they can contact you about your potential claim
            </td>
            <td>
              Your consent, given when you ask us to introduce you
            </td>
          </tr>
          <tr>
            <td>
              To keep records of our service, including call recordings and
              notes, for quality, training, regulatory and audit purposes
            </td>
            <td>
              Legitimate interests and legal obligation (FCA record-keeping
              under CMCOB)
            </td>
          </tr>
          <tr>
            <td>To handle complaints or disputes about our service</td>
            <td>
              Legitimate interests and legal obligation (DISP rules)
            </td>
          </tr>
          <tr>
            <td>
              To comply with our legal and regulatory obligations
              (including anti-money laundering, fraud prevention and
              reporting to the FCA, ICO or other authorities)
            </td>
            <td>Legal obligation</td>
          </tr>
          <tr>
            <td>
              To send you marketing communications about our service
            </td>
            <td>
              Your consent (you can withdraw at any time)
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        We do not sell your personal data. We do not use your data for
        automated decision-making or profiling that produces legal or
        similarly significant effects.
      </p>

      <h2>4. Who we share your personal data with</h2>
      <p>
        The whole point of our service is to introduce your enquiry to a
        partner who may be able to help you. With your consent, we share
        the personal data described in section 2 with the following
        categories of recipient:
      </p>
      <ul>
        <li>
          <strong>Partner law firms</strong> on our panel, where you have
          asked us to introduce you for help with a personal injury or
          vehicle damage claim;
        </li>
        <li>
          <strong>Partner credit hire providers</strong> on our panel, where
          you may need a replacement vehicle while yours is being repaired;
        </li>
        <li>
          <strong>Service providers we use to run our business</strong>,
          such as IT and telephony providers, cloud hosting providers and
          customer relationship management (CRM) software providers — these
          act as our processors and only handle your data on our
          instructions;
        </li>
        <li>
          <strong>Professional advisers</strong> such as our accountants,
          auditors and legal advisers;
        </li>
        <li>
          <strong>
            Regulators, law enforcement and other authorities
          </strong>
          , including the FCA, the Information Commissioner&apos;s Office,
          the Financial Ombudsman Service, the police and HMRC, where we
          are legally required to share information.
        </li>
      </ul>
      <p>
        Before we introduce you to a partner, you can ask our team to
        confirm the name of the partner we intend to introduce you to. We
        expect every partner on our panel to handle your data lawfully and
        to give you their own privacy notice when they contact you.
      </p>

      <h2>5. International transfers</h2>
      <p>
        We store and process your personal data in the United Kingdom. We
        do not routinely transfer personal data outside the UK. If we ever
        need to do so (for example, where one of our service providers
        uses servers outside the UK), we will only transfer data to a
        country which has been recognised as providing an adequate level
        of protection, or under safeguards approved under the UK GDPR
        (such as the UK International Data Transfer Agreement or the EU
        Standard Contractual Clauses with the UK Addendum).
      </p>

      <h2>6. How long we keep your personal data</h2>
      <p>
        We only keep your personal data for as long as we need it. The
        retention periods we apply are:
      </p>
      <ul>
        <li>
          <strong>
            If you call us but we do not introduce you to a partner:
          </strong>{' '}
          we keep your contact details and a summary of the enquiry for up
          to 12 months, so we can deal with any follow-up questions and
          demonstrate compliance with our regulatory obligations.
        </li>
        <li>
          <strong>If we introduce you to a partner:</strong> we keep
          records of the introduction (including the basic details of your
          enquiry, the partner we introduced you to and any consent you
          provided) for at least <strong>6 years</strong> from the date of
          the introduction. This is to meet FCA record-keeping requirements
          and the standard limitation period for any potential dispute.
        </li>
        <li>
          <strong>Call recordings:</strong> we keep call recordings for up
          to <strong>12 months</strong> for quality, training, regulatory
          and complaint-handling purposes, unless a longer period is needed
          to deal with a specific complaint or claim.
        </li>
        <li>
          <strong>Marketing consent records:</strong> we keep evidence of
          marketing consent (and any withdrawal of consent) for as long as
          we rely on it, plus 2 years after withdrawal to demonstrate
          compliance.
        </li>
        <li>
          <strong>Complaints records:</strong> we keep records of
          complaints and our investigations for at least{' '}
          <strong>3 years</strong> from final response, in line with FCA
          DISP rules.
        </li>
      </ul>
      <p>
        When the retention period ends, we will either securely delete
        your data or anonymise it so it can no longer be linked to you.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under the UK GDPR you have the following rights in relation to
        your personal data:
      </p>
      <ul>
        <li>
          <strong>Right of access</strong> — you can ask for a copy of the
          personal data we hold about you;
        </li>
        <li>
          <strong>Right to rectification</strong> — you can ask us to
          correct inaccurate or incomplete data;
        </li>
        <li>
          <strong>Right to erasure</strong> (&ldquo;right to be
          forgotten&rdquo;) — you can ask us to delete your data in certain
          circumstances;
        </li>
        <li>
          <strong>Right to restrict processing</strong> — you can ask us
          to stop using your data in certain circumstances;
        </li>
        <li>
          <strong>Right to data portability</strong> — you can ask us to
          provide your data in a structured, commonly used,
          machine-readable format;
        </li>
        <li>
          <strong>Right to object</strong> — you can object to processing
          we carry out on the basis of legitimate interests, and to direct
          marketing at any time;
        </li>
        <li>
          <strong>Right to withdraw consent</strong> — where we rely on
          your consent, you can withdraw it at any time. Withdrawing
          consent does not affect the lawfulness of any processing we
          carried out before you withdrew it.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us using the
        details in section 1. We will respond within one month. We will
        not charge you for exercising your rights, except in very limited
        circumstances (for example, if the request is clearly unfounded or
        excessive). We may need to ask you for proof of identity before
        we can act on a request.
      </p>

      <h2>8. Marketing</h2>
      <p>
        We will only send you marketing communications if you have given
        us your consent. You can withdraw your marketing consent at any
        time by emailing <a href={emailGeneralHref}>{brand.emailGeneral}</a>
        , by calling us on <a href={phoneHref}>{brand.phone}</a>, or by
        using the unsubscribe link in any marketing email. We respect the
        Telephone Preference Service (TPS) register and will not make
        unsolicited marketing calls to TPS-registered numbers unless we
        have specific consent to do so.
      </p>

      <h2>9. Security</h2>
      <p>
        We use appropriate technical and organisational measures to keep
        your personal data secure, including access controls, encryption
        in transit, password policies and regular review of our systems.
        If we ever become aware of a personal data breach which is likely
        to result in a risk to your rights and freedoms, we will notify
        the Information Commissioner&apos;s Office within 72 hours and,
        where required, will inform you directly.
      </p>

      <h2>10. Your right to complain</h2>
      <p>
        If you are unhappy with how we have handled your personal data,
        please contact us first using the details in section 1, so we can
        try to put things right. You also have the right to complain to
        the Information Commissioner&apos;s Office (ICO) at any time:
      </p>
      <ul>
        <li>
          Website:{' '}
          <a href="https://ico.org.uk" rel="noopener">
            ico.org.uk
          </a>
        </li>
        <li>Helpline: 0303 123 1113</li>
        <li>
          Post: Information Commissioner&apos;s Office, Wycliffe House,
          Water Lane, Wilmslow, Cheshire, SK9 5AF
        </li>
      </ul>
      <p>
        If your complaint is about our service more generally (not just
        about our handling of your data), please see our{' '}
        <a href="/complaints/">Complaints procedure</a>.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time, for example
        to reflect changes in the law or in how we operate our service.
        The &ldquo;Last updated&rdquo; date at the top of this page will
        always show when we last made a change. Material changes will be
        highlighted on our website or notified to you directly where
        appropriate.
      </p>
    </PolicyPage>
  );
}
