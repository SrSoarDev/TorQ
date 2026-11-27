# CAR MEETING PROJECT
## Documento de Arquitectura Técnica — v1.1

**Fecha:** 24 de noviembre de 2026  
**Estado:** Base de arquitectura aprobada para iniciar la especificación técnica y la implementación.  
**Proveedor cloud:** Google Cloud Platform (GCP)

> Este documento consolida las decisiones de arquitectura aprobadas. Las decisiones marcadas como pendientes deben cerrarse mediante pruebas o diseño técnico, no mediante suposiciones.

---

## 1. Propósito

Definir la arquitectura técnica inicial de CAR MEETING PROJECT para construir un MVP mantenible, seguro y escalable sin introducir complejidad operativa prematura.

Este documento complementa el Documento Maestro funcional. No lo sustituye: el Documento Maestro define qué debe hacer el producto; este documento define cómo se propone construirlo.

## 2. Estado de las decisiones

### Decisiones aprobadas

- Backend: NestJS + TypeScript.
- Estilo de backend: monolito modular, DDD y arquitectura orientada a eventos.
- API: REST documentada con OpenAPI.
- Web: Next.js + React + TypeScript, App Router.
- Aplicación móvil: React Native + Expo + TypeScript.
- Base de datos principal: PostgreSQL, con PostGIS para capacidades geoespaciales.
- Cloud: Google Cloud Platform.
- Entornos separados en proyectos GCP independientes: `car-meeting-dev` y `car-meeting-prod`.
- Procesamiento asíncrono mediante workers independientes.
- No comenzar con microservicios ni Kubernetes.
- Redis/Memorystore se pospone hasta que exista una necesidad demostrada.
- El objetivo de disponibilidad de 99.5% se medirá; no se ofrecerá como SLA garantizado del MVP.

### Decisiones pendientes de validación

- Región GCP definitiva. `us-east1` es una candidata, sujeta a pruebas de latencia desde los mercados iniciales y a revisión de disponibilidad/precios.
- Configuración exacta de Cloud SQL, alta disponibilidad y política de backups según presupuesto.
- Límites de recursos y escalado de Cloud Run.
- Selección final de herramientas de analítica, monitorización de producto y gestión de errores.
- Estrategia y calendario de despliegues, migraciones y rollback.
- Estimación de costes mediante pruebas de carga y consumo real.

## 3. Principios de arquitectura

1. **Simplicidad operativa:** evitar infraestructura distribuida que el equipo todavía no necesita.
2. **Separación por dominios:** los módulos deben encapsular sus reglas y datos.
3. **Consistencia en operaciones críticas:** aforo, asistencia, emisión y validación de QR requieren transacciones y protección frente a concurrencia.
4. **Asincronía para efectos secundarios:** notificaciones, procesamiento multimedia y tareas diferidas no deben bloquear operaciones principales.
5. **Seguridad por defecto:** mínimo privilegio, separación de entornos y protección de datos privados.
6. **Evolución basada en evidencia:** extraer servicios o añadir infraestructura solo cuando métricas y necesidades reales lo justifiquen.
7. **SEO con control de privacidad:** indexar únicamente contenido explícitamente público.

## 4. Arquitectura general

La solución inicial estará formada por:

- Una aplicación web Next.js.
- Una API NestJS.
- Una aplicación móvil React Native/Expo.
- PostgreSQL como fuente principal de datos.
- Cloud Storage para archivos multimedia.
- Pub/Sub y Cloud Tasks para mensajería y trabajo asíncrono.
- Workers desplegados como servicios o jobs independientes.
- Servicios gestionados de GCP para secretos, logging, monitorización y despliegue.

La web y la aplicación móvil consumirán la API REST. La lógica de negocio y las reglas de autorización deben residir en el backend, no duplicarse en los clientes.

```text
Web (Next.js) ─────┐
                   ├── REST / OpenAPI ──> API (NestJS)
App móvil ─────────┘                         │
                                            ├── PostgreSQL + PostGIS
                                            ├── Cloud Storage
                                            ├── Transactional Outbox
                                            │        │
                                            │        └── Pub/Sub / Cloud Tasks
                                            │                    │
                                            │                    └── Workers
                                            └── Servicios GCP
                                                 (Secret Manager,
                                                  Logging, Monitoring)
```

