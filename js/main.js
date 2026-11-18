/* Acciones de la página de Uniformes Eli */

/* ==========================================================
   CONFIGURACIÓN: aquí se cambian los datos que se repiten.
   Todo lo marcado [EJEMPLO] es de práctica. Al cambiar un dato
   aquí, se actualiza en toda la página (menos los datos
   estructurados del <head> de index.html, que se editan a mano).
   ========================================================== */
const CONFIG = {
  // WhatsApp: solo números, con código de país (502 = Guatemala). [EJEMPLO]
  whatsappNumero: "50255550123",
  whatsappVisible: "5555-0123",

  // Teléfono: solo números, con código de país. [EJEMPLO]
  telefonoNumero: "50266660123",
  telefonoVisible: "6666-0123",

  // Solo la zona está aprobada (sin calle ni número)
  direccion: "Zona 5, Villa Nueva, Guatemala",

  // Horario [EJEMPLO]: [día, horas]
  horario: [
    ["Lunes a viernes", "8:00 a 17:00"],
    ["Sábados", "8:00 a 12:00"],
    ["Domingos", "Cerrado"]
  ],

  // Redes sociales: [PENDIENTE] hasta que existan las cuentas reales.
  // Cuando existan, pegar aquí el enlace completo, por ejemplo "https://www.facebook.com/..."
  facebook: "",
  instagram: "",

  // Ventana de cada prenda: tallas y colores [EJEMPLO], cambiar por los reales
  tallas: "De la S a la XXL",
  colores: "Azul, negro, blanco y gris; otros colores a elección del cliente",

  // Mensaje del botón "Cotizar por WhatsApp"
  mensajeBoton: "Hola, quiero cotizar uniformes con Uniformes Eli."
};

/* ---------- Rellenar la página con los datos de CONFIG ---------- */
function enlaceWhatsapp(texto) {
  return "https://wa.me/" + CONFIG.whatsappNumero + "?text=" + encodeURIComponent(texto);
}

function rellenarDatos() {
  // Textos
  document.querySelectorAll("[data-dato]").forEach(function (el) {
    const dato = el.dataset.dato;
    if (dato === "whatsapp") el.textContent = CONFIG.whatsappVisible;
    if (dato === "telefono") el.textContent = CONFIG.telefonoVisible;
    if (dato === "direccion") el.textContent = CONFIG.direccion;
    if (dato === "horario") {
      el.textContent = "";
      CONFIG.horario.forEach(function (fila) {
        const grupo = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = fila[0];
        dd.textContent = fila[1];
        grupo.append(dt, dd);
        el.appendChild(grupo);
      });
    }
  });

  // Enlaces
  document.querySelectorAll("[data-enlace]").forEach(function (el) {
    const tipo = el.dataset.enlace;
    if (tipo === "whatsapp") {
      el.href = enlaceWhatsapp(CONFIG.mensajeBoton);
      el.target = "_blank";
      el.rel = "noopener";
    } else if (tipo === "telefono") {
      el.href = "tel:+" + CONFIG.telefonoNumero;
    } else if (tipo === "facebook" || tipo === "instagram") {
      if (CONFIG[tipo]) {
        el.href = CONFIG[tipo];
        el.target = "_blank";
        el.rel = "noopener";
        el.setAttribute("aria-label", tipo === "facebook" ? "Facebook" : "Instagram");
      } else {
        // [PENDIENTE] Sin cuenta real: el ícono se ve apagado y no lleva a ningún lado
        el.removeAttribute("href");
        el.setAttribute("aria-disabled", "true");
        el.title = "Próximamente";
      }
    }
  });
}

/* ---------- Menú de tres rayas (celular) ---------- */
function activarMenu() {
  const boton = document.querySelector(".menu-boton");
  const menu = document.getElementById("menu");
  if (!boton || !menu) return;

  function cerrar() {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Abrir menú");
  }

  boton.addEventListener("click", function () {
    const abrir = !menu.classList.contains("abierto");
    menu.classList.toggle("abierto", abrir);
    boton.setAttribute("aria-expanded", String(abrir));
    boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
  });

  // Se cierra al elegir un enlace o al pulsar Escape
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) cerrar();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("abierto")) {
      cerrar();
      boton.focus();
    }
  });
}

