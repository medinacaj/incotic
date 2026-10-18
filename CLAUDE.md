# CLAUDE.md — INCOTIC Sitio Web Corporativo

Proyecto: sitio web estático con portada (`index.html`) y siete páginas de servicios (`servicios/*.html`) para INCOTIC, empresa de soluciones tecnológicas en Concepción, Chile.

---

## Identidad

| Campo | Valor |
|---|---|
| Nombre | INCOTIC (aún no es SpA — usar solo "INCOTIC") |
| Rubro | Soluciones tecnológicas empresariales |
| Ciudad | Concepción, Región del Biobío, Chile |
| Teléfono | +56 9 7382 8553 |
| WhatsApp | https://wa.me/56973828553 |
| Email | contacto@incotic.com — **NUNCA** en HTML plano |
| Horario | Lun–Vie 9:00–18:00 |
| LinkedIn | https://www.linkedin.com/company/incotic/ |
| Instagram | https://www.instagram.com/incotic |
| GA4 | `G-XXXXXXXXXX` (placeholder — configurar antes de publicar) |
| Dominio | `www.incotic.com` (placeholder — actualizar cuando esté activo) |

---

## Arquitectura del archivo

- Portada `index.html`; estilos `site.css`, lógica `site.js`; páginas independientes `servicios/*.html` y `servicios.css`
- Font Awesome 6.5.1 desde CDN Cloudflare
- Google Fonts: Figtree (300–900)
- Logo externo reutilizable en `logo.png`
- Canvas de partículas + 4 orbes flotantes animados
- 38+ modales vía `var MD={...}` + `openModal(id)`
- HTML: ejecutar `node tests/smoke.mjs` y `node --check site.js` antes de publicar

### Secciones (orden) — portada
1. `#inicio` — Hero y datos verificables
2. `#soluciones` — 7 cards
3. `#por-que` — 6 cards
4. `#sectores` — 8 cards
5. `#metodologia` — 4 pasos
6. `#compromisos` — 6 cards
7. `#partners` — tecnologías
8. `#faq` — 5 preguntas accesibles
9. `#contacto` — CTA final
No existe sección de testimonios hasta contar con reseñas auténticas.

---

## Paleta y variables CSS

```
--bg:       #000
--bg2:      #0f0f0f
--bg3:      #1a1a1a
--white:    #f5f5f7
--grey:     #a1a1a6
--grey2:    #6e6e73
--blue:     #2997ff
--green:    #30d158
--line:     rgba(255,255,255,.11)
--line2:    rgba(255,255,255,.2)
--W:        1200px
--r:        16px
--nav-h:    68px
```

**Estilo:** inspirado en Apple.com — oscuro, minimalista, espacioso.

---

## Escala tipográfica — NO modificar sin revisar todo el sitio

| Selector | font-size | font-weight |
|---|---|---|
| `.hero-h1` | `clamp(2rem,5.5vw,3.5rem)` | 900 |
| `.sec-title` | `clamp(1.65rem,2.8vw,2.1rem)` | 800 |
| `.metric-val` | `clamp(1.1rem,2.2vw,1.55rem)` | 800 |
| `.nav-logo` | `1.3rem` | 900 |
| `.hero-p` | `0.95rem` | 400 |
| `.sec-sub` | `0.95rem` | 400 |
| `.btn-primary/secondary` | `0.9rem` | 700/600 |
| `.meto-body h3` / `.comp-card-header h3` | `0.9rem` | 700 |
| `.faq-q span` | `0.88rem` | 500 |
| `.nav-links a` | `0.87rem` | 500 |
| `.comp-card p` / `.meto-body p` | `0.85rem` | 400 |
| `.sol-body p` | `0.87rem` | 400 |
| `.modal-body` | `0.87rem` | 400 |
| `.sec-tag` | `0.65rem` | 600 uppercase |
| `.meto-step` | `0.62rem` | 700 uppercase |

---

## Sistema de modales

### Regla del símbolo `+`
**TODAS las cards con modal llevan `.card-plus` en la esquina inferior derecha — EXCEPTO las cards de partners/marcas.**

```html
<div class="card-plus"><i class="fas fa-plus"></i></div>
```

```css
.card-plus {
  position:absolute; bottom:1rem; right:1rem; z-index:3;
  width:24px; height:24px; border-radius:50%;
  border:1.5px solid rgba(255,255,255,.38);
  /* gira 90° al hover del padre */
}
```

### Modales con botón WhatsApp
Todos los modales (excepto `tyc` y `privacidad`) terminan con un botón verde:
```html
<a href="https://wa.me/56973828553?text=..." class="btn-wa" target="_blank">...</a>
```

### IDs de modales
| Tipo | IDs |
|---|---|
| Soluciones (7) | `infra-ti`, `redes`, `seguridad`, `automatizacion`, `domotica`, `ia`, `informatica` |
| Sectores (8) | `s-hogares`, `s-pymes`, `s-empresas`, `s-locales`, `s-bodegas`, `s-condominios`, `s-industrial`, `s-educacion` |
| Metodología (4) | `m-diagnostico`, `m-diseno`, `m-implementacion`, `m-monitoreo` |
| Compromisos (6) | `c-atencion`, `c-confidencialidad`, `c-acompanamiento`, `c-tiempos`, `c-preventivo`, `c-documentacion` |
| Partners (11) | `t-cisco`, `t-hikvision`, `t-mikrotik`, `t-bosch`, `t-ubiquiti`, `t-unifi`, `t-tplink`, `t-dahua`, `t-huawei`, `t-ezviz`, `t-tapo` |
| Footer (2) | `tyc`, `privacidad` |

---

