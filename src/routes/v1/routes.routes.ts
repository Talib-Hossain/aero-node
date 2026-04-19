import { Router } from 'express';

import { searchRoutes } from '../../controllers/routes.controller';

export const routesRouter = Router();

routesRouter.get('/', searchRoutes);
