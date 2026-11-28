# Registro de decisiones — INCOTIC

Decisiones **confirmadas** que todo agente debe respetar. Cambiar una decisión exige una
instrucción explícita del responsable humano (medinacaj) y una nueva entrada aquí que la
reemplace; nunca se edita en silencio.

**Estados:** `Confirmada` · `En curso` (decidida, implementación incompleta) · `Abierta`
(falta definición del responsable) · `Reemplazada` · `Rechazada`.
**Fuente:** PR/Issue de GitHub o instrucción del responsable (fecha). Las reglas técnicas de
detalle viven en `CLAUDE.md`; aquí solo el *qué* y el *por qué*.

| ID | Fecha | Decisión | Motivo / fuente | Estado |
|---|---|---|---|---|
| D-01 | 2026-10-18 | Publicar en **GitHub Pages** desde la rama `main` (raíz). No usar Vercel. | Instrucción del responsable; el proyecto Vercel fue eliminado por él el 2026-10-19. PR #4 (Vercel) cerrado sin fusionar. | Confirmada |
| D-02 | 2026-10-18 | Portada en **un solo `index.html`** (CSS/JS inline) + 7 páginas en `servicios/` con `servicios.css`, siempre con **rutas relativas**. | Compatibilidad con GitHub Pages bajo subruta; PR #8. Se rechazó separar `site.css`/`site.js` (PR #4). | Confirmada |
| D-03 | 2026-10-10 | El email **nunca** en HTML plano, JSON-LD ni textos de modales: se arma con la variable JS `EMAIL`. | Anti-spam; `CLAUDE.md`; PR #2. | Confirmada |
| D-04 | 2026-10-10 | Tiempo de respuesta comprometido: **48 h** (métrica del hero y CTA). | Instrucción del responsable; PR #2. | Confirmada |
| D-05 | 2026-10-10 | Métrica de proyectos: **50+**. | Instrucción del responsable; PR #3. | Confirmada |
| D-06 | 2026-10-10 | **No** afirmar emisión de facturas ni participación en licitaciones hasta que el responsable lo confirme. INCOTIC no es SpA: usar solo "INCOTIC". | El responsable no pudo confirmarlo; PR #3. | Confirmada |
| D-07 | 2026-10-10 | No usar "Partner"/"certificado" ni cifras sin respaldo (uptime "objetivo", no "garantizado"). | Riesgo de publicidad engañosa y de marcas; PR #2; `docs/ASESOR_LEGAL_TECNOLOGICO.md`. | Confirmada |
| D-08 | 2026-10-18 | Tema **oscuro suave** (`#0d1117`, gradiente `#0d1117 → #121c2b`). En `#por-que` y `#faq` el fondo sigue oscuro y **solo las tarjetas son claras**. | Elegido por el responsable tras vista previa (PR #7) y corregido a pedido suyo (PR #9). | Confirmada |
| D-09 | 2026-10-18 | Tarjetas con **sombras en capas** estilo Apple mediante tokens `--shadow*`; prohibidas sombras sueltas. | Pedido del responsable; PR #10. | Confirmada |
| D-10 | 2026-10-18 | GA4 **no se carga** mientras `GA_ID` sea el placeholder `G-XXXXXXXXXX`. | Evitar scripts inútiles y tracking sin configurar; PR #3. | Confirmada |
| D-11 | 2026-11-15 | Dominio de producción: **`incotic.com`** (raíz), `www` como alias, sin redirección/iframe a `github.io`. | `CNAME` creado en `main` por el responsable; Issue #16. Falta alinear canonical/sitemap/robots (PR #17 en conflicto) y DNS. | En curso |
| D-12 | 2026-10-19 | Coordinación multi-IA por GitHub (Issue → rama → PR → CI → revisión humana) según `docs/agent-workflow.md`. | Commit `3eb3e92`. | Confirmada |
| D-13 | 2026-10-18 | Revisión jurídico-tecnológica contextual según `docs/ASESOR_LEGAL_TECNOLOGICO.md`. | PR #11. | Confirmada |
| D-14 | 2026-10-10 | **Fusión a `main`:** solo con autorización explícita del responsable para esa tarea o sesión; nunca automática. | Protocolo D-12; el responsable autorizó fusiones caso a caso (PR #2–#10). | Confirmada |
| D-15 | 2026-11-28 | **Memoria operativa persistente**: `docs/MEMORIA_OPERATIVA.md` es el índice único de estado y continuidad; se actualiza al cerrar cada tarea. | Instrucción del responsable; este registro. | Confirmada |
| D-16 | 2026-10-10 | Testimonios actuales son **genéricos con aviso** "representativos"; reemplazar por reseñas reales o retirar la sección. | PR #4 proponía retirarlos (no adoptado). Falta decisión del responsable. | Abierta |

## Cómo agregar una decisión
1. Añadir una fila con el siguiente ID libre, fecha ISO, decisión breve, fuente verificable y estado.
2. Si reemplaza otra, marcar la anterior como `Reemplazada por D-xx` (no borrarla).
3. Reflejar el cambio en `docs/MEMORIA_OPERATIVA.md` (bitácora) en el mismo PR.
