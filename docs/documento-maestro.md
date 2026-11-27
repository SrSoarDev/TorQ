# CAR MEETING PROJECT

## Documento maestro de producto y alcance

**Versión:** 1.0 --- Borrador consolidado\
**Fecha:** 13 de noviembre de 2026\
**Estado:** Alcance funcional definido; pendiente de revisión técnica y
legal\
**Mercado inicial:** República Dominicana\
**Expansión prevista:** Internacional

------------------------------------------------------------------------

# 1. Visión del producto

Crear una plataforma digital para organizar, descubrir y gestionar
encuentros automovilísticos, conectando propietarios de vehículos,
entusiastas, clubes y organizadores.

La plataforma tendrá cinco pilares:

1.  Crear y organizar Car Meetings.
2.  Descubrir eventos cercanos.
3.  Construir una comunidad automovilística.
4.  Compartir vehículos, fotografías y vídeos.
5.  Crear y gestionar clubes y grupos automovilísticos.

La prioridad estratégica es construir primero una plataforma sólida de
eventos. La capa social debe ayudar a descubrir eventos, generar
participación y mantener activa la comunidad, sin intentar competir
inicialmente con Instagram o Facebook.

## 1.1 Ciclo principal del usuario

Descubrir evento → consultar información → solicitar o confirmar
asistencia → recibir actualizaciones → asistir → compartir contenido →
descubrir nuevos eventos.

# 2. Mercado y lanzamiento

-   Primera jurisdicción: República Dominicana.
-   Disponibilidad nacional desde el lanzamiento público.
-   Captación inicial concentrada en Gran Santo Domingo y Santiago.
-   Beta cerrada con organizadores y comunidades seleccionadas.
-   Lanzamiento gradual por zonas.
-   Internacionalización preparada desde el inicio.
-   Español como idioma inicial.

No se realizará un lanzamiento internacional simultáneo.

# 3. Alcance por prioridades

## 3.1 P0 --- Obligatorio para el primer lanzamiento

  Área             Funcionalidades
  ---------------- ----------------------------------------------------------
  Cuentas          Registro, inicio de sesión, recuperación y autenticación
  Identidad        Verificación obligatoria antes de interactuar
  Perfiles         Perfiles públicos y privados básicos
  Organizadores    Solicitud y aprobación de autorización
  Eventos          Creación, edición, cancelación y administración
  Descubrimiento   Lista, mapa, calendario, filtros y búsqueda
  Asistencia       Solicitudes, confirmaciones y listas de espera
  Capacidad        Control de aforo de personas y vehículos
  Privacidad       Control de visibilidad y ubicación
  Notificaciones   Notificaciones internas y push esenciales
  Seguridad        Denuncias, bloqueos y moderación
  Administración   Panel administrativo y auditoría básica
  Contenido        Fotografías, vídeos y álbumes de eventos
  Valoraciones     Evaluaciones de eventos y organizadores

## 3.2 P1 --- Evolución inicial

Estas funciones forman parte de la evolución prevista del producto, pero
no deben impedir el primer lanzamiento si P0 ya está terminado.

-   Garage de vehículos.
-   Clubes básicos.
-   Eventos exclusivos de clubes.
-   Mensajería privada.
-   Solicitudes de mensajes.
-   Chats grupales de eventos.
-   Comentarios y preguntas en eventos.
-   Favoritos y elementos guardados.
-   Publicaciones asociadas a vehículos.

## 3.3 P2 --- Posterior al lanzamiento

-   Stories de 24 horas.
-   Recomendaciones mediante inteligencia artificial.
-   Mensajería avanzada.
-   Funciones sociales avanzadas.
-   Cuentas comerciales.
-   Suscripciones.
-   Publicidad avanzada.
-   Pagos internos y venta de entradas.
-   Clubes premium.

# 4. Usuarios, cuentas e identidad

## 4.1 Tipos de usuarios

-   Propietarios de vehículos.
-   Entusiastas sin vehículo.
-   Organizadores independientes.
-   Miembros y administradores de clubes.
-   Moderadores.
-   Administradores globales.

