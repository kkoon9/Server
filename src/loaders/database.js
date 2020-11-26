import mongoose from 'mongoose';
import config from '../config.js';

const { url } = config.database;

const initDatabase = async () => {
  const connection = await mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  );
  return connection.connection.db;
};

export default initDatabase;
