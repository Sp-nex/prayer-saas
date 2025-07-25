"use client";

import { useEffect, useState } from "react";

type Prayer = {
  id: number;
  text: string;
  createdAt: string;
};

export default function WallPage() {
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const res = await fetch("/api/prayers");
        const data = await res.json();
        setPrayers(data);
      } catch (error) {
        console.error("Failed to load prayers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayers();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🙏 Prayer Wall</h1>

      {loading ? (
        <p>Loading prayers...</p>
      ) : prayers.length === 0 ? (
        <p>No intentions yet. Be the first to pray!</p>
      ) : (
        <ul className="space-y-3">
          {prayers.map((prayer) => (
            <li
              key={prayer.id}
              className="bg-white p-4 rounded shadow text-gray-800"
            >
              <p>{prayer.text}</p>
              <p className="text-xs text-gray-400">
                {new Date(prayer.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
