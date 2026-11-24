"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPost {
  id: string;
  day: string;
  month: string;
  author: string;
  commentsCount: number;
  title: string;
  image: string;
  alt: string;
  slug: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    day: "05",
    month: "January",
    author: "Paul B. Andrews",
    commentsCount: 5,
    title: "Flying Private is the New Standard of Comfort and Convenience",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85",
    alt: "Passenger enjoying comfort and luxury in private jet",
    slug: "#",
  },
  {
    id: "post-2",
    day: "08",
    month: "January",
    author: "Paul B. Andrews",
    commentsCount: 5,
    title: "Inside a Private Jet What to Expect on Your First Flight",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85",
    alt: "Private jet on airport tarmac with luxury traveler",
    slug: "#",
  },
  {
    id: "post-3",
    day: "16",
    month: "January",
    author: "Paul B. Andrews",
    commentsCount: 5,
    title: "Behind the Scenes of Private Jet We Make Your Flight Seamless",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",
    alt: "Executive working on laptop in private aircraft cabin",
    slug: "#",
  },
];

export default function BlogNews() {
  return (
    <section
      id="blog-news"
      className="relative overflow-hidden bg-white py-8"
    >
      <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Left Column: Heading, Subtitle, CTA Button & Jet Watermark */}
          <div className="flex flex-col justify-between lg:col-span-3">
            <div>
              {/* Tag / Category with Red Line */}
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-bold tracking-wider text-[#e03a3e]">
                  Blog &amp; News
                </span>
                <span className="h-[2px] w-10 bg-[#e03a3e]" />
              </div>

              {/* Main Heading */}
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.14] tracking-[-0.025em] text-[#141724] sm:text-[38px] ">
                Blogs of Our Company
              </h2>

              {/* Subtitle Description */}
              <p className="mt-5 max-w-[340px] text-[13px] font-normal leading-[1.72] text-[#646a80] sm:text-[10.5px]">
                We provide expert advice to help you make informed decisions about chartering,
                and premium in-flight experiences.
              </p>

              {/* View More Button */}
              <div className="mt-8">
                <Link
                  href="#blog"
                  className="inline-flex items-center gap-2 rounded-[6px] bg-[#e03a3e] px-4 py-2 text-[12.5px] font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(224,58,62,0.35)] transition-all duration-200 hover:bg-[#c62828] hover:shadow-[0_8px_24px_rgba(224,58,62,0.45)]"
                >
                  <span>VIEW MORE</span>
                  <span aria-hidden="true">&gt;</span>
                </Link>
              </div>
            </div>


          </div>

          {/* Right Column: 3 Blog Post Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-[16px] bg-white transition-all duration-300"
              >
                <div>
                  {/* Top Image Container with Date Badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-[#f0f3f8]">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      unoptimized
                    />

                    {/* Red Date Badge (Bottom Right) */}
                    {/* <div className="absolute bottom-3 right-3 z-10 flex min-w-[54px] flex-col items-center justify-center rounded-[8px] bg-[#e03a3e] px-2.5 py-1.5 text-center text-white shadow-md">
                      <span className="text-[17px] font-bold leading-none tracking-tight">
                        {post.day}
                      </span>
                      <span className="mt-0.5 text-[10px] font-medium leading-none tracking-wide text-white/95">
                        {post.month}
                      </span>
                    </div> */}
                  </div>

                  {/* Metadata Row: Author & Comments */}
                  <div className="mt-4 flex items-center gap-4 text-[12px] font-medium text-[#717b96]">
                    {/* Author */}
                    <div className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-3 w-3 text-[#e03a3e]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="transition-colors group-hover:text-[#141724]">
                        {post.author}
                      </span>
                    </div>

                    {/* Comments */}
                    <div className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-3 w-3 text-[#e03a3e]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span>{post.commentsCount} Comments</span>
                    </div>
                  </div>

                  {/* Blog Post Title */}
                  <h3 className="mt-3 text-[12px] font-medium leading-snug tracking-[-0.015em] text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e] sm">
                    <Link href={post.slug}>{post.title}</Link>
                  </h3>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <Link
                    href={post.slug}
                    className="inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-wider text-[#141724] transition-colors duration-200 group-hover:text-[#e03a3e]"
                  >
                    <span>READ MORE</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      &gt;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
