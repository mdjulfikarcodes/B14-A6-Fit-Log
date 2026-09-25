import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/shared/WorkoutCard";

const getLibrary = async (): Promise<Workout[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }
  return response.json();
};

const Thelibrary = async () => {
  const libraryData = await getLibrary();

  return (
    <section
      id="library"
      className="px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
      <div>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-3">
          {libraryData.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thelibrary;