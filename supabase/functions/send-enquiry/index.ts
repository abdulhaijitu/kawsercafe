import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface EnquiryRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "DOLCE BARI <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return res.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: EnquiryRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields: name, email, subject, and message are required");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email address");
    }

    // Store enquiry in database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from("enquiries")
      .insert({
        name,
        email,
        phone: phone || null,
        subject,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save enquiry");
    }

    // Send notification email to business
    await sendEmail(
      ["hello@dolcebari.com.au"], // Change this to your actual business email
      `New Enquiry: ${subject}`,
      `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3d2e24; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">
            New Customer Enquiry
          </h1>
          
          <div style="background: #faf8f5; padding: 20px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ""}
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #3d2e24;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #888; font-size: 12px;">
            This enquiry was submitted via the DOLCE BARI website contact form.
          </p>
        </div>
      `
    );

    console.log("Business notification email sent");

    // Send confirmation email to customer
    await sendEmail(
      [email],
      "Thank you for contacting DOLCE BARI",
      `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3d2e24; text-align: center;">
            Thank You, ${name}
          </h1>
          
          <div style="text-align: center; margin: 20px 0;">
            <div style="width: 60px; height: 2px; background: #c9a227; margin: 0 auto;"></div>
          </div>
          
          <p style="line-height: 1.8; color: #555; text-align: center;">
            We have received your enquiry and will get back to you as soon as possible.
          </p>
          
          <div style="background: #faf8f5; padding: 20px; border-radius: 4px; margin: 30px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Your message:</strong></p>
            <p style="color: #666; font-style: italic;">"${message}"</p>
          </div>
          
          <p style="line-height: 1.8; color: #555; text-align: center;">
            In the meantime, feel free to visit us at:<br>
            <strong>320–326 Huntingdale Road, Huntingdale, VIC 3166</strong><br>
            or call us at <strong>+61 413 669 707</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #888; font-size: 12px; text-align: center;">
            DOLCE BARI — Sweets & Café
          </p>
        </div>
      `
    );

    console.log("Customer confirmation email sent");

    return new Response(
      JSON.stringify({ success: true, message: "Enquiry submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    console.error("Error in send-enquiry function:", errorMessage);
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
