import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        Lesson Plan Generator
      </h1>

      <p className="text-gray-600 mb-8">
        Generate professional lesson plans in seconds
      </p>

      <Link
        href="/generate"
        className="px-6 py-3 bg-black text-white rounded-xl"
      >
        Get Started
      </Link>
    </main>
  );
}