export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { findNearestLocation } from '@/lib/geo-locator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lat, lng } = body;

    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return NextResponse.json(
        { error: 'Valid latitude and longitude are required' },
        { status: 400 }
      );
    }

    const match = findNearestLocation(lat, lng);
    return NextResponse.json({
      success: true,
      match
    });
  } catch (error) {
    console.error('GPS detection API error:', error);
    return NextResponse.json(
      { error: 'Failed to process GPS coordinates' },
      { status: 500 }
    );
  }
}
