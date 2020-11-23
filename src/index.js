import express from 'express';
import log4js from 'log4js';

import BaseRouter from './routes/index.js';

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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', BaseRouter);
app.use(express.static('apidoc'));
app.get('/', (req, res) => {
  res.render('index.html');
});
