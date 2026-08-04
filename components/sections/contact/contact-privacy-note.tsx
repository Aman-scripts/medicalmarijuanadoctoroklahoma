export function ContactPrivacyNote() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
          A Quick Note on Privacy
        </h2>
        <p className="mt-5 leading-relaxed text-[#0E3B2E]/70">
          Try not to send medical records, ID photos, or anything else sensitive through the
          contact form or a regular email - those aren&apos;t set up to handle protected health
          information securely. Once your appointment is scheduled, we&apos;ll send you a secure
          link through your patient portal for anything you need to upload. It&apos;s a small
          extra step, but it keeps your information protected the way it should be from the
          start. You can read more in our HIPAA Compliance Policy and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
