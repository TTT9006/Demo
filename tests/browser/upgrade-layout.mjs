import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base=process.env.MOBILE_TEST_URL||'http://127.0.0.1:5173';
const browser=await chromium.launch({channel:'msedge',headless:true});const results=[];
fs.mkdirSync('test-results/upgrade',{recursive:true});
try{for(const width of [320,390,768,1440]){
 const context=await browser.newContext({viewport:{width,height:900},hasTouch:width<768,isMobile:width<768});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/login');await page.getByRole('button',{name:'Dùng tài khoản mẫu'}).click();await page.waitForURL('**/dashboard');
 for(const dark of [false,true])for(const route of ['/writing?mode=radicals&radical=85&form='+encodeURIComponent('氵'),'/kanji/'+encodeURIComponent('休'),'/settings','/grammar/desu','/dictionary?q=gakk%C5%8D']){
  await page.goto(base+route);await page.locator('main h1,main h2').first().waitFor();await page.waitForFunction(()=>document.querySelectorAll('.loading-stack').length===0);
  if(route.startsWith('/writing')){await page.locator('canvas').waitFor();await page.getByRole('button',{name:'Xem thứ tự nét',exact:true}).click();await page.locator('.stroke-order svg').waitFor();if(width<768){await page.locator('canvas').tap();assert.ok(await page.getByRole('button',{name:'Lùi nét',exact:true}).isEnabled());}}
  if(route.startsWith('/grammar'))await page.locator('ruby').first().waitFor();
  await page.evaluate(d=>document.documentElement.dataset.theme=d?'dark':'light',dark);
  await page.waitForTimeout(200);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);results.push({width,dark,route,overflow});assert.equal(overflow,false,JSON.stringify(results.at(-1)));
  if(width===390||width===1440)await page.screenshot({path:'test-results/upgrade/'+width+'-'+(dark?'dark':'light')+'-'+route.split('?')[0].replaceAll('/','_')+'.png',fullPage:true});
 }
 assert.deepEqual(errors,[]);await context.close();console.log({width,checks:10,errors});
}}finally{await browser.close();fs.writeFileSync('test-results/upgrade/layout.json',JSON.stringify(results,null,2));}