## 5. Proveedor cloud y entornos GCP

### 5.1 Proveedor

GCP será el proveedor cloud principal. No se mantendrán infraestructuras paralelas en AWS y GCP durante el MVP. AWS solo se reconsiderará si una evaluación técnica o económica demuestra una ventaja material.

### 5.2 Proyectos separados

Se crearán dos proyectos GCP independientes:

- `car-meeting-dev`
- `car-meeting-prod`

Cada entorno tendrá recursos, credenciales y permisos separados:

- Bases de datos independientes.
- Buckets independientes.
- Secretos independientes.
- Service accounts independientes.
- Políticas IAM independientes.
- Configuración y variables de entorno independientes.

No se utilizarán datos personales reales en desarrollo salvo que exista una justificación aprobada y se hayan anonimizado adecuadamente.

### 5.3 Región

`us-east1` (South Carolina) es una región candidata, no una decisión definitiva. Antes de fijarla se debe medir la latencia desde República Dominicana y los mercados objetivo, comprobar la disponibilidad de los servicios necesarios y comparar costes.

### 5.4 Servicios GCP propuestos

| Necesidad | Servicio propuesto |
|---|---|
| API NestJS | Cloud Run |
| Web Next.js | Cloud Run |
| Workers | Cloud Run |
| Base de datos | Cloud SQL for PostgreSQL |
| Datos geoespaciales | PostGIS en PostgreSQL |
| Imágenes, vídeos y archivos | Cloud Storage |
| Eventos/mensajería | Pub/Sub |
| Tareas HTTP diferidas | Cloud Tasks |
| Secretos | Secret Manager |
| Logs y métricas | Cloud Logging y Cloud Monitoring |
| Jobs puntuales | Cloud Run Jobs |

La selección final y configuración de cada servicio debe ajustarse al presupuesto y validarse con pruebas.

## 6. Backend

### 6.1 Tecnología

- NestJS.
- TypeScript.
- API REST.
- OpenAPI/Swagger como contrato documentado.
- Validación de entrada en los límites de la API.
- Autorización centralizada y verificable en backend.

### 6.2 Estilo arquitectónico

Se utilizará un **monolito modular** con principios de Domain-Driven Design (DDD) y comunicación orientada a eventos cuando corresponda.

No se comenzará con microservicios. Un monolito modular reduce la complejidad de despliegue, observabilidad, transacciones y depuración, sin impedir una extracción futura.

### 6.3 Bounded contexts / módulos iniciales

Los siguientes son límites de dominio iniciales, sujetos a refinamiento durante el diseño:

- **Identity / Auth:** identidad, autenticación, sesiones y factores de autenticación.
- **Users / Profiles:** cuentas, perfiles, preferencias y visibilidad.
- **Events:** creación, edición, publicación y ciclo de vida de eventos.
- **Attendance / Capacity:** inscripciones, asistencia, listas de espera y aforo.
- **Access / QR:** emisión, revocación y validación de credenciales QR.
- **Community:** interacciones y funcionalidades sociales contempladas en el MVP.
- **Media:** metadatos y ciclo de vida de archivos multimedia.
- **Trust & Safety:** reportes, moderación, bloqueos y acciones de seguridad.
- **Platform / Notifications:** notificaciones y capacidades transversales.
- **Extensions:** capacidades futuras como clubes o garajes, sin forzar su implementación en el MVP.

### 6.4 Reglas de modularidad

- Cada módulo es propietario de sus datos y reglas.
- Un módulo no debe escribir directamente en las tablas internas de otro módulo.
- La comunicación entre módulos debe realizarse mediante interfaces/contratos explícitos o eventos.
- Evitar dependencias circulares.
- No convertir cada módulo en un microservicio por el mero hecho de que esté separado en el código.
- Las transacciones que afecten a invariantes de negocio deben mantenerse dentro de límites transaccionales claros.

## 7. Procesamiento asíncrono y eventos

