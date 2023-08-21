import FormData from 'form-data';
import fetch from 'node-fetch';

async function run() {
  const form = new FormData();
  form.append('file','string');
  form.append('entities','null');

  const resp = await fetch(
    `https://api.capeprivacy.com/v1/privacy/reidentify/file`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer <YOUR_TOKEN_HERE>'
      },
      body: form
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();