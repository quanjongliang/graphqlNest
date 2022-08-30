import { TemplateOptions } from "nodemailer-express-handlebars";

export enum MAILER_TEMPLATE_ENUM {
  WELCOME = "WELCOME",
  RESET_PASSWORD = "RESET_PASSWORD",
  SUBMIT_USER = "SUBMIT_USER",
  AUDIT_STONE = "AUDIT_STONE",
  AUDIT_STONE_TO_USER = "AUDIT_STONE_TO_USER",
  BUY_ACCOUNT_BY_USER = "BUY_ACCOUNT_BY_USER",
  BUY_ACCOUNT_TO_USER = "BUY_ACCOUNT_TO_USER",
  BUY_ACCOUNTS_TO_USER = "BUY_ACCOUNTS_TO_USER",
  BUY_ACCOUNTS_BY_USER = "BUY_ACCOUNTS_BY_USER",
}

export const MAILER_TEMPLATE: MailerTemplateInterface = {
  WELCOME: {
    TEMPLATE: "welcome-mail",
    SUBJECT: "Welcome!",
  },
  RESET_PASSWORD: {
    TEMPLATE: "reset-password-mail",
    SUBJECT: "Reset password!",
  },
  SUBMIT_USER: {
    TEMPLATE: "submit-user-mail",
    SUBJECT: "Submit user!",
  },
  AUDIT_STONE: {
    TEMPLATE: "request-stone-mail",
    SUBJECT: "Request Stone",
  },
  AUDIT_STONE_TO_USER: {
    TEMPLATE: "request-stone-mail-to-user",
    SUBJECT: "Request Stone to user",
  },
  BUY_ACCOUNT_BY_USER: {
    TEMPLATE: "buy-account-by-user",
    SUBJECT: "Buy account by user",
  },
  BUY_ACCOUNT_TO_USER: {
    TEMPLATE: "buy-account-to-user",
    SUBJECT: "Buy account to user",
  },
  BUY_ACCOUNTS_TO_USER: {
    TEMPLATE: "buy-accounts-to-user",
    SUBJECT: "Buy accounts to user",
  },
  BUY_ACCOUNTS_BY_USER: {
    TEMPLATE: "buy-accounts-by-user",
    SUBJECT: "Buy accounts by user",
  },
};

export interface MultiAccountForMail {
  name: string;
  ar: number;
  server: string;
  image: string;
  price: string;
}

export interface MailerTemplateInterface {
  [key: string]: {
    TEMPLATE: string;
    SUBJECT: string;
  };
}

export interface WelcomeMailContext {
  username: string;
  company: string;
}

export interface ResetPasswordMailContext {
  username: string;
  token: string;
  company: string;
}

export interface SubmitUserMailContext {
  username: string;
  token: string;
  company: string;
}

export interface RequestStoneMailContext {
  username: string;
  gameUsername: string;
  password: string;
  server: string;
  UID: string;
  note: string;
  total: number;
}

export interface BuyAccountByUserContext {
  username: string;
  listImage: string[];
}
export interface BuyAccountsContext {
  username: string;
  accounts: MultiAccountForMail[];
  cost: number;
}

export type MailContext =
  | WelcomeMailContext
  | ResetPasswordMailContext
  | SubmitUserMailContext
  | RequestStoneMailContext
  | BuyAccountByUserContext
  | BuyAccountsContext;

export interface MailerOptions extends TemplateOptions {
  from: string;
  to: string;
  subject: string;
}
