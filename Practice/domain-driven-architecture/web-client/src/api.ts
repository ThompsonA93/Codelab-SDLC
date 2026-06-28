import { hc } from 'hono/client';
import type { AppType } from '../../server/src/index';

export const api = hc<AppType>('http://localhost:3000');