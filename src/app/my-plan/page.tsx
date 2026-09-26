"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";

import PlanCard from "@/components/shared/PlanCard";

import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved, isLoaded } = useFitLog();

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeTab: Tab =
    searchParams.get("tab") === "saved" ? "saved" : "plan";

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const activeList = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = useMemo(() => {
    return [...activeList].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [activeList, sortBy]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4 text-white">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-[#ccff00]" />

          <p className="text-center text-xs text-gray-500">
            Loading your plan...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0d0f12] px-3 py-6 text-white sm:px-5 sm:py-8 md:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-5 sm:mb-6">
          <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-[10px] leading-5 text-gray-500 sm:text-xs">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <section className="mb-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#242830] bg-[#13161c] sm:grid-cols-3">
          {/* Exercises */}
          <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-xl font-black text-[#ccff00] sm:text-2xl">
              {plan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#242830] px-4 py-4 sm:border-l sm:border-t-0 sm:px-5 sm:py-5 md:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-xl font-black text-white sm:text-2xl">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#242830] px-4 py-4 sm:border-l sm:border-t-0 sm:px-5 sm:py-5 md:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-xl font-black text-white sm:text-2xl">
              {totalCalories}
            </p>
          </div>
        </section>

        {/* Tabs + Sort */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* Tabs */}
          <div className="flex w-fit max-w-full rounded-lg border border-[#252a32] bg-[#14171c] p-1">
            <button
              type="button"
              onClick={() => router.push("/my-plan")}
              className={`rounded-md px-3 py-2 text-[9px] cursor-pointer font-medium transition sm:px-4 sm:text-[10px] ${
                activeTab === "plan"
                  ? "bg-[#20252d] text-white "
                  : "text-gray-500 hover:bg-transparent"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              onClick={() => router.push("/my-plan?tab=saved")}
              className={`rounded-md px-3 py-2 text-[9px] cursor-pointer font-medium transition sm:px-4 sm:text-[10px] ${
                activeTab === "saved"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500 hover:bg-transparent"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end">
            <span className="text-[10px] text-gray-500">Sort By</span>

            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
              className="cursor-pointer rounded-md border border-[#252a32] bg-[#14171c] px-3 py-2 text-[10px] text-white outline-none transition focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        {sortedWorkouts.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {sortedWorkouts.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                isSavedTab={activeTab === "saved"}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-60 flex-col items-center justify-center rounded-xl border border-dashed border-[#242830] bg-[#0d0f12] px-4 py-10 text-center sm:min-h-67.5 sm:px-6">
            <h2 className="text-sm font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-sm text-[10px] leading-5 text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-4 rounded-full bg-[#ccff00] px-4 py-2 text-[9px] font-black uppercase text-black transition hover:bg-[#b6ed00] sm:px-5 sm:text-[10px]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}