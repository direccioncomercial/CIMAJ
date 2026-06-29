// === DATOS PARA LOS MODALES DE INFORMACIÓN CON IMÁGENES ===
const modalData = {
  carlos: {
    title: "Dr. Carlos Cisneros V.",
    subtitle: "CEO & Director Jurídico",
    img: "https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/foto%20charlie.jpg",
    desc: '<p class="mb-4 text-white">Especialista en investigación criminalística y estrategia penal con más de 15 años de trayectoria. Su enfoque combina la rigurosidad analítica con un liderazgo directivo excepcional.</p><p>Como fundador de CIMAJ, ha establecido un estándar de excelencia en la defensa técnica, logrando resultados determinantes en casos de alta complejidad a nivel nacional, siempre manteniendo un trato humano y cercano con cada cliente.</p>',
  },
  luis: {
    title: "Abg. Luis Miguel Oña",
    subtitle: "Derecho Penal y Constitucional",
    img: "https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/luismi.png",
    desc: '<p class="mb-4 text-white">Abogado especialista en Derecho Penal y experto en Garantías Constitucionales y Derecho Público. Cuenta con una valiosa trayectoria como ex-colaborador de la Asamblea Nacional en la elaboración de proyectos de ley y procesos de fiscalización.</p><p>Ha logrado resultados altamente favorables en casos de relevancia nacional, destacándose por su meticulosa preparación argumentativa, su capacidad analítica en la revisión de expedientes y su contundencia en los tribunales, así como en la defensa de los derechos constitucionales de nuestros clientes.</p>',
  },
  vivi: {
    title: "Viviana Echeverría",
    subtitle: "Mediadora Certificada",
    img: "https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/vivi.jpg",
    desc: '<p class="mb-4 text-white">Mediadora debidamente acreditada por el Consejo de la Judicatura (CNJ). Es especialista en la resolución alternativa de conflictos.</p><p>Su labor es fundamental en CIMAJ para evitar años de juicios y altos costos a nuestros clientes. A través del diálogo, la empatía y la neutralidad, facilita la construcción de acuerdos mutuos con plena validez legal, garantizando soluciones rápidas y confidenciales.</p>',
  },
  civil: {
    title: "Civil y Notarial",
    subtitle: "Especialidad",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
    desc: '<p class="mb-4 text-white">Nuestra área Civil y Notarial se encarga de proteger su patrimonio y asegurar la validez de todos sus actos legales. Nos especializamos en brindar soluciones efectivas frente a conflictos entre particulares.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li>Cobro ágil de letras de cambio, pagarés y letras de crédito.</li><li>Redacción, revisión y legalización de contratos.</li><li>Procesos de desalojos y recuperación de inmuebles.</li><li>Trámites de escrituras, otorgamiento de poderes y declaraciones juramentadas.</li><li>Juicios en documentos y ejecución de deudas.</li></ul>',
  },
  penal: {
    title: "Defensa Penal",
    subtitle: "Especialidad",
    img: "https://raw.githubusercontent.com/direccioncomercial/CIMAJ/main/penal%20civil.png",
    desc: '<p class="mb-4 text-white">Contamos con un equipo de élite para la representación jurídica en materia penal. Entendemos que su libertad y honor están en juego, por lo que actuamos con inmediatez y contundencia.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li>Representación jurídica integral para víctimas y procesados.</li><li>Defensa técnica estratégica basada en investigación criminalística.</li><li>Presentación de apelaciones y recursos de casación o revisión.</li><li>Procedimientos de protección de derechos.</li><li>Elaboración, presentación y seguimiento de denuncias.</li></ul>',
  },
  transito: {
    title: "Tránsito",
    subtitle: "Especialidad",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
    desc: '<p class="mb-4 text-white">Brindamos asistencia legal inmediata y especializada ante cualquier siniestro o conflicto vial, buscando siempre proteger su libertad, su historial de conducción y su patrimonio.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li>Defensa en juicios por accidentes de tránsito (daños materiales, lesiones o fatalidades).</li><li>Mediación extrajudicial para reparación de daños.</li><li>Impugnación de citaciones y multas de tránsito.</li><li>Trámites para la liberación rápida de vehículos retenidos.</li><li>Procesos administrativos para la recuperación de puntos de licencia.</li></ul>',
  },
  familia: {
    title: "Familia",
    subtitle: "Especialidad",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800",
    desc: '<p class="mb-4 text-white">Tratamos los asuntos del núcleo familiar con la máxima sensibilidad, confidencialidad y rigor jurídico, priorizando siempre el bienestar de los menores y la paz familiar.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li>Fijación, aumento, rebaja y cobro de pensiones alimenticias.</li><li>Establecimiento y regulación de régimen de visitas y tenencia.</li><li>Juicios de divorcio por mutuo consentimiento y contenciosos.</li><li>Liquidación de sociedad conyugal.</li><li>Procesos integrales de mediación familiar para acuerdos amigables.</li></ul>',
  },
  laboral: {
    title: "Laboral y Tributario",
    subtitle: "Especialidad",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800",
    desc: '<p class="mb-4 text-white">Asesoramos tanto a empleadores como a trabajadores para asegurar el cumplimiento de la ley, prevenir conflictos y resolver disputas con las instituciones reguladoras.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li>Defensa de derechos laborales (despidos intempestivos, vistos buenos, liquidaciones).</li><li>Asesoría y defensa en controversias tributarias ante el SRI.</li><li>Representación en procesos de conciliación y arbitraje.</li><li>Elaboración de contratos laborales y auditorías de cumplimiento.</li><li>Redacción y aprobación de reglamentos de orden interno empresarial.</li></ul>',
  },
  mediacion: {
    title: "Mediación Certificada",
    subtitle: "Especialidad",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    desc: '<p class="mb-4 text-white">La mediación es la vía del futuro. Le permite evitar años de desgaste emocional y altos costos judiciales mediante un proceso de diálogo asistido por nuestros profesionales avalados por el Consejo de la Judicatura.</p><ul class="list-disc pl-5 space-y-2 mt-4 text-sm"><li><strong class="text-[#C5A059]">Rapidez:</strong> Soluciones en semanas, no en años.</li><li><strong class="text-[#C5A059]">Economía:</strong> Significativamente más accesible que un juicio tradicional.</li><li><strong class="text-[#C5A059]">Confidencialidad absoluta:</strong> Lo tratado en mediación no es público ni puede ser usado en su contra.</li><li><strong class="text-[#C5A059]">Fuerza de Sentencia:</strong> El acta de mediación tiene la misma validez legal que una sentencia de un juez en última instancia.</li></ul>',
  },
};

