export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { enquiryRepository } from '@/src/db/local-db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message, location, service } = body;

    if (!name || !name.trim() || !phone || !phone.trim()) {
      return NextResponse.json({ error: 'Name and valid phone number are required.' }, { status: 400 });
    }

    const created = enquiryRepository.create({
      name,
      phone,
      message,
      location,
      service
    });

    return NextResponse.json({ success: true, enquiry: created });
  } catch (error: any) {
    console.error('Enquiry creation error:', error);
    return NextResponse.json({ error: 'Failed to record enquiry.' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || undefined;
    const search = searchParams.get('search') || undefined;

    const list = enquiryRepository.getAll({ status, search });
    return NextResponse.json({ success: true, enquiries: list });
  } catch (error: any) {
    console.error('Enquiry list error:', error);
    return NextResponse.json({ error: 'Failed to retrieve enquiries.' }, { status: 500 });
  }
}
