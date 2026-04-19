import { z } from 'zod';

export const routesQuerySchema = z
  .object({
    dep_iata: z.string().trim().length(3).optional(),
    dep_icao: z.string().trim().length(4).optional(),
    arr_iata: z.string().trim().length(3).optional(),
    arr_icao: z.string().trim().length(4).optional(),
    airline_iata: z.string().trim().min(2).max(3).optional(),
    airline_icao: z.string().trim().min(2).max(4).optional(),
    flight_iata: z.string().trim().min(2).optional(),
    flight_icao: z.string().trim().min(2).optional(),
    flight_number: z.string().trim().min(1).optional(),
    limit: z.coerce.number().int().min(1).max(50).optional(),
    offset: z.coerce.number().int().min(0).optional(),
    _fields: z.string().trim().optional(),
  })
  .refine(
    (value) =>
      Object.values(value).some((item) => item !== undefined && item !== ''),
    {
      message: 'At least one search parameter is required',
    },
  );

export type RoutesQuery = z.infer<typeof routesQuerySchema>;
