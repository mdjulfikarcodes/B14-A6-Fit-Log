import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-7xl font-black text-white sm:text-8xl">
          404
        </p>

        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          Workout Not Found
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
          The page you are looking for does not exist or the URL is invalid.
        </p>

        <Link href="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </main>
  );
}