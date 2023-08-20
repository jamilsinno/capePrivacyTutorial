import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const query = new URLSearchParams({format: 'plaintext'}).toString();

  const key = 'YOUR_key_PARAMETER';
  const id = '0d17f5e5-2749-4a93-9e4f-9814e4fa7cc6';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}/uploads/${id}?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${KEY}`
      }
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();