// ponytail: tiny guestbook on Vercel KV (Upstash REST). no npm deps, uses global fetch.
// ponytail: only protection is length caps + honeypot. fine for a personal site; add real
// ponytail: moderation/rate-limiting only if it actually gets spammed.

async function kv(cmd) {
  const r = await fetch(process.env.KV_REST_API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
    body: JSON.stringify(cmd),
  });
  if (!r.ok) throw new Error('kv ' + r.status);
  return (await r.json()).result;
}

function clean(s, max) {
  return String(s == null ? '' : s).replace(/[<>]/g, '').trim().slice(0, max);
}

module.exports = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'no-store');
  try {
    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') { try { body = JSON.parse(body); } catch (_) { body = {}; } }
      if (!body || typeof body !== 'object') body = {};
      if (body.website) { res.end(JSON.stringify({ ok: true })); return; } // honeypot: silently accept, store nothing
      const name = clean(body.name, 40);
      const location = clean(body.location, 40);
      const message = clean(body.message, 500);
      if (!name || !message) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'name and message are required' }));
        return;
      }
      const entry = { name, location, message, date: new Date().toISOString().slice(0, 10) };
      await kv(['RPUSH', 'guestbook', JSON.stringify(entry)]);
      res.end(JSON.stringify({ ok: true, entry }));
      return;
    }
    const raw = (await kv(['LRANGE', 'guestbook', '0', '-1'])) || [];
    const entries = raw
      .map((s) => { try { return JSON.parse(s); } catch (_) { return null; } })
      .filter(Boolean);
    res.end(JSON.stringify({ entries }));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'guestbook unavailable' }));
  }
};
