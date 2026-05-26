const viewLinks = [...document.querySelectorAll("[data-view-link]")];
const views = [...document.querySelectorAll("[data-view]")];
const nav = document.querySelector("#site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const topButton = document.querySelector(".top-button");

function enhanceLyrics() {
  document.querySelectorAll(".accordion details").forEach((details) => {
    const lyrics = details.querySelector(".lyrics");
    if (!lyrics || lyrics.classList.contains("is-enhanced") || lyrics.classList.contains("pending")) {
      return;
    }

    const currentText = [...lyrics.children];
    const isSpanishOriginal = details.classList.contains("spanish-work");
    lyrics.classList.add("is-enhanced");
    lyrics.textContent = "";

    if (isSpanishOriginal) {
      const originalSection = document.createElement("section");
      originalSection.className = "lyrics-section";
      originalSection.innerHTML = '<h4>Texto original</h4><div class="original-text"></div>';
      const originalText = originalSection.querySelector(".original-text");
      currentText.forEach((node) => originalText.appendChild(node));
      lyrics.appendChild(originalSection);
      return;
    }

    const translationSection = document.createElement("section");
    translationSection.className = "lyrics-section";
    translationSection.innerHTML = '<h4>Traducción al español</h4><div class="translation-text"></div>';
    const translationText = translationSection.querySelector(".translation-text");
    currentText.forEach((node) => translationText.appendChild(node));

    lyrics.appendChild(translationSection);
  });
}

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
enhanceLyrics();
setActiveView(initialView, false);
