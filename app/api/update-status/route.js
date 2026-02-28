import { NextResponse } from 'next/server';
import { updateLeadStatus } from '@/lib/crm-store';

export async function PATCH(req) {
    try {
        const data = await req.json();
        if (!data.id || !data.status) {
            return NextResponse.json({ success: false, error: 'Missing id or status' }, { status: 400 });
        }

        const updated = updateLeadStatus(data.id, data.status);
        if (!updated) {
            return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update lead' }, { status: 500 });
    }
}
