# Cómo trabajamos en TorQ

Trabajamos como una factoría de software: **ningún cambio entra sin una Historia de Usuario (HU)**.

## 1. Historias de usuario

- Cada HU es un **issue** creado con la plantilla *Historia de usuario*. El número del issue es su id: el issue #12 es la **HU-12**.
- Formato: **Como** ... **quiero** ... **para** ..., con criterios de aceptación verificables y una estimación en puntos (1, 2, 3, 5, 8). Si una HU pasa de 8 puntos, se divide.
- Los bugs y las tareas técnicas tienen su propia plantilla.
- Todo issue entra solo al [tablero TorQ](https://github.com/users/SrSoarDev/projects/3), en la columna **Backlog**.

### Definición de Listo (para pasar a "Listo")

- [ ] Tiene Como / quiero / para claro
- [ ] Tiene criterios de aceptación verificables
- [ ] Está estimada y tiene prioridad y épica
- [ ] Sus dependencias están hechas o planificadas
- [ ] Tiene responsable asignado

### Definición de Hecho (para pasar a "Hecho")

- [ ] Todos los criterios de aceptación se cumplen
- [ ] Tiene tests y la CI pasa
- [ ] El PR fue revisado y aprobado por el compañero
- [ ] Está fusionado en `main`

## 2. Tablero

| Columna | Significa |
|---|---|
| Backlog | HU pendiente de refinar o priorizar |
| Listo | Cumple la Definición de Listo, se puede empezar |
| En progreso | Alguien la está desarrollando (asígnatela al moverla) |
| En revisión | Tiene un PR abierto esperando revisión (se mueve solo al enlazar el PR) |
| Hecho | PR fusionado (se mueve solo) |

Regla: cada persona tiene **como máximo 2 HU en "En progreso"** a la vez.

## 3. Ramas

`main` siempre está estable y protegida: no se hace push directo, todo entra por PR.

Cada HU tiene su rama, que sale de `main`:

```
<tipo>/HU-<n>-<descripcion-corta>
```

| Tipo | Cuándo |
|---|---|
| `feat` | Funcionalidad nueva (una HU) |
| `fix` | Corrección de un bug |
| `chore` | Configuración, dependencias, tareas técnicas |
| `docs` | Solo documentación |
| `refactor` | Cambio interno sin cambiar comportamiento |

Ejemplos: `feat/HU-12-crear-evento`, `fix/HU-31-aforo-negativo`.

## 4. Commits

Formato [Conventional Commits](https://www.conventionalcommits.org/es/) con el id de la HU al final:

```
feat(eventos): validar que la fecha sea futura (HU-12)
fix(asistencia): evitar sobreventa con confirmaciones simultáneas (HU-31)
```

## 5. Pull requests

- **Un PR = una HU.** Título: `HU-12: Crear evento`.
- La descripción usa la plantilla y empieza con `Closes #12`, para que la HU se cierre sola al fusionar.
- Al enlazar el PR, la HU pasa sola a **En revisión**.
- Siempre lo revisa **el compañero** (revisión cruzada). Nadie aprueba su propio PR.
- Se fusiona con **Squash and merge** y se borra la rama.
- PRs pequeños: si pasa de ~400 líneas cambiadas, probablemente la HU era demasiado grande.

## 6. Revisión de código

Quien revisa comprueba:

1. Que se cumplen los criterios de aceptación de la HU.
2. Que las reglas de negocio y permisos están en la API.
3. Que hay tests para lo importante.
4. Que no se filtran datos privados (perfiles privados, ubicación exacta, contenido no público).
