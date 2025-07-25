// src/app/api/prayers/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const prayers = await prisma.prayer.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(prayers);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPrayer = await prisma.prayer.create({
    data: {
      text: body.text,
    },
  });
  return NextResponse.json(newPrayer);
}
