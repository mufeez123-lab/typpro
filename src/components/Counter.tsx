"use client";

import { useEffect, useRef, useState } from "react";

export interface CounterProps {
  /** The value string (e.g. "14+", "3th", "4/5", "100%", "$50M") or number */
  value: string | number;
  /** Duration of counter animation in milliseconds (default: 1800ms) */
  duration?: number;
  /** Explicit decimal places to display (defaults to auto-detected or 0) */
  decimals?: number;
  /** Explicit prefix override (e.g. "$") */
  prefix?: string;
  /** Explicit suffix override (e.g. "+") */
  suffix?: string;
  /** Optional additional class name */
  className?: string;
}

interface ParsedStat {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

function parseStatValue(val: string | number): ParsedStat {
  if (typeof val === "number") {
    return {
      prefix: "",
      target: val,
      suffix: "",
      decimals: Number.isInteger(val) ? 0 : (val.toString().split(".")[1]?.length ?? 0),
    };
  }

  const str = val.trim();
  // Match prefix (non-digits), number (including decimals), and suffix
  // Handles strings like "14+", "3th", "4/5", "$150k", "99.9%"
  const match = str.match(/^([^\d]*?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: str, decimals: 0 };
  }

  const prefix = match[1] ?? "";
  const numStr = match[2] ?? "0";
  const suffix = match[3] ?? "";
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const target = parseFloat(numStr) || 0;

  return { prefix, target, suffix, decimals };
}

// Smooth cubic ease-out: starts fast, decelerates gracefully towards the final value
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({
  value,
  duration = 1800,
  decimals: customDecimals,
  prefix: customPrefix,
  suffix: customSuffix,
  className,
}: CounterProps) {
  const parsed = parseStatValue(value);
  const target = parsed.target;
  const prefix = customPrefix !== undefined ? customPrefix : parsed.prefix;
  const suffix = customSuffix !== undefined ? customSuffix : parsed.suffix;
  const decimals = customDecimals !== undefined ? customDecimals : parsed.decimals;

  const [count, setCount] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Honor reduced motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(target);
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = easedProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target, duration]);

  const formattedNumber =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toLocaleString();

  return (
    <span ref={elementRef} className={className}>
      <span aria-hidden="true" suppressHydrationWarning>
        {prefix}
        {formattedNumber}
        {suffix}
      </span>
      <span className="sr-only">{String(value)}</span>
    </span>
  );
}