Se utilizarán workers independientes para tareas que no deban ejecutarse dentro de la petición HTTP principal, por ejemplo:

- Envío de notificaciones y correos.
- Procesamiento de imágenes y vídeos.
- Tareas programadas.
- Operaciones diferidas y reintentos.
- Procesos de mantenimiento.

### 7.1 Transactional Outbox

Para evitar inconsistencias entre una transacción de base de datos y la publicación de eventos, se utilizará el patrón Transactional Outbox:

1. La operación de negocio y el registro del evento se guardan en la misma transacción.
2. Un proceso publica los eventos pendientes en el sistema de mensajería.
3. Los consumidores procesan los mensajes de forma idempotente.
4. Los mensajes fallidos se reintentan con límites y políticas de recuperación.

No se debe asumir entrega exactamente una vez. Los consumidores deben tolerar duplicados.

### 7.2 Pub/Sub y Cloud Tasks

- **Pub/Sub:** distribución de eventos entre productores y consumidores.
- **Cloud Tasks:** ejecución de tareas HTTP diferidas con control de reintentos y ritmo.

La elección entre ambos depende del patrón de trabajo; no deben utilizarse indistintamente sin una razón concreta.

## 8. Base de datos y persistencia

### 8.1 PostgreSQL

PostgreSQL será la base de datos relacional principal. Cloud SQL for PostgreSQL es la opción gestionada propuesta.

PostGIS se utilizará cuando se requieran consultas geoespaciales, como búsqueda de eventos por proximidad o ubicación.

### 8.2 Reglas de integridad

- Las restricciones de unicidad y claves foráneas deben proteger invariantes importantes.
- Las operaciones de aforo e inscripción deben ser transaccionales.
- La validación de QR debe controlar duplicados y carreras concurrentes.
- Las operaciones críticas deben definir explícitamente su comportamiento ante reintentos.
- Las migraciones de esquema deben versionarse y ejecutarse mediante el proceso de despliegue.

No confiar exclusivamente en validaciones del frontend para mantener integridad.

## 9. Almacenamiento multimedia

Cloud Storage almacenará imágenes, vídeos, álbumes y archivos.

Recomendaciones iniciales:

- Buckets separados por entorno.
- Acceso privado por defecto.
- URLs firmadas o mecanismos controlados para cargas y descargas cuando proceda.
- Validación de tipo, tamaño y permisos en backend.
- Procesamiento asíncrono de imágenes y vídeos.
- Política de retención y eliminación coherente con privacidad y requisitos legales.
- No servir archivos privados mediante URLs públicas permanentes.

La entrega de contenido público puede optimizarse posteriormente con CDN si las métricas lo justifican.

## 10. Redis y caché

Redis/Memorystore no se incorporará inicialmente.

Postergar Redis evita añadir coste y otra dependencia operativa antes de conocer los cuellos de botella reales. Se reconsiderará si las métricas muestran necesidad para:

- Caché de lecturas frecuentes.
- Rate limiting distribuido.
- Coordinación efímera.
- Colas o presencia en tiempo real, si el diseño futuro lo requiere.

La caché no debe convertirse en fuente de verdad para aforo, inscripciones o validaciones críticas.

## 11. Frontend web

### 11.1 Decisión definitiva

**Next.js + React + TypeScript con App Router.**

No se utilizará React + Vite como framework principal de la web. La necesidad de indexar eventos y perfiles públicos hace conveniente disponer de renderizado del lado del servidor, generación estática y mecanismos de revalidación integrados.

### 11.2 Una sola aplicación web

La primera versión utilizará una aplicación Next.js para:

- Páginas públicas.
- Perfiles.
- Eventos.
- Experiencia autenticada de usuarios.
- Paneles de organizadores.
- Administración.

No se dividirá inicialmente en múltiples aplicaciones web independientes.

### 11.3 Renderizado

- Server Components por defecto.
- Client Components únicamente donde se requiera interactividad en el navegador.
- SSR para contenido público dinámico que necesite estar actualizado.
- Generación estática o revalidación para contenido público que lo permita.
- Evitar convertir innecesariamente toda la aplicación en una SPA cliente.

### 11.4 SEO

