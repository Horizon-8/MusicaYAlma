const viewLinks = [...document.querySelectorAll("[data-view-link]")];
const views = [...document.querySelectorAll("[data-view]")];
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const topButton = document.querySelector(".top-button");

function setActiveView(viewName, shouldPush = true) {
  const target = views.find((view) => view.dataset.view === viewName) || views[0];

  views.forEach((view) => {
    view.classList.toggle("is-active", view === target);
  });

  viewLinks.forEach((link) => {
    const isCurrent = link.dataset.viewLink === target.dataset.view;
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (shouldPush) {
    history.pushState({ view: target.dataset.view }, "", `#${target.id}`);
  }

  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.viewLink);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  topButton.classList.toggle("is-visible", window.scrollY > 500);
});

window.addEventListener("popstate", () => {
  const viewFromHash = window.location.hash.replace("#", "");
  setActiveView(viewFromHash || "inicio", false);
});

const initialView = window.location.hash.replace("#", "") || "inicio";
setActiveView(initialView, false);
