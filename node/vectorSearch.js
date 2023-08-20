import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const query = new URLSearchParams({
    query: 'resume',
    nb_chunks: '4',
    retriever_type: 'similarity-search',
    format: 'plaintext'
  }).toString();

  const key = 'resume';
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/keys/${key}/search?${query}`,
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