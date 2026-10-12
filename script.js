// CONFIGURACIÓN DEL CLIENTE: cambiar el número en config.whatsapp.
const config = {
  // País + área + número, solo números. Ejemplo Argentina: 54911XXXXXXXX
  whatsapp: "5492954330068",
  // Texto que aparecerá escrito al abrir WhatsApp
  whatsappMessage: "Hola, me interesa recibir más información sobre sus servicios de seguridad y electricidad."
  ,
  // Mail de contacto: al tocar el botón se abre la app de mail del visitante con la dirección cargada.
  email: "tavellamaximiliano@yahoo.com.ar",
  emailSubject: "Consulta desde la web"
};

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const message = encodeURIComponent(config.whatsappMessage);
  link.href = "https://wa.me/" + config.whatsapp + "?text=" + message;
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


const mailHref = "mailto:" + config.email + "?subject=" + encodeURIComponent(config.emailSubject);
["mailLink", "mailButton"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = mailHref;
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = () => { if (lightbox) { lightbox.hidden = true; lightboxImg.src = ""; } };
document.querySelectorAll("[data-lightbox]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    lightboxImg.src = a.href;
    lightbox.hidden = false;
  });
});
lightbox?.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
