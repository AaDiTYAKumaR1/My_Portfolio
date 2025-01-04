import { NextRequest, NextResponse } from "next/server";
import sendEmail from "@/lib/mailer.js";
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req?.json();
    console.log(name, email, message);
    const data = {
      name: name,
      email: email,
      content: message,
    };

    await sendEmail(email, data, "contactme email");
    return NextResponse.json({
        message: "success",
        data:"email sent"
      });
  } catch (error) {
    return NextResponse.json({
        message: "error",
      });
  }
  
}
