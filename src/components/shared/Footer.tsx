import FooterLogo from '@/assets/logo.png'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="flex flex-col justify-between gap-5 px-4 py-7 sm:px-5 sm:py-8 md:flex-row md:items-center lg:px-8">
        <div className="flex items-center gap-2">
          <span>
            <Image src={FooterLogo} alt='Footer Logo' />
          </span>

          <span className="text-sm font-black tracking-wider sm:text-base">
            FITLOG
          </span>
        </div>
        <p className="text-xs leading-relaxed text-white/40 sm:text-sm md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}