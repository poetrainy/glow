import { createClient } from 'microcms-js-sdk';

let serviceDomainData: string = '';
let apiKeyData: string = '';

if (
  process.env.NEXT_PUBLIC_MICROCMS_API_URL !== undefined &&
  process.env.NEXT_PUBLIC_MICROCMS_API_KEY !== undefined
) {
  serviceDomainData = process.env.NEXT_PUBLIC_MICROCMS_API_URL;
  apiKeyData = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
}

export const client = createClient({
  serviceDomain: serviceDomainData,
  apiKey: apiKeyData,
});
