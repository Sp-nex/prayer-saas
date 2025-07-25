import { Prayer } from '@prisma/client';

export default async function WallPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/prayers`, {
    cache: 'no-store',
  });
  const prayers: Prayer[] = await res.json();

  return (
    <main className="min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        🙏 Prayer Wall
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {prayers.length === 0 ? (
          <p className="text-center text-gray-500">No prayers yet.</p>
        ) : (
          prayers
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .map((p) => (
              <div
                key={p.id}
                className="bg-green-50 border border-green-200 p-4 rounded-lg shadow"
              >
                <p className="text-gray-800">{p.text}</p>
                <p className="text-xs text-right text-gray-400 mt-2">
                  {new Date(p.createdAt).toLocaleString()}
                </p>
              </div>
            ))
        )}
      </div>
    </main>
  );
}
