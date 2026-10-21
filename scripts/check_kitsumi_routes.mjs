import fetch from 'node-fetch';

async function checkKitsumiRoutes() {
  const routes = [
    '/pricing',
    '/vi',
    '/vi/pricing',
    '/listening',
    '/pronunciation',
    '/vocabulary',
    '/grammar',
    '/jlpt-exams',
    '/about',
    '/faq'
  ];

  for (const r of routes) {
    try {
      const res = await fetch('https://kitsumi.app' + r);
      console.log(`Route ${r}: status ${res.status}`);
      if (res.status === 200) {
        const text = await res.text();
        const titleMatch = text.match(/<title>([^<]+)<\/title>/i);
        console.log(`  -> Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
      }
    } catch (e) {
      console.log(`Route ${r}: error ${e.message}`);
    }
  }
}

checkKitsumiRoutes().catch(console.error);