Los eventos y perfiles que sean públicos y elegibles para indexación deberán incluir:

- URLs estables y legibles.
- Metadata dinámica.
- Títulos y descripciones adecuados.
- Canonical URLs.
- Open Graph.
- Sitemap XML.
- `robots.txt`.
- Datos estructurados cuando sean correctos y aplicables.
- Enlaces internos rastreables.

### 11.5 Privacidad e indexación

El contenido privado no debe filtrarse en:

- HTML renderizado.
- Metadata.
- Sitemaps.
- APIs públicas.
- Cachés compartidas.
- Datos estructurados.

`noindex` no sustituye autenticación ni autorización. El servidor debe impedir el acceso a recursos privados. Los paneles privados y administrativos requieren autenticación y no deben indexarse.

### 11.6 Rendimiento

- Optimizar imágenes y tamaños de recursos.
- Controlar el JavaScript enviado al cliente.
- Medir Core Web Vitals.
- Evitar dependencias pesadas sin beneficio claro.
- Aplicar caché y revalidación con cuidado para no exponer datos privados ni mostrar información obsoleta en operaciones sensibles.

### 11.7 Relación con el backend

Next.js consumirá la API REST de NestJS. Las reglas de negocio, permisos y validaciones definitivas residirán en NestJS. Next.js puede gestionar composición de páginas y experiencia de usuario, pero no duplicar el dominio.

## 12. Aplicación móvil

Tecnología:

- React Native.
- Expo.
- TypeScript.

La aplicación móvil consumirá la misma API REST de NestJS. No se implementará una segunda versión de las reglas de negocio en el cliente móvil.

Se deberá diseñar el comportamiento de conectividad limitada para las funciones del MVP que lo requieran. Las operaciones que afecten a aforo, acceso o validez de credenciales deben definir claramente qué puede hacerse sin conexión y cómo se resuelven conflictos al recuperar conectividad.

## 13. Seguridad

Principios mínimos:

- Autenticación y autorización aplicadas en backend.
- MFA obligatoria para roles sensibles, según las decisiones funcionales del proyecto.
- Mínimo privilegio en IAM y service accounts.
- Separación estricta de secretos y credenciales por entorno.
- Secret Manager para secretos; no incluirlos en repositorios ni imágenes.
- TLS para tráfico en tránsito.
- Validación y normalización de entradas.
- Protección contra abuso, automatización y fuerza bruta mediante límites adecuados.
- Auditoría de acciones administrativas y sensibles.
- Política de retención y eliminación de datos.
- Revisión de permisos en operaciones de perfiles, eventos, álbumes y contenido privado.
- Dependencias y contenedores revisados durante CI/CD.

Las funciones sensibles deben contar con trazabilidad suficiente para investigar incidentes.

## 14. Observabilidad

Usar Cloud Logging y Cloud Monitoring como base.

Métricas mínimas:

- Disponibilidad de web y API.
- Latencia de endpoints (incluyendo percentiles).
- Tasas de errores HTTP.
- Saturación y reinicios de Cloud Run.
- Conexiones, CPU, memoria y rendimiento de PostgreSQL.
- Retraso, errores y reintentos de workers.
- Mensajes pendientes o fallidos.
- Errores en procesos de autenticación, inscripción y validación de QR.

Configurar alertas accionables. Los logs no deben incluir contraseñas, tokens, secretos ni datos personales innecesarios.

## 15. Disponibilidad y recuperación

### 15.1 Objetivo

El 99.5% de disponibilidad es un objetivo técnico que se medirá, no un SLA garantizado durante el MVP.

Una configuración inicial económica puede contener puntos únicos de fallo, especialmente si Cloud SQL no está configurado con alta disponibilidad. No debe comunicarse una garantía de disponibilidad que la infraestructura no pueda sostener.

### 15.2 Objetivos de recuperación

- **RPO objetivo:** 15 minutos.
- **RTO objetivo:** 4 horas.

Estos objetivos deben validarse con la configuración real y ejercicios de recuperación.

### 15.3 Backups y recuperación

