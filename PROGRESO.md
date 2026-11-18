# Progreso: Uniformes Eli

Última actualización: 18-nov-2026 (cierre de sesión).

## Etapas terminadas
Los archivos no numeran los mensajes de la ruta ni las rondas, así que se listan por etapa (cada una tiene su punto de restauración en Git).

1. **Reglas y brief:** `CLAUDE.md`, `BRIEF.md` con la dirección "Hilo y marfil" (paleta marfil, café, verde y teja; Fraunces e Inter), estructura y textos aprobados, y la ficha del negocio con datos [EJEMPLO].
2. **Primera versión del sitio:** `index.html`, `css/estilos.css`, `js/main.js` e `img/logo.svg` provisional. Portada, Servicios, Prendas para cada rubro, Cómo cotizar, Nuestro oficio, Cotizar y pie. Menú: Servicios · Prendas · Cotizar. Barra de contacto fija. Datos que se repiten en el bloque CONFIG de `js/main.js`.
3. **Ajustes del dueño:** portada con titular más pequeño y capa marfil suave; quitado el origen personal del dueño; sección renombrada a "Nuestro oficio"; Cómo cotizar rediseñado (pasos unidos por una puntada y recuadro de condiciones); Prendas en cuadrícula compacta con filtro por rubro y ventana de detalle.
4. **Revisión visual en Chrome (escritorio y celular simulado):** sin desbordes, sin errores de consola del sitio, sin sombras ni degradados.
5. **Correcciones de la revisión visual:** formulario reducido a 3 campos; filtros de rubro en una fila deslizable en celular; nombres de prendas más legibles; ventana de detalle sin imagen vacía; Servicios con borde cosido y numeración 01 a 05; Nuestro oficio más compacto; imagen de portada renombrada a `img/portada.jpg`; sello de bordado redibujado (rombo con aguja e hilo).
6. **Control de calidad (auditoría):** colores sueltos pasados a variables CSS; cantidad del formulario solo con números enteros; borde rojo de errores (estaba tapado por otra regla); orden correcto en "Antes de pedir"; testimonios inventados quitados del brief. Ortografía revisada a mano (el corrector del equipo no trae español): sin errores.

## Decisiones de hoy
Están detalladas en `BRIEF.md`, sección "Decisiones de diseño del 18-nov-2026". En resumen: formulario de 3 campos, Servicios con borde cosido y números, Nuestro oficio compacto, sello de bordado propio (rombo con aguja), `portada.jpg`, variables de color nuevas y testimonios fuera.

## Pendiente o a medias
- **Por decidir (el dueño dijo "por el momento no hagamos nada"):**
  1. Sacar `DESIGN.md` e `image.png` de la carpeta del sitio antes de publicar (son referencia de otra empresa y una captura de VS Code).
  2. Ocultar los íconos de Facebook e Instagram hasta tener las cuentas, o dejarlos apagados.
  3. Cuadrícula de prendas: 3 miniaturas por fila en celular, ¿se deja o pasa a 2 columnas?
  4. Barra lateral fija de contacto además de la barra superior.
- **Datos reales (al final, como pidió el dueño):** teléfono y WhatsApp, tallas y colores, logo real, enlaces de Facebook e Instagram (CONFIG en `js/main.js`).
- **Antes de publicar:** cambiar todos los datos [EJEMPLO], incluido el bloque de datos estructurados del `<head>` de `index.html` (se edita a mano), y revisar el sitio en un celular real.
- **Limpieza menor:** quitar del brief la sección "Raíz del dueño" y borrar `img/articulos-promocionales.svg` (no se usa), si el dueño lo aprueba.

## Siguiente paso (mañana)
Responder las 4 decisiones de "Por decidir" (basta con "sí" o "no" a cada una). Con eso se aplican los cambios, se vuelve a probar en Chrome y se guarda un punto de restauración. Después queda probar la página en un celular real y, al final, cambiar los datos [EJEMPLO] por los reales.
