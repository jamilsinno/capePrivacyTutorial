import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';
import {KEY} from './.env.js';

const entityDetection = JSON.stringify({
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
})
async function run() {
  const form = new FormData();
  const fileStream = fs.createReadStream('./resume.pdf');
  form.append('file',fileStream);
  form.append('entity_detection', entityDetection);
  form.append('entities', '[]');

  const resp = await fetch(
    `https://api.capeprivacy.com/v1/privacy/deidentify/file`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KEY}`
      },
      body: form
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();