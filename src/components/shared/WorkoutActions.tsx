"use client";

import { useState } from "react";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import { MdAddToPhotos } from "react-icons/md";
import { Bookmark } from "lucide-react";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();

  const [planDisabled, setPlanDisabled] = useState(false);
  const [saveDisabled, setSaveDisabled] = useState(false);

  const handleAddToPlan = () => {
    if (planDisabled) return;

    addToPlan(workout);
    setPlanDisabled(true);
  };

  const handleSaveForLater = () => {
    if (saveDisabled) return;

    saveWorkout(workout);
    setSaveDisabled(true);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* Add to Today's Plan */}
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={planDisabled}
        className={`my-3 flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition ${
          planDisabled
            ? "cursor-not-allowed bg-gray-700 text-gray-400 opacity-60"
            : "bg-[#ccff00] text-black hover:bg-[#b6ed00]"
        }`}
      >
        <MdAddToPhotos size={16} />
        {planDisabled
          ? "Added to today's plan"
          : "Add to today's plan"}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSaveForLater}
        disabled={saveDisabled}
        className={`my-3 flex cursor-pointer items-center gap-2 rounded-lg px-5 py-3 text-sm font-black transition ${
          saveDisabled
            ? "cursor-not-allowed border border-gray-700 bg-gray-700 text-gray-400 opacity-60"
            : "border border-[#30353d] text-white hover:border-[#ccff00]"
        }`}
      >
        <Bookmark size={18} />
        {saveDisabled ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}