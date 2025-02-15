import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { PopupContactSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse request body as JSON
    const body = await request.json();

    // 2. Validate incoming data with Zod using PopupContactSchema
    const validationResult = PopupContactSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    const { name, email } = validationResult.data;

    // 3. Compose email message with HTML
    const emailOptions = {
      ...mailOptions,
      subject: "SureDrive-USA New Exit-Popup Form Submission",
      html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              width: 80%;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #2d3748;
              color: #fff;
              padding: 15px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              font-size: 16px;
            }
            .content p {
              margin: 10px 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #999;
            }
            .footer a {
              color: #2d3748;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Exit-Popup Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
          </div>
        </body>
      </html>
      `.trim(),
    };

    // 4. Send email using the transporter
    await transporter.sendMail(emailOptions);

    // 5. Return success response
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