Edad mínima: 18 años.

Los visitantes sin cuenta podrán explorar eventos públicos, perfiles,
clubes y contenido público, pero no interactuar.

## 4.2 Autenticación

Métodos previstos:

-   Correo electrónico y contraseña.
-   Google.
-   Apple.
-   Verificación de correo.
-   Recuperación de contraseña.
-   Vinculación segura de métodos de autenticación.

Teléfono opcional y privado por defecto.

## 4.3 Verificación de identidad

Será obligatoria para interactuar con la plataforma.

Modelo híbrido: - Proveedor externo de verificación. - Revisión manual
de excepciones y sospechas. - Gestión de reintentos y apelaciones. -
Protección contra suplantación y fraude.

La plataforma conservará el estado de verificación y referencias de
operación, evitando almacenar directamente los documentos de identidad.

La verificación del vehículo será independiente de la identidad personal
y no equivaldrá a acreditar propiedad legal.

## 4.4 Seguridad de cuentas

-   MFA obligatorio para roles sensibles.
-   Aplicaciones autenticadoras, SMS y códigos de recuperación.
-   Códigos de recuperación y revisión de identidad para recuperar MFA.
-   Consulta y revocación de sesiones.
-   Alertas por dispositivos y ubicaciones inusuales.
-   Recuperación reforzada de cuentas privilegiadas.

# 5. Eventos

## 5.1 Tipos

-   Públicos.
-   Privados.
-   Exclusivos de clubes.
-   Espontáneos.

La modalidad de acceso y la temporalidad deberán mantenerse como
conceptos diferenciados en el diseño de datos.

## 5.2 Información de eventos

Cada evento podrá incluir:

-   Nombre y descripción.
-   Fecha y hora.
-   Ubicación en mapa.
-   Fotografías o flyer.
-   Categoría automovilística.
-   Aforo de personas.
-   Aforo de vehículos.
-   Requisitos y reglas.
-   Modalidad de acceso.
-   Organizador.
-   Precio o gratuidad.
-   Enlace externo de pago cuando corresponda.

## 5.3 Asistencia

El organizador podrá configurar:

-   Confirmación directa.
-   Solicitud con aprobación.
-   Sistema combinado.

Los eventos podrán admitir personas sin vehículo y varios pasajeros por
vehículo.

Las plazas de personas y vehículos se administrarán por separado.

## 5.4 Descubrimiento

Vistas: - Lista. - Mapa. - Calendario.

Filtros: - Ubicación. - Distancia. - Fecha. - Tipo de vehículo. -
Categoría. - Modalidad de acceso. - Gratis o pagado. - Disponibilidad de
plazas.

Los próximos eventos aparecerán primero por orden cronológico.

La ubicación exacta dependerá de la privacidad del evento.

## 5.5 Lista de espera

-   Incorporación automática cuando el aforo esté completo.
-   Ofertas de plazas según orden de espera.
-   Una hora para aceptar una plaza liberada.
-   Expiración y ofrecimiento al siguiente participante.
-   Registro de movimientos e historial.

## 5.6 Cambios y cancelaciones

Los cambios críticos obligarán a reconfirmar asistencia.

Incluyen: - Fecha u hora. - Ubicación. - Modalidad de acceso. -
Requisitos de entrada. - Restricciones de vehículos. - Condiciones
importantes. - Cambios de aforo que afecten plazas confirmadas.

Plazo ordinario de reconfirmación: 12 horas.

Si no se responde, se pierde la plaza y se pasa a lista de espera.

Las cancelaciones requieren motivo y notificación a confirmados y lista
de espera.

Cancelar y eliminar serán acciones diferentes.

## 5.7 Administración de eventos

Los organizadores autorizados podrán: - Crear y editar. - Cancelar. -
Aprobar solicitudes. - Administrar participantes. - Controlar aforo. -
Enviar anuncios. - Consultar estadísticas básicas. - Gestionar
moderadores. - Consultar listas de vehículos. - Administrar QR. -
Acceder a álbumes. - Consultar historial de cambios.

