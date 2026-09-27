export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { templateRepository } from '@/src/db/local-db';

export async function GET() {
  try {
    const list = templateRepository.getAll();
    return NextResponse.json({ success: true, templates: list });
  } catch (error: any) {
    console.error('Templates list error:', error);
    return NextResponse.json({ error: 'Failed to retrieve templates' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, category, message } = body;

    if (!title || !message) {
      return NextResponse.json({ error: 'Title and message are required' }, { status: 400 });
    }

    const saved = templateRepository.save({ id, title, category: category || 'custom', message });
    return NextResponse.json({ success: true, template: saved });
  } catch (error: any) {
    console.error('Template save error:', error);
    return NextResponse.json({ error: 'Failed to save template' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }

    const deleted = templateRepository.delete(id);
    return NextResponse.json({ success: deleted });
  } catch (error: any) {
    console.error('Template delete error:', error);
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 });
  }
}
