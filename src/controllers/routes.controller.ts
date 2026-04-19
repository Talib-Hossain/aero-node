import type { Request, Response } from 'express';

import { searchRoutesFromAirLabs } from '../services/airlabs/routes.service';
import { asyncHandler } from '../utils/asyncHandler';
import { routesQuerySchema } from '../validators/routes.validator';

export const searchRoutes = asyncHandler(async (req: Request, res: Response) => {
  const query = routesQuerySchema.parse(req.query);
  const data = await searchRoutesFromAirLabs(query);

  res.json({
    success: true,
    data,
  });
});
