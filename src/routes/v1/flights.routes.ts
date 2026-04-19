import { Router } from 'express';

import { getFlightById, searchFlights } from '../../controllers/flights.controller';

export const flightsRouter = Router();

flightsRouter.get('/', searchFlights);
flightsRouter.get('/:flightId', getFlightById);
