import { USER_ROLE } from '@/entity';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

export const SHOP_EMAIL = 'customer.center@tempest.vn';
// export const SHOP_EMAIL = "shoppacc.9999@gmail.com";

export const NAME_APP_COMPANY = 'Tempest Genshin';

export const MAILER_CONFIG = {
  HOST: 'smtp.gmail.com',
  // HOST: "smtp.zoho.com",
  PORT: 587,
  // PORT: 465,
  SECURE: false,
  // SECURE: true,
  // USER: "shoppacc.9999@gmail.com",
  USER: 'tempest.customer@gmail.com',
  // USER: "customer.center@tempest.vn",
  PASS: 'kbfnkbhszlhfcrht',
  // PASS: "knmpnfkoitioimbs",
  // PASS: "Gunny2.0",
  TEMPLATE_DIR: './templates/',
  FROM: `"Tempest Genshin" <${SHOP_EMAIL}>`,
};

export const DRIVE_CONFIG = {
  PROJECT_ID: 'utopian-plane-348304',
  AUTH_URL: 'https://accounts.google.com/o/oauth2/auth',
  TOKEN_URI: 'https://oauth2.googleapis.com/token',
  CLIENT_ID:
    '153297762508-ioh0pj6cgt04illlfl6ud1aluo5cmv77.apps.googleusercontent.com',
  CLIENT_SECRET: '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',
  REFRESH_TOKEN:
    '1//040vAtTkSndS6CgYIARAAGAQSNwF-L9IrQAcPZIXwyEUahifdWCzO76MNmuUpNb4qLCET6m_jyhYk8K9aXnTv92NeB7AhFBAhdQk',
  REDIRECT_URI: 'https://developers.google.com/oauthplayground',
  ROLE: {
    READER: 'reader',
  },
  TYPE: {
    ANYONE: 'anyone',
  },
  FIELDS: 'webViewLink, webContentLink',
  SCOPES: ['https://www.googleapis.com/auth/drive'],
  TOKEN_PATH: 'token.json',
  API_KEY: 'AIzaSyAtKnWG6Jvad3_ff-CK2gtLZB5njangp6w',
};
export const MULTER_CONFIG = {
  DESTINATION: './uploads',
  CONFIG: {
    storage: diskStorage({
      destination: './uploads',
      filename: (_req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = uuid();
        //Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  },
};

export const JWT_CONFIG = {
  SECRET: 'secretKey',
  EXPIRES_IN: '1d',
};

export const JWT_EMAIL_CONFIG = {
  secret: 'secretKeyMail',
  // expiresIn: '24h',
  expiresIn: '300s',
};

export const ROLE_CONTEXT = 'roles';

export const POST_CONFIG = {
  LENGTH: { MIN: 8 },
  LIMIT: 10,
};
// export const USER_ROLE.ADMIN,USER_ROLE.MOD = [USER_ROLE.ADMIN, USER_ROLE.MOD];

export const CLOUDINARY_CONFIG = {
  NAME: 'shoppacc',
  API_KEY: '181389484819227',
  API_SECRET: 'X0ps-nMxPbMte_X8EfMI_wG6gCY',
  API_ENV:
    'CLOUDINARY_URL=cloudinary://181389484819227:X0ps-nMxPbMte_X8EfMI_wG6gCY@shoppacc',
};

export const DEFAULT_CONFIG = {
  LIMIT: 10,
  OFFSET: 0,
};

export const TIM_DANG_EMAIL = 'hhuongtinlatao@gmail.com';

export const QUILL_LIANG_EMAIL = 'lhongquan.1998@gmail.com';

export const LIMIT_FILE_BANNER = 3;

export const LIMIT_FILE_ACCOUNT = 10;

export const DEFAULT_ACCOUNT_IMAGE =
  'https://static.wikia.nocookie.net/gensin-impact/images/7/76/Enemy_Eye_of_the_Storm.png/revision/latest?cb=20201018111829';
