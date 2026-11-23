"use client";

import { useState } from "react";

export interface ContactProps {
  extraClassName?: string;
}

export default function Contact({ extraClassName = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Private Jet Charter",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className={`contact-one relative overflow-hidden bg-[#f7f8fb] py-20 sm:py-24 lg:py-28 ${extraClassName}`}
    >
      {/* Decorative Subtle Background Compass / Plane Geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 select-none opacity-[0.04]"
      >
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          stroke="#9e1422"
          strokeWidth="1.5"
        >
          <circle cx="300" cy="300" r="280" />
          <circle cx="300" cy="300" r="200" strokeDasharray="4 4" />
          <circle cx="300" cy="300" r="120" />
          <line x1="300" y1="20" x2="300" y2="580" />
          <line x1="20" y1="300" x2="580" y2="300" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Contact Information & Headings */}
          <div className="lg:col-span-5 lg:pt-3">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-[6px] w-[6px] rounded-full bg-[#9e1422]"
              />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.08em] text-[#9e1422]">
                CONTACT WITH US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-3 text-[32px] font-bold leading-[1.16] tracking-[-0.025em] text-[#141724] sm:text-[38px] lg:text-[44px]">
              Feel Free to Write Our Aviation &amp; Setup Experts
            </h2>

            {/* Copy */}
            <p className="mt-5 text-[14px] font-normal leading-[1.72] text-[#555a6d] sm:text-[14.5px]">
              Whether you are looking to charter a private jet, book an empty leg
              deal, or establish and license your business in the UAE, our
              dedicated team is available 24/7 to provide prompt, discreet, and
              personalized assistance.
            </p>

            {/* Contact Info Items List */}
            <div className="mt-10 space-y-6">
              {/* Phone Info Block */}
              <div className="group flex items-center gap-4 rounded-[14px] border border-[#e8ecf4] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-[#9e1422]/25 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#faf5f5] text-[#9e1422] transition-colors duration-200 group-hover:bg-[#9e1422] group-hover:text-white">
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
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a91a5]">
                    CALL 24/7 VIP CONCIERGE
                  </span>
                  <a
                    href="tel:+97141234567"
                    className="text-[15px] font-bold text-[#141724] transition-colors hover:text-[#9e1422]"
                  >
                    +971 4 123 4567 / +1 (234) 526 8880
                  </a>
                </div>
              </div>

              {/* Email Info Block */}
              <div className="group flex items-center gap-4 rounded-[14px] border border-[#e8ecf4] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-[#9e1422]/25 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#faf5f5] text-[#9e1422] transition-colors duration-200 group-hover:bg-[#9e1422] group-hover:text-white">
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
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a91a5]">
                    EMAIL US DIRECTLY
                  </span>
                  <a
                    href="mailto:support@typpro.com"
                    className="text-[15px] font-bold text-[#141724] transition-colors hover:text-[#9e1422]"
                  >
                    support@typpro.com / info@typpro.com
                  </a>
                </div>
              </div>

              {/* Office Location Block */}
              <div className="group flex items-center gap-4 rounded-[14px] border border-[#e8ecf4] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.03)] transition-all duration-300 hover:border-[#9e1422]/25 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-[#faf5f5] text-[#9e1422] transition-colors duration-200 group-hover:bg-[#9e1422] group-hover:text-white">
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
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a91a5]">
                    DUBAI CORPORATE HEADQUARTERS
                  </span>
                  <span className="text-[14.5px] font-bold text-[#141724]">
                    Gate Precinct 4, DIFC, Dubai, United Arab Emirates
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-7">
            <div className="rounded-[18px] border border-[#e8ecf4] bg-white p-7 shadow-[0_12px_45px_rgba(15,23,42,0.06)] sm:p-10">
              <div className="mb-8">
                <h3 className="text-[22px] font-bold tracking-tight text-[#141724] sm:text-[26px]">
                  Send Us a Message
                </h3>
                <p className="mt-2 text-[13.5px] font-normal leading-[1.65] text-[#60657b]">
                  Please complete the form below. A flight or business setup
                  specialist will review your request and get in touch within 15
                  minutes.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-[12px] border border-[#22c55e]/30 bg-[#22c55e]/10 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-[18px] font-bold text-[#141724]">
                    Thank you! Your message has been sent.
                  </h4>
                  <p className="mt-1.5 text-[13px] text-[#555a6d]">
                    Our team will contact you shortly via phone or email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Private Jet Charter",
                        message: "",
                      });
                    }}
                    className="mt-5 inline-block text-[12.5px] font-semibold text-[#9e1422] underline hover:text-[#820f1b]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="contact-one__form space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#3b4154]">
                        Your Name <span className="text-[#9e1422]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-[8px] border border-[#dce2ec] bg-[#fafbfc] px-4 py-3 text-[13.5px] text-[#141724] transition-colors focus:border-[#9e1422] focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#3b4154]">
                        Email Address <span className="text-[#9e1422]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-[8px] border border-[#dce2ec] bg-[#fafbfc] px-4 py-3 text-[13.5px] text-[#141724] transition-colors focus:border-[#9e1422] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Phone Number */}
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#3b4154]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-[8px] border border-[#dce2ec] bg-[#fafbfc] px-4 py-3 text-[13.5px] text-[#141724] transition-colors focus:border-[#9e1422] focus:bg-white focus:outline-none"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="mb-1.5 block text-[12px] font-semibold text-[#3b4154]">
                        Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full rounded-[8px] border border-[#dce2ec] bg-[#fafbfc] px-4 py-3 text-[13.5px] text-[#141724] transition-colors focus:border-[#9e1422] focus:bg-white focus:outline-none"
                      >
                        <option value="Private Jet Charter">
                          Private Jet Charter
                        </option>
                        <option value="Empty Leg Deals">Empty Leg Deals</option>
                        <option value="Company Setup in UAE">
                          Company Setup in UAE
                        </option>
                        <option value="Cargo & Specialty Flights">
                          Cargo &amp; Specialty Flights
                        </option>
                        <option value="Aviation Consultancy">
                          Aviation Consultancy
                        </option>
                        <option value="Aircraft Sourcing & Sales">
                          Aircraft Sourcing &amp; Sales
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold text-[#3b4154]">
                      Message / Flight Request Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please tell us about your planned travel route, dates, passenger count, or business setup requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-[8px] border border-[#dce2ec] bg-[#fafbfc] px-4 py-3 text-[13.5px] text-[#141724] transition-colors focus:border-[#9e1422] focus:bg-white focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="contact-one__btn inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#9e1422] px-8 py-3.5 text-[13.5px] font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(158,20,34,0.35)] transition-all duration-200 hover:bg-[#820f1b] hover:shadow-[0_6px_22px_rgba(158,20,34,0.45)] disabled:opacity-75"
                    >
                      {loading ? (
                        <span>SENDING...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <span aria-hidden="true">&gt;</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
