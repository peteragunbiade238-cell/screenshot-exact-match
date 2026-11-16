/** Circular rotating text seal. Decorative only. */
export function RotatingBadge({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid size-28 place-items-center rounded-full border border-primary/30 bg-background/80 backdrop-blur-md md:size-32 ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 120 120"
        className="col-start-1 row-start-1 size-full animate-spin text-primary motion-reduce:animate-none [animation-duration:22s]"
      >
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text
          fill="currentColor"
          fontSize="8.5"
          letterSpacing="2"
          style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}
        >
          <textPath href="#badge-circle" textLength="272" lengthAdjust="spacing">
            Websites • Automation • Brand • AI Content •
          </textPath>
        </text>
      </svg>
      <span className="col-start-1 row-start-1 font-serif text-3xl italic text-primary">P</span>
    </div>
  );
}
