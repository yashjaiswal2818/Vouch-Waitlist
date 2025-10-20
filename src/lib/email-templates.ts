export function waitlistConfirmationEmail(name: string, position: number): string {
    const primary = "#2563eb";
    const light = "#dbeafe";
    const text = "#111827";
    const muted = "#6b7280";
    const safeName = name?.trim() ? escapeHtml(name.trim()) : "";

    return `
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Welcome to the waitlist!</title>
    <style>
      /* Mobile-friendly base styles */
      @media only screen and (max-width: 600px) {
        .container { padding: 16px !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#ffffff; color:${text};">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; background:#ffffff;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table class="container" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px; border-collapse:collapse; border:1px solid ${light}; border-radius:12px; overflow:hidden;">
            <tr>
              <td style="background:${light}; padding:24px; text-align:center;">
                <h1 style="margin:0; font-size:20px; line-height:28px; color:${primary}; font-weight:800; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">Welcome to the waitlist${safeName ? ", " + safeName : ""}!</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                <p style="margin:0 0 12px 0; font-size:16px; line-height:24px; color:${text};">You're <span style="display:inline-block; background:${primary}; color:#ffffff; padding:6px 10px; border-radius:9999px; font-weight:700;">#${position}</span> in line.</p>
                <p style="margin:0 0 8px 0; font-size:16px; line-height:24px; color:${text};"><strong>First 100 users get 50% off for 3 months!</strong></p>
                <p style="margin:0; font-size:14px; line-height:22px; color:${muted};">We'll email you when we launch. Stay tuned!</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
 </html>`;
}

function escapeHtml(input: string): string {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