# 6. Seguridad y cumplimiento de eventos

Se prohíben: - Carreras callejeras ilegales. - Piques clandestinos. -
Conducción temeraria. - Maniobras peligrosas en espacios públicos. -
Actividades que pongan en riesgo a terceros.

Los organizadores aceptarán declaraciones sobre permisos,
autorizaciones, normas del lugar, información correcta y
responsabilidades de seguridad.

La moderación será híbrida: - Reglas automáticas. - Análisis
automatizado. - Revisión humana. - Apelaciones.

Los casos de alto riesgo podrán bloquearse preventivamente.

# 7. Garage

El Garage permitirá registrar varios vehículos por usuario.

Categorías: - Automóviles. - Motocicletas. - Camionetas y SUV. -
Clásicos. - Deportivos y lujo. - Modificados.

Información: - Marca. - Modelo. - Año. - Fotografías y vídeos. -
Modificaciones. - Especificaciones. - Descripción. - Apodo. - Historial
de eventos.

La privacidad general del Garage será pública o privada.

La verificación del vehículo distinguirá la evidencia disponible y no
afirmará propiedad legal.

# 8. Comunidad y publicaciones

El feed tendrá dos modalidades:

-   Recomendado.
-   Cronológico.

La modalidad recomendada utilizará reglas basadas en ubicación,
intereses, Garage, clubes, seguimiento, historial y popularidad local.

Interacciones: - Seguir usuarios. - Me gusta. - Comentarios. - Compartir
enlaces. - Guardar. - Mensajes privados. - Etiquetar personas y
vehículos.

No habrá republicaciones en el MVP.

Los comentarios serán básicos, sin respuestas anidadas.

## 8.1 Álbumes colectivos

Los eventos podrán tener álbumes colectivos.

La privacidad del evento determinará quién puede consultar el contenido.

Las publicaciones pertenecerán a sus autores; los álbumes funcionarán
como agrupaciones.

La eliminación de un evento no eliminará automáticamente las
publicaciones individuales.

## 8.2 Límites multimedia

-   Fotografías: 20 MB.
-   Vídeos: 200 MB.
-   Duración máxima de vídeo: 2 minutos.
-   Máximo 10 archivos por publicación.
-   Máximo 500 MB por publicación.

Cuotas: - Usuario: 5 GB. - Capacidad adicional de organizador: 20 GB.

Al alcanzar la cuota se bloquearán nuevas cargas, sin eliminar
automáticamente contenido existente.

# 9. Clubes

Cualquier usuario verificado podrá crear un club.

Modalidades: - Público. - Privado con aprobación. - Por invitación.

Roles: - Propietario. - Administrador. - Moderador. - Miembro.

Los clubes permitirán: - Administrar miembros. - Gestionar
solicitudes. - Publicar contenido. - Organizar eventos exclusivos. -
Enviar anuncios. - Gestionar permisos. - Mantener un Garage colectivo
básico.

El chat general completo de miembros queda fuera del MVP.

# 10. Mensajería

Alcance inicial: - Mensajes privados. - Solicitudes de mensajes. - Chats
grupales de eventos. - Comunicación organizador/asistentes. -
Anuncios. - Chat administrativo básico de clubes.

Los moderadores no tendrán acceso indiscriminado a conversaciones
privadas.

Los mensajes podrán eliminarse para el usuario en cualquier momento y
para todos durante los primeros 15 minutos, con excepciones justificadas
para evidencias de denuncias.

# 11. QR y control de acceso

-   QR individual de un solo uso.
-   QR grupal con registros independientes por persona.
-   Escaneo mediante Android, iOS y web compatible.
-   Código manual alternativo.
-   Registro de usuario, dispositivo y hora.
-   Estados de validación.
-   Permisos revocables.

Modo offline limitado: - Un dispositivo principal por evento. - Descarga
de lista hasta 24 horas antes. - Sincronización posterior. -
Identificadores únicos de operación. - Detección de duplicados y
conflictos. - Revisión de registros dudosos. - Conservación de
evidencias originales.

