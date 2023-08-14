import fetch from 'node-fetch';
import {KEY} from './secret.js';

async function run() {
  const key = 'intro';
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
        content: 'hello, world!'
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();