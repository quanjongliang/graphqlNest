import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
//https://github.com/deepakchandola717/morgan-winston-example

const transport = new DailyRotateFile({
  filename: `${__dirname}/../logs/application-%DATE%.log`,
  datePattern: 'DD-MM-YYYY',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: 3,
});

// options for logger object
const options = {
  file: {
    level: 'info',
    filename: `${__dirname}/../logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 3,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// logger object with above defined options
export const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
    transport,
  ],
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.colorize(),
    winston.format.timestamp({
      format: () => new Date().toLocaleString('en-US'),
    }),
    winston.format.printf((info) => {
      const { timestamp, level, message, ...rest } = info;
      const numTabs = 2;
      const payload =
        Object.keys(rest).length > 0 ? JSON.stringify(rest, null, numTabs) : '';
      return `[${timestamp}] ${level}: ${message} ${payload}`;
    }),
  ),
  exitOnError: false,
});

export const stream = {
  write: logger.info.bind(logger), //https://github.com/winstonjs/winston/issues/1591
};
