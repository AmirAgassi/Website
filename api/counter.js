// ponytail: visit counter backed by Vercel KV (Upstash REST). no npm deps, uses global fetch.
// ponytail: counts every load incl. refreshes (authentically 2000s). dedupe by cookie only if it matters.
const BASE = 733; // first visit shows 734

async function kv(cmd) {
  const r = await fetch(process.env.KV_REST_API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
    body: JSON.stringify(cmd),
  });
  if (!r.ok) throw new Error('kv ' + r.status);
  return (await r.json()).result;
}

module.exports = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'no-store');
  try {
    const n = await kv(['INCR', 'visits']);
    res.end(JSON.stringify({ count: BASE + Number(n) }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'counter unavailable' }));
  }
};
