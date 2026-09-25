"use client";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import { MdAddToPhotos } from "react-icons/md";
import { Bookmark } from "lucide-react";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({ workout, }: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  return (
    <div className="flex flex-wrap gap-3">
      {/* Add to Today's Plan */}
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="rounded-lg bg-[#ccff00] px-5 my-3 text-sm font-black text-black transition hover:bg-[#b6ed00] flex items-center gap-2 py-3 cursor-pointer">
        <MdAddToPhotos size={16} />Add to today&apos;s plan
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={() => saveWorkout(workout)}
        className="rounded-lg border border-[#30353d] px-5 my-3 text-sm font-black text-white transition hover:border-[#ccff00] flex items-center gap-2 py-3 cursor-pointer">
        <Bookmark size={18} />Save for later
      </button>
    </div>
  );
}