"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact-form" className="px-6 pt-20 pb-24">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-[#0E3B2E]/10 sm:p-12">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/80">
            Got a question before booking? Send it over and someone from our team will follow
            up, usually within a business day. If it&apos;s something time-sensitive, calling{" "}
            <a href="tel:+14054451637" className="font-medium text-[#0E3B2E] underline underline-offset-2">
              +1 (405) 445-1637
            </a>{" "}
            directly will get you an answer faster.
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
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-[#0E3B2E]">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="h-auto rounded-xl border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] focus-visible:border-[#4C9A2A] focus-visible:ring-[#4C9A2A]/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#0E3B2E]">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-auto rounded-xl border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] focus-visible:border-[#4C9A2A] focus-visible:ring-[#4C9A2A]/30"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-sm font-medium text-[#0E3B2E]">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                className="min-h-32 rounded-xl border-[#0E3B2E]/15 bg-[#F6F5F0] px-4 py-3 text-sm text-[#0E3B2E] focus-visible:border-[#4C9A2A] focus-visible:ring-[#4C9A2A]/30"
              />
            </div>

            <Button
              type="submit"
              className="h-auto w-full gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Send Message <ArrowRight className="size-4" />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
