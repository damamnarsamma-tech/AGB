export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { runAmpAudit } from '@/scripts/amp-monitor';

export async function GET() {
  try {
    const summary = await runAmpAudit();
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      status: summary.failedCount === 0 ? 'HEALTHY' : 'DEGRADED',
      summary
    });
  } catch (error) {
    return NextResponse.json(
      {
        timestamp: new Date().toISOString(),
        status: 'ERROR',
        error: error instanceof Error ? error.message : 'AMP audit failed'
      },
      { status: 500 }
    );
  }
}
