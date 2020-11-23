import { app, logger } from './index.js';

const PORT = 8080;
app.listen(PORT, () => logger.info(`Hunnitlog server listening on ${PORT}`));
