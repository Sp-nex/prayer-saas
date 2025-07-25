// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">🙏 Welcome to PrayWall</h1>
        <p className="text-gray-600 mb-6">
          Post your prayer intention for ₹15 and let others pray for you.
          When you pray for someone else, your next post only costs ₹10.
          Join the circle of blessings 💫
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/wall">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition">
              🧱 View Prayer Wall
            </button>
          </Link>
          <Link href="/post">
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition">
              🙏 Post a Prayer (₹15)
            </button>
          </Link>
        </div>

        <footer className="mt-8 text-sm text-gray-400">
          Made with ❤️ for those who believe in prayer.
        </footer>
      </div>
    </main>
  );
}
