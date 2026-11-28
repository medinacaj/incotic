# Instrucciones de agentes

## Memoria y continuidad (obligatorio para todo agente y toda tarea)
El repositorio es la **fuente oficial de continuidad**: ningún trabajo depende de la memoria de un chat.

**Al comenzar:**
1. `git fetch` y leer `docs/MEMORIA_OPERATIVA.md`; si `main` avanzó respecto de su SHA de referencia, revisar los commits y PRs nuevos.
2. Leer `docs/DECISIONES.md` y los Issues/PRs abiertos que toque la tarea.
3. Continuar el trabajo existente (rama, PR o Issue abierto) en vez de duplicarlo; si algo está supersedido, decirlo y enlazarlo.

**Durante:** respetar las decisiones `Confirmada`. Para cambiar una, pedir autorización explícita al responsable y registrar la nueva decisión en `docs/DECISIONES.md`.

**Al finalizar (en el mismo PR o commit de la tarea):**
1. Actualizar `docs/MEMORIA_OPERATIVA.md`: estado y SHA base, trabajo abierto, bloqueos, **siguiente acción concreta** y una entrada nueva en la bitácora con el formato indicado allí.
2. Registrar las pruebas realizadas (comando → resultado) o `NO EJECUTADAS` con motivo; no declarar verificado lo que no se probó.
3. Preservar los cambios pendientes: commit y push a una rama, con PR o con su nombre anotado en la memoria. Nunca dejar trabajo solo en local.
4. No copiar en la memoria el contenido de Issues o PRs: resumir y enlazar.

## Criterios jurídico-tecnológicos transversales
Al diseñar, corregir, auditar o publicar, leer `docs/ASESOR_LEGAL_TECNOLOGICO.md`. Aplicar sus siete capas cuando sean relevantes (legal, técnica, seguridad, datos, evidencia, responsabilidad y negocio), documentar jurisdicción, licencias y datos, y separar hechos de hipótesis. No afirmar cumplimiento legal ni autorizaciones sin evidencia. Estas pautas complementan, sin sustituir, las pruebas técnicas y el criterio profesional habilitado.

## Colaboración Claude + ChatGPT/Codex mediante GitHub
Para cambios, auditorías, Pull Requests y transferencias entre agentes, aplicar `docs/agent-workflow.md`. Recuperar el Issue, diff, SHA y resultados de pruebas antes de pedir contexto adicional. No asumir que la rama predeterminada se llama `main`. Mantener estas reglas específicas del proyecto y las exigencias jurídico-tecnológicas aplicables; el protocolo compartido no las reemplaza.
