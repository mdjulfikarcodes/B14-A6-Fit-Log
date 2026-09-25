import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className=" flex  flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#ccff00] text-black">
            <Dumbbell size={20} />
          </span>
          <span className="font-black tracking-wider">FITLOG</span>
        </div>

        <p className="text-sm text-white/40">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
