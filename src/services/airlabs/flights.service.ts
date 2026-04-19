import { airlabsRequest } from './airlabs.service';
import { pickDefined } from '../../utils/pickDefined';
import type { FlightsQuery } from '../../validators/flights.validator';

export const searchFlightsFromAirLabs = async (query: FlightsQuery) => {
  return airlabsRequest<unknown[]>('/flights', pickDefined(query));
};

export const getFlightByIdFromAirLabs = async (flightId: string) => {
  return airlabsRequest<unknown[]>('/flight', {
    flight_iata: flightId,
  });
};
