"use server";
import { google } from 'googleapis';

export const sendForm = async (formData: FormData) => {
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    try {
        // Assuming formData is an object with email, phone, subject, and message properties

        // Initialize Google Sheets API client

        const auth = await google.auth.getClient({
            projectId: "nemcina",
            credentials: {
                type: "service_account",
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY,
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                token_url: "https://oauth2.googleapis.com/token",
                universe_domain: "googleapis.com",
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID; // Replace with your actual spreadsheet ID
        const range = 'contacts'; // Update with your actual range, e.g., 'Sheet1!A:D'

        // Prepare the data to be appended
        const valueInputOption = 'USER_ENTERED';
        const resource = {
            values: [[email, phone, subject, message]],
        };

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: resource
        });
        return "success";
    } catch (error) {
        console.error('The API returned an error: ' + error);
        throw error; // Propagate the error
    }
}
