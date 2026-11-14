export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 eyebrow">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border-strong" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
