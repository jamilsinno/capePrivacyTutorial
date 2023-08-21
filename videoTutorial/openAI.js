import fetch from 'node-fetch';
import {KEY} from './.env.js';

async function run() {
  const resp = await fetch(
    `https://api.capeprivacy.com/v1/openai/chat/completions`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a happy, helpful assistant.'
          },
          {
            role: 'user',
            content: 'Tell me a joke.'
          }
        ],
        format: 'redacted',
        extra_openai: {temperature: 1}
      })
    }
  );

  const data = await resp.json();
  console.log(data);
  console.log(data.choices[0].message);
}

run();