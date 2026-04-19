import type { Request, Response } from 'express';

import { searchAirportsFromAirLabs } from '../services/airlabs/airports.service';
import { asyncHandler } from '../utils/asyncHandler';
import { airportsQuerySchema } from '../validators/airports.validator';

export const searchAirports = asyncHandler(async (req: Request, res: Response) => {
  const query = airportsQuerySchema.parse(req.query);
  const data = await searchAirportsFromAirLabs(query);

  res.json({
    success: true,
    data,
  });
});
