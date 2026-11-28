# INCOTIC

Sitio web corporativo estático de INCOTIC, soluciones tecnológicas en Concepción, Región del Biobío, Chile.
Publicado con **GitHub Pages** desde la rama `main` (dominio previsto: `incotic.com`, en curso: Issue #16).

## Retomar el trabajo (cualquier agente o chat nuevo)

1. Leer **`AGENTS.md`**: reglas obligatorias de memoria y continuidad.
2. Leer **`docs/MEMORIA_OPERATIVA.md`**: estado actual, trabajo abierto, bloqueos y siguiente acción.
3. Leer **`docs/DECISIONES.md`**: decisiones confirmadas que no se deben revertir sin autorización.
4. Antes de cerrar la tarea, actualizar la memoria operativa (pruebas, bloqueos, siguiente acción).

El repositorio es la fuente oficial: no depender de conversaciones anteriores.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Portada: HTML, CSS y JS en un solo archivo |
| `servicios/*.html` + `servicios.css` | 7 páginas de servicio (rutas relativas) |
| `tests/smoke.mjs` | Pruebas estáticas: estructura, SEO, reglas críticas |
| `tests/browser-smoke.py` | Pruebas en Chromium: 8 rutas, móvil, teclado, diálogos |
| `.github/workflows/` | CI: `site-qa.yml` y `browser-qa.yml` |
| `CLAUDE.md` | Convenciones técnicas y de diseño detalladas |
| `docs/agent-workflow.md` | Protocolo de colaboración multi-IA por GitHub |
| `docs/ASESOR_LEGAL_TECNOLOGICO.md` | Criterios de revisión jurídico-tecnológica |

## Probar localmente

```bash
node tests/smoke.mjs                       # sin dependencias
python3 -m http.server 8765 &              # servir el sitio
python3 tests/browser-smoke.py             # requiere Playwright + Chromium
```

## Continuidad y estado verificable · 21/11/2026

**Propósito:** Web corporativa estática de soluciones tecnológicas en Concepción.

**Límite:** La activación de dominio y afirmaciones comerciales requieren confirmación.

- **Código:** consultar la rama principal efectiva, PR y commits recientes; mantener el alcance propio del producto.
- **Validación:** revisar CI vinculada al SHA; esta edición documental no prueba funcionalidades.
- **Entorno:** una demo, el código fusionado o un CI verde no demuestran producción. Verificar el sitio real cuando corresponda.
- **Siguiente paso:** resolver el último bloqueo de los issues y registrar rama, PR, SHA, pruebas, entorno realmente verificado y pendientes.
- **Privacidad:** no exponer secretos ni datos personales; conservar datos ficticios de prueba.

**Seguimiento:** [issue #16](https://github.com/medinacaj/incotic/issues/16).
