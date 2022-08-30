export interface SendWelcomeMailInterface {
  to: string;
  username: string;
}

export interface SendTokenMailInterface extends SendWelcomeMailInterface {
  token: string;
}

export interface SendAuditStoneMailInterface extends SendWelcomeMailInterface {
  gameUsername: string;
  password: string;
  server: string;
  UID: string;
  total: number;
  note?: string;
}

export interface SendBuyAccountMailInterface extends SendWelcomeMailInterface {
  username: string;
  listImage: string[];
}

export interface SendBuyAccountsMailInterface extends SendWelcomeMailInterface {
  cost: number;
}
