/**
 * Tipos compartidos entre las apps. Solo declaraciones: importar con `import type`.
 * Las reglas de negocio viven en la API, no aquí.
 */

/** Respuesta de `GET /health`. */
export interface HealthResponse {
  status: 'ok';
  service: string;
}
