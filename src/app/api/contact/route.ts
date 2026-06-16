import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const ses = new SESClient({ region: "us-east-1" });

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await ses.send(
      new SendEmailCommand({
        Source: "aws_forward@geraghtyfamily.net",
        Destination: { ToAddresses: ["hello@lg3digital.com"] },
        Message: {
          Subject: { Data: `New contact from ${name} via LG3 Digital` },
          Body: {
            Text: {
              Data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            },
          },
        },
        ReplyToAddresses: [email],
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SES send failed:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
