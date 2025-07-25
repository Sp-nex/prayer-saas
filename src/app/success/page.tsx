'use client';

import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [status, setStatus] = useState<'saving' | 'done'>('saving');
  const [text, setText] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prayerText = params.get('text') || '';
    setText(prayerText);

    if (prayerText) {
      fetch('/api/prayers', {
        method: 'POST',
        body: JSON.stringify({ text: prayerText }),
        headers: { 'Content-Type': 'application/json' },
      }).then(() => setStatus('done'));
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-xl w-full text-center">
        {status === 'saving' ? (
          <p className="text-lg text-gray-500">Saving your prayer...</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-green-700 mb-4">🙏 Thank You!</h1>
            <p className="text-gray-700 mb-2">Your prayer has been posted:</p>
            <blockquote className="italic text-gray-900 bg-gray-100 p-4 rounded">
              {text}
            </blockquote>
            <p className="mt-4 text-sm text-gray-500">You can now pray for others too.</p>
          </>
        )}
      </div>
    </main>
  );
}
