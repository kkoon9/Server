import express from 'express';

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

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
};
