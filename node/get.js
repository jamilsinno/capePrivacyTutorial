import fetch from 'node-fetch';
import {KEY} from './secret.js';

async function run() {
  const query = new URLSearchParams({
    limit: '20',
    offset: '0',
    prefix: ''
  }).toString();

  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys?${query}`,
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