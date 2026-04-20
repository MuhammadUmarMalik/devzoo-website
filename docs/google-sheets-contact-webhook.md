# Google Sheets lead capture setup

This project now sends contact form submissions to `GOOGLE_SHEETS_WEBHOOK_URL`.

## 1. Create the sheet

Create a Google Sheet and add this header row in the first tab:

`submittedAt | source | name | email | company | phone | service | timeline | budget | preferredContact | message | page | userAgent`

## 2. Create the Apps Script webhook

Open `Extensions -> Apps Script` from the sheet and paste this script:

```javascript
const SHEET_NAME = "Sheet1";
const WEBHOOK_SECRET = "replace-with-a-strong-secret";

function doPost(e) {
  try {
    const secret = e?.parameter?.secret;
    if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
      return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
    }

    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      data.submittedAt || "",
      data.source || "",
      data.name || "",
      data.email || "",
      data.company || "",
      data.phone || "",
      data.service || "",
      data.timeline || "",
      data.budget || "",
      data.preferredContact || "",
      data.message || "",
      data.page || "",
      data.userAgent || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) }, 500);
  }
}

function jsonResponse(payload, status) {
  return ContentService.createTextOutput(JSON.stringify({ status, ...payload }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy it

Deploy the script as a web app:

- Execute as: `Me`
- Who has access: `Anyone`

Copy the web app URL.

## 4. Add environment variables

Add these values to your local and deployed environment:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-script-id/exec
GOOGLE_SHEETS_WEBHOOK_SECRET=replace-with-a-strong-secret
```

The backend will automatically append `?secret=...` when `GOOGLE_SHEETS_WEBHOOK_SECRET` is set.

## 5. Test it

Submit the contact form from `/contact` and confirm a new row appears in the sheet.