# 12. Valoraciones y confiabilidad

Se valorarán por separado: - Evento. - Organizador.

Escala de 1 a 5 estrellas.

Criterios del evento: - Organización. - Ubicación. - Experiencia.

Criterios del organizador: - Comunicación. - Cumplimiento. - Trato.

Una reseña por usuario y evento.

Edición o eliminación durante 48 horas.

Se distinguirá asistencia verificada mediante QR de confirmación no
verificada.

Los organizadores tendrán un indicador de confiabilidad y desglose
interno de puntuación.

La puntuación utilizará cumplimiento, cancelaciones, valoraciones,
comunicación, asistencia y sanciones confirmadas.

# 13. Denuncias y moderación

Se podrán denunciar: - Perfiles. - Eventos. - Publicaciones. -
Comentarios. - Mensajes. - Vehículos. - Clubes. - Etiquetas. -
Suplantaciones. - Conductas abusivas.

Estados: - Pendiente. - En revisión. - Resuelto. - Descartado.

Sanciones: - Advertencia. - Restricción. - Suspensión. - Retirada de
contenido.

Existirá apelación cuando corresponda.

# 14. Privacidad y bloqueos

Los perfiles podrán ser públicos o privados.

El bloqueo será estricto para interacciones directas: - Impedir
mensajes. - Impedir seguimiento. - Impedir etiquetas. - Impedir
interacciones. - Eliminar relaciones de seguimiento.

No implicará expulsión automática de eventos públicos ni clubes
compartidos.

Los chats grupales tendrán restricciones de interacción entre personas
bloqueadas.

# 15. Notificaciones

Canales: - Internas. - Push. - Correo electrónico para operaciones
esenciales.

Categorías configurables: - Eventos. - Recordatorios. - Solicitudes. -
Confirmaciones. - Lista de espera. - Mensajes. - Comentarios. -
Seguidores. - Clubes. - Anuncios. - Actividad social.

Las notificaciones críticas de seguridad y cambios que afecten
asistencia confirmada no dependerán exclusivamente de las preferencias
del usuario.

# 16. Modelo de negocio

Modelo freemium.

No se cobrará por: - Descubrir eventos. - Confirmar asistencia
gratuita. - Interacciones esenciales.

Futuras fuentes de ingresos: - Comisión por entradas. - Eventos
promovidos. - Planes para organizadores. - Usuarios premium. -
Publicidad automotriz. - Clubes premium.

El MVP no procesará pagos internos. Los organizadores podrán indicar que
un evento es pagado y añadir enlaces externos.

# 17. Plataformas

-   Android.
-   iOS.
-   Web completa.

Las funciones principales compartirán backend, autenticación y reglas de
negocio.

La web permitirá explorar, administrar eventos, perfiles, clubes y
Garage.

# 18. Administración global

Panel administrativo con: - Aprobación de organizadores. - Gestión de
denuncias. - Revisión de contenido. - Gestión de clubes y eventos. -
Sanciones. - Métricas básicas. - Auditoría.

Roles: - Superadministrador. - Administrador. - Moderador.

Permisos diferenciados y registro de acciones.

# 19. Seguridad, infraestructura y continuidad

Objetivos aprobados para el MVP:

  Requisito                         Objetivo
  --------------------------------- --------------
  Disponibilidad mensual            99.5 %
  RPO                               15 minutos
  RTO                               4 horas
  Pruebas de recuperación           Trimestrales
  Retención diaria de backups       30 días
  Retención semanal                 3 meses
  Retención mensual                 1 año
  Respuesta a incidentes críticos   30 minutos

Las copias de seguridad estarán cifradas, aisladas geográficamente y
protegidas contra modificaciones o eliminación maliciosa.

Monitorización: - Disponibilidad. - Errores. - API. - Bases de datos. -
Almacenamiento. - Recursos. - Alertas automáticas.

Habrá guardia técnica para incidentes críticos.

