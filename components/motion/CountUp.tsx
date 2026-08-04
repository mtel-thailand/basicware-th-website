"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type CountUpProps = {
  /** Final value, e.g. 60 for "60%" or 40 for "40x" */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Group thousands with commas, e.g. 63200 -> "63,200" */
  locale?: boolean;
  className?: string;
  springStiffness?: number;
  springDamping?: number;
};

function formatCount(n: number, locale?: boolean) {
  const rounded = Math.round(n);
  return locale ? rounded.toLocaleString("en-US") : String(rounded);
}

/** Number that counts up from 0 when it enters the viewport. */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  locale,
  className,
  springStiffness = 60,
  springDamping = 20,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: springStiffness,
    damping: springDamping,
  });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = `${prefix}${formatCount(value, locale)}${suffix}`;
      return;
    }
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${formatCount(latest, locale)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, value, locale, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
