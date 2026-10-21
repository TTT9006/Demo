import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'C:/Users/Hoang Vuong/.gemini/antigravity/brain/546d53c0-176a-4277-8bc6-b0fff08778f5';

async function auditSite({ browser, name, url, mobile = false }) {
  const context = await browser.newContext(
    mobile
      ? {
          viewport: { width: 390, height: 844 },
          userAgent:
            'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
          deviceScaleFactor: 2,
          isMobile: true,
          hasTouch: true,
        }
      : {
          viewport: { width: 1440, height: 900 },
          deviceScaleFactor: 1,
        }
  );

  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);

  await cdp.send('Performance.enable');
  await cdp.send('Network.enable');

  let totalTransferBytes = 0;
  let totalRequests = 0;
  const consoleErrors = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  cdp.on('Network.dataReceived', (e) => {
    totalTransferBytes += e.dataLength || 0;
  });

  cdp.on('Network.responseReceived', () => {
    totalRequests += 1;
  });

  const startTime = Date.now();
  console.log(`[${name}] Loading ${url} (${mobile ? 'Mobile 390x844' : 'Desktop 1440x900'})...`);

  let response;
  try {
    response = await page.goto(url, { waitUntil: 'networkidle', timeout: 35000 });
  } catch (err) {
    console.log(`[${name}] Load warning/timeout: ${err.message}. Continuing with domcontentloaded...`);
  }

  const loadDuration = Date.now() - startTime;
  await page.waitForTimeout(2000);

  // CDP Performance metrics
  const perfData = await cdp.send('Performance.getMetrics');
  const metricsMap = {};
  for (const m of perfData.metrics) {
    metricsMap[m.name] = m.value;
  }

  // Navigation Timing
  const navTiming = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find((p) => p.name === 'first-contentful-paint');
    return {
      dns: nav ? Math.round(nav.domainLookupEnd - nav.domainLookupStart) : null,
      ttfb: nav ? Math.round(nav.responseStart - nav.requestStart) : null,
      domInteractive: nav ? Math.round(nav.domInteractive) : null,
      domContentLoaded: nav ? Math.round(nav.domContentLoadedEventEnd) : null,
      loadEvent: nav ? Math.round(nav.loadEventEnd) : null,
      fcp: fcp ? Math.round(fcp.startTime) : null,
    };
  });

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const viewWidth = window.innerWidth;
    return {
      scrollWidth: docWidth,
      innerWidth: viewWidth,
      hasHorizontalScroll: docWidth > viewWidth + 1,
      overflowPx: Math.max(0, docWidth - viewWidth),
    };
  });

  // Extract page title & meta
  const meta = await page.evaluate(() => {
    const title = document.title;
    const desc = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const h1 = document.querySelector('h1')?.innerText?.trim();
    return { title, desc, h1 };
  });

  const screenshotFileName = `${name.toLowerCase()}_${mobile ? 'mobile' : 'desktop'}.png`;
  const screenshotPath = path.join(ARTIFACT_DIR, screenshotFileName);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`[${name}] Saved screenshot: ${screenshotFileName}`);

  const auditResult = {
    name,
    url,
    mobile,
    httpStatus: response?.status() || 200,
    meta,
    loadDurationMs: loadDuration,
    timing: navTiming,
    cdpMetrics: {
      jsHeapUsedMB: metricsMap.JSHeapUsedSize ? +(metricsMap.JSHeapUsedSize / 1024 / 1024).toFixed(2) : null,
      jsHeapTotalMB: metricsMap.JSHeapTotalSize ? +(metricsMap.JSHeapTotalSize / 1024 / 1024).toFixed(2) : null,
      domNodes: metricsMap.Nodes || null,
      layoutDurationSec: metricsMap.LayoutDuration ? +metricsMap.LayoutDuration.toFixed(3) : null,
      scriptDurationSec: metricsMap.ScriptDuration ? +metricsMap.ScriptDuration.toFixed(3) : null,
      taskDurationSec: metricsMap.TaskDuration ? +metricsMap.TaskDuration.toFixed(3) : null,
    },
    network: {
      totalRequests,
      transferredMB: +(totalTransferBytes / 1024 / 1024).toFixed(2),
    },
    overflow,
    consoleErrorsCount: consoleErrors.length,
    consoleErrorsSample: consoleErrors.slice(0, 5),
    screenshot: screenshotFileName,
  };

  await context.close();
  return auditResult;
}

