import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';
import {KEY} from './.env.js';

async function run() {
  const form = new FormData();
  const fileStream = fs.createReadStream('./resume.pdf');
  form.append('file',fileStream);
  form.append('chunk_size','1000');
  form.append('chunk_overlap','0');

  const key = 'app';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}/uploads/file`,
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