import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const read=(p)=>readFileSync(path.join(root,p),'utf8');
const html=read('index.html');
const css=read('site.css');
const js=read('site.js');
const xml=read('sitemap.xml');
const serviceSlugs=['infraestructura-ti','redes-y-conectividad','seguridad-electronica','automatizacion','domotica','inteligencia-artificial','informatica'];
const count=(s,re)=>(s.match(re)||[]).length;
function check(label,value){assert.ok(value,label);console.log('✓ '+label);}

check('HTML opens and closes divs equally',count(html,/<div\b/g)===count(html,/<\/div>/g));
check('Main landmark and unique H1',count(html,/<main\b/g)===1&&count(html,/<\/main>/g)===1&&count(html,/<h1\b/g)===1);
check('Only factual service and process metrics',count(html,/class="metric-val"/g)===4);
check('Fake testimonials removed',!html.includes('id="testimonios"')&&!html.includes('Testimonios representativos'));
check('Accessible FAQ disclosure buttons',count(html,/id="faq-button-[0-9]+"/g)===5&&count(html,/id="faq-answer-[0-9]+"/g)===5);
check('All main images have alt text',Array.from(html.matchAll(/<img\b[^>]*>/g)).every(m=>/\balt="/.test(m[0])));
check('All remote images reserve dimensions',Array.from(html.matchAll(/<img\b[^>]*src="https:\/\/images.unsplash.com\/[^>]*>/g)).every(m=>/\bwidth="/.test(m[0])&&/\bheight="/.test(m[0])));
check('Styles and scripts extracted',html.includes('href="/site.css"')&&html.includes('src="/site.js"')&&css.includes('.faq-q')&&js.includes('function openModal'));
check('Modal keyboard handling',js.includes("modalInerted.forEach")&&js.includes("e.key!=='Tab'"));
check('Only one main canonical',count(html,/rel="canonical"/g)===1&&html.includes('href="https://incotic.vercel.app/"'));
check('Sitemap includes home',xml.includes('<loc>https://incotic.vercel.app/</loc>'));
check('No dangerous javascript links in HTML',!html.includes('href="javascript:'));
check('Logo and preview image exist',existsSync(path.join(root,'logo.png'))&&existsSync(path.join(root,'og-image.jpg')));
const ids=Array.from(html.matchAll(/\bid="([^"]+)"/g),m=>m[1]);
check('No duplicate HTML IDs',new Set(ids).size===ids.length);
for(const slug of serviceSlugs){
  const file='servicios/'+slug+'.html';
  check('Service page '+slug,existsSync(path.join(root,file)));
  const s=read(file);
  check('SEO and navigation '+slug,s.includes('<h1')&&s.includes('href="https://incotic.vercel.app/'+file+'"')&&html.includes('href="/'+file+'"')&&xml.includes('<loc>https://incotic.vercel.app/'+file+'</loc>'));
}
check('Service layout exists',existsSync(path.join(root,'servicios.css')));
check('Vercel HTTP security headers declared',read('vercel.json').includes('X-Content-Type-Options'));
console.log('INCOTIC smoke checks completed.');
