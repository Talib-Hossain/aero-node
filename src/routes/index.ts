import { Router } from 'express';

import { airportsRouter } from './v1/airports.routes';
import { flightsRouter } from './v1/flights.routes';
import { healthRouter } from './v1/health.routes';
import { routesRouter } from './v1/routes.routes';

export const apiRouter = Router();

apiRouter.use('/health', healthRouter);
apiRouter.use('/flights', flightsRouter);
apiRouter.use('/airports', airportsRouter);
apiRouter.use('/routes', routesRouter);
