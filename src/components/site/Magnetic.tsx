import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

const CAN_HOVER = "(hover: hover) and (prefers-reduced-motion: no-preference)";

/** Nudges its child toward the cursor on hover. No-op on touch and reduced motion. */
export function Magnetic({ children, strength = 0.22, className }: MagneticProps) {
  const innerRef = useRef<HTMLSpanElement>(null);
  const outerRef = useRef<HTMLSpanElement>(null);

  function onMove(e: MouseEvent) {
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer || !window.matchMedia(CAN_HOVER).matches) return;
    // Measure the stable outer box so the effect doesn't feed back on itself.
    const r = outer.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    inner.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  }

  function onLeave() {
    if (innerRef.current) innerRef.current.style.transform = "";
  }

  return (
    <span
      ref={outerRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-block", className)}
    >
      <span
        ref={innerRef}
        className="inline-block transition-transform duration-300 ease-out will-change-transform"
      >
        {children}
      </span>
    </span>
  );
}
