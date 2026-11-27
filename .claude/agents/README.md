# Agentes de Claude Code para TorQ

Estos agentes se cargan solos al abrir Claude Code en la raíz del repo. Puedes pedirlos por su nombre ("usa torq-backend para…") o dejar que Claude elija según la tarea.

| Agente | Para qué | Cuándo |
|---|---|---|
| `torq-arquitecto` | Diseñar la solución y dejarla en un ADR | Antes de una funcionalidad o módulo nuevo |
| `torq-product-owner` | Redactar, dividir y refinar HU | Al planificar o refinar el backlog |
| `torq-flujo-hu` | Rama, commits y PR según `CONTRIBUTING.md` | Al empezar y al terminar cada HU |
| `torq-backend` | API NestJS, dominio, eventos y workers | Implementación backend |
| `torq-web` | Next.js App Router, UX/UI, SEO, privacidad | Implementación web |
| `torq-movil` | React Native + Expo | Implementación móvil |
| `torq-datos` | Esquema, migraciones, índices, PostGIS | Cambios de base de datos y consultas |
| `torq-devops-gcp` | GitHub Actions, Cloud Run, Cloud SQL, costes | CI/CD e infraestructura |
| `torq-qa` | Criterios de aceptación, Definición de Hecho, tests | Antes de abrir o aprobar un PR |
| `torq-seguridad` | Permisos, QR, privacidad, secretos | Cambios sensibles, antes de fusionar |
| `torq-revisor-pr` | Apoyo en la revisión cruzada | Al revisar el PR del compañero |
| `torq-documentador` | Documentación en `docs/` | Al terminar un módulo o flujo |

## Flujo típico de una HU

1. `torq-product-owner` deja la HU lista (Definición de Listo).
2. `torq-arquitecto` si la HU necesita una decisión de diseño.
3. `torq-flujo-hu` crea la rama `<tipo>/HU-<n>-...`.
4. `torq-backend`, `torq-web`, `torq-movil` o `torq-datos` implementan.
5. `torq-qa` (y `torq-seguridad` si toca permisos, QR o datos privados) antes de abrir el PR.
6. `torq-flujo-hu` prepara el PR con `Closes #<n>`.
7. El compañero revisa con ayuda de `torq-revisor-pr` y decide.

Todos leen `docs/arquitectura-tecnica.md`, `docs/documento-maestro.md` y `CONTRIBUTING.md` como fuente de verdad. Si cambias un agente, hazlo por PR como cualquier otro cambio.
