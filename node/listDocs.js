import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const query = new URLSearchParams({
    limit: '20',
    offset: '0'
  }).toString();

  const key = 'YOUR_key_PARAMETER';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}/uploads?${query}`,
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