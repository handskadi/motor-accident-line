import type { Metadata } from 'next';
import PolicyPage from '@/components/PolicyPage';
import {
  brand,
  emailComplaintsHref,
  phoneHref,
} from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Complaints procedure',
  description: `Complaints procedure for ${brand.name}, a trading name of ${brand.legalEntity}. How to complain and how we handle complaints.`,
};

export default function Complaints() {
  return (
    <PolicyPage
      title="Complaints procedure"
      intro={
        <>
          We are committed to providing a high-quality introducer service.
          If something has gone wrong, we want to hear about it so we can
          put it right and learn from it. This procedure explains how to
          make a complaint and how we handle complaints, in line with the
          Financial Conduct Authority&apos;s DISP rules.
        </>
      }
    >
      <h2>1. What this procedure covers</h2>
      <p>
        This procedure applies to complaints about the service provided by{' '}
        <strong>{brand.name}</strong> (a trading name of {brand.legalEntity}).
        For example, you might complain about:
      </p>
      <ul>
        <li>how a member of our team spoke to you or treated you;</li>
        <li>information we gave you about our service;</li>
        <li>how we handled your personal data;</li>
        <li>
          the decision to introduce you (or not to introduce you) to a
          partner.
        </li>
      </ul>
      <p>
        If your complaint is about a <strong>partner law firm</strong> or a{' '}
        <strong>partner credit hire provider</strong> (for example, about
        the quality of legal advice, about a credit hire agreement, or
        about how that partner has handled your claim), you will need to
        complain to that partner directly. They are each required to have
        their own complaints procedure. If you tell us about a complaint
        relating to a partner, we will pass it on to them, but the partner
        will then deal with the complaint itself.
      </p>

      <h2>2. How to complain</h2>
      <p>
        You can make a complaint by any of the following means. We will
        accept complaints in any reasonable form, including verbally.
      </p>
      <ul>
        <li>
          <strong>By phone:</strong> <a href={phoneHref}>{brand.phone}</a>
        </li>
        <li>
          <strong>By email:</strong>{' '}
          <a href={emailComplaintsHref}>{brand.emailComplaints}</a> (please
          put &ldquo;Complaint&rdquo; in the subject line)
        </li>
        <li>
          <strong>By post:</strong> The Complaints Manager,{' '}
          {brand.legalEntity}, {brand.registeredOffice}
        </li>
      </ul>
      <p>
        To help us look into your complaint quickly, please tell us:
      </p>
      <ul>
        <li>your full name, address and contact details;</li>
        <li>what happened and when;</li>
        <li>the names of any of our staff involved, if you know them;</li>
        <li>what you would like us to do to put things right;</li>
        <li>a daytime telephone number on which we can reach you.</li>
      </ul>
      <p>
        We will not charge you for making a complaint. You do not need to
        use a claims management company, solicitor or any other paid
        representative to complain to us.
      </p>

      <h2>3. How we will handle your complaint</h2>
      <p>
        The FCA&apos;s DISP rules set the standards we follow. The key
        time limits are:
      </p>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>What we will do</th>
            <th>By when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acknowledgement</td>
            <td>
              We will send you written acknowledgement of your complaint,
              confirming the name and job title of the person who will be
              dealing with it.
            </td>
            <td>
              Promptly, normally within 5 business days of receiving your
              complaint
            </td>
          </tr>
          <tr>
            <td>Investigation</td>
            <td>
              We will investigate the complaint fairly and impartially.
              We may contact you to ask for more information or to clarify
              what happened.
            </td>
            <td>As quickly as possible</td>
          </tr>
          <tr>
            <td>Update</td>
            <td>
              If we cannot resolve your complaint within 4 weeks, we will
              send you a written update telling you why we still need more
              time and when we expect to provide our final response.
            </td>
            <td>Within 4 weeks of receiving your complaint</td>
          </tr>
          <tr>
            <td>Final response</td>
            <td>
              We will send you a written final response. It will set out
              our decision, the reasons for it, and any offer of redress
              (such as an apology, an explanation or financial compensation).
              It will also explain your right to refer the matter to the
              Financial Ombudsman Service.
            </td>
            <td>
              By the end of <strong>8 weeks</strong> from the date we
              received your complaint, at the latest
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        If we are unable to provide a final response within 8 weeks, we
        will write to you to explain why, and tell you when we expect to
        be able to do so. At that point, you will also have the right to
        refer the matter to the Financial Ombudsman Service.
      </p>

      <h2>4. If you are not satisfied with our response</h2>
      <p>
        If you are unhappy with our final response, or if we have not given
        you a final response within 8 weeks, you may be able to refer your
        complaint to the <strong>Financial Ombudsman Service</strong>. The
        Financial Ombudsman Service is an independent body that resolves
        disputes between consumers and financial services firms (including
        FCA-authorised claims management companies). Its service is free
        for consumers.
      </p>
      <p>
        You normally need to refer your complaint to the Financial
        Ombudsman Service within <strong>6 months</strong> of the date of
        our final response letter. You should send a copy of our final
        response letter with your referral. You can contact the Financial
        Ombudsman Service as follows:
      </p>
      <ul>
        <li>
          Website:{' '}
          <a
            href="https://www.financial-ombudsman.org.uk"
            rel="noopener"
          >
            financial-ombudsman.org.uk
          </a>
        </li>
        <li>
          Phone: 0800 023 4567 (free from UK landlines and mobiles) or
          0300 123 9123
        </li>
        <li>
          Email:{' '}
          <a href="mailto:complaint.info@financial-ombudsman.org.uk">
            complaint.info@financial-ombudsman.org.uk
          </a>
        </li>
        <li>
          Post: Financial Ombudsman Service, Exchange Tower, London, E14
          9SR
        </li>
      </ul>
      <p>
        The Financial Ombudsman Service will look at the facts
        independently and decide what (if anything) we should do to put
        things right. Its decision is binding on us if you accept it.
      </p>

      <h2>5. Complaints about how we use your personal data</h2>
      <p>
        If your complaint is specifically about how we have used your
        personal data, you can also complain directly to the Information
        Commissioner&apos;s Office (ICO) at any time, although we would
        ask you to give us the chance to put things right first. You can
        contact the ICO at{' '}
        <a href="https://ico.org.uk" rel="noopener">
          ico.org.uk
        </a>{' '}
        or on 0303 123 1113.
      </p>

      <h2>6. Our records</h2>
      <p>
        We keep records of all complaints (whether resolved informally or
        formally) for at least 3 years from the date of our final
        response, in line with the FCA&apos;s DISP rules. We use complaint
        records to monitor the quality of our service and to identify any
        changes we need to make.
      </p>
    </PolicyPage>
  );
}
