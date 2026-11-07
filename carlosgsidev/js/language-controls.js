// Archivo: js/language-controls.js
(() => {
  const root = document.documentElement;
  const select = document.querySelector("#language-select");
  const controls = document.querySelectorAll("[data-language]");

  function updateControls() {
    if (!select) return;
    controls.forEach((control) => {
      control.setAttribute("aria-pressed", String(control.dataset.language === select.value));
    });
  }

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      if (!select) return;
      select.value = control.dataset.language;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  if (select) {
    select.addEventListener("change", updateControls);
  }
  window.addEventListener("pageshow", updateControls);
  updateControls();

  // Selector de Tema (Matrix / Claro)
  const themeBtn = document.getElementById("theme-toggle");
  const themeStorageKey = "cv-theme";

  function applySavedTheme() {
    let savedTheme = null;
    try { savedTheme = localStorage.getItem(themeStorageKey); } catch (e) {}
    if (savedTheme === "matrix") {
      root.setAttribute("data-theme", "matrix");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  applySavedTheme();
  window.addEventListener("pageshow", applySavedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isMatrix = root.getAttribute("data-theme") === "matrix";
      if (isMatrix) {
        root.removeAttribute("data-theme");
        try { localStorage.setItem(themeStorageKey, "light"); } catch (e) {}
      } else {
        root.setAttribute("data-theme", "matrix");
        try { localStorage.setItem(themeStorageKey, "matrix"); } catch (e) {}
      }
    });
  }
})();