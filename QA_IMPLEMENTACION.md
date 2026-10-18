# INCOTIC — implementación y controles (octubre 2026)

## Cambios introducidos
- **Acceso y dominio:** la publicación actual de Vercel usa `incotic.vercel.app`; canonical, metadatos Open Graph, JSON-LD, robots y sitemap se alinean con esa URL temporal. Migrar todos juntos al dominio corporativo cuando se conecte y verifique.
- **Confianza:** se retiraron testimonios representativos no acreditados y métricas comerciales no verificadas; se mantienen datos descriptivos de servicios, etapas y cobertura.
- **Navegación y accesibilidad:** FAQ con botones y ARIA, región main, enlace para saltar contenido, foco confinado y fondo inerte en modales, Escape en menú móvil.
- **Rendimiento:** `site.css` y `site.js` independientes para caché, logotipo reutilizable, imágenes con dimensiones/decodificación diferida.
- **SEO comercial:** siete páginas dedicadas a servicios, enlazadas desde el footer, con metadatos y fichas Schema.org Service.
- **Seguridad:** `vercel.json` aporta cabeceras de respuesta y políticas de caché conservadoras.
- **QA:** workflow para sintaxis JS, integridad HTML, metadatos, assets y enlaces internos.

## Pendientes de información y aprobación
1. **Acceso público de Vercel:** el proyecto declara SSO activo. Verificar desde navegación anónima y, si es intencionalmente un sitio público, modificar la protección con aprobación expresa. No se alteró la protección.
2. **Dominio corporativo:** conectar y verificar `www.incotic.com` (o el dominio definitivo) antes de sustituir las URLs temporales.
3. **GA4:** `G-XXXXXXXXXX` permanece desactivado. Activar solo con Measurement ID real y gestión de consentimiento/cookies conforme a la política vigente.
4. **Evidencia comercial:** obtener referencias reales, permisos de clientes, fotografías propias y verificar los compromisos de servicio. No inventar casos ni testimonios.
5. **Revisión legal:** los textos de términos y privacidad existentes (enero de 2025) contienen condiciones contractuales; revisar con el responsable del negocio y asesoría legal antes de cambios de fondo.
6. **Prueba navegador/Lighthouse:** validar recursos, contraste, navegación táctil, lectores de pantalla, imágenes y Core Web Vitals en vista previa pública; los checks estáticos no reemplazan esa prueba.

## Publicación
Cambios trabajados en la rama `mejora-integral-web-2026-10`, sin mezclar a `main`. Confirmar QA y revisión de previsualización antes de aprobar un merge. No publicar cambios a producción automáticamente sin autorización.
