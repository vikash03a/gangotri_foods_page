// ─── FadeIn Component ───
// Wrap any section or element with <FadeIn> to animate it on scroll.
// Usage: <FadeIn delay={200}>...children...</FadeIn>

import useInView from "../hooks/useInView";

export default function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
