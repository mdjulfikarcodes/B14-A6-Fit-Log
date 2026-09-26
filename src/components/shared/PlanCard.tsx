"use client";

import Image from "next/image";
import Link from "next/link";

import { RxCross2 } from "react-icons/rx";
import { IoTimeOutline } from "react-icons/io5";
import { FaFireFlameCurved, FaRegStar } from "react-icons/fa6";

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
      className={`mx-auto w-full max-w-7xl rounded-xl border bg-[#12151b] p-2 transition ${
        isDone
          ? "border-[#ccff00]/40"
          : "border-[#252a32] hover:border-[#343a44]"
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {/* Thumbnail */}
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-18 sm:w-28 md:h-20 md:w-32 lg:h-20 lg:w-32">
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
          <h2 className="truncate text-[12px] font-black uppercase leading-tight text-white sm:text-sm">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 truncate text-[9px] text-gray-500 sm:text-[10px]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] text-gray-400 sm:text-[10px]">
            <span className="flex items-center gap-1">
              <IoTimeOutline className="text-[#b6ff00]" />
              <span>{workout.duration} min</span>
            </span>

            <span className="flex items-center gap-1">
              <FaFireFlameCurved className="text-[#b6ff00]" />
              <span>{workout.caloriesBurned} kcal</span>
            </span>

            <span className="flex items-center gap-1">
              <FaRegStar className="text-[#b6ff00]" />
              <span>{workout.rating}</span>
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex w-full shrink-0 flex-wrap items-center gap-2 sm:ml-auto sm:w-auto sm:flex-nowrap">
          {/* View Details */}
          <Link
            href={`/workout/${workout.id}`}
            className="hidden rounded-full border border-[#30353d] px-5 py-2 text-[10px] font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:block"
          >
            View Details
          </Link>

          {/* Mark as Done */}
          {!isSavedTab && (
            <button
              type="button"
              onClick={() => markAsDone(workout.id)}
              disabled={isDone}
              className={`flex-1 rounded-full px-4 py-2 text-[10px] font-black whitespace-nowrap cursor-pointer transition sm:flex-none sm:px-5 ${
                isDone
                  ? "bg-[#ccff00]/15 text-[#ccff00]"
                  : "bg-[#ccff00] text-black hover:bg-[#b6ed00]"
              }`}
            >
              {isDone ? "✓ Workout marked as done" : "✓ Mark as Done"}
            </button>
          )}

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-[14px] text-gray-500 transition hover:bg-white/5 hover:text-red-400"
          >
            <RxCross2 />
          </button>
        </div>
      </div>

      {/* Mobile View Details */}
      <div className="mt-2 flex sm:hidden">
        <Link
          href={`/workout/${workout.id}`}
          className="w-full rounded-full border border-[#30353d] py-2 text-center text-[8px] font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}