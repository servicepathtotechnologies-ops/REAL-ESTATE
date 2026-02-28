import { NextResponse } from 'next/server';
import { saveLeadToStore } from '@/lib/crm-store';
import { syncToGoogleSheets } from '@/lib/google-sheets';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

export async function POST(req) {
    try {
        const data = await req.json();

        // Validate basics
        if (!data.name || !data.phone || !data.budget || !data.propertyType) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        // Save Lead
        const newLead = saveLeadToStore(data);

        // Call external integrations
        await syncToGoogleSheets(newLead);
        await sendWhatsAppMessage(newLead.name, newLead.phone);

        return NextResponse.json({
            success: true,
            lead: newLead,
            sheetsSync: true,
            whatsappSent: true
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
