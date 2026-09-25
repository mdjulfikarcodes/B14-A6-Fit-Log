import Image from "next/image";
import WorkoutActions from "@/components/shared/WorkoutActions";

import { notFound } from "next/navigation";

import { Workout } from "@/types/workout";

interface WorkoutDetailsPageProps {

    params: Promise<{

        id: string;

    }>;

}

const getWorkout = async (id: string): Promise<Workout | null> => {

    const response = await fetch("https://api.abcz.workers.dev/api/fitlog",
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {

        return null;
    }
    const workouts: Workout[] = await response.json();

    return workouts.find((workout) => String(workout.id) === String(id)) ?? null;

};

const WorkoutDetailsPage = async ({

    params,

}: WorkoutDetailsPageProps) => {

    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }
    return (
        <main className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white md:px-6 lg:px-8">
            <div className="overflow-hidden rounded-lg border border-none bg-[#0f1116]">
                <div className="grid gap-7 p-4 md:p-6 lg:grid-cols-[1fr_1fr] lg:gap-7">

                    {/* LEFT - IMAGE */}
                    <div className="relative h-90 w-full overflow-hidden rounded-lg md:h-125 lg:h-155">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            unoptimized
                            className="object-cover"/>
                    </div>
                    
                    {/* RIGHT - DETAILS */}
                    <div className="flex flex-col">
                        {/* TITLE */}
                        <h1 className="text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                            {workout.name}
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-2 text-sm leading-5 text-gray-400">
                           {workout.description}
                        </p>

                        {/* MUSCLE GROUPS */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {workout.muscleGroups?.map((group) => (
                                <span
                                    key={group}
                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-[10px] font-bold uppercase text-black"  >
                                    {group}
                                </span>
                            ))}
                        </div>

                        {/* DETAILS BOX */}
                        <div className="mt-4 overflow-hidden rounded-lg border border-[#252932] bg-[#15181f]">
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                    Equipment
                                </span>
                                <span className="text-xs text-gray-300">
                                    {workout.equipment}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                 Difficulty
                                </span>
                                <span className="text-xs text-gray-300">
                                    {workout.difficulty}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                 Sets
                                </span>
                                <span className="text-xs text-gray-300">
                                   {workout.sets}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                    Reps
                                </span>
                                <span className="text-xs text-gray-300">
                                    {workout.reps}
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                    Duration
                                </span>
                                <span className="text-xs text-gray-300">
                                   {workout.duration} min
                                </span>
                            </div>
                            <div className="flex items-center justify-between border-b border-[#252932] px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                    Calories
                                </span>
                                <span className="text-xs text-gray-300">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>
                            <div className="flex items-center justify-between px-3 py-3">
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
                                    Rating
                                </span>
                                <span className="text-xs text-gray-300">
                                    {workout.rating}
                                </span>
                            </div>
                        </div>

                        {/* INSTRUCTIONS */}
                        <div className="mt-5">
                            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
                                Instructions
                            </h2>
                            <ol className="mt-3 space-y-2">
                                {workout.instructions?.map((instruction, index) => (
                                    <li
                                      key={index}
                                        className="flex gap-3 text-xs leading-5 text-gray-400">
                                        <span className="shrink-0 text-gray-500">
                                            {index + 1}.
                                       </span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* BUTTONS */}
                        <div>
                            <WorkoutActions workout={workout} />
                        </div>
                    </div>
                </div>
            </div>
      </main>

    );

};

export default WorkoutDetailsPage;