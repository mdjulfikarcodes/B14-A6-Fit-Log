"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

const isWorkoutsActive = pathname === "/";
const isMyPlanActive = pathname === "/my-plan";

const { plan, saved } = useFitLog();

  return (
    <nav className="bg-black shadow-sm">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
                <Link
                  href="/"
                  className={isWorkoutsActive ? "bg-lime-950 rounded-3xl text-[#CCFF00] font-bold"
                    : "text-gray-400 hover:bg-transparent"}
                >
                  Workout
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={isMyPlanActive ? "bg-lime-950 rounded-3xl text-[#CCFF00] font-bold"
                    : "text-gray-400 hover:bg-transparent"}
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          <Image src={logo} alt="fitlog logo" />

          <h2 className="ml-2 font-bold text-white">FITLOG</h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link
                href="/"
                className={
                  isWorkoutsActive
                    ? "bg-lime-950 rounded-3xl text-[#CCFF00] font-bold"
                    : "text-gray-400 hover:bg-transparent"
                }
              >
                Workout
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className={
                  isMyPlanActive
                    ? "bg-lime-950 rounded-3xl text-[#CCFF00] font-bold"
                    : "text-gray-400 hover:bg-transparent"
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-10 navbar-end">
          <button className="flex items-center gap-3 text-0.5xl font-semibold cursor-pointer text-[#a5a7ad]">
            Plan <span
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#CCFF00] text-[18px] font-bold text-black"
            >{plan.length}</span>
          </button>

          <button className="flex items-center gap-3 text-0.5xl font-semibold cursor-pointer text-[#a5a7ad]">
            Saved <span
            className="flex h-7 w-7 items-center justify-center rounded-full  text-[18px] font-bold text-white border"
            >{saved.length}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;