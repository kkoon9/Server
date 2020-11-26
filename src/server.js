import express from 'express';
import Logger from './loaders/logger.js';
import config from './config.js';
import loader from './loaders/index.js';

async function startServer() {
  const app = express();

  await loader(app);

  app.listen(config.port, () => {
    Logger.info(`✌️ Server listening on port: ${config.port}`);
  }).on('error', (err) => {
    Logger.error(err);
    process.exit(1);
  });
}

startServer();