// Lógica de Modales de Información Dinámica
function openInfoModal(id) {
  const data = modalData[id];
  if (!data) return;

  document.getElementById("info-modal-title").innerText = data.title;
  document.getElementById("info-modal-subtitle").innerText = data.subtitle;
  document.getElementById("info-modal-desc").innerHTML = data.desc;
  document.getElementById("info-modal-img").src = data.img;

  const modal = document.getElementById("info-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeInfoModal() {
  const modal = document.getElementById("info-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// Lógica del Carrusel del Hero
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = [
  document.getElementById("dot-0"),
  document.getElementById("dot-1"),
  document.getElementById("dot-2"),
];
const totalSlides = slides.length;
let slideInterval;

function updateCarousel(newIndex) {
  slides[currentSlide].classList.remove("active");
  slides[currentSlide].classList.add("exit");
  dots[currentSlide].classList.remove("bg-[#C5A059]");
  dots[currentSlide].classList.add("bg-white/30");

  const oldIndex = currentSlide;
  setTimeout(() => {
    slides[oldIndex].classList.remove("exit");
  }, 1200);

  currentSlide = newIndex;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.remove("bg-white/30");
  dots[currentSlide].classList.add("bg-[#C5A059]");
}

function nextSlide() {
  updateCarousel((currentSlide + 1) % totalSlides);
}

function goToSlide(index) {
  clearInterval(slideInterval);
  if (index !== currentSlide) updateCarousel(index);
  slideInterval = setInterval(nextSlide, 5500);
}

if (totalSlides > 0) {
  slideInterval = setInterval(nextSlide, 5500);
}

// Navegación estilo SPA (Pestañas Ocultas)
function navigate(viewId) {
  document.querySelectorAll(".view-section").forEach((section) => {
    section.classList.remove("view-active");
  });

  document.getElementById("view-" + viewId).classList.add("view-active");

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    if (btn.dataset.target === viewId) {
      btn.classList.add("text-[#C5A059]");
      btn.classList.remove("text-slate-300");
    } else {
      btn.classList.remove("text-[#C5A059]");
      btn.classList.add("text-slate-300");
    }
  });

  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-icon");
  if (!menu.classList.contains("translate-x-full")) {
    menu.classList.add("translate-x-full");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Menú Hamburguesa Móvil
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("mobile-icon");

  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    menu.classList.add("translate-x-full");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

// Efecto del Header al Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  const topbar = document.getElementById("topbar");

  if (window.scrollY > 50) {
    header.classList.add(
      "bg-[#0b0c10]/95",
      "backdrop-blur-xl",
      "border-b",
      "border-white/10",
      "shadow-2xl",
    );
    header.classList.remove(
      "bg-gradient-to-b",
      "from-[#0b0c10]",
      "to-transparent",
    );
    if (topbar) {
      topbar.style.height = "0px";
      topbar.style.opacity = "0";
      topbar.style.paddingBottom = "0px";
      topbar.style.marginBottom = "0px";
    }
  } else {
    header.classList.remove(
      "bg-[#0b0c10]/95",
      "backdrop-blur-xl",
      "border-b",
      "border-white/10",
      "shadow-2xl",
    );
    header.classList.add(
      "bg-gradient-to-b",
      "from-[#0b0c10]",
      "to-transparent",
    );
    if (topbar) {
      topbar.style.height = "auto";
      topbar.style.opacity = "1";
      topbar.style.paddingBottom = "0.5rem";
      topbar.style.marginBottom = "0.5rem";
    }
  }
});
