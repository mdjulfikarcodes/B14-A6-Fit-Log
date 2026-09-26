export default function Loading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>

        <p className="text-white text-lg font-medium">
          Loading workouts…
        </p>
      </div>
    </main>
  );
}