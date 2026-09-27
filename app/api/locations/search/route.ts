export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { searchLocations } from '@/lib/location-service';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const results = searchLocations(q, limit);
  return NextResponse.json({ query: q, results });
}
