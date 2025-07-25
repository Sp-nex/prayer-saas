import { Prayer } from '@prisma/client';

export default async function AdminPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/prayers`, {
    cache: 'no-store',
  });
  const prayers: Prayer[] = await res.json();

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">🛠️ Admin Panel</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="text-left p-3">Text</th>
            <th className="text-left p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {prayers.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.text}</td>
              <td className="p-3 text-sm text-gray-600">
                {new Date(p.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
