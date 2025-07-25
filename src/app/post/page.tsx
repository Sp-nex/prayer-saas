'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostPage() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(15);
  const router = useRouter();

  useEffect(() => {
    const justPrayed = localStorage.getItem('justPrayed');
    if (justPrayed === 'true') {
      setAmount(10);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim().length < 10) {
      alert('Please write a meaningful prayer (min 10 characters).');
      return;
    }

    const encodedText = encodeURIComponent(text);

    // ✅ Using your actual Instamojo payment links:
    const baseUrl =
      amount === 10
        ? 'https://imjo.in/N9j6Jc'
        : 'https://imjo.in/d5Dke6';

    const redirectUrl = `${baseUrl}?redirect_url=http://localhost:3000/success?text=${encodedText}`;

    window.location.href = redirectUrl;
  };

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">🙏 Post Your Intention</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder="Write your prayer intention here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <p className="text-gray-700">
            Payment Amount:{' '}
            <span className="font-bold text-green-700">₹{amount}</span>
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Proceed to Pay ₹{amount}
          </button>
        </form>
      </div>
    </main>
  );
}
