"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact-form" className="px-6 pt-20 pb-24">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-[#0E3B2E]/10 sm:p-12">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/60">
            We&apos;d love to provide you with the best MMJ Card service experience online.
            Address us with your query and we&apos;ll be in touch shortly.
          </p>
        </div>

        {submitted ? (
          <p className="mt-8 text-center text-sm font-medium text-[#0E3B2E]">
            Thanks for reaching out! We&apos;ll get back to you shortly.
          </p>
        ) : (
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-[#0E3B2E]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] outline-none focus:border-[#4C9A2A]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-[#0E3B2E]">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] outline-none focus:border-[#4C9A2A]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-[#0E3B2E]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] outline-none focus:border-[#4C9A2A]"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Send Message <ArrowRight className="size-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
