import { z } from 'zod';

export const airportsQuerySchema = z
  .object({
    iata_code: z.string().trim().length(3).optional(),
    icao_code: z.string().trim().length(4).optional(),
    country_code: z.string().trim().length(2).optional(),
    city_code: z.string().trim().min(3).optional(),
    name: z.string().trim().min(2).optional(),
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

export type AirportsQuery = z.infer<typeof airportsQuerySchema>;