/* ---------- Formulario: validar y abrir WhatsApp ---------- */
function activarFormulario() {
  const form = document.getElementById("formulario");
  if (!form) return;
  const estado = document.getElementById("estado");

  // Cada regla: campo, id del error y condición de validez
  const reglas = [
    { campo: "nombre", ok: function (v) { return v.trim().length > 1; } },
    { campo: "prenda", ok: function (v) { return v.trim().length > 1; } },
    { campo: "cantidad", ok: function (v) { return Number(v) >= 1; } }
  ];

  function mostrarError(id, hay) {
    const error = document.getElementById("error-" + id);
    if (error) error.hidden = !hay;
  }

  function validar() {
    let primerError = null;

    reglas.forEach(function (regla) {
      const campo = form.elements[regla.campo];
      const valido = regla.ok(campo.value);
      campo.setAttribute("aria-invalid", String(!valido));
      mostrarError(regla.campo, !valido);
      if (!valido && !primerError) primerError = campo;
    });

    if (primerError) primerError.focus();
    return !primerError;
  }

  // Al corregir un campo, su aviso se quita
  form.addEventListener("input", function (e) {
    const campo = e.target;
    const regla = reglas.find(function (r) { return r.campo === campo.name; });
    if (regla && regla.ok(campo.value)) {
      campo.setAttribute("aria-invalid", "false");
      mostrarError(campo.name, false);
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validar()) {
      estado.textContent = "Revisa los campos marcados y vuelve a intentar.";
      return;
    }

    const v = function (nombre) { return form.elements[nombre].value.trim(); };

    // Mensaje armado con los datos del formulario
    const lineas = [
      "Hola, quiero cotizar uniformes con Uniformes Eli.",
      "",
      "Nombre: " + v("nombre"),
      "Uniformes que necesita: " + v("prenda"),
      "Cantidad: " + v("cantidad") + " piezas"
    ];
    const url = enlaceWhatsapp(lineas.join("\n"));

    window.open(url, "_blank", "noopener");
    // Plan B por si el navegador bloquea la ventana nueva
    estado.textContent = "";
    estado.append("Se abrió WhatsApp con tu pedido. Si no se abrió, ");
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.target = "_blank";
    enlace.rel = "noopener";
    enlace.textContent = "toca aquí";
    estado.append(enlace, ".");
  });
}

/* ---------- Prendas: filtro por rubro y ventana de detalle ---------- */
function activarPrendas() {
  const rejilla = document.getElementById("prendas-rejilla");
  if (!rejilla) return;
  const prendas = Array.from(rejilla.querySelectorAll("li"));
  const filtros = document.querySelectorAll(".filtro");
  const estado = document.getElementById("filtros-estado");

  // Filtro por rubro
  filtros.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const rubro = boton.dataset.rubro;
      filtros.forEach(function (b) { b.setAttribute("aria-pressed", String(b === boton)); });
      let visibles = 0;
      prendas.forEach(function (li) {
        const coincide = !rubro || li.dataset.rubros.split("|").includes(rubro);
        li.hidden = !coincide;
        if (coincide) visibles++;
      });
      estado.textContent = rubro
        ? "Mostrando " + visibles + " prendas de " + rubro + "."
        : "Mostrando las " + visibles + " prendas.";
    });
  });

  // Ventana de detalle
  const ventana = document.getElementById("detalle");
  if (!ventana || typeof ventana.showModal !== "function") return;
  let prendaActual = "";

  rejilla.addEventListener("click", function (e) {
    const boton = e.target.closest(".prenda");
    if (!boton) return;
    prendaActual = boton.dataset.nombre;
    const img = document.getElementById("detalle-img");
    img.src = boton.dataset.img;
    img.alt = prendaActual;
    document.getElementById("detalle-titulo").textContent = prendaActual;
    document.getElementById("detalle-rubros").textContent = boton.dataset.rubros.split("|").join(", ");
    document.getElementById("detalle-tallas").textContent = CONFIG.tallas;
    document.getElementById("detalle-colores").textContent = CONFIG.colores;
    const mensaje = "Hola, quiero cotizar esta prenda con Uniformes Eli: " + prendaActual + ".";
    const wa = document.getElementById("detalle-whatsapp");
    wa.href = enlaceWhatsapp(mensaje);
    wa.target = "_blank";
    wa.rel = "noopener";
    ventana.showModal();
  });

  // Poner la prenda en el formulario y bajar a esa sección
  document.getElementById("detalle-formulario").addEventListener("click", function () {
    document.getElementById("prenda").value = prendaActual;
    ventana.close();
    document.getElementById("cotizar").scrollIntoView();
    document.getElementById("nombre").focus({ preventScroll: true });
  });
  document.getElementById("detalle-cerrar").addEventListener("click", function () { ventana.close(); });
  // Clic fuera de la ventana también la cierra
  ventana.addEventListener("click", function (e) { if (e.target === ventana) ventana.close(); });
}

/* ---------- Aparición suave al hacer scroll ---------- */
function activarAparicion() {
  const elementos = document.querySelectorAll("[data-aparece]");
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (sinMovimiento || !("IntersectionObserver" in window)) return; // se ven de una vez

  document.documentElement.classList.add("con-aparicion");
  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 10% 0px" }); // aparece un poco antes de entrar en pantalla
  elementos.forEach(function (el) { observador.observe(el); });
}

document.documentElement.classList.add("js");
rellenarDatos();
activarMenu();
activarFormulario();
activarPrendas();
activarAparicion();
