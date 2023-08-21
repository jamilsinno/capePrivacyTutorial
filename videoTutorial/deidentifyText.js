import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/privacy/deidentify/text`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${KEY}`
      },
      body: JSON.stringify({
        content: 'Hello, Bob!',
        entity_detection: {
          accuracy: 'high',
          entity_types: [
            {
              type: 'DISABLE',
              value: [
                'NAME',
                'LOCATION',
                'LANGUAGE',
                'LOCATION_COUNTRY',
                'DATE_INTERVAL',
                'DATE',
                'EVENT'
              ]
            }
          ],
          return_entity: true
        }
      })
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();