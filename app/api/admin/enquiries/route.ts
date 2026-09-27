export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { enquiryRepository } from '@/src/db/local-db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;

    const list = enquiryRepository.getAll({ status, search });
    return NextResponse.json({ success: true, enquiries: list });
  } catch (error: any) {
    console.error('Admin enquiry list error:', error);
    return NextResponse.json({ error: 'Failed to retrieve enquiries' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !['pending', 'contacted', 'closed'].includes(status)) {
      return NextResponse.json({ error: 'Invalid ID or status' }, { status: 400 });
    }

    const updated = enquiryRepository.updateStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Admin enquiry update error:', error);
    return NextResponse.json({ error: 'Failed to update enquiry' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const deleted = enquiryRepository.delete(id);
    return NextResponse.json({ success: deleted });
  } catch (error: any) {
    console.error('Admin enquiry delete error:', error);
    return NextResponse.json({ error: 'Failed to delete enquiry' }, { status: 500 });
  }
}
