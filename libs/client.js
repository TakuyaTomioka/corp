import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'corp',
  apiKey: process.env.API_KEY,
});