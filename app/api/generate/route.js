import { NextResponse } from 'next/server';
import { generateContent } from '@/app/lib/claude';

export async function POST(request) {
  try {
    const body = await request.json();
    const { country } = body;

    if (!country || typeof country !== 'string' || !country.trim()) {
      return NextResponse.json({ error: 'Missing or invalid country' }, { status: 400 });
    }

    const result = await generateContent(country.trim());
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error('Route /api/generate error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
