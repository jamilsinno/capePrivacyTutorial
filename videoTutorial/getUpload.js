import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const query = new URLSearchParams({format: 'redacted'}).toString();

  const key = 'app';
  const id = '5281d14d-8d99-4b82-a256-35fd9a432179';
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