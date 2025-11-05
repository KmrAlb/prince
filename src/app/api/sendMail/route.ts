import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("📨 Email API called");
    
    const body = await req.json();
    console.log("📦 Received data:", body);

    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log("❌ Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if Resend API key exists
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("❌ RESEND_API_KEY not found in environment variables");
      return NextResponse.json(
        { error: "Server configuration error: Missing API key" },
        { status: 500 }
      );
    }

    console.log("🔑 API Key found:", apiKey.substring(0, 10) + "...");
    console.log("📧 Sending to:", process.env.TO_EMAIL);

    // Send email using fetch (more reliable than Resend SDK in some cases)
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Vivaah Tales <onboarding@resend.dev>",
        to: [process.env.TO_EMAIL || "alokbkmr@gmail.com"],
        subject: `New Enquiry from ${name} - Vivaah Tales`,
        reply_to: email,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { 
                  font-family: Arial, sans-serif; 
                  line-height: 1.6; 
                  color: #333; 
                  margin: 0;
                  padding: 0;
                }
                .container { 
                  max-width: 600px; 
                  margin: 0 auto; 
                  padding: 20px; 
                }
                .header { 
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  color: white; 
                  padding: 30px 20px; 
                  border-radius: 8px 8px 0 0; 
                  text-align: center;
                }
                .header h2 {
                  margin: 0 0 10px 0;
                  font-size: 24px;
                }
                .content { 
                  background: #f9f9f9; 
                  padding: 30px 20px; 
                  border-radius: 0 0 8px 8px; 
                }
                .field { 
                  margin-bottom: 20px; 
                }
                .label { 
                  font-weight: bold; 
                  color: #667eea; 
                  font-size: 14px;
                  margin-bottom: 5px;
                }
                .value { 
                  margin-top: 5px; 
                  padding: 12px; 
                  background: white; 
                  border-left: 4px solid #667eea;
                  border-radius: 4px;
                  word-wrap: break-word;
                }
                .footer {
                  text-align: center;
                  padding: 20px;
                  color: #666;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>✉️ New Contact Form Submission</h2>
                  <p style="margin: 0; opacity: 0.9;">Vivaah Tales Website</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Name</div>
                    <div class="value">${name}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
                  </div>
                  
                  <div class="field">
                    <div class="label">📱 Phone</div>
                    <div class="value">${phone || "Not provided"}</div>
                  </div>
                  
                  <div class="field">
                    <div class="label">💬 Message</div>
                    <div class="value">${message.replace(/\n/g, "<br>")}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This email was sent from the Vivaah Tales contact form</p>
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    const resendData = await resendResponse.json();
    console.log("📬 Resend Response:", resendData);

    if (!resendResponse.ok) {
      console.error("❌ Resend API Error:", resendData);
      return NextResponse.json(
        { 
          error: "Failed to send email", 
          details: resendData.message || "Unknown error from Resend API",
          resendError: resendData
        },
        { status: 500 }
      );
    }

    console.log("✅ Email sent successfully!");
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Email sent successfully", 
        emailId: resendData.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("❌ Server Error:", error);
    
    return NextResponse.json(
      { 
        error: "Server error occurred", 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}