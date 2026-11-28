# Configuración de incotic.com en Namecheap + GitHub Pages

**Meta:** publicar la página de GitHub Pages en `https://incotic.com/` manteniendo exactamente ese dominio en el navegador. No utilizar redirección, iframe, URL masking ni forwarding hacia `github.io`.

El repositorio publica archivos estáticos en raíz de `main`. `CNAME` ya contiene `incotic.com` y los metadatos SEO (canonical, Open Graph, JSON-LD, robots y sitemap) usan el dominio raíz.

## 1. Revisar nameservers antes de tocar DNS

En Namecheap: **Domain List → incotic.com → Manage → Domain → Nameservers**. Si se usan **Namecheap BasicDNS, PremiumDNS o FreeDNS**, los registros se gestionan en **Advanced DNS → Host Records**. Si hay nameservers de Cloudflare, hosting u otro proveedor, editar la zona DNS donde apunten, no en Advanced DNS de Namecheap.

Verificar registros existentes y hosting actual. El proyecto de Vercel fue eliminado (2026-10-19); si el dominio aún apunta a Vercel, cambiarlo. Revisar también el campo *Website* del repositorio en GitHub. No eliminar configuración de producción sin tener un plan de reversión.

## 2. Configurar registros DNS

Registros de GitHub Pages para dominio raíz (cada IP ocupa su propio registro):

| Type | Host | Value | TTL |
|---|---|---|---|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |
| CNAME Record | www | medinacaj.github.io | Automatic |

Revisar y quitar únicamente registros web que entren en conflicto (A, AAAA, ALIAS, CNAME o URL Redirect para `@` y `www`) tras validar sus destinos. **No tocar MX, SPF, DKIM, DMARC, TXT, verificación ni registros de correo**. No usar comodín DNS `*` para GitHub Pages.

GitHub también admite cuatro registros IPv6 AAAA documentados; si hay AAAA previos en @, revisarlos por posibles conflictos.

## 3. Configurar GitHub

En https://github.com/medinacaj/incotic/settings/pages: comprobar source de Pages y establecer **Custom domain: incotic.com**. GitHub puede crear el archivo CNAME cuando se guarda desde la UI; no debe haber dos valores distintos. Esperar a que **DNS check** sea correcto y activar **Enforce HTTPS** cuando esté disponible.

## 4. Comprobar

- `incotic.com` resuelve a las IP A correctas.
- `www.incotic.com` tiene CNAME a `medinacaj.github.io` y redirige por HTTPS a la raíz.
- `https://incotic.com/` carga el sitio y la dirección **no cambia a github.io**.
- Las siete páginas de servicios se abren sin errores de rutas; enlaces internos y logo OK.
- Canonicals, Open Graph, JSON-LD, robots y sitemap tienen `https://incotic.com`.
- MX y correo continúan sin cambios.
- Registrar resultados reales en [issue #16](https://github.com/medinacaj/incotic/issues/16).

Guías oficiales: https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/ y https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site .
