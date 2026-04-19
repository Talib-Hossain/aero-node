import axios from 'axios';

import { env } from './env';

export const airlabsClient = axios.create({
  baseURL: env.AIRLABS_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});
