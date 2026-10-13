import {chromium} from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const base=fs.readFileSync('.share/url.txt','utf8').trim();
const browser=await chromium.launch({channel:'msedge',headless:true});
const checks=[];
try{
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true}),page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/login');await page.getByRole('button',{name:'Dùng tài khoản mẫu'}).click();await page.waitForURL('**/dashboard');
 for(const q of ['gakkō','tōkyō','sūpā']){await page.goto(base+'/dictionary?q='+encodeURIComponent(q));await page.locator('.word-card').first().waitFor();checks.push({query:q,head:await page.locator('.word-title').first().innerText()});}
 await page.goto(base+'/writing?mode=radicals&radical=85');await page.locator('.radical-grid button').first().waitFor();assert.equal(await page.locator('.radical-grid button').count(),214);
 await page.getByRole('button',{name:'Xem thứ tự nét',exact:true}).click();await page.locator('.stroke-order svg').waitFor();assert.equal(await page.locator('.stroke-order path').count(),4);
 await page.goto(base+'/settings');await page.locator('.annotation-preview ruby').first().waitFor();assert.equal(await page.getByRole('radio').count(),2);
 await page.goto(base+'/grammar/desu');await page.locator('.example ruby').first().waitFor();checks.push({radicals:214,strokePaths:4,annotationPreview:true,grammarRuby:true});
 for(const route of ['/.env','/prisma/learning.db','/.share/trial.db','/data/raw/jmdict.json','/package.json']){
  const response=await page.request.get(base+route),type=response.headers()['content-type']||'',body=await response.body();assert.ok(response.status()===404||type.includes('text/html'));assert.ok(!body.toString('utf8').includes('DATABASE_URL='));assert.ok(!body.subarray(0,16).toString().includes('SQLite format'));checks.push({route,status:response.status(),contentType:type});
 }
 assert.deepEqual(errors,[]);await page.request.post(base+'/api/auth/logout');console.log(JSON.stringify({base,checks,errors},null,2));fs.mkdirSync('test-results/upgrade',{recursive:true});fs.writeFileSync('test-results/upgrade/production-smoke.json',JSON.stringify({base,checks,errors},null,2));
}finally{await browser.close();}
