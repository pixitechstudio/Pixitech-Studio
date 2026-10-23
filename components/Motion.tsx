"use client";
import { Fragment, useEffect, useRef, ElementType, ReactNode, CSSProperties } from "react";

function useIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useIn<HTMLDivElement>();
  return <div ref={ref} className={`rv ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>{children}</div>;
}

/** Headline whose words slide up from below a mask. */
export function Rise({ text, as: Tag = "h2", className = "" }: { text: string; as?: ElementType; className?: string }) {
  const ref = useIn<HTMLElement>();
  return (
    <Tag ref={ref} className={`rise ${className}`}>
      {text.split(" ").map((w, i) => (
        <Fragment key={i}><span className="w"><span style={{ "--i": i } as CSSProperties}>{w}</span></span>{" "}</Fragment>
      ))}
    </Tag>
  );
}
