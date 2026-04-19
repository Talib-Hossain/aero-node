import { airlabsRequest } from './airlabs.service';
import { pickDefined } from '../../utils/pickDefined';
import type { AirportsQuery } from '../../validators/airports.validator';

export const searchAirportsFromAirLabs = async (query: AirportsQuery) => {
  return airlabsRequest<unknown[]>('/airports', pickDefined(query));
};
