import { Resend } from "resend";
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API);

export const sender = {
  get email() {
    return ENV.EMAIL_FROM;
  },
  get name() {
    return ENV. EMAIL_FROM_NAME;
  },
};
