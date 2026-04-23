const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const currentPage = body.dataset.page;

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-link]").forEach((link) => {
  if (!(link instanceof HTMLAnchorElement)) {
    return;
  }

  if (link.dataset.link === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = `更新于 ${new Date().getFullYear()}`;
});

const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}