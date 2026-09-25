"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import logo from "@/assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="navbar min-h-16 px-3 sm:px-5 lg:px-8">

        {/* Left */}
        <div className="navbar-start min-w-0">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-2 lg:hidden">
              <RiMenu3Line />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-black p-2 shadow">
              <li>
                <Link
                  href="/"
                  className={
                    isWorkoutsActive
                      ? "rounded-3xl bg-lime-950 font-bold text-[#CCFF00]"
                      : "text-gray-400 hover:bg-transparent"}>
                  Workout
                </Link>
              </li>
              <li>
                <Link
                  href="/my-plan"
                  className={
                    isMyPlanActive
                      ? "rounded-3xl bg-lime-950 font-bold text-[#CCFF00]"
                      : "text-gray-400 hover:bg-transparent"}>
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Image
            src={logo}
            alt="fitlog logo"
            className="ml-1 h-auto w-7 sm:ml-2 sm:w-8" />

          <h2 className="ml-2 text-sm font-bold text-white sm:text-base">
            FITLOG
          </h2>
        </div>

        {/* Center Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link
                href="/"
                className={
                  isWorkoutsActive
                    ? "rounded-3xl bg-lime-950 font-bold text-[#CCFF00]"
                    : "text-gray-400 hover:bg-transparent"}>
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={
                  isMyPlanActive
                    ? "rounded-3xl bg-lime-950 font-bold text-[#CCFF00]"
                    : "text-gray-400 hover:bg-transparent"}>
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end flex gap-3 sm:gap-5 lg:gap-10">

          {/* Plan */}
          <button className="flex items-center gap-1.5 text-xs font-semibold text-[#a5a7ad] sm:gap-3 sm:text-sm">
            Plan

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-black sm:h-7 sm:w-7 sm:text-[18px]">
              {plan.length}
            </span>
          </button>

          {/* Saved */}
          <button className="flex items-center gap-1.5 text-xs font-semibold text-[#a5a7ad] sm:gap-3 sm:text-sm">
            Saved

            <span className="flex h-6 w-6 items-center justify-center rounded-full border text-sm font-bold text-white sm:h-7 sm:w-7 sm:text-[18px]">
              {saved.length}
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;