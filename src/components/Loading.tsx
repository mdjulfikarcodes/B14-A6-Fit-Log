export default function Loading({ text = "Loading workouts…" }: { text?: string }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/60">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#ccff00]" />
        {text}
      </div>
    </div>
  );
}
