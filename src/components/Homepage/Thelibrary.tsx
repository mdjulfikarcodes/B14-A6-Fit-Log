import Image from "next/image";

interface Workout {
    id: string | number;
    image: string;
    name: string;
    muscleGroups?: string[];
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
}

const getLibrary = async () => {
    const response = await fetch(
        "https://api.abcz.workers.dev/api/fitlog",
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
        <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
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
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {libraryData.map((library: Workout) => (
                        <div
                            key={library.id}
                            className="
                overflow-hidden
                rounded-xl
                border
                border-[#292d35]
                bg-[#15171e]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#b6ff00]/40
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
              "
                        >
                            {/* Image */}
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src={library.image}
                                    alt={library.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-4">

                                {/* Muscle Groups */}
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {library.muscleGroups?.map(
                                        (muscle: string, index: number) => (
                                            <span
                                                key={index}
                                                className="
                          rounded-full
                          bg-[#b6ff00]
                          px-3
                          py-1
                          text-[10px]
                          font-bold
                          uppercase
                          text-black
                        "
                                            >
                                                {muscle}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Workout Name */}
                                <h3 className="text-base font-bold uppercase text-white">
                                    {library.name}
                                </h3>

                                {/* Equipment */}
                                <p className="mt-1 text-xs text-gray-500">
                                    {library.equipment}
                                </p>

                                {/* Divider */}
                                <div className="my-4 h-px bg-[#292d35]" />

                                {/* Workout Information */}
                                <div className="flex items-center gap-15 text-xs text-gray-400">

                                    {/* Duration */}
                                    <div className="flex gap-1.5">
                                        <span>◷</span>
                                        <span>{library.duration} min</span>
                                    </div>

                                    {/* Calories */}
                                    <div className="flex gap-1.5">
                                        <span>♟</span>
                                        <span>{library.caloriesBurned} kcal</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1.5">
                                        <span className="text-gray-500">☆</span>
                                        <span>{library.rating}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Thelibrary;