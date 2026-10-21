import fetch from 'node-fetch';

async function poll() {
  console.log('Polling Vercel deployment for commit 1f8d473...');
  for (let i = 0; i < 30; i++) {
    try {
      const htmlRes = await fetch('https://wakaba-pink.vercel.app/?t=' + Date.now(), { headers: { 'Cache-Control': 'no-cache' } });
      const html = await htmlRes.text();
      const match = html.match(/assets\/index-[^.]+\.js/);
      if (match) {
        const jsRes = await fetch('https://wakaba-pink.vercel.app/' + match[0]);
        const js = await jsRes.text();
        if (js.includes('examMode') || js.includes('finish-all')) {
          console.log(`SUCCESS: Latest commit deployed on Vercel! Asset: ${match[0]}`);
          process.exit(0);
        }
        console.log(`[Attempt ${i + 1}/30] Current asset: ${match[0]} (Still waiting for Vercel build to complete...)`);
      }
    } catch (e) {
      console.log('Error checking:', e.message);
    }
    await new Promise(r => setTimeout(r, 6000));
  }
  console.log('Timed out waiting for Vercel deployment.');
  process.exit(1);
}

poll();
