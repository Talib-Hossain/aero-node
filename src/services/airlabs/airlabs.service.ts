import { StatusCodes } from 'http-status-codes';

import { airlabsClient } from '../../config/http';
import { env } from '../../config/env';
import { AppError } from '../../errors/AppError';

type AirLabsEnvelope<T> = {
  request?: {
    lang?: string;
    currency?: string;
    time?: number;
    id?: string;
    server?: string;
    host?: string;
    pid?: number;
    key?: {
      id?: number;
      api_key?: string;
      type?: string;
      expired?: string;
      registered?: string;
      limits_by_hour?: number;
      limits_by_minute?: number;
      limits_by_month?: number;
      limits_total?: number;
    };
    params?: Record<string, unknown>;
    version?: string;
    method?: string;
    client?: {
      ip?: string;
      geo?: {
        country_code?: string;
        country?: string;
        continent_code?: string;
        continent?: string;
        city?: string;
        lat?: number;
        lng?: number;
        timezone?: string;
      };
      connection?: {
        type?: string;
        isp_code?: number;
        isp_name?: string;
      };
      device?: Record<string, unknown>;
      agent?: Record<string, unknown>;
      karma?: number;
      is_mobile?: boolean;
      is_app?: boolean;
      is_bot?: boolean;
      is_browser?: boolean;
      is_abuser?: boolean;
    };
  };
  response?: T;
  terms?: string;
};

export const airlabsRequest = async <T>(
  endpoint: string,
  params: Record<string, unknown>,
): Promise<T> => {
  try {
    const response = await airlabsClient.get<AirLabsEnvelope<T>>(endpoint, {
      params: {
        api_key: env.AIRLABS_API_KEY,
        ...params,
      },
    });

    return response.data.response as T;
  } catch (error) {
    throw new AppError(
      'Failed to fetch data from AirLabs',
      StatusCodes.BAD_GATEWAY,
      error instanceof Error ? error.message : error,
    );
  }
};
