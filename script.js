/* ==========================================================
   UZM. FZT. NUR TURAN — Site Scripts
   ========================================================== */

/* ── Contact Form ── */
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mesajınız başarıyla gönderildi.");
    contactForm.reset();
  });
}

/* ── Mobile Navigation ── */
const menuToggle = document.querySelector("#menuToggle");
const navMenu    = document.querySelector("#navMenu");
const navLinks   = document.querySelectorAll("#navMenu a");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  document.addEventListener("click", function (event) {
    const isInsideMenu   = navMenu.contains(event.target);
    const isToggleButton = menuToggle.contains(event.target);

    if (!isInsideMenu && !isToggleButton) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

/* ── Sticky Header Shadow ── */
const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const observer = new IntersectionObserver(
    function (entries) {
      siteHeader.classList.toggle("scrolled", !entries[0].isIntersecting);
    },
    { threshold: 0 }
  );

  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:1px;left:0;width:1px;height:1px;pointer-events:none;";
  document.body.prepend(sentinel);
  observer.observe(sentinel);
}
