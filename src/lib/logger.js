import winston from "winston";
import config from './../config.json';

const {timestamp, printf, combine} = winston.format;
const level = process.env.LOG_LEVEL || 'debug';
const coustomFormat = printf(info => {
    return `${info.timestamp}  ${info.level}: ${info.message}`;
});

export default winston.createLogger({
    level: level,
    format: combine(timestamp(), coustomFormat),
    transports: [
        new winston.transports.File({filename: config.appLogPath + 'keyrock.log'})
    ]
});