async function inspectKitsumiFeatures(browser) {
  console.log('\n--- DEEP INSPECTING KITSUMI.APP ---');
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const pagesToInspect = [
    { name: 'Kitsumi Pricing', url: 'https://kitsumi.app/pricing', file: 'kitsumi_pricing.png' },
    { name: 'Kitsumi Listening', url: 'https://kitsumi.app/listening', file: 'kitsumi_listening.png' },
    { name: 'Kitsumi Vocabulary', url: 'https://kitsumi.app/vocabulary', file: 'kitsumi_vocabulary.png' },
    { name: 'Kitsumi Grammar', url: 'https://kitsumi.app/grammar', file: 'kitsumi_grammar.png' },
  ];

  const featureFindings = [];

  for (const item of pagesToInspect) {
    try {
      console.log(`Inspecting ${item.name} (${item.url})...`);
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(3000);

      const content = await page.evaluate(() => {
        const title = document.title;
        const prices = Array.from(document.querySelectorAll('button, div, span, p'))
          .map((el) => el.innerText?.trim())
          .filter((t) => t && (t.includes('$') || t.includes('€') || t.includes('₫') || t.includes('/month') || t.includes('/year') || t.includes('Free') || t.includes('Pro') || t.includes('Premium')));
        const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map((h) => h.innerText?.trim());
        const bodySnippet = document.body.innerText.slice(0, 1500);
        return { title, headings: headings.slice(0, 10), samplePrices: [...new Set(prices)].slice(0, 15), bodySnippet };
      });

      const shotPath = path.join(ARTIFACT_DIR, item.file);
      await page.screenshot({ path: shotPath });
      console.log(`Saved screenshot: ${item.file}`);

      featureFindings.push({
        name: item.name,
        url: item.url,
        screenshot: item.file,
        details: content,
      });
    } catch (e) {
      console.log(`Failed inspecting ${item.name}: ${e.message}`);
    }
  }

  await context.close();
  return featureFindings;
}

async function inspectWakabaFeatures(browser) {
  console.log('\n--- DEEP INSPECTING WAKABA-PINK ---');
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();

  const findings = [];
  const pages = [
    { name: 'Wakaba Dictionary', url: 'https://wakaba-pink.vercel.app/dictionary', file: 'wakaba_mobile_dict.png' },
    { name: 'Wakaba Flashcards', url: 'https://wakaba-pink.vercel.app/flashcards', file: 'wakaba_mobile_flashcards.png' },
    { name: 'Wakaba Tests', url: 'https://wakaba-pink.vercel.app/tests', file: 'wakaba_mobile_tests.png' },
    { name: 'Wakaba Writing', url: 'https://wakaba-pink.vercel.app/writing', file: 'wakaba_mobile_writing.png' },
  ];

  for (const item of pages) {
    try {
      console.log(`Inspecting ${item.name} (${item.url})...`);
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      await page.waitForTimeout(2500);

      // On dictionary page, try searching a word
      if (item.url.includes('dictionary')) {
        try {
          const input = await page.$('input');
          if (input) {
            await input.fill('一石二鳥');
            await input.press('Enter');
            await page.waitForTimeout(2000);
          }
        } catch {}
      }

      const content = await page.evaluate(() => {
        const title = document.title;
        const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map((h) => h.innerText?.trim());
        const bodySnippet = document.body.innerText.slice(0, 1500);
        return { title, headings: headings.slice(0, 8), bodySnippet };
      });

      const shotPath = path.join(ARTIFACT_DIR, item.file);
      await page.screenshot({ path: shotPath });
      console.log(`Saved screenshot: ${item.file}`);

      findings.push({
        name: item.name,
        url: item.url,
        screenshot: item.file,
        details: content,
      });
    } catch (e) {
      console.log(`Failed inspecting ${item.name}: ${e.message}`);
    }
  }

  await context.close();
  return findings;
}

async function run() {
  console.log('Starting Playwright CDP Comparative Audit using Edge Chromium engine...');
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // 1. Audit Wakaba (Desktop & Mobile)
    const wakabaDesktop = await auditSite({
      browser,
      name: 'Wakaba',
      url: 'https://wakaba-pink.vercel.app/',
      mobile: false,
    });

    const wakabaMobile = await auditSite({
      browser,
      name: 'Wakaba',
      url: 'https://wakaba-pink.vercel.app/',
      mobile: true,
    });

    // 2. Audit Kitsumi (Desktop & Mobile)
    const kitsumiDesktop = await auditSite({
      browser,
      name: 'Kitsumi',
      url: 'https://kitsumi.app/',
      mobile: false,
    });

    const kitsumiMobile = await auditSite({
      browser,
      name: 'Kitsumi',
      url: 'https://kitsumi.app/vi',
      mobile: true,
    });

    // 3. Deep Feature Inspections
    const kitsumiFeatures = await inspectKitsumiFeatures(browser);
    const wakabaFeatures = await inspectWakabaFeatures(browser);

    const report = {
      timestamp: new Date().toISOString(),
      audit: {
        wakaba: {
          desktop: wakabaDesktop,
          mobile: wakabaMobile,
          features: wakabaFeatures,
        },
        kitsumi: {
          desktop: kitsumiDesktop,
          mobile: kitsumiMobile,
          features: kitsumiFeatures,
        },
      },
    };

    const outPath = path.join(ARTIFACT_DIR, 'wakaba_vs_kitsumi_audit.json');
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf-8');
    console.log(`\nAudit complete! Saved data to ${outPath}`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
