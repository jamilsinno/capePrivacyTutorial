import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const key = 'capechat-1692488088754';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${KEY}`
      }
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();