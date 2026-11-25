"use client";

import Link from "next/link";
import React, { useState } from "react";

export interface ContactProps {
  extraClassName?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How can consulting help my business grow?",
    answer:
      "Our specialized UAE business setup and PRO consulting simplifies company formation, ensures 100% legal compliance with DET and Free Zone authorities, expedites investor visas and corporate banking approvals, and saves up to 40% in operational setup costs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in commercial trading, professional consultancy, industrial manufacturing, e-commerce, digital technology, tourism, freight forwarding, and general trading across Dubai Mainland, Abu Dhabi, and over 40 UAE Free Zones.",
  },
  {
    question: "How long does a typical consulting project take?",
    answer:
      "Initial trade name reservation and initial approvals can be secured within 24 to 48 hours. Full trade licensing, Ejari office registration, and establishment card issuance typically take 3 to 5 business days.",
  },
  {
    question: "How much does business consulting cost?",
    answer:
      "Our transparent packages start from AED 9,500 for Free Zone setups and AED 14,500 for Mainland entities, inclusive of government fees, name reservation, initial approvals, and virtual desk tenancy with zero hidden fees.",
  },
];

export default function Contact({ extraClassName = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div id="contact" className={`w-full  text-[#111827] ${extraClassName}`}>
      {/* =========================================================================
          SECTION 1: Top Hero Header
          ========================================================================= */}
      <section className=" px-6 pt-10 pb-12 sm:px-22 sm:pt-14 sm:pb-16 h-[55vh]  bg-[#d70000] -mt-[120px]">
        {/* Small uppercase tag with diagonal arrow */}
        <Link
          href="#form"
          className="inline-flex items-center mt-16 group absolute gap-1.5 text-[12px] font-bold tracking-wider text-white uppercase hover:opacity-80 transition-opacity"
        >
          <span>ABOUT US</span>
          <svg
            className="h-3.5 w-3.5 group-hover:rotate-45 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7V15" />
          </svg>
        </Link>

        {/* 2-Column Header Grid */}
        <div className="mt-23 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12 lg:items-start">
          {/* Main Large Headline */}
          <div className="lg:col-span-6">
            <h1 className="text-[32px] font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[46px]">
              We are a creative digital agency shaping meaningful experiences
            </h1>
          </div>

          {/* Right Explanatory Paragraph */}
          <div className="lg:col-span-5 lg:pt-2 items-center">
            <p className="text-[13.5px] font-normal leading-[1.7] text-white sm:text-[14.5px] mt-10">
              We blend strategy, creativity, and technology to help brands grow, connect, and
              stand out in an ever-evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 3 Floating Info Cards on Soft Gray Band
          ========================================================================= */}
      <section className="w-full bg-[#f0f4f6] py-10 sm:py-12">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Card 1: Call Us */}
            <div className="flex items-center gap-4 rounded-[16px] bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#eef2f6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#d70000]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-[11.5px] font-medium text-[#6b7280]">
                  Call Us 7/24
                </span>
                <a
                  href="tel:+971568204558"
                  className="text-[14.5px] font-bold text-[#111827] hover:text-[#0d9488] transition-colors"
                >
                  +971 56 820 4558
                </a>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className="flex items-center gap-4 rounded-[16px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#eef2f6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#d70000]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-[11.5px] font-medium text-[#6b7280]">
                  Location
                </span>
                <span className="text-[13px] font-bold text-[#111827] leading-snug">
                  Office 301–312, LEADER REAL ESTATE L.L.C, Al Souq Al Kabeer, Bur Dubai
                </span>
              </div>
            </div>

            {/* Card 3: Make a Quote */}
            <div className="flex items-center gap-4 rounded-[16px] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#eef2f6]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#d70000]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-[11.5px] font-medium text-[#6b7280]">
                  Make a Quote
                </span>
                <a
                  href="mailto:tpdclearing@gmail.com"
                  className="text-[14.5px] font-bold text-[#111827] hover:text-[#0d9488] transition-colors"
                >
                  tpdclearing@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Interactive Google Map + SEND A MESSAGE Form Box
          ========================================================================= */}       
      <section id="form" className="mx-auto  px-6 py-14 sm:px-10  lg:px-6 ">
        <div className="rounded-[10px] bg-[#f8fafc] border border-[#edf2f7] p-3 shadow-sm">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-24 items-stretch">
            {/* Left Column: Interactive Map */}
            <div className="relative min-h-[420px] w-full rounded-[10px] overflow-hidden border border-[#e2e8f0] shadow-sm">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Al%20Souq%20Al%20Kabeer%2C%20Bur%20Dubai%2C%20Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Badge */}
            
            </div>

            {/* Right Column: SEND A MESSAGE Form */}
            <div className="flex flex-col justify-center py-18" >
              <h3 className="text-[24px] font-bold  text-[#111827] uppercase">
                SEND A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Row 1: Full name & Email address */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[14px] font-bold text-black mb-1.5">
                      Full name*
                    </label>
                    <input
                      type="text"
                      required
                      // placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full rounded-[6px]  bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-black mb-1.5">
                      Email address*
                    </label>
                    <input
                      type="email"
                      required
                      // placeholder="Your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-[6px]  bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div>
                  <label className="block text-[14px] font-bold  text-black mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    // placeholder="Topic or inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-[6px]  bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Row 3: How Can We Help You* */}
                <div>
                  <label className="block text-[14px] font-bold  text-black mb-1.5">
                    How Can We Help You*
                  </label>
                  <textarea
                    rows={4}
                    required
                    // placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-[6px]   bg-white px-3.5 py-2.5 text-[13.5px] text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-[6px] bg-[#d70000] py-3.5 text-center text-[12px] font-bold tracking-widest text-white uppercase hover:bg-white  hover:text-[#d70000]   hover:border-1 transition-colors shadow-sm cursor-pointer disabled:opacity-75"
                >
                  <span>{loading ? "SENDING..." : "→ SEND MESSAGE"}</span>
                </button>

                {/* Success Feedback */}
                {submitted && (
                  <div className="rounded-[8px] bg-[#ecfdf5] border border-[#a7f3d0] p-3.5 text-center text-[12.5px] font-medium text-[#065f46]">
                    Thank you! Your message has been sent successfully. Our consultants will
                    contact you shortly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FAQ'S ("Everything You Need to Know") Accordion
          ========================================================================= */}
      <section className="mx-auto max-w-[800px] px-6 py-6">
        {/* Small label */}
        <span className="block text-center text-[12px] font-bold tracking-widest text-[#6b7280] uppercase">
          FAQ&apos;S
        </span>

        {/* Big Headline */}
        <h2 className="mt-2 text-center text-[28px] font-medium tracking-tight text-[#0f0c3d] sm:text-[34px] lg:text-[38px]">
          Everything You Need to Know
        </h2>

        {/* Accordion List */}
        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "rounded-[14px] shadow-sm border border-transparent"
                    : "border-b border-[#e5e7eb]"
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`flex w-full items-center justify-between text-left cursor-pointer transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "bg-[#d70000] p-5 font-semibold text-[15px] sm:text-[16px] text-white rounded-t-[14px]"
                      : "bg-transparent p-5 font-semibold text-[15px] sm:text-[16px] text-[#111827] rounded-t-[14px] hover:text-[#0d093b]"
                  }`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180 text-white" : "rotate-0 text-[#6b7280]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={isOpen ? "2.5" : "2"}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="border-x border-b border-[#e5e7eb] bg-white p-5 sm:p-6 text-[13.5px] leading-relaxed text-[#4b5563] rounded-b-[14px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
