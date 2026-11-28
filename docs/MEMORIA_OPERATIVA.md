# Memoria operativa — INCOTIC

Índice único del estado del proyecto para retomar el trabajo desde cualquier chat o agente.
**No reemplaza** a GitHub: resume y enlaza Issues, PRs y commits, que siguen siendo la
evidencia. Las reglas de uso están en `AGENTS.md` (sección "Memoria y continuidad").
Decisiones confirmadas: `docs/DECISIONES.md`.

> Antes de confiar en este archivo, compara su SHA de referencia con `git log -1 origin/main`.
> Si `main` avanzó, revisa los commits nuevos y los PRs fusionados desde entonces.

---

## 1. Estado actual

**Actualizado:** 2026-11-28 · **Base:** `main` @ `2d915f6` (merge PR #19)

| Aspecto | Estado | Evidencia |
|---|---|---|
| Publicación | GitHub Pages desde `main` (raíz). | D-01; workflow de Pages |
| Dominio | `CNAME` = `incotic.com` en `main`. Canonical, OG, JSON-LD, sitemap y robots pasan a `incotic.com` en PR #20 (pendiente de fusión). DNS, *Custom domain* y HTTPS **no verificados**. | Issue #16, PR #20 |
| Riesgo dominio | Con `CNAME` activo, GitHub Pages redirige `medinacaj.github.io/incotic/` a `incotic.com`; si el DNS no está listo, el sitio puede no abrir. **No verificado.** | Issue #16 |
| Pruebas | `tests/smoke.mjs` (estático) y `tests/browser-smoke.py` (Chromium, 8 rutas, 4 anchos) en CI. | `site-qa.yml`, `browser-qa.yml` |
| Protección de `main` | `protected: false` (sin reglas de rama). | Issue #13 |
| Vercel | Proyecto eliminado por el responsable (2026-10-19). | D-01 |

## 2. Trabajo abierto (no duplicar: continuar aquí)

| Ref. | Qué es | Estado | Siguiente paso |
|---|---|---|---|
| Issue #16 / PR #20 | Dominio `incotic.com` en canonical, OG, JSON-LD, sitemap, robots y 7 servicios. Reemplaza al PR #17 (cerrado, en conflicto). | Rama `fix/dominio-incotic`; pruebas locales OK. | Fusionar con autorización (D-14). Luego el responsable configura DNS según `docs/DOMINIO_NAMECHEAP_GITHUB_PAGES.md` (no tocar MX/TXT). |
| Issue #13 | Auditoría web v3.0 (WCAG manual, CWV, licencias de imágenes, cabeceras, protección de rama). | Abierta; QA automatizado ya integrado (PR #15). | Atacar tareas P1/P2 pendientes del Issue, una por PR. |

**Ramas antiguas sin PR abierto** (ya fusionadas o descartadas; no reutilizar): `fix/*`, `feat/sombras`,
`feat/paginas-servicios`, `preview/temas`, `mejora-integral-web-2026-10` (PR #4 cerrado, referencia),
`claude/beautiful-maxwell-9ac2m2`, `codex/fix-footer-modal-accessibility-20261114` (supersedida por PR #14),
`codex/incotic-browser-regression-20261115` (supersedida por PR #15), `governance/legal-tech-review-20261018`,
`chore/multi-ai-handoff-2026-10`, `docs/readme-continuidad-20261121` (PR #18, fusionado vía #19),
`docs/memoria-operativa` (PR #19, fusionado), `feat/incotic-gh-pages-custom-domain` (PR #17, reemplazado por PR #20).

## 3. Bloqueos y pendientes del responsable

- [ ] **DNS de `incotic.com`** (Namecheap u otro): registros A/CNAME, *Custom domain* y *Enforce HTTPS* en GitHub Pages (Issue #16).
- [ ] **ID real de GA4** (`G-…`) y aviso de cookies/consentimiento antes de activarlo.
- [ ] Confirmar facturación y licitaciones (D-06).
- [ ] Testimonios reales o retirar la sección (D-16).
- [ ] Fotos reales de proyectos y logos de marcas con permiso de uso.
- [ ] Titular del hero más concreto (servicio a destacar).
- [ ] Política de privacidad acorde a la Ley 21.719 (vigencia 1-dic-2026) — requiere validación profesional.
- [ ] Activar protección de la rama `main` (Issue #13).
- [ ] Perfil de Google Business y Search Console (enviar `sitemap.xml` cuando el dominio esté activo).

## 4. Siguiente acción concreta

1. **Responsable:** autorizar la fusión del PR #20 y configurar el DNS de `incotic.com` siguiendo
   `docs/DOMINIO_NAMECHEAP_GITHUB_PAGES.md`; luego activar *Enforce HTTPS* en Settings → Pages.
2. **Agente siguiente:** verificar en navegador real `https://incotic.com/`, las 7 rutas de servicio y la redirección
   de `www`; registrar la evidencia en el Issue #16 y cerrarlo si cumple. Después, atacar la primera tarea P1 del Issue #13.

## 5. Verificación rápida

```bash
git fetch origin && git log --oneline -5 origin/main   # ¿cambió la base?
node tests/smoke.mjs                                   # pruebas estáticas (sin dependencias)
python3 -m http.server 8765 & python3 tests/browser-smoke.py   # navegador (requiere Playwright)
```

---

## 6. Bitácora (la más reciente arriba)

Formato obligatorio de cada entrada — copiar y completar:

```
### AAAA-MM-DD · agente · rama → PR #n (SHA corto)
- Objetivo:
- Cambios:
- Pruebas (comando → resultado; o NO EJECUTADAS + motivo):
- Bloqueos:
- Pendiente / cambios sin fusionar:
- Siguiente acción:
```

### 2026-11-28 · Claude Code · `fix/dominio-incotic` → PR #20
- **Objetivo:** siguiente acción registrada: alinear el dominio `incotic.com` (Issue #16) sin el conflicto del PR #17.
- **Cambios:** cherry-pick del commit `fca8eae` del PR #17 (conserva autoría) sobre `main`; conflictos resueltos conservando `CNAME` y la referencia a la memoria en `CLAUDE.md`; canonical, OG, JSON-LD, robots, sitemap y 7 servicios con `https://incotic.com`; 5 comprobaciones nuevas en `tests/smoke.mjs`; guía DNS actualizada (Vercel ya eliminado).
- **Pruebas:** `node tests/smoke.mjs` → 41/41 OK. `tests/browser-smoke.py` (Chromium local, ejecutado con el Chromium preinstalado del entorno) → OK: 8 rutas, CTA, teclado/diálogo, menú móvil, SEO, 320–1280 px. `grep www.incotic.com` en el sitio → 0 resultados.
- **Bloqueos:** DNS, *Custom domain* y HTTPS dependen del responsable; no verificables desde el entorno (sin acceso a github.io ni a incotic.com).
- **Pendiente:** fusión del PR #20 (D-14). PR #17 cerrado como reemplazado.
- **Siguiente acción:** sección 4.

### 2026-11-28 · Claude Code · `docs/memoria-operativa` → PR #19
- **Objetivo:** sistema permanente de memoria y continuidad (pedido del responsable).
- **Cambios:** crea `docs/MEMORIA_OPERATIVA.md` y `docs/DECISIONES.md`; protocolo obligatorio en `AGENTS.md`; README con arranque rápido (incluye el commit de PR #18); `docs/agent-workflow.md` y `CLAUDE.md` apuntan a la memoria en vez de duplicar pendientes; `tests/smoke.mjs` verifica que la memoria exista y esté enlazada.
- **Pruebas:** `node tests/smoke.mjs` → OK, 36/36 comprobaciones (3 nuevas de memoria). `browser-smoke.py` NO EJECUTADO: no hay cambios en `index.html` ni en `servicios/`. Sin cambios funcionales en el sitio.
- **Bloqueos:** no se pudo comprobar DNS ni el sitio publicado (sin acceso de red a github.io desde el entorno).
- **Pendiente:** ninguno; PR #19 fusionado (`2d915f6`), cerró también el PR #18.
- **Siguiente acción:** la de la sección 4.

### 2026-11-15 · Codex/ChatGPT · PR #14, #15; `CNAME`
- Botones semánticos y foco en diálogos legales (PR #14, `334aba1`); QA Chromium de 8 rutas (PR #15, `e6dfed9`); `CNAME` `incotic.com` (`c098b2a`, `c42fddb`). PR #17 abierto y en conflicto. Detalle en Issues #13 y #16.

### 2026-10-18/19 · Claude Code · PR #2–#11
- Auditoría y correcciones (#2, #3), UI/UX y móvil (#5), tema oscuro suave (#7, #9), páginas de servicio y QA (#8), sombras (#10), gobernanza legal (#11), protocolo multi-IA (`3eb3e92`). PR #4 cerrado (Vercel/arquitectura dividida). Decisiones D-01 a D-14.