El modo degradado mantendrá disponibles las funciones seguras que no
estén afectadas.

## 19.1 Recuperación de incidentes

-   Clasificación.
-   Contención.
-   Preservación de evidencias.
-   Comunicación.
-   Corrección.
-   Pruebas.
-   Restauración gradual.
-   Auditoría posterior.

Los cierres de emergencia podrán activarse por el responsable de
seguridad. Su continuidad más allá de una hora requerirá segunda
aprobación.

La reapertura requerirá doble aprobación y recuperación gradual.

Las sesiones potencialmente comprometidas se revocarán selectivamente;
si no puede determinarse el alcance, se cerrarán todas.

## 19.2 Protección de datos

Se aplicarán periodos de conservación específicos por categoría,
eliminación automática al vencerlos y excepciones documentadas.

Los incidentes de exposición de datos tendrán protocolo de
investigación, contención y notificación según legislación aplicable.

# 20. Beta y lanzamiento

La beta cerrada tendrá duración variable.

Su finalización dependerá de objetivos medibles: - Estabilidad. -
Seguridad. - Funcionamiento de eventos. - Gestión de asistencia. - QR. -
Notificaciones. - Moderación. - Soporte. - Satisfacción de organizadores
y asistentes.

El propietario del producto tomará la decisión final, con
recomendaciones técnicas y operativas.

Antes del lanzamiento: - Cero errores críticos o graves. - Errores
menores documentados. - Soluciones temporales aceptables. - Responsables
y plazos de corrección.

El lanzamiento será gradual.

# 21. Métricas del producto

Métrica principal: eventos realizados exitosamente.

Métricas secundarias: - Asistencia real. - Retención. - Organizadores
activos. - Eventos realizados frente a publicados. - Confirmaciones
frente a entradas verificadas. - Participación de clubes. - Uso de
álbumes.

Se distinguirá claramente entre confirmación y asistencia real.

# 22. Criterios para considerar terminado el MVP

El MVP se considerará terminado cuando:

1.  Las funcionalidades P0 estén desarrolladas.
2.  Los criterios de aceptación estén satisfechos.
3.  Las pruebas funcionales hayan concluido.
4.  Los errores críticos y graves estén resueltos.
5.  Los controles de seguridad esenciales estén implementados.
6.  La infraestructura de producción esté validada.
7.  La beta haya alcanzado sus objetivos de salida.
8.  Exista capacidad de soporte y moderación.

Las funciones P1 y P2 no bloquearán el lanzamiento inicial.

# 23. Pendientes para etapas posteriores

Estos asuntos no deben convertirse en nuevas rondas extensas de
preguntas ahora.

## Pendientes técnicos

-   Selección de proveedor cloud.
-   Arquitectura de backend y frontend.
-   Diseño de bases de datos.
-   Proveedor de verificación de identidad.
-   Costes de almacenamiento y multimedia.
-   Fórmula técnica definitiva de confiabilidad.
-   Estrategia de escalabilidad.
-   Integración de monitorización y backups.

## Pendientes legales

-   Revisión de términos y condiciones.
-   Política de privacidad.
-   Protección de datos en RD y futuras jurisdicciones.
-   Derechos de imagen.
-   Responsabilidad de organizadores.
-   Conservación y eliminación de información.
-   Contratos con proveedores externos.

## Pendientes funcionales

-   Definición exacta del modelo de eventos espontáneos.
-   Reglas completas de privacidad de chats y bloqueos.
-   Plazos concretos de retención por categoría de dato.
-   Parámetros definitivos del sistema de confiabilidad.

# 24. Control de cambios

El propietario del producto tiene autoridad final sobre cambios de
alcance.

Cada cambio deberá evaluar: - Valor para el usuario. - Impacto en el
negocio. - Coste. - Tiempo. - Riesgo. - Dependencias.

Los cambios aprobados deberán quedar documentados con historial de
versiones.

------------------------------------------------------------------------

**Fin del documento maestro --- Versión 1.0, borrador consolidado.**
