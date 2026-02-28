import { NextResponse } from 'next/server';
import { getLeadsStore } from '@/lib/crm-store';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const leads = getLeadsStore();
        return NextResponse.json({ success: true, leads }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch leads' }, { status: 500 });
    }
}
