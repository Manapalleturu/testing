FAH QR + UPI STATIC GITHUB SITE

Files:
- admin.html     = upload QR + enter UPI ID
- index.html     = customer payment page

HOW TO DEPLOY
1. Create a GitHub repository.
2. Upload admin.html and index.html.
3. Open admin.html first.
4. Enter your UPI ID and upload your QR.
5. Click Save Payment Details.
6. Open index.html in the SAME browser/device.

IMPORTANT LIMITATION
This version uses localStorage because GitHub Pages is static.
Therefore the saved QR and UPI ID are NOT shared with other customers/devices.

For a real customer-facing website where you upload the QR once and EVERY
customer sees the same QR/UPI ID, you need a shared backend/database or
external storage. The customer page cannot read an admin browser's localStorage.

The UPI link contains:
- pa = UPI ID
- pn = FAH - Find All Happiness
- cu = INR

It deliberately does NOT contain an amount.
