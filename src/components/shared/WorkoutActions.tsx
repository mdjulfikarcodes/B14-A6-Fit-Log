"use client";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  return (
    <div className="flex flex-wrap gap-3">
      {/* Add to Today's Plan */}
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="rounded-lg bg-[#ccff00] px-5 py-1.5 my-3 text-sm font-black uppercase text-black transition hover:bg-[#b6ed00]">
            Add to today&apos;s plan
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="rounded-lg border border-[#30353d] px-5 py-1.5 my-3 text-sm font-black uppercase text-white transition hover:border-[#ccff00]">
        Save for later
      </button>
    </div>
  );
}