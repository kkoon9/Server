import express from 'express';
import log4js from 'log4js';

export const app = express();
export const logger = log4js.getLogger();

log4js.configure({
  appenders: {
    console: {
      type: 'console'
    },
    default: {
      type: 'file',
      filename: 'logs/hunnitlog.log',
      pattern: '-yyyy-MM-dd',
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ['default', 'console'],
      level: 'DEBUG'
    }
  }
});
logger.level = 'ALL';

/**
 * Health Check endpoints
 * @TODO Explain why they are here
 */
app.get('/health', (req, res) => {
  res.status(200).end();
});
app.head('/health', (req, res) => {
  res.status(200).end();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
