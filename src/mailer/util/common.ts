import { EXPIRES_IN_MINUTE, MAILER_CONFIG } from "@/core";
import {
  MailContext,
  MailerOptions,
  MAILER_TEMPLATE,
  MAILER_TEMPLATE_ENUM,
} from "../interface";

export const getMailOptions = (
  to: string,
  mailerTemplate: MAILER_TEMPLATE_ENUM,
  context: MailContext
): MailerOptions => {
  return {
    from: MAILER_CONFIG.FROM,
    to,
    subject: MAILER_TEMPLATE[mailerTemplate].SUBJECT,
    template: MAILER_TEMPLATE[mailerTemplate].TEMPLATE,
    context,
  };
};

export const getExpiredTime = (expiresIn: EXPIRES_IN_MINUTE): Date => {
  const date = new Date();
  return new Date(date.getTime() + expiresIn * 60000);
};
