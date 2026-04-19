import { airlabsRequest } from './airlabs.service';
import { pickDefined } from '../../utils/pickDefined';
import type { RoutesQuery } from '../../validators/routes.validator';

export const searchRoutesFromAirLabs = async (query: RoutesQuery) => {
  return airlabsRequest<unknown[]>('/routes', pickDefined(query));
};
