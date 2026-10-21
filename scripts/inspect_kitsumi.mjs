import fetch from 'node-fetch';

async function main() {
  const res = await fetch('https://kitsumi.app/');
  const html = await res.text();
  
  // Extract title and description
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  
  console.log('--- KITSUMI METADATA ---');
  console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
  console.log('Description:', descMatch ? descMatch[1] : 'N/A');

  // Extract links
  const links = [...html.matchAll(/href=["'](\/[^"']*)["']/g)].map(m => m[1]);
  console.log('Internal links sample:', [...new Set(links)].slice(0, 20));

  // Extract text snippets
  const bodyText = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ');
  console.log('Body Text snippet:', bodyText.slice(0, 1500));
}

main().catch(console.error);
