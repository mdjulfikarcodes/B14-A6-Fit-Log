import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, Inter } from "next/font/google";
import heroImg from "@/assets/banner.png";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section className={`${inter.className} px-4 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-10`}>
      <div className="flex flex-col overflow-hidden py-10 rounded-2xl border border-[#292d35] bg-[#15171e] lg:min-h-91.25 lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-8 md:px-10 lg:w-[60%] lg:px-12 lg:py-12">

          {/* Small Heading */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#b6ff00] sm:text-sm">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1
            className={`${bebasNeue.className} max-w-2xl text-[42px] uppercase leading-[0.92] text-white sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px]`}>
            Train With Intent. Log <br />Every Set.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#9da1ab] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#b6ff00]
                px-5
                py-3
                text-sm
                font-bold
                uppercase
                text-black
                transition-all
                duration-200
                hover:bg-[#c8ff33]
                hover:shadow-[0_0_25px_rgba(182,255,0,0.18)]
                active:scale-95">
              Browse Workouts
              <span className="text-lg leading-none"></span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="flex w-full items-end justify-center lg:w-[40%]">
          <Image
            src={heroImg}
            alt="Workout anatomy"
            priority
            width={500}
            height={450}
            className="
              w-55
              object-contain
              sm:w-65
              md:w-75
              lg:w-87.5
              xl:w-97.5"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;