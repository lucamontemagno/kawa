document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu");
  const siteHeader = document.querySelector(".site-header");
  const siteNavigation = document.querySelector(".site-nav");
  const closeMenu = () => {
    siteHeader.classList.remove("menu-open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Apri il menu");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Apri il menu" : "Chiudi il menu");
    menuToggle.classList.toggle("active", !isOpen);
    siteHeader.classList.toggle("menu-open", !isOpen);
  });

  siteNavigation.querySelectorAll("a").forEach((item) => item.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (!siteHeader.contains(event.target)) closeMenu();
  });

  const animatedItems = document.querySelectorAll(".animatableY, .animatableX, .animatableOpacity");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showed");
          currentObserver.unobserve(entry.target);
        }
      });
    });
    animatedItems.forEach((item) => observer.observe(item));
  } else {
    animatedItems.forEach((item) => item.classList.add("showed"));
  }

  const upArrow = document.querySelector("#upArrow");
  const updateUpArrow = () => {
    upArrow.hidden = window.scrollY < 600;
  };
  window.addEventListener("scroll", updateUpArrow, { passive: true });
  upArrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  updateUpArrow();
});
