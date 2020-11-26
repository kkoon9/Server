import dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.PORT, 10) || 8080,
  database: {
    url: process.env.DB_URL,
  }
};
