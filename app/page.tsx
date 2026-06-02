import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneButton from '@/components/PhoneButton';
import {
  ShieldFeatureIcon,
  HeadsetIcon,
  CarIcon,
} from '@/components/Icons';
import { brand, emailGeneralHref, phoneHref } from '@/lib/brand';

export default function HomePage() {
  return (
    <>
      <Header variant="home" />

      <div className="strip">
        We are a claims management introducer. We refer enquiries to partner
        law firms and credit hire providers. Authorised and regulated by the
        FCA (FRN {brand.fcaFRN}).
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <h1>Start a car accident claim</h1>
          <p className="lead">
            Been involved in a road traffic accident? Call our UK-based team.
            We will take a few details and, where appropriate, introduce you
            to one of our partner law firms or credit hire providers, who can
            then discuss your options with you directly.
          </p>
          <div className="hero-cta">
            <div className="caption">Start your claim by phone</div>
            <PhoneButton />
            <p className="footnote">
              Speak to our team now. No obligation to continue.
            </p>
          </div>
        </div>
      </section>

      {/* Features row */}
      <section className="features">
        <div className="wrap-wide">
          <div className="features-grid">
            <div className="feature">
              <div className="ico" aria-hidden="true">
                <ShieldFeatureIcon />
              </div>
              <h3>Fast first response</h3>
              <p>Get clear guidance quickly after an accident.</p>
            </div>
            <div className="feature">
              <div className="ico" aria-hidden="true">
                <HeadsetIcon />
              </div>
              <h3>UK-based call centre</h3>
              <p>
                Speak with our team who will take your details and explain
                next steps.
              </p>
            </div>
            <div className="feature">
              <div className="ico" aria-hidden="true">
                <CarIcon />
              </div>
              <h3>Partner panel</h3>
              <p>
                Introductions to vetted partner law firms and credit hire
                providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How our service works (CMCOB 2.1 introducer disclosures) */}
      <section>
        <div className="wrap prose">
          <h2 className="h2" style={{ textAlign: 'left' }}>
            How our service works
          </h2>
          <p>
            {brand.name} is a trading name of {brand.legalEntity}. We are a
            claims management introducer authorised and regulated by the
            Financial Conduct Authority (FRN {brand.fcaFRN}). We are not a
            law firm, we are not a solicitor, and we do not provide legal
            advice or represent you in a claim.
          </p>
          <p>
            When you call us, our team will take some basic details about
            your accident. If we believe a partner may be able to help you,
            we will introduce your enquiry to one of our panel law firms or
            panel credit hire providers. That partner will then contact you
            directly to discuss your options, costs and any agreement they
            may wish to offer you. You are under no obligation to use the
            partner we introduce.
          </p>
          <p>
            <strong>Using our introducer service is free for you.</strong>{' '}
            We are paid a referral fee by our partners. The fee is paid by
            the partner, not by you. Any fees charged by the partner you
            speak to for their own services (for example, by a law firm
            under a no-win-no-fee agreement) will be explained to you by
            that partner before you agree to anything.
          </p>
          <p>
            <strong>You do not have to use a claims management company.</strong>{' '}
            You can pursue a motor accident claim yourself, free of charge,
            by contacting the at-fault driver&apos;s insurer directly, by
            approaching a solicitor of your choice, or by using the{' '}
            <a
              href="https://www.officialinjuryclaim.org.uk"
              rel="noopener"
            >
              Official Injury Claim service
            </a>{' '}
            for low-value injury claims. You have the same legal rights
            whether you use a claims management company or not.
          </p>
          <PhoneButton
            variant="outline"
            label={`Speak to our team — ${brand.phone}`}
          />
        </div>
      </section>

      {/* How we help */}
      <section className="how">
        <div className="wrap-wide">
          <h2 className="h2">How we help</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Tell us what happened</h3>
              <p>
                Call our UK-based team and give a few details about the
                accident, the vehicles involved and your current situation.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>We assess your enquiry</h3>
              <p>
                We look at the basic details and check whether a partner law
                firm or credit hire provider may be able to help.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>We introduce you to a partner</h3>
              <p>
                If appropriate, we pass your enquiry to one of our panel
                partners. They will contact you directly to discuss your
                options, any costs, and any agreement you would need to sign.
              </p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h3>You decide what to do next</h3>
              <p>
                You are under no obligation to proceed. You can use the
                partner we introduce, instruct a different solicitor, or
                pursue your claim yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / partner offering */}
      <section>
        <div className="wrap-wide">
          <h2 className="h2">What our partners can help with</h2>
          <p className="lede">
            The services listed below are provided by our partner law firms
            and partner credit hire providers, not by {brand.name} directly.
            We introduce your enquiry; the partner you are introduced to
            will explain their service, any costs and any agreement directly
            with you.
          </p>
          <div className="services-grid">
            <div className="service">
              <h3>Personal injury claims</h3>
              <p>
                Partner law firms may be able to assist with personal injury
                claims arising from a road traffic accident, including via
                the Official Injury Claim service.
              </p>
            </div>
            <div className="service">
              <h3>Vehicle damage claims</h3>
              <p>
                Partner law firms may assist with claims for repair costs,
                diminution in value and other losses connected to vehicle
                damage.
              </p>
            </div>
            <div className="service">
              <h3>Credit hire (replacement vehicle)</h3>
              <p>
                Partner credit hire providers may offer a like-for-like
                replacement vehicle while your vehicle is being repaired,
                subject to their eligibility checks and their own agreement
                with you.
              </p>
            </div>
            <div className="service">
              <h3>Vehicle recovery and storage</h3>
              <p>
                Where a vehicle is not roadworthy after an accident, partners
                may be able to arrange recovery and storage as part of their
                service.
              </p>
            </div>
            <div className="service">
              <h3>Non-fault accident enquiries</h3>
              <p>
                If another driver caused the accident, partners may be able
                to help recover your losses from the at-fault driver&apos;s
                insurer.
              </p>
            </div>
            <div className="service">
              <h3>Existing claim queries</h3>
              <p>
                If you have already reported the accident or started a
                claim, you can still call us and we will explain whether a
                partner may be able to help, or whether you should continue
                with your current arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="ready">
        <div className="wrap center">
          <h2 className="h2">Speak with our team</h2>
          <p className="lede">
            Call us and we will explain how our introducer service works and
            whether a partner may be able to help.
          </p>
          <PhoneButton />
          <p className="footnote">
            Our service is free for you to use. There is no obligation to
            proceed.
          </p>
        </div>
      </section>

      {/* Not your fault */}
      <section>
        <div className="wrap prose">
          <h2 className="h2" style={{ textAlign: 'left' }}>
            Had an accident that was not your fault?
          </h2>
          <p>
            If another driver caused the accident, our partner law firms and
            partner credit hire providers may be able to help recover your
            losses from the at-fault driver&apos;s insurer. Call us and our
            team will take some basic details and explain whether a partner
            may be able to help. Any agreement, fee or service the partner
            offers will be explained by them directly, in writing, before
            you sign anything.
          </p>
          <PhoneButton
            variant="outline"
            label={`Call us to discuss your accident — ${brand.phone}`}
          />
          <p
            style={{
              marginTop: '12px',
              fontSize: '13px',
              color: 'var(--gray-500)',
            }}
          >
            You do not have to use a claims management company. You can
            pursue a claim yourself, free of charge, by contacting the
            at-fault driver&apos;s insurer or by using the{' '}
            <a
              href="https://www.officialinjuryclaim.org.uk"
              rel="noopener"
            >
              Official Injury Claim service
            </a>{' '}
            for low-value injuries.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <h2 className="h2">Frequently asked questions</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                Are you a law firm or my insurer?<span className="plus">+</span>
              </summary>
              <div className="answer">
                No. {brand.name} is a trading name of {brand.legalEntity}.
                We are a claims management introducer authorised and
                regulated by the Financial Conduct Authority. We are not a
                law firm, we are not a solicitor, and we are not your
                insurer. We introduce enquiries to partner law firms and
                partner credit hire providers, who then deal with you
                directly.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Do you charge me a fee?<span className="plus">+</span>
              </summary>
              <div className="answer">
                No. Our introducer service is free for you to use. We are
                paid a referral fee by the partner law firm or credit hire
                provider we introduce you to. That referral fee is paid by
                the partner, not by you. Any fees the partner charges you
                for their own services (for example, a success fee under a
                no-win-no-fee agreement) will be explained to you by that
                partner in writing before you sign anything.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Do I have to use the partner you introduce?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                No. You are under no obligation to use the partner we
                introduce. You can choose to instruct a different solicitor,
                deal with the at-fault driver&apos;s insurer directly, use
                the Official Injury Claim service for low-value injury
                claims, or pursue your claim yourself. Your legal rights
                are the same either way.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Will you tell me who you are referring me to?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Yes. Before we pass your enquiry to a partner, you can ask
                our team to confirm the name of the law firm or credit hire
                provider we intend to introduce you to. The partner will
                then contact you and identify themselves clearly.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                What information will you share with the partner?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                With your consent, we share the personal information you
                give us — for example, your name, contact details and the
                basic facts of the accident — with the partner we introduce
                you to, so they can contact you about your claim. We do not
                sell your data. Full details are set out in our{' '}
                <a href="/privacy/">Privacy Policy</a>.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Can I change my mind after I have been referred?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Yes. You can withdraw at any time before you sign an
                agreement with the partner. If you sign a contract with
                the partner law firm or credit hire provider, that
                partner&apos;s own cancellation terms (including any
                statutory 14-day cooling-off period for distance contracts)
                will apply. The partner is required to explain these to you.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                Can I still contact my own insurer?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                Yes. You can contact your own insurer directly at any time.
                Speaking with us does not prevent or replace that. Your
                insurance policy may require you to notify your insurer of
                the accident regardless of any claim you bring against the
                other driver.
              </div>
            </details>
            <details className="faq-item">
              <summary>
                How do I make a complaint about your service?
                <span className="plus">+</span>
              </summary>
              <div className="answer">
                If you are unhappy with our service, please see our{' '}
                <a href="/complaints/">Complaints procedure</a>. If we
                cannot resolve your complaint within eight weeks, or if you
                are unhappy with our final response, you may be able to
                refer your complaint to the Financial Ombudsman Service
                free of charge.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Blue CTA */}
      <section className="blue-cta">
        <div className="wrap center">
          <h2 className="h2">Start by phone</h2>
          <p className="lede">
            Our UK-based team will take a few details and explain whether
            one of our partners may be able to help.
          </p>
          <PhoneButton />
          <p className="footnote">
            Claims management introducer authorised and regulated by the
            Financial Conduct Authority (FRN {brand.fcaFRN}). Our service is
            free for you to use. You do not have to use a claims management
            company; you can pursue a claim yourself.
          </p>
        </div>
      </section>

      <Footer variant="home" />
    </>
  );
}
