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
    <section
      className={`${inter.className} mx-auto px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8 lg:py-10`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-[#292d35] bg-[#15171e] py-6 sm:py-8 md:py-10 lg:min-h-91.25 lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col justify-center px-5 py-8 sm:px-7 sm:py-9 md:px-9 md:py-10 lg:w-[60%] lg:px-12 lg:py-12">
          {/* Small Heading */}
          <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#b6ff00] sm:text-sm">
            Workout Library
          </p>

          {/* Main Heading */}
          <h1
            className={`${bebasNeue.className} max-w-2xl text-[38px] uppercase leading-[0.92] text-white min-[400px]:text-[42px] sm:text-[50px] md:text-[56px] lg:text-[60px] xl:text-[64px]`}
          >
            Train With Intent. Log <br />
            Every Set.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-xs leading-5 text-[#9da1ab] sm:text-sm sm:leading-6 md:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Link
              href="#library"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#b6ff00]
                px-4
                py-2.5
                text-xs
                font-bold
                uppercase
                text-black
                transition-all
                duration-200
                hover:bg-[#c8ff33]
                hover:shadow-[0_0_25px_rgba(182,255,0,0.18)]
                active:scale-95
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              Browse Workouts
              <span className="text-lg leading-none"></span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="mx-auto flex w-full items-end justify-center px-4 sm:px-6 md:px-8 lg:w-[40%] lg:px-0">
          <Image
            src={heroImg}
            alt="Workout anatomy"
            priority
            width={500}
            height={450}
            className="
              w-48
              max-w-full
              object-contain
              min-[400px]:w-55
              sm:w-65
              md:w-75
              lg:w-87.5
              xl:w-97.5
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;