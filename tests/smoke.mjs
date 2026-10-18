// Comprobaciones estáticas del sitio INCOTIC. Ejecutar: node tests/smoke.mjs
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (p) => readFileSync(p, 'utf8');
const html = read('index.html');
const xml = read('sitemap.xml');
const count = (s, re) => (s.match(re) || []).length;
const check = (label, ok) => { assert.ok(ok, label); console.log('✓ ' + label); };
const SLUGS = ['infraestructura-ti', 'redes-y-conectividad', 'seguridad-electronica', 'automatizacion', 'domotica', 'inteligencia-artificial', 'informatica'];

check('DIVs balanceados', count(html, /<div\b/g) === count(html, /<\/div>/g));
check('Un solo <main> y un solo <h1>', count(html, /<main\b/g) === 1 && count(html, /<h1\b/g) === 1);
check('Sin IDs duplicados', (() => { const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]); return new Set(ids).size === ids.length; })());
check('Email nunca en texto plano', !html.includes('contacto@incotic.com'));
check('Regla crítica de FAQ presente', html.includes('.faq-item.open .faq-a{display:block}'));
check('.sec-title con peso 800', /\.sec-title\{[^}]*font-weight:800/.test(html));
check('Responsive en orden md → sm → xs', html.indexOf('/* md ≤ 900px */') < html.indexOf('/* sm ≤ 640px */') && html.indexOf('/* sm ≤ 640px */') < html.indexOf('/* xs ≤ 400px */'));
check('JSON-LD válido', (() => { JSON.parse(html.match(/ld\+json">([\s\S]*?)<\/script>/)[1]); return true; })());
check('Imágenes con alt', [...html.matchAll(/<img\b[^>]*>/g)].every(m => /\balt="/.test(m[0])));
check('Logo e imagen OG existen', existsSync('logo.png') && existsSync('og-image.jpg'));

for (const slug of SLUGS) {
  const file = `servicios/${slug}.html`;
  check(`Página ${slug} existe`, existsSync(file));
  const s = read(file);
  check(`${slug}: enlazada desde index, en sitemap y con <h1>`, html.includes(`href="${file}"`) && xml.includes(`/${file}</loc>`) && s.includes('<h1'));
  // GitHub Pages sirve el sitio en /incotic/: las rutas que empiezan con "/" se rompen
  check(`${slug}: sin rutas absolutas a la raíz`, !/(href|src)="\/(?!\/)/.test(s));
}
console.log('Comprobaciones INCOTIC completadas.');
