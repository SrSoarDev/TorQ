# TorQ

Plataforma para organizar, descubrir y gestionar car meetings en República Dominicana.

- **Backend:** NestJS + TypeScript (monolito modular)
- **Web:** Next.js (App Router)
- **Móvil:** React Native + Expo
- **Datos:** PostgreSQL + PostGIS
- **Cloud:** Google Cloud Platform

## Estructura

| Carpeta | Qué contiene |
|---|---|
| `apps/api` | API NestJS (`@torq/api`) |
| `apps/web` | Web Next.js con App Router (`@torq/web`) |
| `apps/mobile` | App Expo / React Native (`@torq/mobile`) |
| `packages/config` | ESLint y TypeScript base (`@torq/config`) |
| `packages/types` | Tipos compartidos, solo declaraciones (`@torq/types`) |
| `docs/` | Producto y arquitectura |

## Levantarlo en local

Necesitas **Node 26** (ver `.nvmrc`; con fnm: `fnm install && fnm use`) y **pnpm 10**:

```bash
npm install -g pnpm@10
pnpm install
pnpm dev
```

| App | Solo esa app | Dirección |
|---|---|---|
| API | `pnpm dev:api` | http://localhost:3001/health |
| Web | `pnpm dev:web` | http://localhost:3000 |
| Móvil (Metro) | `pnpm dev:mobile` | http://localhost:8081 |

Para abrir la app en un teléfono usa `pnpm dev:mobile`, que muestra el código QR (en `pnpm dev`, al correr todo en paralelo, no se puede interactuar con Expo). Necesitas Expo Go compatible con el SDK del proyecto, o un emulador.

## Comprobaciones

Antes de abrir un PR, desde la raíz:

```bash
pnpm format:check   # pnpm format para corregir
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

La CI (`.github/workflows/ci.yml`) ejecuta estas comprobaciones en cada PR y en `main`, además de `pnpm audit --audit-level=high`. Si falla la auditoría, actualiza la dependencia afectada (`pnpm why <paquete>` muestra quién la trae). No fusiones con la CI en rojo.

Para añadir dependencias al móvil usa `pnpm --filter @torq/mobile exec expo install <paquete>`, que elige versiones compatibles con el SDK.

Los secretos y archivos `.env` no se suben al repo.

## Cómo trabajamos

Trabajamos como una factoría de software: **todo el desarrollo se divide en Historias de Usuario (HU)**.
Cada HU es un issue de este repo y se sigue en el [tablero TorQ](https://github.com/users/SrSoarDev/projects/3).

Lee [CONTRIBUTING.md](CONTRIBUTING.md) antes de abrir tu primera rama.
