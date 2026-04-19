import { z } from 'zod';

export const flightsQuerySchema = z
  .object({
    flight_iata: z.string().trim().min(2).optional(),
    flight_icao: z.string().trim().min(2).optional(),
    dep_iata: z.string().trim().length(3).optional(),
    dep_icao: z.string().trim().length(4).optional(),
    arr_iata: z.string().trim().length(3).optional(),
    arr_icao: z.string().trim().length(4).optional(),
    airline_iata: z.string().trim().min(2).max(3).optional(),
    airline_icao: z.string().trim().min(2).max(4).optional(),
    hex: z.string().trim().min(6).optional(),
    reg_number: z.string().trim().min(2).optional(),
    limit: z.coerce.number().int().min(1).max(50).optional(),
    offset: z.coerce.number().int().min(0).optional(),
    _fields: z.string().trim().optional(),
  });

export const flightByIdParamsSchema = z.object({
  flightId: z.string().trim().min(2),
});

export type FlightsQuery = z.infer<typeof flightsQuerySchema>;
