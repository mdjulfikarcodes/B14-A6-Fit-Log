"use client";

import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface PlanCardProps {
  workout: Workout;
  isSavedTab?: boolean;
}

export default function PlanCard({
  workout,
  isSavedTab = false,
}: PlanCardProps) {
  const {
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    doneIds,
  } = useFitLog();

  const isDone = doneIds.includes(workout.id);

  const handleRemove = () => {
    if (isSavedTab) {
      removeFromSaved(workout.id);
    } else {
      removeFromPlan(workout.id);
    }
  };

  return (
    <article
      className={`rounded-xl border bg-[#12151b] p-2 transition ${
        isDone
          ? "border-[#ccff00]/40"
          : "border-[#252a32] hover:border-[#343a44]"
      }`}
    >
      <div className="flex items-center gap-3">

        {/* Thumbnail */}
        <div className="relative shrink-0 overflow-hidden rounded-lg sm:h-[60px] sm:w-[90px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="min-w-0 flex-1">

          {/* Name */}
          <h2 className="truncate text-[11px] font-black uppercase leading-tight text-white sm:text-xs">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-0.5 truncate text-[8px] text-gray-500 sm:text-[9px]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[8px] text-gray-400 sm:text-[9px]">

            <span className="flex items-center gap-1">
              <span className="text-[#ccff00]">◷</span>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#ccff00]">♟</span>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <span className="text-[#ccff00]">☆</span>
              {workout.rating}
            </span>

          </div>
        </div>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2">

          {/* View Details */}
          <Link
            href={`/workout/${workout.id}`}
            className="hidden rounded-full border border-[#30353d] px-3 py-1.5 text-[8px] font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:block"
          >
            View Details
          </Link>

          {/* Mark as Done */}
          {!isSavedTab && (
            <button
              type="button"
              onClick={() => markAsDone(workout.id)}
              disabled={isDone}
              className={`rounded-full px-3 py-1.5 text-[8px] font-black whitespace-nowrap transition ${
                isDone
                  ? "bg-[#ccff00]/15 text-[#ccff00]"
                  : "bg-[#ccff00] text-black hover:bg-[#b6ed00]"
              }`}
            >
              {isDone ? "✓ Done" : "✓ Mark as Done"}
            </button>
          )}

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="flex h-7 w-7 items-center justify-center rounded-full text-[13px] text-gray-500 transition hover:bg-white/5 hover:text-red-400"
          >
            ×
          </button>

        </div>
      </div>

      {/* Mobile View Details */}
      <div className="mt-2 flex sm:hidden">
        <Link
          href={`/workout/${workout.id}`}
          className="w-full rounded-full border border-[#30353d] py-1.5 text-center text-[8px] font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}