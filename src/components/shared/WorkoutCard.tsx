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
    <Link href={`/workout/${workout.id}`}>
      <div className="overflow-hidden rounded-xl border border-[#292d35] bg-[#15171e]">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            className="object-cover" />
        </div>

        <div className="p-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[10px] font-bold uppercase text-black">
                {group}
              </span>
            ))}
          </div>

          <h2 className="text-base font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            {workout.equipment}
          </p>

          <div className="my-4 h-px bg-[#292d35]" />

          <div className="flex items-center gap-5 text-sm text-gray-400">
            <span className="flex items-center gap-1 px-5 py-3">
              <IoTimeOutline /> {workout.duration} min</span>
            <span className="flex items-center gap-1 px-5 py-3">
              <FaFireFlameCurved />{workout.caloriesBurned} kcal</span>
            <span className="flex items-center gap-1 px-5 py-3">
              <FaRegStar />{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;