import { chromium } from 'playwright';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const base=process.env.MOBILE_TEST_URL || fs.readFileSync('.share/url.txt','utf8').trim();
fs.mkdirSync('test-results/mobile',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[];
try {
 for(const width of [320,390,430,768,1440]) {
  const context=await browser.newContext({viewport:{width,height:844},isMobile:width<768,hasTouch:width<768,deviceScaleFactor:1});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'/login');
  assert.ok(await page.getByRole('button',{name:'Dùng tài khoản mẫu'}).isVisible());
  if(width===390)await page.screenshot({path:'test-results/mobile/login.png',fullPage:true});
  await page.getByRole('button',{name:'Dùng tài khoản mẫu'}).click();await page.waitForURL('**/dashboard');
  for(const route of ['/dashboard','/dictionary?q=ikimasu','/dictionary/1578850','/flashcards','/flashcards/review','/grammar','/grammar/desu','/writing','/tests','/progress','/profile','/settings','/assistant']) {
   await page.goto(base+route,{waitUntil:'domcontentloaded'});await page.locator('h1').first().waitFor();
   await page.waitForFunction(()=>document.querySelectorAll('.loading-stack').length===0);
   if(route.startsWith('/dictionary'))await page.locator('.word-card').first().waitFor();
   const overflow=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,culprits:[...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1).slice(0,5).map(e=>({tag:e.tagName,cls:e.className}))}));
   results.push({width,route,overflow:overflow.scroll>overflow.width+1,...(overflow.scroll>overflow.width+1?{details:overflow}:{})});
   if(width===390&&['/dashboard','/dictionary?q=ikimasu','/writing'].includes(route))await page.screenshot({path:'test-results/mobile/'+route.split('?')[0].slice(1)+'.png',fullPage:true});
  }
  if(width<768){
   await page.goto(base+'/writing');await page.locator('canvas').waitFor();
   await page.locator('canvas').tap();
   await page.waitForFunction(()=>[...document.querySelectorAll('button')].some(b=>b.textContent.includes('Lùi nét')&&!b.disabled));
   assert.ok(await page.getByRole('button',{name:'Lùi nét',exact:true}).isEnabled());
   await page.getByRole('button',{name:'Mở điều hướng',exact:true}).click();
   await page.getByRole('dialog').waitFor();
   await page.getByRole('dialog').getByRole('link',{name:'Ngữ pháp',exact:true}).click();await page.waitForURL('**/grammar');
   assert.equal(await page.getByRole('dialog').count(),0);
   await page.getByRole('button',{name:'Thêm',exact:true}).click();await page.getByRole('dialog').waitFor();
   await page.getByRole('button',{name:'Đóng điều hướng',exact:true}).click();
   assert.equal(await page.getByRole('dialog').count(),0);
   await page.goto(base+'/dictionary?q=食べる');await page.getByRole('button',{name:'Thêm nghĩa 1 vào thẻ'}).first().click();
   await page.getByRole('dialog').waitFor();
   const bounds=await page.getByRole('dialog').boundingBox();assert.ok(bounds.x>=0&&bounds.x+bounds.width<=width+1);
   await page.getByRole('button',{name:'Đóng',exact:true}).click();
  }
  assert.deepEqual(errors,[]);
  await page.request.post(base+'/api/auth/logout');await context.close();
  console.log(JSON.stringify({width,pages:13,errors,overflows:results.filter(r=>r.width===width&&r.overflow)}));
 }
 fs.writeFileSync('test-results/mobile/verification.json',JSON.stringify(results,null,2));
 assert.equal(results.filter(r=>r.overflow).length,0);
} finally {await browser.close();}
