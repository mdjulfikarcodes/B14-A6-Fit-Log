import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";

import { IoTimeOutline } from "react-icons/io5";
import { FaFireFlameCurved, FaRegStar } from "react-icons/fa6";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="block w-full">
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-[#292d35] bg-[#15171e] transition hover:border-[#3a414c]">
        <div className="relative h-40 w-full overflow-hidden sm:h-44 md:h-48">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="p-3 sm:p-4">
          <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#b6ff00] px-2.5 py-1 text-[9px] font-bold uppercase text-black sm:px-3 sm:text-[10px]"
              >
                {group}
              </span>
            ))}
          </div>

          <h2 className="truncate text-sm font-bold uppercase text-white sm:text-base">
            {workout.name}
          </h2>

          <p className="mt-1 truncate text-[11px] text-gray-500 sm:text-xs">
            {workout.equipment}
          </p>

          <div className="my-3 h-px bg-[#292d35] sm:my-4" />

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-gray-400 sm:gap-x-3 sm:text-sm">
            <span className="flex items-center gap-1">
              <IoTimeOutline />
              <span>{workout.duration} min</span>
            </span>

            <span className="flex items-center gap-1">
              <FaFireFlameCurved />
              <span>{workout.caloriesBurned} kcal</span>
            </span>

            <span className="flex items-center gap-1">
              <FaRegStar />
              <span>{workout.rating}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;