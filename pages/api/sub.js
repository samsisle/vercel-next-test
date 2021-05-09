// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';

export default async function sub(req, res) {
  const sub = await fetch('https://sub-api.dono.gg/v2/subscriptions/active', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const subData = await sub.json();

  res.json({ data: subData });
}
