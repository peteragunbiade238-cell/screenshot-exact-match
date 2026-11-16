export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-4 eyebrow">
      <span className="font-serif text-xl normal-case italic tracking-normal text-primary">{index}</span>
      <span className="h-px w-14 bg-gradient-to-r from-primary/70 to-transparent" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
