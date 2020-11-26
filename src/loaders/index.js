import expressLoader from './express.js';
import mongooseLoader from './database.js';
import Logger from './logger.js';

export default async (expressApp) => {
  await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  await expressLoader(expressApp);
  Logger.info('✌️ Express loaded');
};
