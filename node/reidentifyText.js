import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/privacy/reidentify/text`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${KEY}`
      },
      body: JSON.stringify({
        content: 'Hello, [NAME_GIVEN_1]!',
        entities: [
          {
            processed_text: 'NAME_GIVEN_1',
            text: 'Jamil',
            best_label: 'NAME_GIVEN'
          }
        ]
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();