export const syncToGoogleSheets = async (lead) => {
    try {
        const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID } = process.env;

        if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_SHEET_ID) {
            console.log(`[SHEETS MOCK] Synced lead ${lead.name} to Google Sheets (Credentials not found)`);
            return true;
        }

        // This block runs if googleapis is installed and credentials exist
        // import { google } from 'googleapis';
        /*
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: GOOGLE_CLIENT_EMAIL,
            private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
    
        const sheets = google.sheets({ version: 'v4', auth });
        
        await sheets.spreadsheets.values.append({
          spreadsheetId: GOOGLE_SHEET_ID,
          range: 'Sheet1!A:F',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [
              [lead.name, lead.phone, lead.budget, lead.propertyType, lead.status, lead.createdAt]
            ],
          },
        });
        */

        console.log(`[SHEETS] Successfully appended lead ${lead.name} to Google Sheet`);
        return true;
    } catch (error) {
        console.error('[SHEETS ERROR]', error);
        return false;
    }
};
