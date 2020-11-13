import { app, logger } from './index.js';

const PORT = 8080;
app.listen(PORT, () => logger.info(`Validation layer server listening on ${PORT}`));
