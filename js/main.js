// Acciones de la página de Uniformes Eli

// [EJEMPLO] Número de WhatsApp de prueba. Se cambia por el real cuando lo tengamos.
// Formato: código de país (502) + número, sin espacios ni signos.
const NUMERO_WHATSAPP = "50255550123";

const formulario = document.getElementById("formulario-cotizacion");
const mensajeError = document.getElementById("formulario-error");
const enlaceWhatsapp = document.getElementById("enlace-whatsapp");

// Botón general de WhatsApp (sin datos del formulario)
enlaceWhatsapp.href =
  "https://wa.me/" + NUMERO_WHATSAPP +
  "?text=" + encodeURIComponent("Hola, quiero pedir una cotización de uniformes.");
enlaceWhatsapp.target = "_blank";
enlaceWhatsapp.rel = "noopener";

// Al enviar el formulario: se revisa que esté completo y se abre WhatsApp con el pedido escrito
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = formulario.nombre.value.trim();
  const prenda = formulario.prenda.value;
  const cantidad = formulario.cantidad.value;
  const bordado = formulario.bordado.value;

  // Revisión de los campos obligatorios, con mensajes claros
  if (nombre === "") {
    mostrarError("Escribe tu nombre o el de tu empresa.", formulario.nombre);
    return;
  }
  if (prenda === "") {
    mostrarError("Elige qué necesitas.", formulario.prenda);
    return;
  }
  if (cantidad === "" || Number(cantidad) < 1) {
    mostrarError("Escribe cuántas piezas necesitas.", formulario.cantidad);
    return;
  }

  mensajeError.hidden = true;

  const texto =
    "Hola, quiero pedir una cotización.\n" +
    "Nombre: " + nombre + "\n" +
    "Necesito: " + prenda + "\n" +
    "Piezas: " + cantidad + "\n" +
    "Bordado: " + bordado;

  window.open(
    "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto),
    "_blank",
    "noopener"
  );
});

function mostrarError(texto, campo) {
  mensajeError.textContent = texto;
  mensajeError.hidden = false;
  campo.focus();
}

// El menú gana una línea fina solo cuando se baja la página
const cabecera = document.querySelector(".cabecera");
function revisarLineaMenu() {
  cabecera.classList.toggle("con-linea", window.scrollY > 8);
}
window.addEventListener("scroll", revisarLineaMenu, { passive: true });
revisarLineaMenu();
