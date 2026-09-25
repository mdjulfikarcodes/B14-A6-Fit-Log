"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import PlanCard from "@/components/shared/PlanCard";
import { useFitLog } from "@/context/FitLogContext";

type SortOption = "duration" | "calories" | "rating";
type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");

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

  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-295">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-1 text-xs text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <section className="mb-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#242830] bg-[#13161c] sm:grid-cols-3">
          {/* Exercises */}
          <div className="px-5 py-5 sm:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-2xl font-black text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#242830] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-2xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#242830] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
            <p className="text-[9px] uppercase tracking-wide text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-2xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </section>

        {/* Tabs + Sort */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-[#252a32] bg-[#14171c] p-1">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
                activeTab === "plan"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500 hover:bg-transparent"
              }`}
            >
              Today s Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-[10px] font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#20252d] text-white"
                  : "text-gray-500 hover:bg-transparent"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
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
          <div className="grid grid-cols-1 gap-4">
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
          <div className="flex min-h-67.5 flex-col items-center justify-center rounded-xl border border-dashed border-[#242830] bg-[#0d0f12] px-6 text-center">
            <h2 className="text-sm font-black uppercase text-white">
              NOTHING HERE YET
            </h2>

            <p className="mt-2 max-w-sm text-[10px] leading-5 text-gray-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-4 rounded-full bg-[#ccff00] px-5 py-2 text-[10px] font-black uppercase text-black transition hover:bg-[#b6ed00]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}