import type { Request, Response } from 'express';

import { asyncHandler } from '../utils/asyncHandler';
import {
  flightByIdParamsSchema,
  flightsQuerySchema,
} from '../validators/flights.validator';
import {
  getFlightByIdFromAirLabs,
  searchFlightsFromAirLabs,
} from '../services/airlabs/flights.service';

export const searchFlights = asyncHandler(async (req: Request, res: Response) => {
  const query = flightsQuerySchema.parse(req.query);
  const data = await searchFlightsFromAirLabs(query);

  res.json({
    success: true,
    data,
  });
});

export const getFlightById = asyncHandler(async (req: Request, res: Response) => {
  const { flightId } = flightByIdParamsSchema.parse(req.params);
  const data = await getFlightByIdFromAirLabs(flightId);

  res.json({
    success: true,
    data,
  });
});
