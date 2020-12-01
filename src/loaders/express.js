import express from 'express';
import api from '../apis/routes/index.js';
import errorHandler from './error.js';

export default (app) => {
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
  app.use('/', api);
  app.use(errorHandler);
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};
