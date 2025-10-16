document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("y");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.getElementById("btn-nav");
  const mobileNav = document.getElementById("mobile-nav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("hidden");
    });
  }

  const form = document.getElementById("form-contacto");
  if (!form) return;

  const statusEl = form.querySelector("[data-status]");
  const submitButton = form.querySelector("[data-submit]");
  const defaultSubmitText = submitButton?.textContent ?? "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nativeForm = event.target;
    if (!(nativeForm instanceof HTMLFormElement)) return;

    if (!nativeForm.checkValidity()) {
      nativeForm.reportValidity();
      return;
    }

    if (statusEl instanceof HTMLElement) {
      statusEl.textContent = "Enviando...";
      statusEl.classList.remove("text-red-600", "text-green-600");
    }

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.textContent = "Enviando...";
    }

    try {
      const formData = new FormData(nativeForm);
      const response = await fetch(nativeForm.action, {
        method: nativeForm.method ?? "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        if (statusEl instanceof HTMLElement) {
          statusEl.textContent = "Gracias por tu mensaje. Te contactaré pronto.";
          statusEl.classList.add("text-green-600");
        }
        nativeForm.reset();
      } else {
        throw new Error(`Formspree error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      if (statusEl instanceof HTMLElement) {
        statusEl.textContent = "Ocurrió un error. Inténtalo nuevamente en unos minutos.";
        statusEl.classList.add("text-red-600");
      }
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.textContent = defaultSubmitText;
      }
    }
  });
});
