/* ================================================================ */
/* HOMEPAGE                                                          */
/* Everything below is plain content in JSX — search for "EDIT:" to  */
/* find the spots meant to be changed as the business evolves.       */
/* ================================================================ */
export default async function Home({ searchParams }) {
  const params = (await searchParams) || {};
  const hasError = params.error === "1";

  return (
    <main id="home">
      {/* ================================================================ */}
      {/* HERO                                                              */}
      {/* EDIT: headline, subhead, and the three badge stats below.        */}
      {/* ================================================================ */}
      <section className="hero">
        <div className="hero-blob hero-blob--a" aria-hidden="true"></div>
        <div className="hero-blob hero-blob--b" aria-hidden="true"></div>

        <div className="wrap hero-inner">
          <p className="eyebrow reveal">Editing for Health-Science Students</p>

          <h1 className="hero-title reveal">
            Your ideas. Your voice.
            <span className="hero-title-accent">
              Clearer on the page.
              <svg className="pencil-underline" viewBox="0 0 420 40" preserveAspectRatio="none" aria-hidden="true">
                <path d="M6 24C60 6 140 6 210 20C280 34 340 8 414 16" />
              </svg>
            </span>
          </h1>

          <p className="hero-sub reveal">
            ClarityRx is specialized editing for nursing, pre&#8209;med, pre&#8209;pharmacy, and allied health students
            — refining your SOAP notes, care plans, and clinical writing for structure and accuracy,
            without rewriting your argument for you.
          </p>

          <div className="hero-actions reveal">
            <a href="#contact" className="btn btn-primary magnetic">Get Started</a>
            <a href="#how-it-works" className="btn btn-ghost magnetic">See how it works</a>
          </div>

          <ul className="hero-badges reveal" aria-label="Highlights">
            <li><span className="badge-num">PharmD</span>Trained Editor</li>
            <li><span className="badge-num">48hr</span>Average Turnaround</li>
            <li><span className="badge-num">100%</span>Your Own Words</li>
          </ul>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT I DO                                                         */}
      {/* EDIT: the four document-type cards.                               */}
      {/* ================================================================ */}
      <section className="section" id="what-i-do">
        <div className="wrap">
          <p className="section-label reveal"><span>01</span> What I Do</p>
          <h2 className="section-title reveal">Four document types. One standard of care.</h2>

          <div className="card-grid">
            <article className="card reveal">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M10 6h28v36H10z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 16h16M16 23h16M16 30h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <h3>SOAP Notes</h3>
              <p>Subjective, objective, assessment, plan — refined for required structure and clinical accuracy without losing your clinical reasoning.</p>
            </article>

            <article className="card reveal">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M24 6l16 8v14c0 10-7 16-16 20-9-4-16-10-16-20V14z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M17 24l5 5 9-11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <h3>Care Plans</h3>
              <p>Nursing care plans reviewed for correct sequencing, NANDA-aligned language, and a logical flow from diagnosis to evaluation.</p>
            </article>

            <article className="card reveal">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M18 4h12l2 8h-16z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M16 12l-8 26a4 4 0 004 6h24a4 4 0 004-6l-8-26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 30h20" stroke="currentColor" strokeWidth="2"/></svg>
              </span>
              <h3>Pharmacology Case Studies</h3>
              <p>Drug-therapy case studies checked for dosage-citation accuracy, terminology, and clinical logic — line by line.</p>
            </article>

            <article className="card reveal">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M8 8h32v32H8z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M14 16h20M14 23h20M14 30h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
              <h3>Reflections &amp; Literature Reviews</h3>
              <p>Clinical reflections and literature reviews polished for clarity and academic tone, while your analysis stays entirely yours.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS                                                      */}
      {/* EDIT: the four process steps. Each has its own icon + accent      */}
      {/* color (--step-color) so the stages read as distinct elements.    */}
      {/* ================================================================ */}
      <section className="section section--alt" id="how-it-works">
        <div className="wrap">
          <p className="section-label reveal"><span>02</span> How It Works</p>
          <h2 className="section-title reveal">A same-week process, start to finish.</h2>

          <div className="process">
            <div className="process-step reveal" style={{ "--step-color": "var(--plum)" }}>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M24 6v24M14 16l10-10 10 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 30v8a3 3 0 003 3h24a3 3 0 003-3v-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="process-index">01</span>
              <h3>Submit</h3>
              <p>Upload your draft along with the assignment guidelines or rubric.</p>
              <svg className="step-connector" viewBox="0 0 60 24" aria-hidden="true"><path d="M2 12h48M42 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="process-step reveal" style={{ "--step-color": "var(--blush-deep)" }}>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M31 6l11 11-22 22-13 3 3-13z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M26 11l11 11" stroke="currentColor" strokeWidth="2.5"/></svg>
              </span>
              <span className="process-index">02</span>
              <h3>Edit</h3>
              <p>I review the document for structure, clinical accuracy, and clarity — marking changes, not rewriting your voice.</p>
              <svg className="step-connector" viewBox="0 0 60 24" aria-hidden="true"><path d="M2 12h48M42 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="process-step reveal" style={{ "--step-color": "var(--sage)" }}>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><circle cx="21" cy="21" r="13" fill="none" stroke="currentColor" strokeWidth="2.5"/><path d="M30.5 30.5L40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><path d="M15 21l4 4 8-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="process-index">03</span>
              <h3>Review</h3>
              <p>You receive a tracked-changes version plus a short summary of what was adjusted and why.</p>
              <svg className="step-connector" viewBox="0 0 60 24" aria-hidden="true"><path d="M2 12h48M42 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="process-step reveal" style={{ "--step-color": "var(--ink)" }}>
              <span className="step-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48"><path d="M6 22l16-16 20 20-16 16z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M6 22l6 20 20-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="17" cy="17" r="2.4" fill="currentColor"/></svg>
              </span>
              <span className="process-index">04</span>
              <h3>Deliver</h3>
              <p>Final, polished document delivered on a same-week turnaround — ready for submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CLARITYRX                                                     */}
      {/* ================================================================ */}
      <section className="section" id="why">
        <div className="wrap why-grid">
          <div className="reveal">
            <p className="section-label"><span>03</span> Why ClarityRx</p>
            <h2 className="section-title">Edited by someone who understands the medicine — not just the sentence.</h2>
            <p className="lede">
              A generalist editor can fix grammar and flow. They won&rsquo;t necessarily know that a SOAP note
              follows a required structure, that a drug-dosage citation matters, or that a care plan&rsquo;s
              clinical reasoning needs to follow a specific sequence. ClarityRx is built on PharmD training,
              which means the clinical content itself gets read — not just the sentences around it.
            </p>
            <p className="lede">
              That matters more than ever as AI drafting tools become part of how students write:
              AI-generated clinical content can quietly contain terminology errors, incorrect drug
              interactions, or flawed clinical logic. ClarityRx provides the subject-matter-expert
              check that catches what a generalist — human or AI — would miss.
            </p>
          </div>

          <div className="why-list reveal">
            <div className="why-item">
              <h3>Saves time under deadline pressure</h3>
              <p>Same-week turnaround on documents you&rsquo;d otherwise spend hours second-guessing.</p>
            </div>
            <div className="why-item">
              <h3>Improves grades through structural correctness</h3>
              <p>Format compliance — SOAP structure, care-plan sequencing, citation style — gets caught before submission, not after a grade is docked.</p>
            </div>
            <div className="why-item">
              <h3>Builds confidence for ESL &amp; international students</h3>
              <p>Clarity on academic English and clinical terminology, addressed together in one service.</p>
            </div>
            <div className="why-item">
              <h3>A safety net for AI-assisted drafts</h3>
              <p>A human, subject-matter-expert check that catches clinical inaccuracies AI can introduce silently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SAMPLES (before / after)                                          */}
      {/* EDIT: replace each placeholder card once real samples are ready. */}
      {/* ================================================================ */}
      <section className="section section--alt" id="samples">
        <div className="wrap">
          <p className="section-label reveal"><span>04</span> Samples</p>
          <h2 className="section-title reveal">Anonymized before &amp; after work</h2>
          <p className="lede reveal">A few real edits, side by side — names and identifying details removed. Added soon.</p>

          <div className="card-grid card-grid--3">
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>SOAP Note</h3>
              <p>Before &amp; after: structure and assessment-language edits on a real student SOAP note.</p>
            </article>
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>Nursing Care Plan</h3>
              <p>Before &amp; after: sequencing and NANDA-aligned language edits on a care plan.</p>
            </article>
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>Pharmacology Case Study</h3>
              <p>Before &amp; after: dosage-citation and clinical-logic edits on a case study.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DRAFTS (templates / worked examples)                              */}
      {/* EDIT: replace with real downloadable templates when ready.       */}
      {/* ================================================================ */}
      <section className="section" id="drafts">
        <div className="wrap">
          <p className="section-label reveal"><span>05</span> Drafts &amp; Templates</p>
          <h2 className="section-title reveal">Reference drafts to start from</h2>
          <p className="lede reveal">Blank, correctly structured templates for the document types above — useful as a starting point before you write. Added soon.</p>

          <div className="card-grid card-grid--3">
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>SOAP Note Template</h3>
              <p>A clean, correctly structured starting point.</p>
            </article>
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>Care Plan Template</h3>
              <p>NANDA-aligned structure, ready to fill in.</p>
            </article>
            <article className="sample-card reveal">
              <span className="sample-tag">Coming Soon</span>
              <h3>Case Study Outline</h3>
              <p>A logical skeleton for pharmacology case write-ups.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ACADEMIC INTEGRITY STATEMENT — kept visible, not buried.          */}
      {/* ================================================================ */}
      <section className="section integrity" id="integrity">
        <div className="wrap integrity-inner reveal">
          <p className="section-label"><span>06</span> Academic Integrity</p>
          <h2 className="integrity-headline">ClarityRx edits. It does not write.</h2>
          <p className="lede">
            Every document I touch remains entirely the student&rsquo;s own work — their ideas, their clinical
            reasoning, their words. My role is to refine structure, catch clinical and grammatical errors,
            and improve clarity — never to draft, complete, or substantively rewrite an assignment on a
            student&rsquo;s behalf. This service is designed to comply with academic integrity policies at every
            institution I work with, and I will decline any request that crosses from editing into
            ghostwriting.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONTACT / GET STARTED                                             */}
      {/* Posts to /api/contact (app/api/contact/route.js) — a real Vercel  */}
      {/* serverless function, not a third-party form service. It emails   */}
      {/* the submission via Resend if RESEND_API_KEY is set (see README). */}
      {/* EDIT: add/remove fields freely; keep the honeypot input so the   */}
      {/* basic spam check in the API route keeps working.                 */}
      {/* ================================================================ */}
      <section className="section section--alt" id="contact">
        <div className="wrap contact-grid">
          <div className="reveal">
            <p className="section-label"><span>07</span> Get Started</p>
            <h2 className="section-title">Send your draft, get it back clearer.</h2>
            <p className="lede">
              Tell me a little about your document and deadline. I&rsquo;ll reply with a turnaround
              estimate and next steps — usually within a day.
            </p>
          </div>

          <form
            method="POST"
            action="/api/contact"
            className="contact-form reveal"
            id="contactForm"
          >
            {hasError && (
              <p className="form-error" role="alert">
                Something didn&rsquo;t go through — please check the form and try again.
              </p>
            )}

            <p className="hidden-field">
              <label>Company (leave blank): <input name="company" tabIndex={-1} autoComplete="off" /></label>
            </p>

            <div className="field">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Full name</label>
            </div>

            <div className="field">
              <input type="email" id="email" name="email" placeholder=" " required />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="field">
              <input type="text" id="program" name="program" placeholder=" " />
              <label htmlFor="program">School / program</label>
            </div>

            <div className="field-row">
              <div className="field">
                <select id="doc-type" name="document_type" required defaultValue="">
                  <option value="" disabled hidden>&nbsp;</option>
                  <option>SOAP Note</option>
                  <option>Care Plan</option>
                  <option>Pharmacology Case Study</option>
                  <option>Reflection / Literature Review</option>
                  <option>Other</option>
                </select>
                <label htmlFor="doc-type" className="label-static">Document type</label>
              </div>

              <div className="field">
                <input type="date" id="deadline" name="deadline" />
                <label htmlFor="deadline" className="label-static">Deadline</label>
              </div>
            </div>

            <div className="field">
              <textarea id="message" name="message" rows={4} placeholder=" " required></textarea>
              <label htmlFor="message">Anything else I should know?</label>
            </div>

            <button type="submit" className="btn btn-primary magnetic">
              <span className="btn-label">Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
