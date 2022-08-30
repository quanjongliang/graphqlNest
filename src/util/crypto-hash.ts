import * as crypto from "crypto";

export interface EncryptedText {
  iv: string;
  content: string;
}

export const encryptText = (text: string): EncryptedText => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(
    process.env.ALGORITHM,
    process.env.SECRET_KEY,
    iv
  );

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

export const decryptValue = (hash: EncryptedText): string => {
  const decipher = crypto.createDecipheriv(
    process.env.ALGORITHM,
    process.env.SECRET_KEY,
    Buffer.from(hash.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

export const getApiBank = (): string => {
  const token = decryptValue({
    iv: process.env.IV_TOKEN,
    content: process.env.CONTENT_TOKEN,
  });
  const password = decryptValue({
    iv: process.env.IV_PASSWORD,
    content: process.env.CONTENT_PASSWORD,
  });
  const number = decryptValue({
    iv: process.env.IV_NUMBER,
    content: process.env.CONTENT_NUMBER,
  });
  return `${process.env.BANK_API}${password}/${number}/${token}`;
};
