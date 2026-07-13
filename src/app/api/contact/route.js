import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Ensure email is present
    if (!data.email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.WEBHOOK_URL;
    const apiKey = process.env.MAKE_API_KEY;

    if (!webhookUrl) {
      console.error("WEBHOOK_URL is not configured.");
      return NextResponse.json(
        { error: "Server configuration error. Missing Webhook URL." },
        { status: 500 }
      );
    }

    // Extract Geolocation headers (Provided automatically by Vercel in production)
    const country = request.headers.get("x-vercel-ip-country") || "Unknown";
    const city = request.headers.get("x-vercel-ip-city") || "Unknown";

    // Build the base payload (always includes email, source, timestamp, and location)
    let payload = {
      source: data.source || "unknown",
      email: data.email,
      submittedAt: new Date().toISOString(),
      country,
      city
    };

    // Only include extra fields if it's the full contact form
    if (data.source === "contact_page") {
      payload = {
        ...payload,
        name: data.name || null,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        plan: data.plan || null,
        message: data.message || null,
      };
    }

    // Configure headers for Make.com webhook
    const headers = {
      "Content-Type": "application/json",
    };

    if (apiKey) {
      headers["x-make-apikey"] = apiKey;
    }

    // Proxy the request securely to Make.com
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Make.com Webhook error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to process submission via webhook" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Submission successful" });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
