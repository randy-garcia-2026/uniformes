# Progreso: Uniformes Eli

## Hecho
- Reglas de trabajo en `CLAUDE.md` y brief de diseño en `BRIEF.md` (dirección "Hilo y marfil", estructura y textos aprobados).
- Git iniciado, con puntos de restauración.
- **Primera versión del sitio** (18-nov-2026): `index.html`, `css/estilos.css`, `js/main.js` e `img/logo.svg` provisional [EJEMPLO].
  - Portada, Servicios, Prendas para cada rubro, Cómo cotizar, Nuestro oficio y Cotizar, más el pie. Menú: Servicios · Prendas · Cotizar.
  - Barra de contacto fija (WhatsApp, teléfono, Facebook e Instagram en computadora; solo los dos primeros en celular).
  - Formulario que valida y abre WhatsApp con el pedido escrito.
  - Datos que se repiten (WhatsApp, teléfono, dirección, horario, tallas y colores) se cambian en el bloque CONFIG de `js/main.js`.
  - Datos estructurados LocalBusiness en el `<head>` con datos [EJEMPLO]: editarlos a mano antes de publicar.
- Ajustes pedidos por el dueño el mismo día:
  - Portada: titular más pequeño, recuadro angosto y capa marfil suave para ver la ilustración.
  - Quitado el origen personal del dueño y la frase "hablas directamente con quien confecciona"; la sección ahora se llama "Nuestro oficio".
  - Cómo cotizar rediseñado (pasos unidos por una puntada y recuadro de condiciones).
  - Prendas en cuadrícula compacta con filtro por rubro, nombre al pasar el cursor y ventana de detalle (tallas y colores [EJEMPLO]).
- Correcciones tras la revisión en Chrome (18-nov-2026): formulario reducido a los 3 campos del brief, filtros de rubro en una sola fila deslizable en celular, nombres de prendas más legibles y ventana de detalle sin imagen vacía.

## Pendiente
- [PENDIENTE] Enlaces de Facebook e Instagram (CONFIG en `js/main.js`) cuando existan las cuentas.
- [PENDIENTE] Teléfono y WhatsApp reales; tallas y colores reales; logo real.
- [PENDIENTE] Decidir si se deja la barra lateral fija además de la barra superior.
- Renombrar `img/san-pedro.jpg` a un nombre neutro (opcional) y limpiar del brief la sección "Raíz del dueño".
- Antes de publicar: cambiar los datos [EJEMPLO] (incluidos los datos estructurados) y revisar el sitio en celular real.
- Servicios: ilustraciones con borde cosido teja y número 01 a 05. Nuestro oficio: más compacto (solo estilos, sin archivos nuevos).
- Pendiente de decidir: renombrar `san-pedro.jpg` (pide aprobación); confirmar que `bordado-detalle.svg` no parezca sello de una institución.
