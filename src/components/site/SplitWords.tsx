import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RiseWordProps = {
  children: ReactNode;
  delay?: number;
  className?: string | undefined;
};

/** One word that rises out of a clipped line on mount. */
export function RiseWord({ children, delay = 0, className }: RiseWordProps) {
  return (
    <span className="-mb-[0.14em] -mr-[0.05em] inline-block overflow-hidden pb-[0.14em] pr-[0.05em] align-bottom">
      <span
        className={cn("word-rise inline-block", className)}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

type SplitWordsProps = {
  text: string;
  startDelay?: number;
  step?: number;
  className?: string | undefined;
};

/** Splits a plain string into words and staggers their entrance. */
export function SplitWords({ text, startDelay = 0, step = 70, className }: SplitWordsProps) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          {i > 0 && " "}
          <RiseWord delay={startDelay + i * step} className={className}>
            {word}
          </RiseWord>
        </Fragment>
      ))}
    </>
  );
}