## Estructura HTML de cards

### Sol-card
```html
<div class="sol-card rv" style="--c:#COLOR" onclick="openModal('ID')">
  <div class="sol-img">
    <img src="URL" alt="ALT" loading="lazy">
    <div class="sol-img-overlay"></div>
    <div class="sol-overlay-footer">
      <span class="sol-badge" style="background:#COLOR">LABEL</span>
    </div>
    <div class="card-plus"><i class="fas fa-plus"></i></div>
  </div>
  <div class="sol-body"><p>Descripción corta.</p></div>
</div>
```

### Sector-card
```html
<div class="sector-card rv" style="--c:#COLOR" onclick="openModal('ID')">
  <img src="URL" alt="ALT" loading="lazy">
  <div class="sector-overlay">
    <div class="sector-overlay-footer">
      <div class="sector-icon-wrap"><i class="fas fa-ICON"></i></div>
      <h3>Nombre</h3>
    </div>
    <div class="card-plus"><i class="fas fa-plus"></i></div>
  </div>
</div>
```

### Meto-card
```html
<div class="meto-card rv" style="--c:#COLOR;--delay:Xs" onclick="openModal('ID')">
  <div class="meto-img"><img src="URL" alt="ALT" loading="lazy"></div>
  <div class="meto-num">01</div>
  <div class="meto-body">
    <div class="meto-step">Paso 01</div>
    <h3>Título</h3>
    <p>Descripción.</p>
  </div>
  <div class="card-plus"><i class="fas fa-plus"></i></div>
</div>
```

### Comp-card
```html
<div class="comp-card rv" style="--c:#COLOR" onclick="openModal('ID')">
  <div class="comp-card-header">
    <div class="comp-icon"><i class="fas fa-ICON"></i></div>
    <h3>Título</h3>
  </div>
  <p>Descripción.</p>
  <div class="card-plus"><i class="fas fa-plus"></i></div>
</div>
```

---

## Responsive (mobile-first)

```
xs  ≤ 400px  → blobs 140px, 2 cols mínimo
sm  ≤ 640px  → nav hamburger, canvas opacity .3
md  ≤ 900px  → footer 2 cols, blobs 280px
```

**Regla:** cada cambio CSS en desktop debe revisarse en las reglas responsive de `site.css`.

---

## Modal en mobile (bottom sheet)

```css
.modal { align-items:flex-end; }
.modal-box { border-radius:20px 20px 0 0; width:100%; max-height:90dvh; animation:modalUp .28s; }
@media(min-width:641px) { .modal { align-items:center; } .modal-box { border-radius:18px; max-width:660px; } }
@keyframes modalUp { from { transform:translateY(100%) } to { transform:none } }
```

---

## Convenciones CRÍTICAS

### Nunca hacer
1. **Email en HTML plano** (tampoco en JSON-LD ni en textos de modales) — usar la variable global JS `EMAIL`, construida con `var u='contacto',d='incotic.com'`
2. **Deduplicar CSS con regex automático** — destruye propiedades importantes
3. **Duplicar reglas CSS** — verificar antes de agregar
4. **Mezclar selectores** — nunca combinar `.sec-title` con selectores de contenedor
5. **Dejar selectores CSS huérfanos** — sin `{...}` rompen el parser
6. **Modificar tipografía sin revisar TODO el sitio**

### Clases obsoletas (NO redefinir)
Reemplazadas por `.card-plus`:
- `.modal-hint`
- `.sol-overlay-plus`
- `.sector-plus`
- `.card-footer`

### FAQ — regla crítica
```css
.faq-a { display:none; }
.faq-item.open .faq-a { display:block; }
```
Nunca cambiar `display:block` por `display:none` aquí.

---

## Workflow recomendado antes de modificar

1. Ejecutar `node tests/smoke.mjs` y `node --check site.js`.
2. Buscar selectores huérfanos (sin `{}`)
3. Evitar regex de deduplicación automática — usar string replacement puntual
4. Verificar que `.faq-item.open .faq-a { display:block }` esté presente
5. Verificar que `.sec-title` tenga `font-weight:800` + `letter-spacing`

---

## Pendientes del proyecto

- [ ] Reemplazar `G-XXXXXXXXXX` con Measurement ID real de GA4 (variable `GA_ID`; gtag no se carga mientras sea placeholder)
- [ ] Confirmar si INCOTIC emite facturas / participa en licitaciones antes de volver a mencionarlo
- [ ] Conectar y verificar dominio corporativo; por ahora canonical y og:url usan `incotic.vercel.app`
- [x] Crear `og-image.jpg` (1200×630px) — está en la raíz del repo; subirla junto con `index.html` al publicar
- [ ] Agregar reseñas reales con autorización; la sección de testimonios representativos fue retirada
- [ ] Agregar fotos reales de proyectos ejecutados
- [ ] Crear perfil de Google My Business
- [x] Configurar caché conservadora y cabeceras HTTP en `vercel.json`; revisar con herramientas externas
- [ ] Verificar propiedad en Google Search Console
- [ ] Enviar sitemap.xml desde Google Search Console
- [x] Usar `logo.png` externo en la portada y páginas de servicios

---

## SEO técnico

El sitio incluye:
- `<link rel="canonical">` apuntando a `https://www.incotic.com/`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Cards
- Schema.org `LocalBusiness` JSON-LD
- `sitemap.xml` en la raíz
- `robots.txt` en la raíz

Actualizar canonical y og:url cuando el dominio esté activo.

---
## Auditoría e implementación de octubre de 2026
Consulta `QA_IMPLEMENTACION.md` para cambios, verificaciones, pendientes comerciales y restricciones de publicación.
