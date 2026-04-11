import { ENV } from "../lib/env.js";
import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // Resend free tier: can only send to own email in development
  const recipient =
    ENV.NODE_ENV === "development"
      ? "rudragajjar744@gmail.com"
      : email;

  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: recipient,
    subject: "Welcome to NexChat!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};
