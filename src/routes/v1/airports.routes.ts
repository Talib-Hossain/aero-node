import { Router } from 'express';

import { searchAirports } from '../../controllers/airports.controller';

export const airportsRouter = Router();

airportsRouter.get('/', searchAirports);
