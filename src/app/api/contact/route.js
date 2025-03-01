import User from "../../models/user";
import { connectToDB } from "@/app/utils/database";
import sendEmail from "@/app/utils/sendEmail";

export const dynamic = "force-dynamic";

export const POST = async (req) => {
  await connectToDB();

  try {
    // Parse the request body
    const { name, email, phone, subject, message } = await req.json();

    // Fetch all users with the role "admin"
    const admins = await User.find({ role: "admin" });

    if (admins.length === 0) {
      return new Response("No admin users found.", { status: 404 });
    }

    // Prepare email content
    const emailContent = {
      url: "https://yourwebsite.com/support", // Update with your support link
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Please address this support request promptly.</p>
      `,
    };

    // Send email to each admin
    for (const admin of admins) {
      await sendEmail(
        admin.email,
        "New Support Request",
        emailContent.url,
        emailContent.html
      );
    }

    // Respond with success
    return new Response("Support request submitted successfully.", {
      status: 200,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Failed to process the request.", { status: 500 });
  }
};