- Configurar backups automáticos.
- Habilitar recuperación a un punto en el tiempo (PITR) cuando la configuración y el presupuesto lo permitan.
- Definir retención y protección de backups.
- Mantener separación de permisos entre operación normal y recuperación.
- Probar restauraciones periódicamente, como mínimo de forma trimestral.
- Documentar responsables, pasos, tiempos y criterios para declarar una recuperación completada.

**Importante:** backups diarios por sí solos no satisfacen un RPO de 15 minutos. Para acercarse a ese objetivo se necesita PITR/WAL continuo y comprobar que funciona. Del mismo modo, un RTO de cuatro horas solo es creíble después de ensayos de restauración cronometrados.

## 16. CI/CD y repositorios

GitHub Actions es la opción propuesta para CI/CD, pendiente de concretar.

El pipeline deberá contemplar:

1. Instalación reproducible de dependencias.
2. Lint y formato.
3. Pruebas unitarias.
4. Pruebas de integración relevantes.
5. Build.
6. Análisis de dependencias y seguridad.
7. Construcción y publicación de imágenes.
8. Despliegue a desarrollo.
9. Verificaciones posteriores al despliegue.
10. Promoción controlada a producción.
11. Estrategia de rollback.

Las migraciones de base de datos deben diseñarse para despliegues compatibles y reversibles cuando sea posible. No ejecutar cambios destructivos sin plan de recuperación.

## 17. Presupuesto y costes

Rango inicial de referencia:

- **Presupuesto mensual objetivo:** aproximadamente USD 150.
- **Rango inicial contemplado:** USD 100–250.
- **Límite de planificación:** USD 250/mes.

No es una cotización ni una garantía de que el sistema completo funcionará dentro de ese rango con cualquier volumen de uso. El coste dependerá de tráfico, almacenamiento, transferencia, base de datos, procesamiento multimedia y observabilidad.

Prioridades:

- Mantener la infraestructura sencilla.
- Evitar servicios siempre encendidos si Cloud Run puede escalar a cero de forma adecuada.
- Configurar presupuestos y alertas.
- Medir consumo real por entorno.
- Revisar costes de transferencia y almacenamiento multimedia.
- Probar carga antes de comprometerse con una configuración de producción más costosa.

Las alertas de presupuesto notifican; no detienen automáticamente el gasto.

## 18. Candidatos a extracción futura

Solo extraer componentes del monolito cuando exista una razón medible: escalado independiente, aislamiento de fallos, necesidades de despliegue, propiedad de equipo o carga operativa.

Candidatos potenciales:

- Procesamiento multimedia.
- Notificaciones.
- Mensajería.
- Discovery/búsqueda.
- Analítica.
- Verificación de identidad.

La extracción debe preservar contratos, ownership de datos y observabilidad. No se adoptarán microservicios por anticipación.

## 19. Pendientes antes de producción

- Confirmar región GCP con mediciones de latencia y revisión de servicios/precios.
- Dimensionar Cloud SQL y decidir alta disponibilidad según presupuesto y criticidad.
- Configurar PITR y probar restauración para validar RPO/RTO.
- Definir políticas de retención de datos y multimedia.
- Completar modelo de amenazas y revisión de seguridad.
- Definir límites de rate limiting y protección contra abuso.
- Implementar pruebas de concurrencia para aforo, asistencia y QR.
- Definir estrategia de despliegue, migraciones y rollback.
- Configurar alertas de infraestructura y aplicación.
- Ejecutar pruebas de carga representativas.
- Revisar que el contenido privado no sea indexable ni accesible por rutas públicas.
- Validar el flujo offline limitado y la reconciliación al recuperar conexión.

## 20. Criterio de cierre

Esta arquitectura se considera suficientemente definida para pasar a la especificación técnica detallada y comenzar la implementación por módulos, siempre que se respeten las decisiones aprobadas y se documenten las decisiones pendientes.

No se debe reabrir la selección tecnológica sin evidencia nueva. El siguiente paso no es añadir más funcionalidades ni seguir ampliando el cuestionario del MVP: es convertir el Documento Maestro y esta arquitectura en contratos de API, modelo de datos, estructura de repositorio, criterios de aceptación y un plan de implementación incremental.
