import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT, 10) || 8080,
  database: {
    url: process.env.DB_URL,
  }
};

export default config;
