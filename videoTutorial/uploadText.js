import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const key = 'app';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}/uploads/text`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${KEY}`
      },
      body: JSON.stringify({
        filename: 'myfile.txt',
        content: 'hello, world! This was sent from the app.'
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();