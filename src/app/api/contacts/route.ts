import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from "@/config/nodemailer";
import { contactSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse the request body as JSON
    const body = await request.json();

    // 2. Validate incoming data with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.issues[0].message;
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, preferredLanguage, state } =
      validationResult.data;

    // 3. Compose the email message with HTML
    const emailOptions = {
      ...mailOptions,
      subject: "SureDrive-USA New Contact Form Submission",
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
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "N/A"}</p>
              <p><strong>Preferred Language:</strong> ${
                preferredLanguage || "N/A"
              }</p>
              <p><strong>State:</strong> ${state}</p>
            </div>
            <div class="footer">
              <p>Thank you for contacting us!</p>
              <p><a href="https://www.suredrive-usa.com">Visit SureDrive-USA</a></p>
            </div>
          </div>
        </body>
      </html>
      `.trim(),
    };

    // 4. Send the email
    const info = await transporter.sendMail(emailOptions);

    // 5. Return a success response
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
